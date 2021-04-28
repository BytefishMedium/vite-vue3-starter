var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,n=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var r in o||(o={}))t.call(o,r)&&n(e,r,o[r]);if(a)for(var r of a(o))s.call(o,r)&&n(e,r,o[r]);return e};import{_ as r,a as c,b as i,c as l,d as u,p as d,e as m,o as p,f as v,w as h,g as f,h as b,u as y,r as x,i as g,t as _,j as k,k as w,l as L,m as O,n as C,q as E,s as M,v as A,x as R,y as V,z as j,F as U,A as P,B as T}from"./vendor.dd5beb48.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const s=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,o)=>{const r=new URL(e,s);if(self[t].moduleMap[r])return a(self[t].moduleMap[r]);const c=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){o(new Error(`Failed to import: ${e}`)),n(i)},onload(){a(self[t].moduleMap[r]),n(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("assets/");let F;const I={};var H=u({name:"Home"});const S=h();d("data-v-37ed7763");const $={class:"home-container page-container"},B=f("img",{class:"vue-element-plus-logo",alt:"Vue logo",src:"./assets/logo.5041849f.png"},null,-1),N=f("div",{class:"page-title"},"Vite2.x + Vue3.x + TypeScript + Element Plus",-1),D=f("div",null,[f("a",{href:"https://bytefish.medium.com",target:"_blank"},"Follow me on Medium.")],-1);m();const q=S(((e,t,a,s,n,o)=>(p(),v("div",$,[B,N,D]))));H.render=q,H.__scopeId="data-v-37ed7763";const z=b({state:{text:"This is Vuex Root.state.text"},getters:{},mutations:{},actions:{},modules:{numFactoryModule:{namespaced:!0,state:{name:"numFactory-module",count:1},mutations:{DOUBLE_COUNT(e){e.count*=2}},actions:{}}}}),G=Symbol("vue-store");var W=u({name:"Vuex",setup(){const e=y(G),t=x({text:g((()=>e.state.text)),count:g((()=>e.state.numFactoryModule.count))});return o(o({},_(t)),{double:()=>{e.commit("numFactoryModule/DOUBLE_COUNT")}})}});const J={class:"vuex-container page-container"},K=f("div",{class:"page-title"},"Vuex Test Page",-1),Q=O("double");W.render=function(e,t,a,s,n,o){const r=k("el-button");return p(),v("div",J,[K,f("p",null,"store Root is: "+w(e.text),1),f("p",null,"store doubleCount is: "+w(e.count),1),f(r,{type:"primary",onClick:e.double},{default:L((()=>[Q])),_:1},8,["onClick"])])};var X=u({name:"Vuex",setup(){const e=C(0);return{count:e,increment:()=>{e.value+=1}}}});const Y=h();d("data-v-d105b414");const Z={class:"test-container page-container"},ee=f("div",{class:"page-title"},"Unit Test Page",-1);m();const te=Y(((e,t,a,s,n,o)=>(p(),v("div",Z,[ee,f("p",null,"count is: "+w(e.count),1),f("button",{onClick:t[1]||(t[1]=(...t)=>e.increment&&e.increment(...t))},"increment")]))));X.render=te,X.__scopeId="data-v-d105b414";const ae=[{path:"/",name:"Home",component:H},{path:"/vuex",name:"Vuex",component:W},{path:"/axios",name:"Axios",component:()=>function(e,t){if(!t)return e();if(void 0===F){const e=document.createElement("link").relList;F=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in I)return;I[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":F,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>__import__("./Axios.6ab5d7a5.js")),["./assets/Axios.6ab5d7a5.js","./assets/Axios.c51fadf2.css","./assets/vendor.dd5beb48.js"])},{path:"/test",name:"Test",component:X}],se=E({history:M(),routes:ae});d("data-v-07fe6caa");const ne={class:"header"},oe=f("i",{class:"icon el-icon-s-promotion"},null,-1),re=O(" GitHub ");m();var ce=u({expose:[],setup(e){const t=R(),a=()=>{window.open("https://github.com/BytefishMedium/vite-vue3-starter")};return(e,s)=>(p(),v("div",ne,[f("div",{class:"title",onClick:s[1]||(s[1]=e=>A(t).push("/"))}," Vite2.x + Vue3.x + TypeScript Starter "),f("div",{class:"go-github",onClick:a},[oe,re])]))}});ce.__scopeId="data-v-07fe6caa";var ie=u({name:"Nav",setup(){const e=R(),t=x({navList:[{name:"Home",isActive:!1,path:"/"},{name:"Vuex",isActive:!1,path:"/vuex"},{name:"Axios",isActive:!1,path:"/axios"},{name:"Test",isActive:!1,path:"/test"}],navClick(t){e.push(t.path)}}),a=e=>{t.navList.forEach((t=>{const a=t;return a.isActive=a.path===e,a}))};return V((()=>e.currentRoute.value),(e=>{a(e.path)})),j((()=>{e.isReady().then((()=>{a(e.currentRoute.value.path)}))})),o({},_(t))}});const le=h();d("data-v-3ee757fd");const ue={class:"nav"},de={class:"nav-list"};m();const me=le(((e,t,a,s,n,o)=>(p(),v("aside",ue,[f("ul",de,[(p(!0),v(U,null,P(e.navList,((t,a)=>(p(),v("li",{class:["nav-item flex-center",{active:t.isActive}],key:a,onClick:a=>e.navClick(t)},w(t.name),11,["onClick"])))),128))])]))));ie.render=me,ie.__scopeId="data-v-3ee757fd";var pe=u({name:"Main",components:{Header:ce,Nav:ie}});const ve=h();d("data-v-61814ec4");const he={class:"main-container"},fe={class:"top"},be={class:"bottom"},ye={class:"left"},xe={class:"right"},ge={class:"content"};m();const _e=ve(((e,t,a,s,n,o)=>{const r=k("Header"),c=k("Nav"),i=k("router-view");return p(),v("main",he,[f("div",fe,[f(r)]),f("div",be,[f("div",ye,[f(c)]),f("div",xe,[f("div",ge,[f(i)])])])])}));pe.render=_e,pe.__scopeId="data-v-61814ec4";var ke=u({name:"App",components:{Main:pe}});ke.render=function(e,t,a,s,n,o){const r=k("Main");return p(),v(r)};const we=T(ke);var Le;(Le=we,Le.use(r).use(c).use(i).use(l),Le).use(se).use(z,G).mount("#app");