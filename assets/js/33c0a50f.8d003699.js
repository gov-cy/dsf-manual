"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=a(r),b=o,y=f["".concat(c,".").concat(b)]||f[b]||p[b]||u;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,i=new Array(u);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var a=2;a<u;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1139:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return a},toc:function(){return l},default:function(){return f}});var n=r(7462),o=r(3366),u=(r(7294),r(3905)),i=["components"],s={sidebar_position:5,slug:"/kubernetes"},c="Kubernetes",a={unversionedId:"Infrastructure/kubernetes",id:"Infrastructure/kubernetes",title:"Kubernetes",description:"Why Kubernetes?",source:"@site/src/docs/Infrastructure/kubernetes.md",sourceDirName:"Infrastructure",slug:"/kubernetes",permalink:"/dsf-manual/kubernetes",editUrl:"https://github.com/gov-cy/dsf-manual/tree/main/src/docs/Infrastructure/kubernetes.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/kubernetes"},sidebar:"tutorialSidebar",previous:{title:"Versioning Policy",permalink:"/dsf-manual/govcy-design-system/versioning-policy"},next:{title:"secrets",permalink:"/dsf-manual/Infrastructure/secrets"}},l=[{value:"Why Kubernetes?",id:"why-kubernetes",children:[],level:2},{value:"How it works",id:"how-it-works",children:[],level:2}],p={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,u.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"kubernetes"},"Kubernetes"),(0,u.kt)("h2",{id:"why-kubernetes"},"Why Kubernetes?"),(0,u.kt)("p",null,"Kubernetes will allow us to deploy the DSF Services and deploy services suppliers make etc etc."),(0,u.kt)("h2",{id:"how-it-works"},"How it works"),(0,u.kt)("p",null,"We create services on Github which automatically deply to our Kubernetes Cluster"))}f.isMDXComponent=!0}}]);