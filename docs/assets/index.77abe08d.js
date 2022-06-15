import{c as R,s as V,d as v,r as y,o as c,a as d,b as P,T as U,e as M,w as E,f as g,g as j,h as q,t as $,F as B,u as m,i as N,j as z,k as H,l as K,m as k,n as W,p as A,K as G,q as Q,v as X,x as F,y as J,z as p,D as Y,A as Z,B as ee,C as te,E as oe}from"./vendor.d7d0cee6.js";const se=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const n of u.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerpolicy&&(u.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?u.credentials="include":o.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=a(o);fetch(o.href,u)}};se();const w=R();w.use(V);const ae=v({setup(e){return console.log("---\u73AF\u5883\u53D8\u91CF----",{VITE_BUILD_COMPRESS:"none",VITE_ENV:"production",VITE_OUTPUT_DIR:"dist",VITE_PUBLIC_PATH:"/",VITE_USE_MOCK:"true",VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE:"false",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0}),(t,a)=>{const s=y("router-view");return c(),d(s)}}});var ne={env:"development",mock:!0,title:"\u5F00\u53D1",baseUrl:"",baseApi:"",APPID:"wx9790364d20b47d95",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},ue=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"})),re={env:"production",mock:!0,title:"\u751F\u4EA7",baseUrl:"",baseApi:"",APPID:"wx74aac87d227a6750",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},ie=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"})),ce={env:"test",mock:!1,title:"\u6D4B\u8BD5",baseUrl:"https://test.xxx.com",baseApi:"https://test.xxx.com/api",APPID:"wx9790364d20b47d95",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},le=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"}));const x={},me={"./env.development.ts":ue,"./env.production.ts":ie,"./env.test.ts":le};Object.entries(me).forEach(([e,t])=>{const a=e.replace(/\.\/env\.(.*)\.ts$/,"$1");x[a]=t});const _=x.production.default;console.log("\u6839\u636E\u73AF\u5883\u5F15\u5165\u4E0D\u540C\u914D\u7F6E",_);const de=e=>{document.title=e||_.title},pe=(e=document.location.toString())=>{e=decodeURI(e);const t=e.split("?"),a={};if(t.length>1){const s=t[1].indexOf("#");t[1]=s==-1?t[1]:t[1].slice(0,s);const o=t[1].split("&");for(let u=0;u<o.length;u++){const n=o[u].split("=");a[n[0]]=decodeURIComponent(n[1])}}return a},_e=()=>{const e=navigator.userAgent,t=e.indexOf("Android")>-1||e.indexOf("Linux")>-1,a=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);if(t)return"android";if(a)return"ios"},fe=()=>!!navigator.userAgent.match(/MicroMessenger/i),he="modulepreload",D={},ge="/test/",i=function(t,a){return!a||a.length===0?t():Promise.all(a.map(s=>{if(s=`${ge}${s}`,s in D)return;D[s]=!0;const o=s.endsWith(".css"),u=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${u}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":he,o||(n.as="script",n.crossOrigin=""),n.href=s,document.head.appendChild(n),o)return new Promise((l,r)=>{n.addEventListener("load",l),n.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},ve=v({props:{tabbars:{type:Array,default:()=>[]},active:Number},emits:["change","update:active"],setup(e,{emit:t}){const a=e,s=P({get:()=>a.active,set:o=>{t("update:active",o),t("change",o)}});return(o,u)=>{const n=U,l=M;return c(),d(l,{modelValue:m(s),"onUpdate:modelValue":u[0]||(u[0]=r=>N(s)?s.value=r:null),route:"",fixed:""},{default:E(()=>[(c(!0),g(B,null,j(e.tabbars,r=>(c(),d(n,{to:r.to,icon:r.icon,key:r.to},{default:E(()=>[q($(r.title),1)]),_:2},1032,["to","icon"]))),128))]),_:1},8,["modelValue"])}}});var be=(e,t)=>{const a=e.__vccOpts||e;for(const[s,o]of t)a[s]=o;return a};const Ee={key:0,class:"layout-footer"},ke=v({setup(e){const t=z();console.log(t.meta);const a=H([{title:"\u9996\u9875",to:"/home",icon:"home-o"},{title:"\u9879\u76EE\u4FE1\u606F",to:"/pkgInfo",icon:"label-o"},{title:"\u6848\u4F8B",to:"/demo",icon:"star-o"},{title:"\u5173\u4E8E\u6211",to:"/about",icon:"user-o"}]),s=K(0);k(s,n=>{console.log("tab value v-model:",n)});const o=n=>{console.log("tab value @change:",n)};k(t,n=>{console.log("route",n.name)});const u=P(()=>{let n=0;return t.meta.showTab&&(n+=50),t.meta.bottomBtn&&(n+=44),`calc(100% - ${n}px)`});return(n,l)=>{const r=y("router-view"),O=ve;return c(),g(B,null,[W("div",{class:"layout-content",style:Q({height:m(u)})},[m(t).meta.keepAlive?(c(),d(G,{key:0},[A(r)],1024)):(c(),d(r,{key:1}))],4),m(t).meta.showTab?(c(),g("div",Ee,[A(O,{tabbars:m(a),modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=L=>s.value=L),onChange:o},null,8,["tabbars","modelValue"])])):X("",!0)],64)}}});var Ae=be(ke,[["__scopeId","data-v-51407e2a"]]);const De=[{path:"/",name:"Home",redirect:"/home",meta:{title:"\u9996\u9875",keepAlive:!1},component:Ae,children:[{path:"/home",name:"Home",component:()=>i(()=>import("./Home.b1a16cb1.js"),["assets/Home.b1a16cb1.js","assets/vendor.d7d0cee6.js","assets/index.56618267.js","assets/index.566182672.js"]),meta:{title:"\u9996\u9875",keepAlive:!1,showTab:!0,bottomBtn:!0}},{path:"/demo",name:"Demo",component:()=>i(()=>import("./Demo.ea564ad8.js"),["assets/Demo.ea564ad8.js","assets/vendor.d7d0cee6.js"]),meta:{title:"\u6D4B\u8BD5\u6848\u4F8B",keepAlive:!1,showTab:!0}},{path:"/pkgInfo",name:"PkgInfo",component:()=>i(()=>import("./PkgInfo.8d815e06.js"),["assets/PkgInfo.8d815e06.js","assets/vendor.d7d0cee6.js","assets/index.566182673.js","assets/index.56618267.js"]),meta:{title:"\u9879\u76EE\u4FE1\u606F",keepAlive:!1,showTab:!0}},{path:"/about",name:"About",component:()=>i(()=>import("./About.4345c5dd.js"),["assets/About.4345c5dd.js","assets/vendor.d7d0cee6.js","assets/index.566182673.js","assets/index.56618267.js","assets/index.566182672.js"]),meta:{title:"\u5173\u4E8E\u6211",keepAlive:!1,showTab:!1}},{path:"/tsx",name:"Tsx",component:()=>i(()=>import("./demo.25415433.js"),["assets/demo.25415433.js","assets/vendor.d7d0cee6.js"]),meta:{title:"\u6D4B\u8BD5tsx",keepAlive:!1,showTab:!1}},{path:"/static",name:"Static",component:()=>i(()=>import("./testStatic.88690341.js"),["assets/testStatic.88690341.js","assets/vendor.d7d0cee6.js"]),meta:{title:"\u6D4B\u8BD5\u9759\u6001\u8D44\u6E90",keepAlive:!1,showTab:!1}},{path:"/cssModel",name:"CssModel",component:()=>i(()=>import("./testCssModel.82455169.js"),["assets/testCssModel.82455169.js","assets/vendor.d7d0cee6.js"]),meta:{title:"\u6D4B\u8BD5css-model",keepAlive:!1,showTab:!1}},{path:"/mockAxios",name:"MockAxios",component:()=>i(()=>import("./testMockAxios.3b8549f7.js"),["assets/testMockAxios.3b8549f7.js","assets/index.es.3cd4965f.js","assets/vendor.d7d0cee6.js"]),meta:{title:"\u6D4B\u8BD5mock-axios",keepAlive:!1,showTab:!1}},{path:"/pinia",name:"Pinia",component:()=>i(()=>import("./testPinia.254754f8.js"),["assets/testPinia.254754f8.js","assets/vendor.d7d0cee6.js"]),meta:{title:"\u6D4B\u8BD5pinia",keepAlive:!1,showTab:!1}},{path:"/testTimingData",name:"TestTimingData",component:()=>i(()=>import("./testTimingData.d84423b6.js"),["assets/testTimingData.d84423b6.js","assets/index.es.3cd4965f.js","assets/vendor.d7d0cee6.js"]),meta:{title:"\u5B9A\u65F6\u8BF7\u6C42\u6570\u636E",keepAlive:!1,showTab:!1}},{path:"/testComponent",name:"TestComponent",component:()=>i(()=>import("./testComponent.938401a7.js"),["assets/testComponent.938401a7.js","assets/vendor.d7d0cee6.js"]),meta:{title:"\u6D4B\u8BD5\u5168\u5C40\u7EC4\u4EF6",keepAlive:!1,showTab:!1}}]}],Te=F({id:"auth",state:()=>({userInfo:{},isAuth:!1,code:""}),actions:{saveUserInfo(e){this.$state.userInfo=e},setIsAuth(e){this.$state.isAuth=e},setCode(e){this.$state.code=e}},persist:{key:"auth",storage:window.localStorage}}),ye=F({id:"link",state:()=>({initLink:""}),actions:{setInitLink(e){this.$state.initLink=e}},persist:{key:"link",storage:window.localStorage}}),C=J.create({baseURL:_.baseApi,timeout:5e3,withCredentials:!1});C.interceptors.request.use(e=>(e.loading&&p.loading({message:"\u52A0\u8F7D\u4E2D...",forbidClick:!0}),e),e=>{Promise.reject(e)});C.interceptors.response.use(async e=>{p.clear();const t=e.data;if(t.code!==0){if(t.code===401)return;if(t.code==403){Y.alert({title:"\u8B66\u544A",message:t.msg});return}return Promise.reject(new Error(t.msg||"Error"))}else return e.data},e=>{if(p.clear(),e&&e.response)switch(e.response.status){case 400:e.message="\u8BF7\u6C42\u9519\u8BEF(400)";break;case 401:e.message="\u672A\u6388\u6743,\u8BF7\u767B\u5F55(401)";break;case 403:e.message="\u62D2\u7EDD\u8BBF\u95EE(403)";break;case 404:e.message=`\u8BF7\u6C42\u5730\u5740\u51FA\u9519: ${e.response.config.url}`;break;case 405:e.message="\u8BF7\u6C42\u65B9\u6CD5\u672A\u5141\u8BB8(405)";break;case 408:e.message="\u8BF7\u6C42\u8D85\u65F6(408)";break;case 500:e.message="\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF(500)";break;case 501:e.message="\u670D\u52A1\u672A\u5B9E\u73B0(501)";break;case 502:e.message="\u7F51\u7EDC\u9519\u8BEF(502)";break;case 503:e.message="\u670D\u52A1\u4E0D\u53EF\u7528(503)";break;case 504:e.message="\u7F51\u7EDC\u8D85\u65F6(504)";break;case 505:e.message="HTTP\u7248\u672C\u4E0D\u53D7\u652F\u6301(505)";break;default:e.message=`\u8FDE\u63A5\u9519\u8BEF: ${e.message}`}else e.message=="Network Error"&&e.message=="\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\uFF01",e.message="\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458";return p(e.message),Promise.reject(e)});const Pe=()=>"https://open.weixin.qq.com/connect/oauth2/authorize?appid="+_.APPID+"&redirect_uri="+encodeURIComponent(location.href.split("?")[0])+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect",b=Z({history:ee("/test/"),routes:De,strict:!0,scrollBehavior:()=>({left:0,top:0})});b.beforeEach((e,t,a)=>{const s=Te();de(e.meta.title);//! 解决ios微信下，分享签名不成功的问题,将第一次的进入的url缓存起来。
window.entryUrl===void 0&&(window.entryUrl=location.href.split("#")[0]);const{code:o}=pe();fe()&&(o&&(s.setIsAuth(!0),s.setCode(o)),s.isAuth||(location.href=Pe())),a()});b.afterEach((e,t,a)=>{const s=ye();let o;_e()==="ios"?o=window.entryUrl:o=window.location.href,console.log("linkStore",s),s.setInitLink(o)});function f(e,{message:t="ok"}={}){return{code:0,data:e,message:t,type:"success"}}function Be(e,t,a,{message:s="ok"}={}){const o=I(e,t,a);return{...f({items:o,total:a.length}),message:s}}function Fe(e="Request failed",{code:t=-1,data:a=null}={}){return{code:t,data:a,message:e,type:"error"}}function I(e,t,a){const s=(e-1)*Number(t);return s+Number(t)>=a.length?a.slice(s,a.length):a.slice(s,s+Number(t))}function we({headers:e}){return e?.authorization}var xe=Object.freeze(Object.defineProperty({__proto__:null,resultSuccess:f,resultPageSuccess:Be,resultError:Fe,pagination:I,getRequestToken:we},Symbol.toStringTag,{value:"Module"})),Ce=[{url:"/getTimingData",method:"get",response:e=>f({nickname:"@cname",age:"@integer(10-100)",uid:"@id",url:"@image",city:"@city",country:"@county(true)",province:"@province",mobile_phone:"@phone",email:"@email",region:"@region"})}],Ie=Object.freeze(Object.defineProperty({__proto__:null,default:Ce},Symbol.toStringTag,{value:"Module"}));function Se(){return[{userId:"1",username:"vben",realName:"Vben Admin",avatar:"https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640",desc:"manager",password:"123456",token:"fakeToken1",homePath:"/dashboard/analysis",roles:[{roleName:"Super Admin",value:"super"}]},{userId:"2",username:"test",password:"123456",realName:"test user",avatar:"https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640",desc:"tester",token:"fakeToken2",homePath:"/dashboard/workbench",roles:[{roleName:"Tester",value:"test"}]}]}var Oe=[{url:"/user/info",method:"get",response:e=>f({author:"ynzy",avatar:"https://avatars.githubusercontent.com/u/39397772?s=60&v=4",projectAddress:"https://github.com/ynzy/vue3-ts-wx-h5-template",demoUrl:"https://vue3-ts-wx-h5-template.vercel.app/",demoCodeUrl:"https://files.catbox.moe/lxle3w.png"})}],Le=Object.freeze(Object.defineProperty({__proto__:null,createFakeUserList:Se,default:Oe},Symbol.toStringTag,{value:"Module"}));const T={"./_util.ts":xe,"./sys/time.ts":Ie,"./sys/user.ts":Le},S=[];Object.keys(T).forEach(e=>{e.includes("/_")||S.push(...T[e].default)});function Re(){te(S)}const h=oe(ae);window.vm=h;h.use(w);h.use(b);h.mount("#app");Re();export{be as _,C as s};