"use strict";(self.webpackChunkljn_annotto_docs=self.webpackChunkljn_annotto_docs||[]).push([[9912],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=d(a),s=r,k=c["".concat(i,".").concat(s)]||c[s]||m[s]||l;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},21335:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:2},o="Installation",p={unversionedId:"setup",id:"setup",title:"Installation",description:"Dans ce document, on explique le processus de d\xe9marrage d'Annotto.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/setup.md",sourceDirName:".",slug:"/setup",permalink:"/annotto-docs/fr/docs/setup",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Pourquoi Annotto ?",permalink:"/annotto-docs/fr/docs/about"},next:{title:"User guide",permalink:"/annotto-docs/fr/docs/category/user-guide"}},i={},d=[{value:"Table des mati\xe8res",id:"table-des-mati\xe8res",level:2},{value:"Lancer avec docker",id:"lancer-avec-docker",level:2},{value:"D\xe9marrage pour le d\xe9veloppement local",id:"d\xe9marrage-pour-le-d\xe9veloppement-local",level:2},{value:"Pr\xe9-requis",id:"pr\xe9-requis",level:3},{value:"D\xe9marrage de l&#39;application",id:"d\xe9marrage-de-lapplication",level:3},{value:"Variables d&#39;environnement",id:"variables-denvironnement",level:3}],u={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Dans ce document, on explique le processus de d\xe9marrage d'Annotto."),(0,r.kt)("h2",{id:"table-des-mati\xe8res"},"Table des mati\xe8res"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#lancer-avec-docker"},"Lancer avec docker")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#d%C3%A9marrage-pour-le-d%C3%A9veloppement-local"},"D\xe9marrage pour le d\xe9veloppement local"))),(0,r.kt)("h2",{id:"lancer-avec-docker"},"Lancer avec docker"),(0,r.kt)("p",null,"Vous devez avoir ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," install\xe9."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  docker run --rm -d --name annotto -p 3000:3000 ljnrepo/annotto:latest\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Annotto")," est disponible \xe0 ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," avec les credentials par d\xe9faut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"username (email): admin\npassword: test\n")),(0,r.kt)("h2",{id:"d\xe9marrage-pour-le-d\xe9veloppement-local"},"D\xe9marrage pour le d\xe9veloppement local"),(0,r.kt)("h3",{id:"pr\xe9-requis"},"Pr\xe9-requis"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Node 16+"),(0,r.kt)("li",{parentName:"ol"},"Mongo 4.4"),(0,r.kt)("li",{parentName:"ol"},"Keycloak 15.0.1"),(0,r.kt)("li",{parentName:"ol"},"PostgreSQL 13+")),(0,r.kt)("h3",{id:"d\xe9marrage-de-lapplication"},"D\xe9marrage de l'application"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer les d\xe9pendances")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn install\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Pr\xe9parer l'environnement")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up -d\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"D\xe9marrer annotto en mode d\xe9veloppement")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn start:dev\n")),(0,r.kt)("h3",{id:"variables-denvironnement"},"Variables d'environnement"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional-Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"5001"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Server listening port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NODE_ENV"),(0,r.kt)("td",{parentName:"tr",align:null},"development"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},'NODE Environment to use "',"[development, test]",'"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ENCRYPTION_SECRET_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"A Secret Key used to encrypt AWS creds (symmetric)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MONGO_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"mongodb://localhost:27017/ljn_annotto_dev"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Mongo connection string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ANNOTTO_FRONT_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"http://localhost:3000"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Annotto Front base url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KEYCLOAK_REALM"),(0,r.kt)("td",{parentName:"tr",align:null},"annotto"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Keycloak Realm (preconfigured if started with docker-compose","_",")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KEYCLOAK_AUTH_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"http://localhost:8080/auth"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Keycloak auth url (preconfigured if started with docker-compose","_",")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KEYCLOAK_CLIENT_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"annotto"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Keycloak client id (preconfigured if started with docker-compose","_",")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KEYCLOAK_CLIENT_SECRET"),(0,r.kt)("td",{parentName:"tr",align:null},"a7b7a29d-abb0-4e21-abec-bca99a47e40e"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Keycloak client secret (preconfigured if started with docker-compose","_",")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ANNOTTO_UPLOAD_MAX_FILE_SIZE"),(0,r.kt)("td",{parentName:"tr",align:null},"1048576000"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Max file size permitted to upload (default = 1000 ",(0,r.kt)("em",{parentName:"td"}," 1024 ")," 1024)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ANNOTTO_UPLOAD_BATCH_SIZE"),(0,r.kt)("td",{parentName:"tr",align:null},"50000"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Max file size permitted to upload (default = 1000 ",(0,r.kt)("em",{parentName:"td"}," 1024 ")," 1024)")))))}m.isMDXComponent=!0}}]);