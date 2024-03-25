"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[206],{29325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(85893),r=t(11151),o=t(19965),s=t(44996);const a={sidebar_position:1},c="Introduction",l={id:"intro",title:"Introduction",description:"interLink is in early development phase, thus subject to breaking changes with no guarantee of backward compatibility.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/interLink/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/interTwin-eu/interLink/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Usage",permalink:"/interLink/docs/category/usage"}},h={},d=[{value:"Quick-start",id:"quick-start",level:2},{value:"Overview",id:"overview",level:2}];function u(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"interLink is in early development phase, thus subject to breaking changes with no guarantee of backward compatibility."})}),"\n",(0,i.jsx)(n.p,{children:"InterLink aims to provide an abstraction for the execution of a Kubernetes pod on any remote resource capable of managing a Container execution lifecycle."}),"\n",(0,i.jsx)(n.p,{children:"The project consists of two main components:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"A Kubernetes Virtual Node:"})," based on the ",(0,i.jsx)(n.a,{href:"https://virtual-kubelet.io/",children:"VirtualKubelet"})," technology. Translating request for a kubernetes pod execution into a remote call to the interLink API server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"The interLink API server:"})," a modular and pluggable REST server where you can create your own Container manager plugin (called sidecars), or use the existing ones: remote docker execution on a remote host, singularity Container on a remote SLURM batch system."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The project got inspired by the ",(0,i.jsx)(n.a,{href:"https://github.com/CARV-ICS-FORTH/knoc",children:"KNoC"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/liqotech/liqo/tree/master",children:"Liqo"})," projects, enhancing that with the implemention a generic API layer b/w the virtual kubelet component and the provider logic for the container lifecycle management."]}),"\n",(0,i.jsx)(n.h2,{id:"quick-start",children:"Quick-start"}),"\n",(0,i.jsxs)(n.p,{children:["Let's discover ",(0,i.jsx)(n.a,{href:"./category/usage",children:(0,i.jsx)(n.strong,{children:"interLink in less than 5 minutes"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You need only a machine with ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"Docker"})," engine and git CLI installed."]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.h1,{id:""}),"\n",(0,i.jsx)(n.p,{children:"InterLink aims to provide an abstraction for the execution of a Kubernetes pod on any remote resource capable of managing a Container execution lifecycle."}),"\n",(0,i.jsx)(n.p,{children:"The project consists of two main components:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"A Kubernetes Virtual Node:"})," based on the ",(0,i.jsx)(n.a,{href:"https://virtual-kubelet.io/",children:"VirtualKubelet"})," technology. Translating request for a kubernetes pod execution into a remote call to the interLink API server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"The interLink API server:"})," a modular and pluggable REST server where you can create your own Container manager plugin (called sidecars), or use the existing ones: remote docker execution on a remote host, singularity Container on a remote SLURM batch system."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The project got inspired by the ",(0,i.jsx)(n.a,{href:"https://github.com/CARV-ICS-FORTH/knoc",children:"KNoC"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/liqotech/liqo/tree/master",children:"Liqo"})," projects, enhancing that with the implemention a generic API layer b/w the virtual kubelet component and the provider logic for the container lifecycle management."]}),"\n",(0,i.jsx)(o.Z,{alt:"Docusaurus themed image",sources:{light:(0,s.Z)("/img/InterLink_excalidraw_light.svg"),dark:(0,s.Z)("/img/InterLink_excalidraw-dark.svg")}})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(67294);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);