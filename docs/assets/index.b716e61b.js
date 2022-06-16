import{c as C,s as R,d as h,r as T,o as c,a as d,b as A,T as U,e as M,w as g,f,g as F,h as N,t as j,F as P,u as m,i as $,j as q,k as H,l as z,m as b,n as K,p as W,q as G,v as E,K as Q,x as X,y as J,z as w,A as Y,B as Z,C as ee,V as D,D as te}from"./vendor.f72f5297.js";const oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}};oe();const x=C();x.use(R);const ne=h({setup(e){return console.log("---\u73AF\u5883\u53D8\u91CF----",{VITE_BUILD_COMPRESS:"none",VITE_ENV:"production",VITE_OUTPUT_DIR:"dist",VITE_PUBLIC_PATH:"/",VITE_USE_MOCK:"true",VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE:"false",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0}),(t,s)=>{const n=T("router-view");return c(),d(n)}}});var se={env:"development",mock:!0,title:"\u5F00\u53D1",baseUrl:"",baseApi:"",APPID:"wx9790364d20b47d95",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},re=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"})),ae={env:"production",mock:!0,title:"\u751F\u4EA7",baseUrl:"",baseApi:"",APPID:"wx74aac87d227a6750",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},ie=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"})),ue={env:"test",mock:!1,title:"\u6D4B\u8BD5",baseUrl:"https://test.xxx.com",baseApi:"https://test.xxx.com/api",APPID:"wx9790364d20b47d95",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},le=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"}));const I={},ce={"./env.development.ts":re,"./env.production.ts":ie,"./env.test.ts":le};Object.entries(ce).forEach(([e,t])=>{const s=e.replace(/\.\/env\.(.*)\.ts$/,"$1");I[s]=t});const S=I.production.default;console.log("\u6839\u636E\u73AF\u5883\u5F15\u5165\u4E0D\u540C\u914D\u7F6E",S);const me=e=>{document.title=e||S.title},de=(e=document.location.toString())=>{e=decodeURI(e);const t=e.split("?"),s={};if(t.length>1){const n=t[1].indexOf("#");t[1]=n==-1?t[1]:t[1].slice(0,n);const o=t[1].split("&");for(let a=0;a<o.length;a++){const r=o[a].split("=");s[r[0]]=decodeURIComponent(r[1])}}return s},pe=()=>{const e=navigator.userAgent,t=e.indexOf("Android")>-1||e.indexOf("Linux")>-1,s=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);if(t)return"android";if(s)return"ios"},_e=()=>!!navigator.userAgent.match(/MicroMessenger/i),fe="modulepreload",k={},he="/test/",u=function(t,s){return!s||s.length===0?t():Promise.all(s.map(n=>{if(n=`${he}${n}`,n in k)return;k[n]=!0;const o=n.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":fe,o||(r.as="script",r.crossOrigin=""),r.href=n,document.head.appendChild(r),o)return new Promise((l,i)=>{r.addEventListener("load",l),r.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},ve=h({props:{tabbars:{type:Array,default:()=>[]},active:Number},emits:["change","update:active"],setup(e,{emit:t}){const s=e,n=A({get:()=>s.active,set:o=>{t("update:active",o),t("change",o)}});return(o,a)=>{const r=U,l=M;return c(),d(l,{modelValue:m(n),"onUpdate:modelValue":a[0]||(a[0]=i=>$(n)?n.value=i:null),route:"",fixed:""},{default:g(()=>[(c(!0),f(P,null,F(e.tabbars,i=>(c(),d(r,{to:i.to,icon:i.icon,key:i.to},{default:g(()=>[N(j(i.title),1)]),_:2},1032,["to","icon"]))),128))]),_:1},8,["modelValue"])}}});var ge=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s};const be={key:0,class:"layout-footer",id:"layout-footer"},Ee=h({setup(e){const t=q();console.log(t.meta);const s=H([{title:"\u9996\u9875",to:"/home",icon:"home-o"},{title:"\u9879\u76EE\u4FE1\u606F",to:"/pkgInfo",icon:"label-o"},{title:"\u6848\u4F8B",to:"/demo",icon:"star-o"},{title:"\u5173\u4E8E\u6211",to:"/about",icon:"user-o"}]),n=z(0);b(n,r=>{console.log("tab value v-model:",r)});const o=r=>{console.log("tab value @change:",r)};b(t,r=>{console.log("route",r.name)});const a=A(()=>{let r=0;return t.meta.showTab&&(r+=50),t.meta.bottomBtn&&(r+=44),`calc(100% - ${r}px)`});return K(()=>{const r=document.getElementById("layout-footer"),l=document.getElementById("app");console.log("height footer",r?.offsetTop||0,r?.offsetHeight),console.log("height app",l?.offsetTop||0,l?.offsetHeight),console.log("client",document.documentElement.clientHeight,window.outerHeight)}),W(()=>{}),(r,l)=>{const i=T("router-view"),L=ve;return c(),f(P,null,[G("div",{class:"layout-content",id:"layout-content",style:X({height:m(a)})},[m(t).meta.keepAlive?(c(),d(Q,{key:0},[E(i)],1024)):(c(),d(i,{key:1}))],4),m(t).meta.showTab?(c(),f("div",be,[E(L,{tabbars:m(s),modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=V=>n.value=V),onChange:o},null,8,["tabbars","modelValue"])])):J("",!0)],64)}}});var ke=ge(Ee,[["__scopeId","data-v-7ae7d720"]]);const ye=[{path:"/",name:"Home",redirect:"/home",meta:{title:"\u9996\u9875",keepAlive:!1},component:ke,children:[{path:"/home",name:"Home",component:()=>u(()=>import("./Home.55705c8c.js"),["assets/Home.55705c8c.js","assets/vendor.f72f5297.js","assets/index.c2041d84.js","assets/index.56618267.js","assets/index.566182672.js"]),meta:{title:"\u9996\u9875",keepAlive:!1,showTab:!0,bottomBtn:!0}},{path:"/demo",name:"Demo",component:()=>u(()=>import("./Demo.c5dfdcdc.js"),["assets/Demo.c5dfdcdc.js","assets/vendor.f72f5297.js"]),meta:{title:"\u6D4B\u8BD5\u6848\u4F8B",keepAlive:!1,showTab:!0}},{path:"/pkgInfo",name:"PkgInfo",component:()=>u(()=>import("./PkgInfo.faeb4f20.js"),["assets/PkgInfo.faeb4f20.js","assets/vendor.f72f5297.js","assets/index.566182673.js","assets/index.56618267.js"]),meta:{title:"\u9879\u76EE\u4FE1\u606F",keepAlive:!1,showTab:!0}},{path:"/about",name:"About",component:()=>u(()=>import("./About.c0360947.js"),["assets/About.c0360947.js","assets/vendor.f72f5297.js","assets/index.c2041d84.js","assets/index.566182673.js","assets/index.56618267.js","assets/index.566182672.js"]),meta:{title:"\u5173\u4E8E\u6211",keepAlive:!1,showTab:!1}},{path:"/tsx",name:"Tsx",component:()=>u(()=>import("./demo.662cb35c.js"),["assets/demo.662cb35c.js","assets/vendor.f72f5297.js"]),meta:{title:"\u6D4B\u8BD5tsx",keepAlive:!1,showTab:!1}},{path:"/static",name:"Static",component:()=>u(()=>import("./testStatic.c25de7d9.js"),["assets/testStatic.c25de7d9.js","assets/vendor.f72f5297.js"]),meta:{title:"\u6D4B\u8BD5\u9759\u6001\u8D44\u6E90",keepAlive:!1,showTab:!1}},{path:"/cssModel",name:"CssModel",component:()=>u(()=>import("./testCssModel.88f22053.js"),["assets/testCssModel.88f22053.js","assets/vendor.f72f5297.js"]),meta:{title:"\u6D4B\u8BD5css-model",keepAlive:!1,showTab:!1}},{path:"/mockAxios",name:"MockAxios",component:()=>u(()=>import("./testMockAxios.e0f96d91.js"),["assets/testMockAxios.e0f96d91.js","assets/index.es.dab5ea22.js","assets/vendor.f72f5297.js","assets/index.c2041d84.js"]),meta:{title:"\u6D4B\u8BD5mock-axios",keepAlive:!1,showTab:!1}},{path:"/pinia",name:"Pinia",component:()=>u(()=>import("./testPinia.2250f114.js"),["assets/testPinia.2250f114.js","assets/vendor.f72f5297.js"]),meta:{title:"\u6D4B\u8BD5pinia",keepAlive:!1,showTab:!1}},{path:"/testTimingData",name:"TestTimingData",component:()=>u(()=>import("./testTimingData.10dad446.js"),["assets/testTimingData.10dad446.js","assets/index.es.dab5ea22.js","assets/vendor.f72f5297.js","assets/index.c2041d84.js"]),meta:{title:"\u5B9A\u65F6\u8BF7\u6C42\u6570\u636E",keepAlive:!1,showTab:!1}},{path:"/testComponent",name:"TestComponent",component:()=>u(()=>import("./testComponent.b44df50b.js"),["assets/testComponent.b44df50b.js","assets/vendor.f72f5297.js"]),meta:{title:"\u6D4B\u8BD5\u5168\u5C40\u7EC4\u4EF6",keepAlive:!1,showTab:!1}}]}],Te=w({id:"auth",state:()=>({userInfo:{},isAuth:!1,code:""}),actions:{saveUserInfo(e){this.$state.userInfo=e},setIsAuth(e){this.$state.isAuth=e},setCode(e){this.$state.code=e}},persist:{key:"auth",storage:window.localStorage}}),Ae=w({id:"link",state:()=>({initLink:""}),actions:{setInitLink(e){this.$state.initLink=e}},persist:{key:"link",storage:window.localStorage}}),v=Y({history:Z("/test/"),routes:ye,strict:!0,scrollBehavior:()=>({left:0,top:0})});v.beforeEach((e,t,s)=>{Te(),me(e.meta.title);//! 解决ios微信下，分享签名不成功的问题,将第一次的进入的url缓存起来。
window.entryUrl===void 0&&(window.entryUrl=location.href.split("#")[0]),de(),_e(),s()});v.afterEach((e,t,s)=>{const n=Ae();let o;pe()==="ios"?o=window.entryUrl:o=window.location.href,console.log("linkStore",n),n.setInitLink(o)});function _(e,{message:t="ok"}={}){return{code:0,data:e,message:t,type:"success"}}function Pe(e,t,s,{message:n="ok"}={}){const o=O(e,t,s);return{..._({items:o,total:s.length}),message:n}}function we(e="Request failed",{code:t=-1,data:s=null}={}){return{code:t,data:s,message:e,type:"error"}}function O(e,t,s){const n=(e-1)*Number(t);return n+Number(t)>=s.length?s.slice(n,s.length):s.slice(n,n+Number(t))}function De({headers:e}){return e?.authorization}var xe=Object.freeze(Object.defineProperty({__proto__:null,resultSuccess:_,resultPageSuccess:Pe,resultError:we,pagination:O,getRequestToken:De},Symbol.toStringTag,{value:"Module"})),Ie=[{url:"/getTimingData",method:"get",response:e=>_({nickname:"@cname",age:"@integer(10-100)",uid:"@id",url:"@image",city:"@city",country:"@county(true)",province:"@province",mobile_phone:"@phone",email:"@email",region:"@region"})}],Se=Object.freeze(Object.defineProperty({__proto__:null,default:Ie},Symbol.toStringTag,{value:"Module"}));function Oe(){return[{userId:"1",username:"vben",realName:"Vben Admin",avatar:"https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640",desc:"manager",password:"123456",token:"fakeToken1",homePath:"/dashboard/analysis",roles:[{roleName:"Super Admin",value:"super"}]},{userId:"2",username:"test",password:"123456",realName:"test user",avatar:"https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640",desc:"tester",token:"fakeToken2",homePath:"/dashboard/workbench",roles:[{roleName:"Tester",value:"test"}]}]}var Be=[{url:"/user/info",method:"get",response:e=>_({author:"ynzy",avatar:"https://avatars.githubusercontent.com/u/39397772?s=60&v=4",projectAddress:"https://github.com/ynzy/vue3-ts-wx-h5-template",demoUrl:"https://vue3-ts-wx-h5-template.vercel.app/",demoCodeUrl:"https://files.catbox.moe/lxle3w.png"})}],Le=Object.freeze(Object.defineProperty({__proto__:null,createFakeUserList:Oe,default:Be},Symbol.toStringTag,{value:"Module"}));const y={"./_util.ts":xe,"./sys/time.ts":Se,"./sys/user.ts":Le},B=[];Object.keys(y).forEach(e=>{e.includes("/_")||B.push(...y[e].default)});function Ve(){ee(B)}new D({maxLogNumber:1e3,theme:"light"});const Ce=new D,p=te(ne);window.vm=p;p.use(x);p.use(v);p.use(Ce);p.mount("#app");Ve();export{ge as _,S as c};