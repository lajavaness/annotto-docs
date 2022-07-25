"use strict";(self.webpackChunkljn_annotto_docs=self.webpackChunkljn_annotto_docs||[]).push([[33],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="Cr\xe9ation de compte et assignation de r\xf4les",s={unversionedId:"user-manual/create-account",id:"user-manual/create-account",title:"Cr\xe9ation de compte et assignation de r\xf4les",description:"Ce document recense tout ce que vous devez savoir pour cr\xe9er un compte et lui assigner un r\xf4le.",source:"@site/docs/user-manual/create-account.md",sourceDirName:"user-manual",slug:"/user-manual/create-account",permalink:"/annotto-docs/docs/user-manual/create-account",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-manual/create-account.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guide d'utilisation",permalink:"/annotto-docs/docs/category/guide-dutilisation"},next:{title:"Export des donn\xe9es",permalink:"/annotto-docs/docs/user-manual/export-data"}},l={},u=[{value:"Cr\xe9ation de compte",id:"cr\xe9ation-de-compte",level:2},{value:"Assignation de r\xf4les",id:"assignation-de-r\xf4les",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cr\xe9ation-de-compte-et-assignation-de-r\xf4les"},"Cr\xe9ation de compte et assignation de r\xf4les"),(0,a.kt)("p",null,"Ce document recense tout ce que vous devez savoir pour cr\xe9er un compte et lui assigner un r\xf4le."),(0,a.kt)("h2",{id:"cr\xe9ation-de-compte"},"Cr\xe9ation de compte"),(0,a.kt)("p",null,"Pour cr\xe9er un compte, il est n\xe9cessaire de passer par keycloak. Ci-dessous, une description \xe9tape par \xe9tape pour la cr\xe9ation de compte :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Se rendre sur la console Keycloak en suivant l\u2019url suivante : http://localhost:8080/auth")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cliquer sur \u201c Administration Console \u201c")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Se logger avec les logins admin."))),(0,a.kt)("p",null,"On atterrit sur cette page : "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot 1",src:r(4736).Z,width:"1720",height:"995"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cliquer sur \u201c Users \u201c dans la barre lat\xe9rale. En cliquant sur \u201c View all users \u201c vous avez acc\xe8s \xe0 l\u2019ensemble des users existant.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cliquer sur \u201cAdd user\u201d en haut \xe0 droite")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Renseigner dans les champs les informations de l\u2019utilisateur que vous souhaitez cr\xe9er")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cliquer sur \u201cSave\u201d")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Aller ensuite sur l\u2019onglet \u201cCredentials\u201d afin de lui donner un mot de passe temporaire ou non ( en fonction du toggle )")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Entrer le mot de passe que vous souhaitez lui attrivuer puis cliquer sur \u201cSet Password\u201d"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Votre utilisateur est ainsi cr\xe9e mais \xe0 ce stade, il n\u2019a pas de r\xf4le.")),(0,a.kt)("h2",{id:"assignation-de-r\xf4les"},"Assignation de r\xf4les"),(0,a.kt)("p",null,"Apr\xe8s avoir cr\xe9e utilisateur, il faut lui assigner un r\xf4le. Voici le processus \xe0 suivre"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Se rendre sur l\u2019onglet \u201cRoleMapping\u201d de la page \u201c Users \u201c dans keycloak")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot 2",src:r(1248).Z,width:"1720",height:"995"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On clique sur \u201c Client Roles \u201c afin de retrouver les r\xf4les que l\u2019on peut assigner")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On choisit le client, par exemple ici on choisit \u201cannotto\u201d "))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot 3",src:r(7957).Z,width:"1203",height:"696"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Les r\xf4les disponible pour le client choisit s\u2019affiche dans la partie \u201c Available roles \u201c")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cliquer sur le r\xf4le que vous souhaitez assigner et cliquer sur \u201c Add selected \u201c"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"IMPORTANT : Il est possible d\u2019attribuer plusieurs r\xf4les. Si vous choisissez d\u2019attribuer plusieurs r\xf4les \xe0 l\u2019utilisateur, il aura l\u2019union des droits attribu\xe9 \xe0 chaque r\xf4les")))}p.isMDXComponent=!0},4736:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/screenshot-1-c3853c42f42c285c46ba39ec642c3b47.png"},1248:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/screenshot-2-c7c9166409440ce9cd8b97c83145406c.png"},7957:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/screenshot-3-a6bfe875cd84a746b02c00cf9bee9c63.png"}}]);