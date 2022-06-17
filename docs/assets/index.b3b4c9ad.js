import{c as R,s as M,d as v,r as A,o as c,a as m,b as w,T as U,e as F,w as E,f as g,g as N,h as j,t as $,F as I,u as d,i as q,j as H,k as z,l as K,m as h,n as W,p as G,q as P,v as y,K as Q,x as X,y as J,z as Y,A as Z,B as D,C as ee,D as te,E as oe,V as x,G as ne}from"./vendor.770a4be7.js";const se=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}};se();const S=R();S.use(M);const ae=v({setup(e){return console.log("---\u73AF\u5883\u53D8\u91CF----",{VITE_BUILD_COMPRESS:"none",VITE_ENV:"production",VITE_OUTPUT_DIR:"dist",VITE_PUBLIC_PATH:"/",VITE_USE_MOCK:"true",VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE:"false",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0}),(t,s)=>{const n=A("router-view");return c(),m(n)}}});var re={env:"development",mock:!0,title:"\u5F00\u53D1",baseUrl:"",baseApi:"",APPID:"wx9790364d20b47d95",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},ie=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"})),ue={env:"production",mock:!0,title:"\u751F\u4EA7",baseUrl:"",baseApi:"",APPID:"wx74aac87d227a6750",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},le=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"})),ce={env:"test",mock:!1,title:"\u6D4B\u8BD5",baseUrl:"https://test.xxx.com",baseApi:"https://test.xxx.com/api",APPID:"wx9790364d20b47d95",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},de=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"}));const O={},me={"./env.development.ts":ie,"./env.production.ts":le,"./env.test.ts":de};Object.entries(me).forEach(([e,t])=>{const s=e.replace(/\.\/env\.(.*)\.ts$/,"$1");O[s]=t});const B=O.production.default;console.log("\u6839\u636E\u73AF\u5883\u5F15\u5165\u4E0D\u540C\u914D\u7F6E",B);const pe=e=>{document.title=e||B.title},_e=(e=document.location.toString())=>{e=decodeURI(e);const t=e.split("?"),s={};if(t.length>1){const n=t[1].indexOf("#");t[1]=n==-1?t[1]:t[1].slice(0,n);const o=t[1].split("&");for(let r=0;r<o.length;r++){const a=o[r].split("=");s[a[0]]=decodeURIComponent(a[1])}}return s},fe=()=>{const e=navigator.userAgent,t=e.indexOf("Android")>-1||e.indexOf("Linux")>-1,s=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);if(t)return"android";if(s)return"ios"},he=()=>!!navigator.userAgent.match(/MicroMessenger/i),ge="modulepreload",k={},ve="/test/",l=function(t,s){return!s||s.length===0?t():Promise.all(s.map(n=>{if(n=`${ve}${n}`,n in k)return;k[n]=!0;const o=n.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":ge,o||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),o)return new Promise((u,i)=>{a.addEventListener("load",u),a.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},be=v({props:{tabbars:{type:Array,default:()=>[]},active:Number},emits:["change","update:active"],setup(e,{emit:t}){const s=e,n=w({get:()=>s.active,set:o=>{t("update:active",o),t("change",o)}});return(o,r)=>{const a=U,u=F;return c(),m(u,{modelValue:d(n),"onUpdate:modelValue":r[0]||(r[0]=i=>q(n)?n.value=i:null),route:"",fixed:""},{default:E(()=>[(c(!0),g(I,null,N(e.tabbars,i=>(c(),m(a,{to:i.to,icon:i.icon,key:i.to},{default:E(()=>[j($(i.title),1)]),_:2},1032,["to","icon"]))),128))]),_:1},8,["modelValue"])}}});var Ee=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s};const ye=e=>(Y("data-v-2aa5da86"),e=e(),Z(),e),ke=ye(()=>P("div",{class:"test-safe",id:"safe"},null,-1)),Te={key:0,class:"layout-footer",id:"layout-footer"},Ae=v({setup(e){const t=H();console.log(t.meta);const s=z([{title:"\u9996\u9875",to:"/home",icon:"home-o"},{title:"\u9879\u76EE\u4FE1\u606F",to:"/pkgInfo",icon:"label-o"},{title:"\u6848\u4F8B",to:"/demo",icon:"star-o"},{title:"\u5173\u4E8E\u6211",to:"/about",icon:"user-o"}]),n=K(0);h(n,a=>{console.log("tab value v-model:",a)});const o=a=>{console.log("tab value @change:",a)};h(t,a=>{console.log("route",a.name)});const r=w(()=>{let a=0;return t.meta.showTab&&(a+=50),t.meta.bottomBtn&&(a+=44),`calc(100% - ${a}px)`});return W(()=>{const a=document.getElementById("layout-footer"),u=document.getElementById("app"),i=document.getElementById("safe"),p=document.getElementById("layout-content");console.log("onMounted height footer",a?.offsetTop||0,a?.offsetHeight),console.log("onMounted height app",u?.offsetTop||0,u?.offsetHeight),console.log("onMounted client",document.documentElement.clientHeight,window.outerHeight),console.log("safe",i,i?.offsetHeight),console.log("content",p,p?.offsetHeight)}),h(r,()=>{const a=document.getElementById("layout-footer"),u=document.getElementById("app");console.log("watch height footer",a?.offsetTop||0,a?.offsetHeight),console.log("watch height app",u?.offsetTop||0,u?.offsetHeight),console.log("watch client",document.documentElement.clientHeight,window.outerHeight)}),G(()=>{}),(a,u)=>{const i=A("router-view"),p=be;return c(),g(I,null,[ke,P("div",{class:"layout-content",id:"layout-content",style:X({height:d(r)})},[d(t).meta.keepAlive?(c(),m(Q,{key:0},[y(i)],1024)):(c(),m(i,{key:1}))],4),d(t).meta.showTab?(c(),g("div",Te,[y(p,{tabbars:d(s),modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=C=>n.value=C),onChange:o},null,8,["tabbars","modelValue"])])):J("",!0)],64)}}});var we=Ee(Ae,[["__scopeId","data-v-2aa5da86"]]);const Ie=[{path:"/",name:"Home",redirect:"/home",meta:{title:"\u9996\u9875",keepAlive:!1},component:we,children:[{path:"/home",name:"Home",component:()=>l(()=>import("./Home.b626e078.js"),["assets/Home.b626e078.js","assets/vendor.770a4be7.js","assets/index.c2041d84.js","assets/index.56618267.js","assets/index.566182672.js"]),meta:{title:"\u9996\u9875",keepAlive:!1,showTab:!0,bottomBtn:!0}},{path:"/demo",name:"Demo",component:()=>l(()=>import("./Demo.b2aa53f5.js"),["assets/Demo.b2aa53f5.js","assets/vendor.770a4be7.js"]),meta:{title:"\u6D4B\u8BD5\u6848\u4F8B",keepAlive:!1,showTab:!0}},{path:"/pkgInfo",name:"PkgInfo",component:()=>l(()=>import("./PkgInfo.65f630c9.js"),["assets/PkgInfo.65f630c9.js","assets/vendor.770a4be7.js","assets/index.566182673.js","assets/index.56618267.js"]),meta:{title:"\u9879\u76EE\u4FE1\u606F",keepAlive:!1,showTab:!0}},{path:"/about",name:"About",component:()=>l(()=>import("./About.4957c0f0.js"),["assets/About.4957c0f0.js","assets/vendor.770a4be7.js","assets/index.c2041d84.js","assets/index.566182673.js","assets/index.56618267.js","assets/index.566182672.js"]),meta:{title:"\u5173\u4E8E\u6211",keepAlive:!1,showTab:!1}},{path:"/tsx",name:"Tsx",component:()=>l(()=>import("./demo.65d46ddf.js"),["assets/demo.65d46ddf.js","assets/vendor.770a4be7.js"]),meta:{title:"\u6D4B\u8BD5tsx",keepAlive:!1,showTab:!1}},{path:"/static",name:"Static",component:()=>l(()=>import("./testStatic.60c37aa9.js"),["assets/testStatic.60c37aa9.js","assets/vendor.770a4be7.js"]),meta:{title:"\u6D4B\u8BD5\u9759\u6001\u8D44\u6E90",keepAlive:!1,showTab:!1}},{path:"/cssModel",name:"CssModel",component:()=>l(()=>import("./testCssModel.a75f671d.js"),["assets/testCssModel.a75f671d.js","assets/vendor.770a4be7.js"]),meta:{title:"\u6D4B\u8BD5css-model",keepAlive:!1,showTab:!1}},{path:"/mockAxios",name:"MockAxios",component:()=>l(()=>import("./testMockAxios.fc6e9457.js"),["assets/testMockAxios.fc6e9457.js","assets/index.es.16e5e209.js","assets/vendor.770a4be7.js","assets/index.c2041d84.js"]),meta:{title:"\u6D4B\u8BD5mock-axios",keepAlive:!1,showTab:!1}},{path:"/pinia",name:"Pinia",component:()=>l(()=>import("./testPinia.d9d36450.js"),["assets/testPinia.d9d36450.js","assets/vendor.770a4be7.js"]),meta:{title:"\u6D4B\u8BD5pinia",keepAlive:!1,showTab:!1}},{path:"/testTimingData",name:"TestTimingData",component:()=>l(()=>import("./testTimingData.a0874c2f.js"),["assets/testTimingData.a0874c2f.js","assets/index.es.16e5e209.js","assets/vendor.770a4be7.js","assets/index.c2041d84.js"]),meta:{title:"\u5B9A\u65F6\u8BF7\u6C42\u6570\u636E",keepAlive:!1,showTab:!1}},{path:"/testComponent",name:"TestComponent",component:()=>l(()=>import("./testComponent.5090b9b6.js"),["assets/testComponent.5090b9b6.js","assets/vendor.770a4be7.js"]),meta:{title:"\u6D4B\u8BD5\u5168\u5C40\u7EC4\u4EF6",keepAlive:!1,showTab:!1}}]}],Pe=D({id:"auth",state:()=>({userInfo:{},isAuth:!1,code:""}),actions:{saveUserInfo(e){this.$state.userInfo=e},setIsAuth(e){this.$state.isAuth=e},setCode(e){this.$state.code=e}},persist:{key:"auth",storage:window.localStorage}}),De=D({id:"link",state:()=>({initLink:""}),actions:{setInitLink(e){this.$state.initLink=e}},persist:{key:"link",storage:window.localStorage}}),b=ee({history:te("/test/"),routes:Ie,strict:!0,scrollBehavior:()=>({left:0,top:0})});b.beforeEach((e,t,s)=>{Pe(),pe(e.meta.title);//! 解决ios微信下，分享签名不成功的问题,将第一次的进入的url缓存起来。
window.entryUrl===void 0&&(window.entryUrl=location.href.split("#")[0]),_e(),he(),s()});b.afterEach((e,t,s)=>{const n=De();let o;fe()==="ios"?o=window.entryUrl:o=window.location.href,console.log("linkStore",n),n.setInitLink(o)});function _(e,{message:t="ok"}={}){return{code:0,data:e,message:t,type:"success"}}function xe(e,t,s,{message:n="ok"}={}){const o=L(e,t,s);return{..._({items:o,total:s.length}),message:n}}function Se(e="Request failed",{code:t=-1,data:s=null}={}){return{code:t,data:s,message:e,type:"error"}}function L(e,t,s){const n=(e-1)*Number(t);return n+Number(t)>=s.length?s.slice(n,s.length):s.slice(n,n+Number(t))}function Oe({headers:e}){return e?.authorization}var Be=Object.freeze(Object.defineProperty({__proto__:null,resultSuccess:_,resultPageSuccess:xe,resultError:Se,pagination:L,getRequestToken:Oe},Symbol.toStringTag,{value:"Module"})),Le=[{url:"/getTimingData",method:"get",response:e=>_({nickname:"@cname",age:"@integer(10-100)",uid:"@id",url:"@image",city:"@city",country:"@county(true)",province:"@province",mobile_phone:"@phone",email:"@email",region:"@region"})}],Ve=Object.freeze(Object.defineProperty({__proto__:null,default:Le},Symbol.toStringTag,{value:"Module"}));function Ce(){return[{userId:"1",username:"vben",realName:"Vben Admin",avatar:"https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640",desc:"manager",password:"123456",token:"fakeToken1",homePath:"/dashboard/analysis",roles:[{roleName:"Super Admin",value:"super"}]},{userId:"2",username:"test",password:"123456",realName:"test user",avatar:"https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640",desc:"tester",token:"fakeToken2",homePath:"/dashboard/workbench",roles:[{roleName:"Tester",value:"test"}]}]}var Re=[{url:"/user/info",method:"get",response:e=>_({author:"ynzy",avatar:"https://avatars.githubusercontent.com/u/39397772?s=60&v=4",projectAddress:"https://github.com/ynzy/vue3-ts-wx-h5-template",demoUrl:"https://vue3-ts-wx-h5-template.vercel.app/",demoCodeUrl:"https://files.catbox.moe/lxle3w.png"})}],Me=Object.freeze(Object.defineProperty({__proto__:null,createFakeUserList:Ce,default:Re},Symbol.toStringTag,{value:"Module"}));const T={"./_util.ts":Be,"./sys/time.ts":Ve,"./sys/user.ts":Me},V=[];Object.keys(T).forEach(e=>{e.includes("/_")||V.push(...T[e].default)});function Ue(){oe(V)}new x({maxLogNumber:1e3,theme:"light"});new x;const f=ne(ae);window.vm=f;f.use(S);f.use(b);f.mount("#app");Ue();export{Ee as _,B as c};