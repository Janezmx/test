import{c as M,s as U,d as A,r as x,o as c,a as m,b as E,T as F,e as j,w as y,f as T,g as $,h as H,t as N,F as O,u as p,i as q,j as k,l as z,k as K,m as W,n as G,p as b,q as Q,v as X,x as B,y as I,z as J,K as Y,A as Z,B as ee,C as te,D as oe,E as ne,G as se,H as ae,V as re,I as ie}from"./vendor.e0f8e8d7.js";const le=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}};le();const V=M();V.use(U);const ue=A({setup(e){return console.log("---\u73AF\u5883\u53D8\u91CF----",{VITE_BUILD_COMPRESS:"none",VITE_ENV:"production",VITE_OUTPUT_DIR:"dist",VITE_PUBLIC_PATH:"/",VITE_USE_MOCK:"true",VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE:"false",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0}),(t,s)=>{const o=x("router-view");return c(),m(o)}}});var ce={env:"development",mock:!0,title:"\u5F00\u53D1",baseUrl:"",baseApi:"",APPID:"wx9790364d20b47d95",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},de=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"})),pe={env:"production",mock:!0,title:"\u751F\u4EA7",baseUrl:"",baseApi:"",APPID:"wx74aac87d227a6750",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},me=Object.freeze(Object.defineProperty({__proto__:null,default:pe},Symbol.toStringTag,{value:"Module"})),_e={env:"proV",mock:!0,title:"\u751F\u4EA7",baseUrl:"",baseApi:"",APPID:"wx74aac87d227a6750",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},fe=Object.freeze(Object.defineProperty({__proto__:null,default:_e},Symbol.toStringTag,{value:"Module"})),he={env:"test",mock:!1,title:"\u6D4B\u8BD5",baseUrl:"https://test.xxx.com",baseApi:"https://test.xxx.com/api",APPID:"wx9790364d20b47d95",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},ve=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"}));const w={},ge={"./env.development.ts":de,"./env.production.ts":me,"./env.proV.ts":fe,"./env.test.ts":ve};Object.entries(ge).forEach(([e,t])=>{const s=e.replace(/\.\/env\.(.*)\.ts$/,"$1");w[s]=t});console.log("envMap",w);const L=w.production.default;console.log("\u6839\u636E\u73AF\u5883\u5F15\u5165\u4E0D\u540C\u914D\u7F6E",L);const be=e=>{document.title=e||L.title},Ee=(e=document.location.toString())=>{e=decodeURI(e);const t=e.split("?"),s={};if(t.length>1){const o=t[1].indexOf("#");t[1]=o==-1?t[1]:t[1].slice(0,o);const n=t[1].split("&");for(let r=0;r<n.length;r++){const i=n[r].split("=");s[i[0]]=decodeURIComponent(i[1])}}return s},ye=()=>{const e=navigator.userAgent,t=e.indexOf("Android")>-1||e.indexOf("Linux")>-1,s=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);if(t)return"android";if(s)return"ios"},Te=()=>!!navigator.userAgent.match(/MicroMessenger/i),Ae="modulepreload",D={},ke="/test/",l=function(t,s){return!s||s.length===0?t():Promise.all(s.map(o=>{if(o=`${ke}${o}`,o in D)return;D[o]=!0;const n=o.endsWith(".css"),r=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":Ae,n||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),n)return new Promise((d,a)=>{i.addEventListener("load",d),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},we=A({props:{tabbars:{type:Array,default:()=>[]},active:Number},emits:["change","update:active"],setup(e,{emit:t}){const s=e,o=E({get:()=>s.active,set:n=>{t("update:active",n),t("change",n)}});return(n,r)=>{const i=F,d=j;return c(),m(d,{modelValue:p(o),"onUpdate:modelValue":r[0]||(r[0]=a=>q(o)?o.value=a:null),route:"",fixed:""},{default:y(()=>[(c(!0),T(O,null,$(e.tabbars,a=>(c(),m(i,{to:a.to,icon:a.icon,key:a.to},{default:y(()=>[H(N(a.title),1)]),_:2},1032,["to","icon"]))),128))]),_:1},8,["modelValue"])}}}),Pe=k({id:"keepAlive",state:()=>({caches:[]}),actions:{add(e){this.caches.includes(e)||this.caches.push(e)},remove(e){z.remove(this.caches,t=>t===e)}},persist:!0});var Ie=(e,t)=>{const s=e.__vccOpts||e;for(const[o,n]of t)s[o]=n;return s};const De=e=>(te("data-v-d4d0ca22"),e=e(),oe(),e),Se=De(()=>B("div",{class:"test-safe",id:"safe"},null,-1)),xe={key:0,class:"layout-footer",id:"layout-footer"},Oe=A({setup(e){const t=Pe(),s=E(()=>t.caches),o=K();console.log(o.meta);const n=W([{title:"\u9996\u9875",to:"/home",icon:"home-o"},{title:"\u9879\u76EE\u4FE1\u606F",to:"/pkgInfo",icon:"label-o"},{title:"\u6848\u4F8B",to:"/demo",icon:"star-o"},{title:"\u5173\u4E8E\u6211",to:"/about",icon:"user-o"}]),r=G(0);b(r,a=>{console.log("tab value v-model:",a)});const i=a=>{console.log("tab value @change:",a)};b(o,a=>{console.log("route",a.name)});const d=E(()=>{let a=0;return o.meta.showTab&&(a+=50),o.meta.bottomBtn&&(a+=44),`calc(100% - ${a}px)`});return Q(()=>{const a=document.getElementById("layout-footer"),u=document.getElementById("app"),_=document.getElementById("safe"),f=document.getElementById("layout-content");console.log("onMounted height footer",a?.offsetTop||0,a?.offsetHeight),console.log("onMounted height app",u?.offsetTop||0,u?.offsetHeight),console.log("onMounted client",document.documentElement.clientHeight,window.outerHeight),console.log("safe",_,_?.offsetHeight),console.log("content",f,f?.offsetHeight)}),b(d,()=>{const a=document.getElementById("layout-footer"),u=document.getElementById("app");console.log("watch height footer",a?.offsetTop||0,a?.offsetHeight),console.log("watch height app",u?.offsetTop||0,u?.offsetHeight),console.log("watch client",document.documentElement.clientHeight,window.outerHeight)}),X(()=>{}),(a,u)=>{const _=x("router-view"),f=we;return c(),T(O,null,[Se,B("div",{class:"layout-content",id:"layout-content",style:Z({height:p(d)})},[I(_,null,{default:y(({Component:g})=>[(c(),m(Y,{include:p(s)},[(c(),m(J(g),{key:p(o).path}))],1032,["include"]))]),_:1})],4),p(o).meta.showTab?(c(),T("div",xe,[I(f,{tabbars:p(n),modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=g=>r.value=g),onChange:i},null,8,["tabbars","modelValue"])])):ee("",!0)],64)}}});var Be=Ie(Oe,[["__scopeId","data-v-d4d0ca22"]]);const Ve=[{path:"/",name:"Home",redirect:"/home",meta:{title:"\u9996\u9875",keepAlive:!1},component:Be,children:[{path:"/home",name:"Home",component:()=>l(()=>import("./Home.74bdaf99.js"),["assets/Home.74bdaf99.js","assets/vendor.e0f8e8d7.js","assets/index.56618267.js","assets/index.c2041d84.js"]),meta:{title:"\u9996\u9875",keepAlive:!1,showTab:!0,bottomBtn:!0}},{path:"/demo",name:"Demo",component:()=>l(()=>import("./Demo.aa30f851.js"),["assets/Demo.aa30f851.js","assets/vendor.e0f8e8d7.js"]),meta:{title:"\u6D4B\u8BD5\u6848\u4F8B",keepAlive:!1,showTab:!0}},{path:"/pkgInfo",name:"PkgInfo",component:()=>l(()=>import("./PkgInfo.1ffb7f20.js"),["assets/PkgInfo.1ffb7f20.js","assets/vendor.e0f8e8d7.js","assets/index.56618267.js"]),meta:{title:"\u9879\u76EE\u4FE1\u606F",keepAlive:!1,showTab:!0}},{path:"/about",name:"About",component:()=>l(()=>import("./About.8ccca007.js"),["assets/About.8ccca007.js","assets/vendor.e0f8e8d7.js","assets/index.c2041d84.js","assets/index.566182672.js"]),meta:{title:"\u5173\u4E8E\u6211",keepAlive:!1,showTab:!1}},{path:"/tsx",name:"Tsx",component:()=>l(()=>import("./demo.033a8d81.js"),["assets/demo.033a8d81.js","assets/vendor.e0f8e8d7.js"]),meta:{title:"\u6D4B\u8BD5tsx",keepAlive:!1,showTab:!1}},{path:"/static",name:"Static",component:()=>l(()=>import("./testStatic.d6f778e8.js"),["assets/testStatic.d6f778e8.js","assets/vendor.e0f8e8d7.js"]),meta:{title:"\u6D4B\u8BD5\u9759\u6001\u8D44\u6E90",keepAlive:!1,showTab:!1}},{path:"/cssModel",name:"CssModel",component:()=>l(()=>import("./testCssModel.0d26f3f7.js"),["assets/testCssModel.0d26f3f7.js","assets/vendor.e0f8e8d7.js"]),meta:{title:"\u6D4B\u8BD5css-model",keepAlive:!1,showTab:!1}},{path:"/mockAxios",name:"MockAxios",component:()=>l(()=>import("./testMockAxios.46e431e2.js"),["assets/testMockAxios.46e431e2.js","assets/index.es.449f667e.js","assets/vendor.e0f8e8d7.js","assets/index.c2041d84.js"]),meta:{title:"\u6D4B\u8BD5mock-axios",keepAlive:!1,showTab:!1}},{path:"/pinia",name:"Pinia",component:()=>l(()=>import("./testPinia.427a9d27.js"),["assets/testPinia.427a9d27.js","assets/vendor.e0f8e8d7.js"]),meta:{title:"\u6D4B\u8BD5pinia",keepAlive:!1,showTab:!1}},{path:"/testTimingData",name:"TestTimingData",component:()=>l(()=>import("./testTimingData.44dc1d96.js"),["assets/testTimingData.44dc1d96.js","assets/index.es.449f667e.js","assets/vendor.e0f8e8d7.js","assets/index.c2041d84.js"]),meta:{title:"\u5B9A\u65F6\u8BF7\u6C42\u6570\u636E",keepAlive:!1,showTab:!1}},{path:"/testComponent",name:"TestComponent",component:()=>l(()=>import("./testComponent.587bad52.js"),["assets/testComponent.587bad52.js","assets/vendor.e0f8e8d7.js"]),meta:{title:"\u6D4B\u8BD5\u5168\u5C40\u7EC4\u4EF6",keepAlive:!1,showTab:!1}},{path:"/form",name:"form",component:()=>l(()=>import("./Form.854db3ea.js"),["assets/Form.854db3ea.js","assets/vendor.e0f8e8d7.js","assets/index.c2041d84.js","assets/index.56618267.js","assets/index.566182672.js"]),meta:{title:"\u8868\u5355",keepAlive:!0,showTab:!0}},{path:"/preview",name:"preview",component:()=>l(()=>import("./Preview.f4231bb8.js"),["assets/Preview.f4231bb8.js","assets/vendor.e0f8e8d7.js","assets/index.566182672.js"]),meta:{title:"\u9884\u89C8",keepAlive:!1,showTab:!0}}]}],Le=k({id:"auth",state:()=>({userInfo:{},isAuth:!1,code:""}),actions:{saveUserInfo(e){this.$state.userInfo=e},setIsAuth(e){this.$state.isAuth=e},setCode(e){this.$state.code=e}},persist:{key:"auth",storage:window.localStorage}}),Ce=k({id:"link",state:()=>({initLink:""}),actions:{setInitLink(e){this.$state.initLink=e}},persist:{key:"link",storage:window.localStorage}}),P=ne({history:se("/test/"),routes:Ve,strict:!0,scrollBehavior:()=>({left:0,top:0})});P.beforeEach((e,t,s)=>{Le(),be(e.meta.title);//! 解决ios微信下，分享签名不成功的问题,将第一次的进入的url缓存起来。
window.entryUrl===void 0&&(window.entryUrl=location.href.split("#")[0]),Ee(),Te(),s()});P.afterEach((e,t,s)=>{const o=Ce();let n;ye()==="ios"?n=window.entryUrl:n=window.location.href,console.log("linkStore",o),o.setInitLink(n)});function h(e,{message:t="ok"}={}){return{code:0,data:e,message:t,type:"success"}}function Re(e,t,s,{message:o="ok"}={}){const n=C(e,t,s);return{...h({items:n,total:s.length}),message:o}}function Me(e="Request failed",{code:t=-1,data:s=null}={}){return{code:t,data:s,message:e,type:"error"}}function C(e,t,s){const o=(e-1)*Number(t);return o+Number(t)>=s.length?s.slice(o,s.length):s.slice(o,o+Number(t))}function Ue({headers:e}){return e?.authorization}var Fe=Object.freeze(Object.defineProperty({__proto__:null,resultSuccess:h,resultPageSuccess:Re,resultError:Me,pagination:C,getRequestToken:Ue},Symbol.toStringTag,{value:"Module"})),je=[{url:"/getTimingData",method:"get",response:e=>h({nickname:"@cname",age:"@integer(10-100)",uid:"@id",url:"@image",city:"@city",country:"@county(true)",province:"@province",mobile_phone:"@phone",email:"@email",region:"@region"})}],$e=Object.freeze(Object.defineProperty({__proto__:null,default:je},Symbol.toStringTag,{value:"Module"}));function He(){return[{userId:"1",username:"vben",realName:"Vben Admin",avatar:"https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640",desc:"manager",password:"123456",token:"fakeToken1",homePath:"/dashboard/analysis",roles:[{roleName:"Super Admin",value:"super"}]},{userId:"2",username:"test",password:"123456",realName:"test user",avatar:"https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640",desc:"tester",token:"fakeToken2",homePath:"/dashboard/workbench",roles:[{roleName:"Tester",value:"test"}]}]}var Ne=[{url:"/user/info",method:"get",response:e=>h({author:"ynzy",avatar:"https://avatars.githubusercontent.com/u/39397772?s=60&v=4",projectAddress:"https://github.com/ynzy/vue3-ts-wx-h5-template",demoUrl:"https://vue3-ts-wx-h5-template.vercel.app/",demoCodeUrl:"https://files.catbox.moe/lxle3w.png"})}],qe=Object.freeze(Object.defineProperty({__proto__:null,createFakeUserList:He,default:Ne},Symbol.toStringTag,{value:"Module"}));const S={"./_util.ts":Fe,"./sys/time.ts":$e,"./sys/user.ts":qe},R=[];Object.keys(S).forEach(e=>{e.includes("/_")||R.push(...S[e].default)});function ze(){ae(R)}window.location.search==="?vconsole=1"&&new re;const v=ie(ue);window.vm=v;v.use(V);v.use(P);v.mount("#app");ze();export{Ie as _,L as c,Pe as k};
