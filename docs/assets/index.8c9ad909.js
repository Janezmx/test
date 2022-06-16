import{c as R,s as M,d as v,r as A,o as c,a as m,b as w,T as U,e as F,w as E,f as g,g as N,h as j,t as $,F as I,u as d,i as q,j as H,k as z,l as K,m as h,n as W,p as G,q as P,v as y,K as Q,x as X,y as J,z as Y,A as Z,B as D,C as ee,D as te,E as oe,V as x,G as ne}from"./vendor.58ab3679.js";const se=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}};se();const S=R();S.use(M);const re=v({setup(e){return console.log("---\u73AF\u5883\u53D8\u91CF----",{VITE_BUILD_COMPRESS:"none",VITE_ENV:"proV",VITE_OUTPUT_DIR:"dist",VITE_PUBLIC_PATH:"/",VITE_USE_MOCK:"true",VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE:"false",BASE_URL:"/test/",MODE:"proV",DEV:!0,PROD:!1}),(t,s)=>{const n=A("router-view");return c(),m(n)}}});var ae={env:"development",mock:!0,title:"\u5F00\u53D1",baseUrl:"",baseApi:"",APPID:"wx9790364d20b47d95",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},ie=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"})),le={env:"production",mock:!0,title:"\u751F\u4EA7",baseUrl:"",baseApi:"",APPID:"wx74aac87d227a6750",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},ue=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"})),ce={env:"test",mock:!1,title:"\u6D4B\u8BD5",baseUrl:"https://test.xxx.com",baseApi:"https://test.xxx.com/api",APPID:"wx9790364d20b47d95",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},de=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"}));const O={},me={"./env.development.ts":ie,"./env.production.ts":ue,"./env.test.ts":de};Object.entries(me).forEach(([e,t])=>{const s=e.replace(/\.\/env\.(.*)\.ts$/,"$1");O[s]=t});const B=O.proV.default;console.log("\u6839\u636E\u73AF\u5883\u5F15\u5165\u4E0D\u540C\u914D\u7F6E",B);const pe=e=>{document.title=e||B.title},_e=(e=document.location.toString())=>{e=decodeURI(e);const t=e.split("?"),s={};if(t.length>1){const n=t[1].indexOf("#");t[1]=n==-1?t[1]:t[1].slice(0,n);const o=t[1].split("&");for(let a=0;a<o.length;a++){const r=o[a].split("=");s[r[0]]=decodeURIComponent(r[1])}}return s},fe=()=>{const e=navigator.userAgent,t=e.indexOf("Android")>-1||e.indexOf("Linux")>-1,s=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);if(t)return"android";if(s)return"ios"},he=()=>!!navigator.userAgent.match(/MicroMessenger/i),ge="modulepreload",k={},ve="/test/",u=function(t,s){return!s||s.length===0?t():Promise.all(s.map(n=>{if(n=`${ve}${n}`,n in k)return;k[n]=!0;const o=n.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":ge,o||(r.as="script",r.crossOrigin=""),r.href=n,document.head.appendChild(r),o)return new Promise((l,i)=>{r.addEventListener("load",l),r.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},be=v({props:{tabbars:{type:Array,default:()=>[]},active:Number},emits:["change","update:active"],setup(e,{emit:t}){const s=e,n=w({get:()=>s.active,set:o=>{t("update:active",o),t("change",o)}});return(o,a)=>{const r=U,l=F;return c(),m(l,{modelValue:d(n),"onUpdate:modelValue":a[0]||(a[0]=i=>q(n)?n.value=i:null),route:"",fixed:""},{default:E(()=>[(c(!0),g(I,null,N(e.tabbars,i=>(c(),m(r,{to:i.to,icon:i.icon,key:i.to},{default:E(()=>[j($(i.title),1)]),_:2},1032,["to","icon"]))),128))]),_:1},8,["modelValue"])}}});var Ee=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s};const ye=e=>(Y("data-v-7a70d022"),e=e(),Z(),e),ke=ye(()=>P("div",{class:"test-safe",id:"safe"},null,-1)),Te={key:0,class:"layout-footer",id:"layout-footer"},Ae=v({setup(e){const t=H();console.log(t.meta);const s=z([{title:"\u9996\u9875",to:"/home",icon:"home-o"},{title:"\u9879\u76EE\u4FE1\u606F",to:"/pkgInfo",icon:"label-o"},{title:"\u6848\u4F8B",to:"/demo",icon:"star-o"},{title:"\u5173\u4E8E\u6211",to:"/about",icon:"user-o"}]),n=K(0);h(n,r=>{console.log("tab value v-model:",r)});const o=r=>{console.log("tab value @change:",r)};h(t,r=>{console.log("route",r.name)});const a=w(()=>{let r=0;return t.meta.showTab&&(r+=50),t.meta.bottomBtn&&(r+=44),`calc(100% - ${r}px)`});return W(()=>{const r=document.getElementById("layout-footer"),l=document.getElementById("app"),i=document.getElementById("safe"),p=document.getElementById("layout-content");console.log("onMounted height footer",r?.offsetTop||0,r?.offsetHeight),console.log("onMounted height app",l?.offsetTop||0,l?.offsetHeight),console.log("onMounted client",document.documentElement.clientHeight,window.outerHeight),console.log("safe",i,i?.offsetHeight),console.log("content",p,p?.offsetHeight)}),h(a,()=>{const r=document.getElementById("layout-footer"),l=document.getElementById("app");console.log("watch height footer",r?.offsetTop||0,r?.offsetHeight),console.log("watch height app",l?.offsetTop||0,l?.offsetHeight),console.log("watch client",document.documentElement.clientHeight,window.outerHeight)}),G(()=>{}),(r,l)=>{const i=A("router-view"),p=be;return c(),g(I,null,[ke,P("div",{class:"layout-content",id:"layout-content",style:X({height:d(a)})},[d(t).meta.keepAlive?(c(),m(Q,{key:0},[y(i)],1024)):(c(),m(i,{key:1}))],4),d(t).meta.showTab?(c(),g("div",Te,[y(p,{tabbars:d(s),modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=C=>n.value=C),onChange:o},null,8,["tabbars","modelValue"])])):J("v-if",!0)],64)}}});var we=Ee(Ae,[["__scopeId","data-v-7a70d022"]]);const Ie=[{path:"/",name:"Home",redirect:"/home",meta:{title:"\u9996\u9875",keepAlive:!1},component:we,children:[{path:"/home",name:"Home",component:()=>u(()=>import("./Home.d995513c.js"),["assets/Home.d995513c.js","assets/vendor.58ab3679.js","assets/index.c2041d84.js","assets/index.56618267.js","assets/index.566182672.js"]),meta:{title:"\u9996\u9875",keepAlive:!1,showTab:!0,bottomBtn:!0}},{path:"/demo",name:"Demo",component:()=>u(()=>import("./Demo.45128a72.js"),["assets/Demo.45128a72.js","assets/vendor.58ab3679.js"]),meta:{title:"\u6D4B\u8BD5\u6848\u4F8B",keepAlive:!1,showTab:!0}},{path:"/pkgInfo",name:"PkgInfo",component:()=>u(()=>import("./PkgInfo.b07b3d8c.js"),["assets/PkgInfo.b07b3d8c.js","assets/vendor.58ab3679.js","assets/index.566182673.js","assets/index.56618267.js"]),meta:{title:"\u9879\u76EE\u4FE1\u606F",keepAlive:!1,showTab:!0}},{path:"/about",name:"About",component:()=>u(()=>import("./About.4080d790.js"),["assets/About.4080d790.js","assets/vendor.58ab3679.js","assets/index.c2041d84.js","assets/index.566182673.js","assets/index.56618267.js","assets/index.566182672.js"]),meta:{title:"\u5173\u4E8E\u6211",keepAlive:!1,showTab:!1}},{path:"/tsx",name:"Tsx",component:()=>u(()=>import("./demo.8e992eca.js"),["assets/demo.8e992eca.js","assets/vendor.58ab3679.js"]),meta:{title:"\u6D4B\u8BD5tsx",keepAlive:!1,showTab:!1}},{path:"/static",name:"Static",component:()=>u(()=>import("./testStatic.41c5cd79.js"),["assets/testStatic.41c5cd79.js","assets/vendor.58ab3679.js"]),meta:{title:"\u6D4B\u8BD5\u9759\u6001\u8D44\u6E90",keepAlive:!1,showTab:!1}},{path:"/cssModel",name:"CssModel",component:()=>u(()=>import("./testCssModel.39a54bb1.js"),["assets/testCssModel.39a54bb1.js","assets/vendor.58ab3679.js"]),meta:{title:"\u6D4B\u8BD5css-model",keepAlive:!1,showTab:!1}},{path:"/mockAxios",name:"MockAxios",component:()=>u(()=>import("./testMockAxios.3eb67113.js"),["assets/testMockAxios.3eb67113.js","assets/vendor.58ab3679.js","assets/index.es.8579c73c.js","assets/index.c2041d84.js"]),meta:{title:"\u6D4B\u8BD5mock-axios",keepAlive:!1,showTab:!1}},{path:"/pinia",name:"Pinia",component:()=>u(()=>import("./testPinia.9d6c1d14.js"),["assets/testPinia.9d6c1d14.js","assets/vendor.58ab3679.js"]),meta:{title:"\u6D4B\u8BD5pinia",keepAlive:!1,showTab:!1}},{path:"/testTimingData",name:"TestTimingData",component:()=>u(()=>import("./testTimingData.964a6c88.js"),["assets/testTimingData.964a6c88.js","assets/vendor.58ab3679.js","assets/index.es.8579c73c.js","assets/index.c2041d84.js"]),meta:{title:"\u5B9A\u65F6\u8BF7\u6C42\u6570\u636E",keepAlive:!1,showTab:!1}},{path:"/testComponent",name:"TestComponent",component:()=>u(()=>import("./testComponent.8d871b74.js"),["assets/testComponent.8d871b74.js","assets/vendor.58ab3679.js"]),meta:{title:"\u6D4B\u8BD5\u5168\u5C40\u7EC4\u4EF6",keepAlive:!1,showTab:!1}}]}],Pe=D({id:"auth",state:()=>({userInfo:{},isAuth:!1,code:""}),actions:{saveUserInfo(e){this.$state.userInfo=e},setIsAuth(e){this.$state.isAuth=e},setCode(e){this.$state.code=e}},persist:{key:"auth",storage:window.localStorage}}),De=D({id:"link",state:()=>({initLink:""}),actions:{setInitLink(e){this.$state.initLink=e}},persist:{key:"link",storage:window.localStorage}}),b=ee({history:te("/test/"),routes:Ie,strict:!0,scrollBehavior:()=>({left:0,top:0})});b.beforeEach((e,t,s)=>{Pe(),pe(e.meta.title);//! 解决ios微信下，分享签名不成功的问题,将第一次的进入的url缓存起来。
window.entryUrl===void 0&&(window.entryUrl=location.href.split("#")[0]),_e(),he(),s()});b.afterEach((e,t,s)=>{const n=De();let o;fe()==="ios"?o=window.entryUrl:o=window.location.href,console.log("linkStore",n),n.setInitLink(o)});function _(e,{message:t="ok"}={}){return{code:0,data:e,message:t,type:"success"}}function xe(e,t,s,{message:n="ok"}={}){const o=L(e,t,s);return{..._({items:o,total:s.length}),message:n}}function Se(e="Request failed",{code:t=-1,data:s=null}={}){return{code:t,data:s,message:e,type:"error"}}function L(e,t,s){const n=(e-1)*Number(t);return n+Number(t)>=s.length?s.slice(n,s.length):s.slice(n,n+Number(t))}function Oe({headers:e}){return e?.authorization}var Be=Object.freeze(Object.defineProperty({__proto__:null,resultSuccess:_,resultPageSuccess:xe,resultError:Se,pagination:L,getRequestToken:Oe},Symbol.toStringTag,{value:"Module"})),Le=[{url:"/getTimingData",method:"get",response:e=>_({nickname:"@cname",age:"@integer(10-100)",uid:"@id",url:"@image",city:"@city",country:"@county(true)",province:"@province",mobile_phone:"@phone",email:"@email",region:"@region"})}],Ve=Object.freeze(Object.defineProperty({__proto__:null,default:Le},Symbol.toStringTag,{value:"Module"}));function Ce(){return[{userId:"1",username:"vben",realName:"Vben Admin",avatar:"https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640",desc:"manager",password:"123456",token:"fakeToken1",homePath:"/dashboard/analysis",roles:[{roleName:"Super Admin",value:"super"}]},{userId:"2",username:"test",password:"123456",realName:"test user",avatar:"https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640",desc:"tester",token:"fakeToken2",homePath:"/dashboard/workbench",roles:[{roleName:"Tester",value:"test"}]}]}var Re=[{url:"/user/info",method:"get",response:e=>_({author:"ynzy",avatar:"https://avatars.githubusercontent.com/u/39397772?s=60&v=4",projectAddress:"https://github.com/ynzy/vue3-ts-wx-h5-template",demoUrl:"https://vue3-ts-wx-h5-template.vercel.app/",demoCodeUrl:"https://files.catbox.moe/lxle3w.png"})}],Me=Object.freeze(Object.defineProperty({__proto__:null,createFakeUserList:Ce,default:Re},Symbol.toStringTag,{value:"Module"}));const T={"./_util.ts":Be,"./sys/time.ts":Ve,"./sys/user.ts":Me},V=[];Object.keys(T).forEach(e=>{e.includes("/_")||V.push(...T[e].default)});function Ue(){oe(V)}new x({maxLogNumber:1e3,theme:"light"});new x;const f=ne(re);window.vm=f;f.use(S);f.use(b);f.mount("#app");Ue();export{Ee as _,B as c};
