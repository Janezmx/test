import{c as C,s as R,d as v,r as w,o as c,a as m,b as P,T as M,e as U,w as y,f as g,g as F,h as j,t as N,F as I,u as d,i as $,j as q,k as H,l as z,m as h,n as K,p as W,q as x,v as T,K as G,x as Q,y as X,z as J,A as Y,B as D,C as Z,D as ee,E as te,V as oe,G as ne}from"./vendor.37ec8217.js";const se=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}};se();const S=C();S.use(R);const ae=v({setup(e){return console.log("---\u73AF\u5883\u53D8\u91CF----",{VITE_BUILD_COMPRESS:"none",VITE_ENV:"production",VITE_OUTPUT_DIR:"dist",VITE_PUBLIC_PATH:"/",VITE_USE_MOCK:"true",VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE:"false",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0}),(t,s)=>{const n=w("router-view");return c(),m(n)}}});var re={env:"development",mock:!0,title:"\u5F00\u53D1",baseUrl:"",baseApi:"",APPID:"wx9790364d20b47d95",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},ie=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"})),le={env:"production",mock:!0,title:"\u751F\u4EA7",baseUrl:"",baseApi:"",APPID:"wx74aac87d227a6750",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},ue=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"})),ce={env:"proV",mock:!0,title:"\u751F\u4EA7",baseUrl:"",baseApi:"",APPID:"wx74aac87d227a6750",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},de=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"})),me={env:"test",mock:!1,title:"\u6D4B\u8BD5",baseUrl:"https://test.xxx.com",baseApi:"https://test.xxx.com/api",APPID:"wx9790364d20b47d95",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},pe=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"}));const b={},_e={"./env.development.ts":ie,"./env.production.ts":ue,"./env.proV.ts":de,"./env.test.ts":pe};Object.entries(_e).forEach(([e,t])=>{const s=e.replace(/\.\/env\.(.*)\.ts$/,"$1");b[s]=t});console.log("envMap",b);const O=b.production.default;console.log("\u6839\u636E\u73AF\u5883\u5F15\u5165\u4E0D\u540C\u914D\u7F6E",O);const fe=e=>{document.title=e||O.title},he=(e=document.location.toString())=>{e=decodeURI(e);const t=e.split("?"),s={};if(t.length>1){const n=t[1].indexOf("#");t[1]=n==-1?t[1]:t[1].slice(0,n);const o=t[1].split("&");for(let r=0;r<o.length;r++){const a=o[r].split("=");s[a[0]]=decodeURIComponent(a[1])}}return s},ge=()=>{const e=navigator.userAgent,t=e.indexOf("Android")>-1||e.indexOf("Linux")>-1,s=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);if(t)return"android";if(s)return"ios"},ve=()=>!!navigator.userAgent.match(/MicroMessenger/i),be="modulepreload",k={},Ee="/test/",u=function(t,s){return!s||s.length===0?t():Promise.all(s.map(n=>{if(n=`${Ee}${n}`,n in k)return;k[n]=!0;const o=n.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":be,o||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),o)return new Promise((l,i)=>{a.addEventListener("load",l),a.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},ye=v({props:{tabbars:{type:Array,default:()=>[]},active:Number},emits:["change","update:active"],setup(e,{emit:t}){const s=e,n=P({get:()=>s.active,set:o=>{t("update:active",o),t("change",o)}});return(o,r)=>{const a=M,l=U;return c(),m(l,{modelValue:d(n),"onUpdate:modelValue":r[0]||(r[0]=i=>$(n)?n.value=i:null),route:"",fixed:""},{default:y(()=>[(c(!0),g(I,null,F(e.tabbars,i=>(c(),m(a,{to:i.to,icon:i.icon,key:i.to},{default:y(()=>[j(N(i.title),1)]),_:2},1032,["to","icon"]))),128))]),_:1},8,["modelValue"])}}});var Te=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s};const ke=e=>(J("data-v-2aa5da86"),e=e(),Y(),e),Ae=ke(()=>x("div",{class:"test-safe",id:"safe"},null,-1)),we={key:0,class:"layout-footer",id:"layout-footer"},Pe=v({setup(e){const t=q();console.log(t.meta);const s=H([{title:"\u9996\u9875",to:"/home",icon:"home-o"},{title:"\u9879\u76EE\u4FE1\u606F",to:"/pkgInfo",icon:"label-o"},{title:"\u6848\u4F8B",to:"/demo",icon:"star-o"},{title:"\u5173\u4E8E\u6211",to:"/about",icon:"user-o"}]),n=z(0);h(n,a=>{console.log("tab value v-model:",a)});const o=a=>{console.log("tab value @change:",a)};h(t,a=>{console.log("route",a.name)});const r=P(()=>{let a=0;return t.meta.showTab&&(a+=50),t.meta.bottomBtn&&(a+=44),`calc(100% - ${a}px)`});return K(()=>{const a=document.getElementById("layout-footer"),l=document.getElementById("app"),i=document.getElementById("safe"),p=document.getElementById("layout-content");console.log("onMounted height footer",a?.offsetTop||0,a?.offsetHeight),console.log("onMounted height app",l?.offsetTop||0,l?.offsetHeight),console.log("onMounted client",document.documentElement.clientHeight,window.outerHeight),console.log("safe",i,i?.offsetHeight),console.log("content",p,p?.offsetHeight)}),h(r,()=>{const a=document.getElementById("layout-footer"),l=document.getElementById("app");console.log("watch height footer",a?.offsetTop||0,a?.offsetHeight),console.log("watch height app",l?.offsetTop||0,l?.offsetHeight),console.log("watch client",document.documentElement.clientHeight,window.outerHeight)}),W(()=>{}),(a,l)=>{const i=w("router-view"),p=ye;return c(),g(I,null,[Ae,x("div",{class:"layout-content",id:"layout-content",style:Q({height:d(r)})},[d(t).meta.keepAlive?(c(),m(G,{key:0},[T(i)],1024)):(c(),m(i,{key:1}))],4),d(t).meta.showTab?(c(),g("div",we,[T(p,{tabbars:d(s),modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=V=>n.value=V),onChange:o},null,8,["tabbars","modelValue"])])):X("",!0)],64)}}});var Ie=Te(Pe,[["__scopeId","data-v-2aa5da86"]]);const xe=[{path:"/",name:"Home",redirect:"/home",meta:{title:"\u9996\u9875",keepAlive:!1},component:Ie,children:[{path:"/home",name:"Home",component:()=>u(()=>import("./Home.3682a42a.js"),["assets/Home.3682a42a.js","assets/vendor.37ec8217.js","assets/index.c2041d84.js","assets/index.56618267.js","assets/index.566182672.js"]),meta:{title:"\u9996\u9875",keepAlive:!1,showTab:!0,bottomBtn:!0}},{path:"/demo",name:"Demo",component:()=>u(()=>import("./Demo.e5f4f2a9.js"),["assets/Demo.e5f4f2a9.js","assets/vendor.37ec8217.js"]),meta:{title:"\u6D4B\u8BD5\u6848\u4F8B",keepAlive:!1,showTab:!0}},{path:"/pkgInfo",name:"PkgInfo",component:()=>u(()=>import("./PkgInfo.bb383499.js"),["assets/PkgInfo.bb383499.js","assets/vendor.37ec8217.js","assets/index.566182673.js","assets/index.56618267.js"]),meta:{title:"\u9879\u76EE\u4FE1\u606F",keepAlive:!1,showTab:!0}},{path:"/about",name:"About",component:()=>u(()=>import("./About.5a8c281a.js"),["assets/About.5a8c281a.js","assets/vendor.37ec8217.js","assets/index.c2041d84.js","assets/index.566182673.js","assets/index.56618267.js","assets/index.566182672.js"]),meta:{title:"\u5173\u4E8E\u6211",keepAlive:!1,showTab:!1}},{path:"/tsx",name:"Tsx",component:()=>u(()=>import("./demo.ed767ee1.js"),["assets/demo.ed767ee1.js","assets/vendor.37ec8217.js"]),meta:{title:"\u6D4B\u8BD5tsx",keepAlive:!1,showTab:!1}},{path:"/static",name:"Static",component:()=>u(()=>import("./testStatic.846e7a11.js"),["assets/testStatic.846e7a11.js","assets/vendor.37ec8217.js"]),meta:{title:"\u6D4B\u8BD5\u9759\u6001\u8D44\u6E90",keepAlive:!1,showTab:!1}},{path:"/cssModel",name:"CssModel",component:()=>u(()=>import("./testCssModel.1aa754c7.js"),["assets/testCssModel.1aa754c7.js","assets/vendor.37ec8217.js"]),meta:{title:"\u6D4B\u8BD5css-model",keepAlive:!1,showTab:!1}},{path:"/mockAxios",name:"MockAxios",component:()=>u(()=>import("./testMockAxios.43682a1e.js"),["assets/testMockAxios.43682a1e.js","assets/index.es.37edb944.js","assets/vendor.37ec8217.js","assets/index.c2041d84.js"]),meta:{title:"\u6D4B\u8BD5mock-axios",keepAlive:!1,showTab:!1}},{path:"/pinia",name:"Pinia",component:()=>u(()=>import("./testPinia.cec810da.js"),["assets/testPinia.cec810da.js","assets/vendor.37ec8217.js"]),meta:{title:"\u6D4B\u8BD5pinia",keepAlive:!1,showTab:!1}},{path:"/testTimingData",name:"TestTimingData",component:()=>u(()=>import("./testTimingData.357f0304.js"),["assets/testTimingData.357f0304.js","assets/index.es.37edb944.js","assets/vendor.37ec8217.js","assets/index.c2041d84.js"]),meta:{title:"\u5B9A\u65F6\u8BF7\u6C42\u6570\u636E",keepAlive:!1,showTab:!1}},{path:"/testComponent",name:"TestComponent",component:()=>u(()=>import("./testComponent.d7471887.js"),["assets/testComponent.d7471887.js","assets/vendor.37ec8217.js"]),meta:{title:"\u6D4B\u8BD5\u5168\u5C40\u7EC4\u4EF6",keepAlive:!1,showTab:!1}}]}],De=D({id:"auth",state:()=>({userInfo:{},isAuth:!1,code:""}),actions:{saveUserInfo(e){this.$state.userInfo=e},setIsAuth(e){this.$state.isAuth=e},setCode(e){this.$state.code=e}},persist:{key:"auth",storage:window.localStorage}}),Se=D({id:"link",state:()=>({initLink:""}),actions:{setInitLink(e){this.$state.initLink=e}},persist:{key:"link",storage:window.localStorage}}),E=Z({history:ee("/test/"),routes:xe,strict:!0,scrollBehavior:()=>({left:0,top:0})});E.beforeEach((e,t,s)=>{De(),fe(e.meta.title);//! 解决ios微信下，分享签名不成功的问题,将第一次的进入的url缓存起来。
window.entryUrl===void 0&&(window.entryUrl=location.href.split("#")[0]),he(),ve(),s()});E.afterEach((e,t,s)=>{const n=Se();let o;ge()==="ios"?o=window.entryUrl:o=window.location.href,console.log("linkStore",n),n.setInitLink(o)});function _(e,{message:t="ok"}={}){return{code:0,data:e,message:t,type:"success"}}function Oe(e,t,s,{message:n="ok"}={}){const o=B(e,t,s);return{..._({items:o,total:s.length}),message:n}}function Be(e="Request failed",{code:t=-1,data:s=null}={}){return{code:t,data:s,message:e,type:"error"}}function B(e,t,s){const n=(e-1)*Number(t);return n+Number(t)>=s.length?s.slice(n,s.length):s.slice(n,n+Number(t))}function Le({headers:e}){return e?.authorization}var Ve=Object.freeze(Object.defineProperty({__proto__:null,resultSuccess:_,resultPageSuccess:Oe,resultError:Be,pagination:B,getRequestToken:Le},Symbol.toStringTag,{value:"Module"})),Ce=[{url:"/getTimingData",method:"get",response:e=>_({nickname:"@cname",age:"@integer(10-100)",uid:"@id",url:"@image",city:"@city",country:"@county(true)",province:"@province",mobile_phone:"@phone",email:"@email",region:"@region"})}],Re=Object.freeze(Object.defineProperty({__proto__:null,default:Ce},Symbol.toStringTag,{value:"Module"}));function Me(){return[{userId:"1",username:"vben",realName:"Vben Admin",avatar:"https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640",desc:"manager",password:"123456",token:"fakeToken1",homePath:"/dashboard/analysis",roles:[{roleName:"Super Admin",value:"super"}]},{userId:"2",username:"test",password:"123456",realName:"test user",avatar:"https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640",desc:"tester",token:"fakeToken2",homePath:"/dashboard/workbench",roles:[{roleName:"Tester",value:"test"}]}]}var Ue=[{url:"/user/info",method:"get",response:e=>_({author:"ynzy",avatar:"https://avatars.githubusercontent.com/u/39397772?s=60&v=4",projectAddress:"https://github.com/ynzy/vue3-ts-wx-h5-template",demoUrl:"https://vue3-ts-wx-h5-template.vercel.app/",demoCodeUrl:"https://files.catbox.moe/lxle3w.png"})}],Fe=Object.freeze(Object.defineProperty({__proto__:null,createFakeUserList:Me,default:Ue},Symbol.toStringTag,{value:"Module"}));const A={"./_util.ts":Ve,"./sys/time.ts":Re,"./sys/user.ts":Fe},L=[];Object.keys(A).forEach(e=>{e.includes("/_")||L.push(...A[e].default)});function je(){te(L)}new oe({maxLogNumber:1e3,theme:"light"});const f=ne(ae);window.vm=f;f.use(S);f.use(E);f.mount("#app");je();export{Te as _,O as c};
