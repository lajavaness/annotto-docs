"use strict";(self.webpackChunkljn_annotto_docs=self.webpackChunkljn_annotto_docs||[]).push([[9179],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),i=n(44996);const o={},s="Annotation d'un projet type : NER et Classification",l={unversionedId:"user-manual/main-functionalities/create-multiple-projects/ner-and-classification/annotate-ner-classification",id:"user-manual/main-functionalities/create-multiple-projects/ner-and-classification/annotate-ner-classification",title:"Annotation d'un projet type : NER et Classification",description:"En cliquant sur le projet DEMO : NER and Classification, vous avez la possibilit\xe9 de classer l\u2019item dans certaines cat\xe9gories. \xc0 travers le NER qui comprend deux modes de s\xe9lections Word_** et Character_ et la Classification avec laquelle la s\xe9lection se fait \xe0 travers un checkbox.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/user-manual/main-functionalities/create-multiple-projects/ner-and-classification/annotate-ner-classification.md",sourceDirName:"user-manual/main-functionalities/create-multiple-projects/ner-and-classification",slug:"/user-manual/main-functionalities/create-multiple-projects/ner-and-classification/annotate-ner-classification",permalink:"/annotto-docs/fr/docs/user-manual/main-functionalities/create-multiple-projects/ner-and-classification/annotate-ner-classification",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NER and Classification",permalink:"/annotto-docs/fr/docs/category/ner-and-classification"},next:{title:"Cr\xe9ation d'un projet type : NER et classification",permalink:"/annotto-docs/fr/docs/user-manual/main-functionalities/create-multiple-projects/ner-and-classification/create-ner-classification"}},c={},u=[],p={toc:u};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"annotation-dun-projet-type--ner-et-classification"},"Annotation d'un projet type : NER et Classification"),(0,a.kt)("p",null,"En cliquant sur le projet ",(0,a.kt)("strong",{parentName:"p"},"DEMO : NER and Classification"),", vous avez la possibilit\xe9 de classer l\u2019item dans certaines cat\xe9gories. \xc0 travers le NER qui comprend deux modes de s\xe9lections ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Word"))," et ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Character"))," et la Classification avec laquelle la s\xe9lection se fait \xe0 travers un checkbox."),(0,a.kt)("p",null,"Le mode ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Word"))," permet de s\xe9lectionner un mot ou bien une suite de mots."),(0,a.kt)("p",null,"Dans l\u2019exemple ci-dessous, on d\xe9termine la date le nom de l\u2019organisation et l\u2019adresse."),(0,a.kt)("video",{src:(0,i.Z)("/video/screenrecord-1-7.mov"),controls:!0,width:"100%"}),(0,a.kt)("p",null,"Une fois l\u2019annotation termin\xe9e, on sauvegarde en cliquant sur ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Save & Next")),"."),(0,a.kt)("p",null,"Pour supprimer une annotation, il suffit de cliquer sur la croix qui encadre la s\xe9lection."),(0,a.kt)("p",null,"Le mode ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Character"))," permet de s\xe9lectionner un caract\xe8re ou bien des caract\xe8res."),(0,a.kt)("p",null,"Dans l\u2019exemple ci-dessous, on d\xe9termine le mois."),(0,a.kt)("video",{src:(0,i.Z)("/video/screenrecord-1-8.mov"),controls:!0,width:"100%"}),(0,a.kt)("p",null,"Une fois l\u2019annotation termin\xe9e, on sauvegarde en cliquant sur ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Save & Next")),"."),(0,a.kt)("p",null,"Pour supprimer une annotation, il suffit de cliquer sur la croix qui encadre la s\xe9lection."),(0,a.kt)("p",null,"En plus du NER, la Classification permet ici de d\xe9terminer la langue du document. Par exemple, sur l\u2019enregistrement ci-dessous, l\u2019utilisateur a estimer en lisant le message que la langue utilis\xe9e est le fran\xe7ais."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot 1-8",src:n(83036).Z,width:"3512",height:"1846"})),(0,a.kt)("p",null,"Pour supprimer cette annotation, il suffit de d\xe9cocher la case."))}d.isMDXComponent=!0},83036:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/screenshot-1-8-2f0fd0bf9e2616ed4d01ab9962b2699d.png"}}]);