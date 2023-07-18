package virtualkubelet

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"

	common "github.com/CARV-ICS-FORTH/knoc/common"
	commonIL "github.com/intertwin-eu/interlink/pkg/common"

	"github.com/containerd/containerd/log"
	v1 "k8s.io/api/core/v1"
)

var NoReq uint8

func createRequest(pod commonIL.Request, token string) []byte {
	var returnValue, _ = json.Marshal(commonIL.PodStatus{PodStatus: commonIL.UNKNOWN})

	bodyBytes, err := json.Marshal(pod)
	reader := bytes.NewReader(bodyBytes)
	req, err := http.NewRequest(http.MethodPost, commonIL.InterLinkConfigInst.Interlinkurl+":"+commonIL.InterLinkConfigInst.Interlinkport+"/create", reader)

	if err != nil {
		log.L.Error(err)
	}

	req.Header.Add("Authorization", "Bearer "+token)
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		log.L.Error(err)
	}

	returnValue, _ = ioutil.ReadAll(resp.Body)
	var response commonIL.PodStatus
	json.Unmarshal(returnValue, &response)

	return returnValue
}

func deleteRequest(pod commonIL.Request, token string) []byte {
	var returnValue, _ = json.Marshal(commonIL.PodStatus{PodStatus: commonIL.UNKNOWN})

	bodyBytes, err := json.Marshal(pod)
	reader := bytes.NewReader(bodyBytes)
	req, err := http.NewRequest(http.MethodDelete, commonIL.InterLinkConfigInst.Interlinkurl+":"+commonIL.InterLinkConfigInst.Interlinkport+"/delete", reader)
	if err != nil {
		log.L.Error(err)
	}

	req.Header.Add("Authorization", "Bearer "+token)
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		log.L.Error(err)
	}

	returnValue, _ = ioutil.ReadAll(resp.Body)
	var response commonIL.PodStatus
	json.Unmarshal(returnValue, &response)

	return returnValue
}

func statusRequest(podsList commonIL.Request, token string) []byte {
	var returnValue []byte
	var response []commonIL.StatusResponse

	bodyBytes, err := json.Marshal(podsList)
	reader := bytes.NewReader(bodyBytes)
	req, err := http.NewRequest(http.MethodGet, commonIL.InterLinkConfigInst.Interlinkurl+":"+commonIL.InterLinkConfigInst.Interlinkport+"/status", reader)
	if err != nil {
		log.L.Error(err)
	}

	log.L.Println(string(bodyBytes))

	req.Header.Add("Authorization", "Bearer "+token)

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		log.L.Error(err)
	}

	returnValue, _ = ioutil.ReadAll(resp.Body)
	json.Unmarshal(returnValue, &response)

	return returnValue
}

func RemoteExecution(p *VirtualKubeletProvider, ctx context.Context, mode int8, imageLocation string, pod *v1.Pod, container v1.Container) error {
	var req commonIL.Request
	req.Pods = map[string]*v1.Pod{pod.Name: pod}

	b, err := os.ReadFile(commonIL.InterLinkConfigInst.VKTokenFile) // just pass the file name
	if err != nil {
		fmt.Print(err)
	}
	token := string(b)

	switch mode {
	case common.CREATE:
		//v1.Pod used only for secrets and volumes management; TO BE IMPLEMENTED
		returnVal := createRequest(req, token)
		log.L.Println(string(returnVal))
		break

	case common.DELETE:
		if NoReq > 0 {
			NoReq--
		} else {
			returnVal := deleteRequest(req, token)
			log.L.Println(string(returnVal))
		}
		break
	}
	return nil
}

func checkPodsStatus(p *VirtualKubeletProvider, ctx context.Context, token string) {
	if len(p.pods) == 0 {
		return
	}
	var returnVal []byte
	var ret commonIL.StatusResponse
	var PodsList commonIL.Request
	PodsList.Pods = p.pods

	returnVal = statusRequest(PodsList, token)
	json.Unmarshal(returnVal, &ret)

	for podIndex, podStatus := range ret.PodStatus {
		if podStatus.PodStatus == 1 {
			NoReq++

			pod, _ := p.GetPod(ctx, commonIL.InterLinkConfigInst.Namespace, ret.PodName[podIndex].Name)
			err := p.DeletePod(ctx, pod)
			fmt.Println(err)

			if err != nil {
				log.L.Println("Could not delete pod. " + pod.Name)
			} else {
				log.L.Println("Pod " + pod.Name + " successfully deleted")
			}
		}
	}

	log.L.Println(ret)
}
