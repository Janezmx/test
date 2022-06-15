import{c as R,s as V,d as h,r as y,o as l,a as d,b as A,T as C,e as U,w as b,f,g as F,h as M,t as j,F as P,u as m,i as N,j as $,k as q,l as z,m as g,n as H,p as E,K,q as W,v as G,x as D,y as Q,z as X,A as J,B as Y}from"./vendor.7b2428d5.js";const Z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}};Z();const x=R();x.use(V);const ee=h({setup(e){return console.log("---\u73AF\u5883\u53D8\u91CF----",{VITE_BUILD_COMPRESS:"none",VITE_ENV:"production",VITE_OUTPUT_DIR:"dist",VITE_PUBLIC_PATH:"/",VITE_USE_MOCK:"true",VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE:"false",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0}),(t,r)=>{const n=y("router-view");return l(),d(n)}}});var te={env:"development",mock:!0,title:"\u5F00\u53D1",baseUrl:"",baseApi:"",APPID:"wx9790364d20b47d95",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},oe=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"})),ne={env:"production",mock:!0,title:"\u751F\u4EA7",baseUrl:"",baseApi:"",APPID:"wx74aac87d227a6750",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},re=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"})),se={env:"test",mock:!1,title:"\u6D4B\u8BD5",baseUrl:"https://test.xxx.com",baseApi:"https://test.xxx.com/api",APPID:"wx9790364d20b47d95",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},ae=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));const w={},ie={"./env.development.ts":oe,"./env.production.ts":re,"./env.test.ts":ae};Object.entries(ie).forEach(([e,t])=>{const r=e.replace(/\.\/env\.(.*)\.ts$/,"$1");w[r]=t});const S=w.production.default;console.log("\u6839\u636E\u73AF\u5883\u5F15\u5165\u4E0D\u540C\u914D\u7F6E",S);const ue=e=>{document.title=e||S.title},le=(e=document.location.toString())=>{e=decodeURI(e);const t=e.split("?"),r={};if(t.length>1){const n=t[1].indexOf("#");t[1]=n==-1?t[1]:t[1].slice(0,n);const o=t[1].split("&");for(let a=0;a<o.length;a++){const s=o[a].split("=");r[s[0]]=decodeURIComponent(s[1])}}return r},ce=()=>{const e=navigator.userAgent,t=e.indexOf("Android")>-1||e.indexOf("Linux")>-1,r=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);if(t)return"android";if(r)return"ios"},me=()=>!!navigator.userAgent.match(/MicroMessenger/i),de="modulepreload",k={},pe="/test/",u=function(t,r){return!r||r.length===0?t():Promise.all(r.map(n=>{if(n=`${pe}${n}`,n in k)return;k[n]=!0;const o=n.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":de,o||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),o)return new Promise((c,i)=>{s.addEventListener("load",c),s.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},_e=h({props:{tabbars:{type:Array,default:()=>[]},active:Number},emits:["change","update:active"],setup(e,{emit:t}){const r=e,n=A({get:()=>r.active,set:o=>{t("update:active",o),t("change",o)}});return(o,a)=>{const s=C,c=U;return l(),d(c,{modelValue:m(n),"onUpdate:modelValue":a[0]||(a[0]=i=>N(n)?n.value=i:null),route:"",fixed:""},{default:b(()=>[(l(!0),f(P,null,F(e.tabbars,i=>(l(),d(s,{to:i.to,icon:i.icon,key:i.to},{default:b(()=>[M(j(i.title),1)]),_:2},1032,["to","icon"]))),128))]),_:1},8,["modelValue"])}}});var fe=(e,t)=>{const r=e.__vccOpts||e;for(const[n,o]of t)r[n]=o;return r};const he={key:0,class:"layout-footer"},ve=h({setup(e){const t=$();console.log(t.meta);const r=q([{title:"\u9996\u9875",to:"/home",icon:"home-o"},{title:"\u9879\u76EE\u4FE1\u606F",to:"/pkgInfo",icon:"label-o"},{title:"\u6848\u4F8B",to:"/demo",icon:"star-o"},{title:"\u5173\u4E8E\u6211",to:"/about",icon:"user-o"}]),n=z(0);g(n,s=>{console.log("tab value v-model:",s)});const o=s=>{console.log("tab value @change:",s)};g(t,s=>{console.log("route",s.name)});const a=A(()=>{let s=0;return t.meta.showTab&&(s+=50),t.meta.bottomBtn&&(s+=44),`calc(100% - ${s}px)`});return(s,c)=>{const i=y("router-view"),L=_e;return l(),f(P,null,[H("div",{class:"layout-content",style:W({height:m(a)})},[m(t).meta.keepAlive?(l(),d(K,{key:0},[E(i)],1024)):(l(),d(i,{key:1}))],4),m(t).meta.showTab?(l(),f("div",he,[E(L,{tabbars:m(r),modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=B=>n.value=B),onChange:o},null,8,["tabbars","modelValue"])])):G("",!0)],64)}}});var be=fe(ve,[["__scopeId","data-v-32ef0ca4"]]);const ge=[{path:"/",name:"Home",redirect:"/home",meta:{title:"\u9996\u9875",keepAlive:!1},component:be,children:[{path:"/home",name:"Home",component:()=>u(()=>import("./Home.eddb38f9.js"),["assets/Home.eddb38f9.js","assets/vendor.7b2428d5.js","assets/index.c2041d84.js","assets/index.56618267.js","assets/index.566182672.js"]),meta:{title:"\u9996\u9875",keepAlive:!1,showTab:!0,bottomBtn:!0}},{path:"/demo",name:"Demo",component:()=>u(()=>import("./Demo.6d8d8ca7.js"),["assets/Demo.6d8d8ca7.js","assets/vendor.7b2428d5.js"]),meta:{title:"\u6D4B\u8BD5\u6848\u4F8B",keepAlive:!1,showTab:!0}},{path:"/pkgInfo",name:"PkgInfo",component:()=>u(()=>import("./PkgInfo.bfdb9de4.js"),["assets/PkgInfo.bfdb9de4.js","assets/vendor.7b2428d5.js","assets/index.566182673.js","assets/index.56618267.js"]),meta:{title:"\u9879\u76EE\u4FE1\u606F",keepAlive:!1,showTab:!0}},{path:"/about",name:"About",component:()=>u(()=>import("./About.64552d1f.js"),["assets/About.64552d1f.js","assets/vendor.7b2428d5.js","assets/index.c2041d84.js","assets/index.566182673.js","assets/index.56618267.js","assets/index.566182672.js"]),meta:{title:"\u5173\u4E8E\u6211",keepAlive:!1,showTab:!1}},{path:"/tsx",name:"Tsx",component:()=>u(()=>import("./demo.db198e42.js"),["assets/demo.db198e42.js","assets/vendor.7b2428d5.js"]),meta:{title:"\u6D4B\u8BD5tsx",keepAlive:!1,showTab:!1}},{path:"/static",name:"Static",component:()=>u(()=>import("./testStatic.cc097182.js"),["assets/testStatic.cc097182.js","assets/vendor.7b2428d5.js"]),meta:{title:"\u6D4B\u8BD5\u9759\u6001\u8D44\u6E90",keepAlive:!1,showTab:!1}},{path:"/cssModel",name:"CssModel",component:()=>u(()=>import("./testCssModel.037386bd.js"),["assets/testCssModel.037386bd.js","assets/vendor.7b2428d5.js"]),meta:{title:"\u6D4B\u8BD5css-model",keepAlive:!1,showTab:!1}},{path:"/mockAxios",name:"MockAxios",component:()=>u(()=>import("./testMockAxios.f51faf02.js"),["assets/testMockAxios.f51faf02.js","assets/index.es.d1cf599e.js","assets/vendor.7b2428d5.js","assets/index.c2041d84.js"]),meta:{title:"\u6D4B\u8BD5mock-axios",keepAlive:!1,showTab:!1}},{path:"/pinia",name:"Pinia",component:()=>u(()=>import("./testPinia.29d54710.js"),["assets/testPinia.29d54710.js","assets/vendor.7b2428d5.js"]),meta:{title:"\u6D4B\u8BD5pinia",keepAlive:!1,showTab:!1}},{path:"/testTimingData",name:"TestTimingData",component:()=>u(()=>import("./testTimingData.329643ec.js"),["assets/testTimingData.329643ec.js","assets/index.es.d1cf599e.js","assets/vendor.7b2428d5.js","assets/index.c2041d84.js"]),meta:{title:"\u5B9A\u65F6\u8BF7\u6C42\u6570\u636E",keepAlive:!1,showTab:!1}},{path:"/testComponent",name:"TestComponent",component:()=>u(()=>import("./testComponent.6abf9143.js"),["assets/testComponent.6abf9143.js","assets/vendor.7b2428d5.js"]),meta:{title:"\u6D4B\u8BD5\u5168\u5C40\u7EC4\u4EF6",keepAlive:!1,showTab:!1}}]}],Ee=D({id:"auth",state:()=>({userInfo:{},isAuth:!1,code:""}),actions:{saveUserInfo(e){this.$state.userInfo=e},setIsAuth(e){this.$state.isAuth=e},setCode(e){this.$state.code=e}},persist:{key:"auth",storage:window.localStorage}}),ke=D({id:"link",state:()=>({initLink:""}),actions:{setInitLink(e){this.$state.initLink=e}},persist:{key:"link",storage:window.localStorage}}),v=Q({history:X("/test/"),routes:ge,strict:!0,scrollBehavior:()=>({left:0,top:0})});v.beforeEach((e,t,r)=>{Ee(),ue(e.meta.title);//! 解决ios微信下，分享签名不成功的问题,将第一次的进入的url缓存起来。
window.entryUrl===void 0&&(window.entryUrl=location.href.split("#")[0]),le(),me(),r()});v.afterEach((e,t,r)=>{const n=ke();let o;ce()==="ios"?o=window.entryUrl:o=window.location.href,console.log("linkStore",n),n.setInitLink(o)});function p(e,{message:t="ok"}={}){return{code:0,data:e,message:t,type:"success"}}function Te(e,t,r,{message:n="ok"}={}){const o=I(e,t,r);return{...p({items:o,total:r.length}),message:n}}function ye(e="Request failed",{code:t=-1,data:r=null}={}){return{code:t,data:r,message:e,type:"error"}}function I(e,t,r){const n=(e-1)*Number(t);return n+Number(t)>=r.length?r.slice(n,r.length):r.slice(n,n+Number(t))}function Ae({headers:e}){return e?.authorization}var Pe=Object.freeze(Object.defineProperty({__proto__:null,resultSuccess:p,resultPageSuccess:Te,resultError:ye,pagination:I,getRequestToken:Ae},Symbol.toStringTag,{value:"Module"})),De=[{url:"/getTimingData",method:"get",response:e=>p({nickname:"@cname",age:"@integer(10-100)",uid:"@id",url:"@image",city:"@city",country:"@county(true)",province:"@province",mobile_phone:"@phone",email:"@email",region:"@region"})}],xe=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"}));function we(){return[{userId:"1",username:"vben",realName:"Vben Admin",avatar:"https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640",desc:"manager",password:"123456",token:"fakeToken1",homePath:"/dashboard/analysis",roles:[{roleName:"Super Admin",value:"super"}]},{userId:"2",username:"test",password:"123456",realName:"test user",avatar:"https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640",desc:"tester",token:"fakeToken2",homePath:"/dashboard/workbench",roles:[{roleName:"Tester",value:"test"}]}]}var Se=[{url:"/user/info",method:"get",response:e=>p({author:"ynzy",avatar:"https://avatars.githubusercontent.com/u/39397772?s=60&v=4",projectAddress:"https://github.com/ynzy/vue3-ts-wx-h5-template",demoUrl:"https://vue3-ts-wx-h5-template.vercel.app/",demoCodeUrl:"https://files.catbox.moe/lxle3w.png"})}],Ie=Object.freeze(Object.defineProperty({__proto__:null,createFakeUserList:we,default:Se},Symbol.toStringTag,{value:"Module"}));const T={"./_util.ts":Pe,"./sys/time.ts":xe,"./sys/user.ts":Ie},O=[];Object.keys(T).forEach(e=>{e.includes("/_")||O.push(...T[e].default)});function Oe(){J(O)}const _=Y(ee);window.vm=_;_.use(x);_.use(v);_.mount("#app");Oe();export{fe as _,S as c};
