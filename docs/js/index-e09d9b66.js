var N=Object.defineProperty,$=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var D=(e,t,o)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,S=(e,t)=>{for(var o in t||(t={}))q.call(t,o)&&D(e,o,t[o]);if(I)for(var o of I(t))z.call(t,o)&&D(e,o,t[o]);return e},x=(e,t)=>$(e,H(t));import{q as A,H as c,I as f,J as L,c as E,K as y,L as T,M as K,B as W,N as Q,F as C,u as _,d as G,a as J,r as X,w as b,e as Y,x as Z,O as R,s as O,P as ee,Q as te,R as oe,S as ne,U as se,V as re,C as ae}from"./@vue-2a6541b0.js";import{c as ie,d as k}from"./pinia-9e8e4c4b.js";import{s as ue}from"./pinia-plugin-persistedstate-f1177332.js";import{u as le,c as ce,a as me}from"./vue-router-f7e58f32.js";import{T as de,a as pe}from"./vant-1b4fb385.js";import{l as _e}from"./lodash-es-64c0f301.js";import{V as fe}from"./vconsole-90cc4834.js";import{c as he}from"./vite-plugin-mock-57207cc7.js";import"./vue-demi-3c8f99f1.js";import"./@vant-9df66e1a.js";import"./axios-d6bcf34f.js";import"./mockjs-22f713a3.js";import"./path-to-regexp-dd3e7e88.js";function nt(){import("data:text/javascript,")}const ve=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}};ve();const M=ie();M.use(ue);const ge=A({setup(e){return console.log("---\u73AF\u5883\u53D8\u91CF----",{VITE_BUILD_COMPRESS:"none",VITE_ENV:"production",VITE_OUTPUT_DIR:"dist",VITE_PUBLIC_PATH:"/",VITE_USE_MOCK:"true",VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE:"false",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0}),(t,o)=>{const n=L("router-view");return c(),f(n)}}});var be={env:"development",mock:!0,title:"\u5F00\u53D1",baseUrl:"",baseApi:"",APPID:"wx9790364d20b47d95",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},Ee=Object.freeze(Object.defineProperty({__proto__:null,default:be},Symbol.toStringTag,{value:"Module"})),ye={env:"production",mock:!0,title:"\u751F\u4EA7",baseUrl:"",baseApi:"",APPID:"wx74aac87d227a6750",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},Te=Object.freeze(Object.defineProperty({__proto__:null,default:ye},Symbol.toStringTag,{value:"Module"})),Ae={env:"proV",mock:!0,title:"\u751F\u4EA7",baseUrl:"",baseApi:"",APPID:"wx74aac87d227a6750",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},ke=Object.freeze(Object.defineProperty({__proto__:null,default:Ae},Symbol.toStringTag,{value:"Module"})),we={env:"test",mock:!1,title:"\u6D4B\u8BD5",baseUrl:"https://test.xxx.com",baseApi:"https://test.xxx.com/api",APPID:"wx9790364d20b47d95",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"},Pe=Object.freeze(Object.defineProperty({__proto__:null,default:we},Symbol.toStringTag,{value:"Module"}));const w={},Ie={"./env.development.ts":Ee,"./env.production.ts":Te,"./env.proV.ts":ke,"./env.test.ts":Pe};Object.entries(Ie).forEach(([e,t])=>{const o=e.replace(/\.\/env\.(.*)\.ts$/,"$1");w[o]=t});console.log("envMap",w);const U=w.production.default;console.log("\u6839\u636E\u73AF\u5883\u5F15\u5165\u4E0D\u540C\u914D\u7F6E",U);const De=e=>{document.title=e||U.title},Se=(e=document.location.toString())=>{e=decodeURI(e);const t=e.split("?"),o={};if(t.length>1){const n=t[1].indexOf("#");t[1]=n==-1?t[1]:t[1].slice(0,n);const s=t[1].split("&");for(let a=0;a<s.length;a++){const i=s[a].split("=");o[i[0]]=decodeURIComponent(i[1])}}return o},xe=()=>{const e=navigator.userAgent,t=e.indexOf("Android")>-1||e.indexOf("Linux")>-1,o=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);if(t)return"android";if(o)return"ios"},Oe=()=>!!navigator.userAgent.match(/MicroMessenger/i),Be="modulepreload",B={},Ve="/test/",l=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${Ve}${n}`,n in B)return;B[n]=!0;const s=n.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":Be,s||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),s)return new Promise((m,r)=>{i.addEventListener("load",m),i.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},Le=A({props:{tabbars:{type:Array,default:()=>[]},active:Number},emits:["change","update:active"],setup(e,{emit:t}){const o=e,n=E({get:()=>o.active,set:s=>{t("update:active",s),t("change",s)}});return(s,a)=>{const i=de,m=pe;return c(),f(m,{modelValue:_(n),"onUpdate:modelValue":a[0]||(a[0]=r=>G(n)?n.value=r:null),route:"",fixed:""},{default:y(()=>[(c(!0),T(C,null,K(e.tabbars,r=>(c(),f(i,{to:r.to,icon:r.icon,key:r.to},{default:y(()=>[W(Q(r.title),1)]),_:2},1032,["to","icon"]))),128))]),_:1},8,["modelValue"])}}}),Ce=k({id:"keepAlive",state:()=>({caches:[]}),actions:{add(e){this.caches.includes(e)||this.caches.push(e)},remove(e){_e.remove(this.caches,t=>t===e),console.log("remove",this.caches)}},persist:!0});var Re=(e,t)=>{const o=e.__vccOpts||e;for(const[n,s]of t)o[n]=s;return o};const Me=e=>(se("data-v-d4d0ca22"),e=e(),re(),e),Ue=Me(()=>R("div",{class:"test-safe",id:"safe"},null,-1)),Fe={key:0,class:"layout-footer",id:"layout-footer"},je=A({setup(e){const t=Ce(),o=E(()=>t.caches),n=le();console.log(n.meta);const s=J([{title:"\u9996\u9875",to:"/home",icon:"home-o"},{title:"\u9879\u76EE\u4FE1\u606F",to:"/pkgInfo",icon:"label-o"},{title:"\u6848\u4F8B",to:"/demo",icon:"star-o"},{title:"\u5173\u4E8E\u6211",to:"/about",icon:"user-o"}]),a=X(0);b(a,r=>{console.log("tab value v-model:",r)});const i=r=>{console.log("tab value @change:",r)};b(n,r=>{console.log("route",r.name)});const m=E(()=>{let r=0;return n.meta.showTab&&(r+=50),n.meta.bottomBtn&&(r+=44),`calc(100% - ${r}px)`});return Y(()=>{const r=document.getElementById("layout-footer"),u=document.getElementById("app"),d=document.getElementById("safe"),p=document.getElementById("layout-content");console.log("onMounted height footer",(r==null?void 0:r.offsetTop)||0,r==null?void 0:r.offsetHeight),console.log("onMounted height app",(u==null?void 0:u.offsetTop)||0,u==null?void 0:u.offsetHeight),console.log("onMounted client",document.documentElement.clientHeight,window.outerHeight),console.log("safe",d,d==null?void 0:d.offsetHeight),console.log("content",p,p==null?void 0:p.offsetHeight)}),b(m,()=>{const r=document.getElementById("layout-footer"),u=document.getElementById("app");console.log("watch height footer",(r==null?void 0:r.offsetTop)||0,r==null?void 0:r.offsetHeight),console.log("watch height app",(u==null?void 0:u.offsetTop)||0,u==null?void 0:u.offsetHeight),console.log("watch client",document.documentElement.clientHeight,window.outerHeight)}),Z(()=>{}),(r,u)=>{const d=L("router-view"),p=Le;return c(),T(C,null,[Ue,R("div",{class:"layout-content",id:"layout-content",style:oe({height:_(m)})},[O(d,null,{default:y(({Component:g})=>[(c(),f(te,{include:_(o)},[(c(),f(ee(g),{key:_(n).path}))],1032,["include"]))]),_:1})],4),_(n).meta.showTab?(c(),T("div",Fe,[O(p,{tabbars:_(s),modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=g=>a.value=g),onChange:i},null,8,["tabbars","modelValue"])])):ne("",!0)],64)}}});var Ne=Re(je,[["__scopeId","data-v-d4d0ca22"]]);const $e=[{path:"/",name:"Home",redirect:"/home",meta:{title:"\u9996\u9875",keepAlive:!1},component:Ne,children:[{path:"/home",name:"Home",component:()=>l(()=>import("./Home-e7e4f667.js"),["js/Home-e7e4f667.js","js/vant-1b4fb385.js","js/@vant-9df66e1a.js","js/@vue-2a6541b0.js","js/vue-router-f7e58f32.js","js/pinia-9e8e4c4b.js","js/vue-demi-3c8f99f1.js","js/pinia-plugin-persistedstate-f1177332.js","js/lodash-es-64c0f301.js","js/vconsole-90cc4834.js","js/axios-d6bcf34f.js","js/vite-plugin-mock-57207cc7.js","js/mockjs-22f713a3.js","js/path-to-regexp-dd3e7e88.js"]),meta:{title:"\u9996\u9875",keepAlive:!1,showTab:!0,bottomBtn:!0}},{path:"/demo",name:"Demo",component:()=>l(()=>import("./Demo-3dc4246f.js"),["js/Demo-3dc4246f.js","js/vant-1b4fb385.js","js/@vant-9df66e1a.js","js/@vue-2a6541b0.js","js/pinia-9e8e4c4b.js","js/vue-demi-3c8f99f1.js","js/pinia-plugin-persistedstate-f1177332.js","js/vue-router-f7e58f32.js","js/lodash-es-64c0f301.js","js/vconsole-90cc4834.js","js/axios-d6bcf34f.js","js/vite-plugin-mock-57207cc7.js","js/mockjs-22f713a3.js","js/path-to-regexp-dd3e7e88.js"]),meta:{title:"\u6D4B\u8BD5\u6848\u4F8B",keepAlive:!1,showTab:!0}},{path:"/pkgInfo",name:"PkgInfo",component:()=>l(()=>import("./PkgInfo-94d213c2.js"),["js/PkgInfo-94d213c2.js","js/vant-1b4fb385.js","js/@vant-9df66e1a.js","js/@vue-2a6541b0.js","js/pinia-9e8e4c4b.js","js/vue-demi-3c8f99f1.js","js/pinia-plugin-persistedstate-f1177332.js","js/vue-router-f7e58f32.js","js/lodash-es-64c0f301.js","js/vconsole-90cc4834.js","js/axios-d6bcf34f.js","js/vite-plugin-mock-57207cc7.js","js/mockjs-22f713a3.js","js/path-to-regexp-dd3e7e88.js"]),meta:{title:"\u9879\u76EE\u4FE1\u606F",keepAlive:!1,showTab:!0}},{path:"/about",name:"About",component:()=>l(()=>import("./About-6f2e77a4.js"),["js/About-6f2e77a4.js","js/vant-1b4fb385.js","js/@vant-9df66e1a.js","js/@vue-2a6541b0.js","js/vue-router-f7e58f32.js","js/pinia-9e8e4c4b.js","js/vue-demi-3c8f99f1.js","js/pinia-plugin-persistedstate-f1177332.js","js/lodash-es-64c0f301.js","js/vconsole-90cc4834.js","js/axios-d6bcf34f.js","js/vite-plugin-mock-57207cc7.js","js/mockjs-22f713a3.js","js/path-to-regexp-dd3e7e88.js"]),meta:{title:"\u5173\u4E8E\u6211",keepAlive:!1,showTab:!0}},{path:"/tsx",name:"Tsx",component:()=>l(()=>import("./demo-46f01140.js"),["js/demo-46f01140.js","js/@vue-2a6541b0.js"]),meta:{title:"\u6D4B\u8BD5tsx",keepAlive:!1,showTab:!1}},{path:"/static",name:"Static",component:()=>l(()=>import("./testStatic-f5abd3b4.js"),["js/testStatic-f5abd3b4.js","js/@vue-2a6541b0.js"]),meta:{title:"\u6D4B\u8BD5\u9759\u6001\u8D44\u6E90",keepAlive:!1,showTab:!1}},{path:"/cssModel",name:"CssModel",component:()=>l(()=>import("./testCssModel-4a2cf1e0.js"),["js/testCssModel-4a2cf1e0.js","js/@vue-2a6541b0.js"]),meta:{title:"\u6D4B\u8BD5css-model",keepAlive:!1,showTab:!1}},{path:"/mockAxios",name:"MockAxios",component:()=>l(()=>import("./testMockAxios-d3c27406.js"),["js/testMockAxios-d3c27406.js","js/request-261a9919.js","js/axios-d6bcf34f.js","js/vant-1b4fb385.js","js/@vant-9df66e1a.js","js/@vue-2a6541b0.js","js/vue-request-aa8a4aac.js","js/pinia-9e8e4c4b.js","js/vue-demi-3c8f99f1.js","js/pinia-plugin-persistedstate-f1177332.js","js/vue-router-f7e58f32.js","js/lodash-es-64c0f301.js","js/vconsole-90cc4834.js","js/vite-plugin-mock-57207cc7.js","js/mockjs-22f713a3.js","js/path-to-regexp-dd3e7e88.js"]),meta:{title:"\u6D4B\u8BD5mock-axios",keepAlive:!1,showTab:!1}},{path:"/pinia",name:"Pinia",component:()=>l(()=>import("./testPinia-f4002107.js"),["js/testPinia-f4002107.js","js/@vue-2a6541b0.js"]),meta:{title:"\u6D4B\u8BD5pinia",keepAlive:!1,showTab:!1}},{path:"/testTimingData",name:"TestTimingData",component:()=>l(()=>import("./testTimingData-d1bc3b48.js"),["js/testTimingData-d1bc3b48.js","js/request-261a9919.js","js/axios-d6bcf34f.js","js/vant-1b4fb385.js","js/@vant-9df66e1a.js","js/@vue-2a6541b0.js","js/vue-request-aa8a4aac.js","js/pinia-9e8e4c4b.js","js/vue-demi-3c8f99f1.js","js/pinia-plugin-persistedstate-f1177332.js","js/vue-router-f7e58f32.js","js/lodash-es-64c0f301.js","js/vconsole-90cc4834.js","js/vite-plugin-mock-57207cc7.js","js/mockjs-22f713a3.js","js/path-to-regexp-dd3e7e88.js"]),meta:{title:"\u5B9A\u65F6\u8BF7\u6C42\u6570\u636E",keepAlive:!1,showTab:!1}},{path:"/testComponent",name:"TestComponent",component:()=>l(()=>import("./testComponent-e37a8be8.js"),["js/testComponent-e37a8be8.js","js/@vue-2a6541b0.js","js/pinia-9e8e4c4b.js","js/vue-demi-3c8f99f1.js","js/pinia-plugin-persistedstate-f1177332.js","js/vue-router-f7e58f32.js","js/vant-1b4fb385.js","js/@vant-9df66e1a.js","js/lodash-es-64c0f301.js","js/vconsole-90cc4834.js","js/axios-d6bcf34f.js","js/vite-plugin-mock-57207cc7.js","js/mockjs-22f713a3.js","js/path-to-regexp-dd3e7e88.js"]),meta:{title:"\u6D4B\u8BD5\u5168\u5C40\u7EC4\u4EF6",keepAlive:!1,showTab:!1}},{path:"/form",name:"form-test",component:()=>l(()=>import("./Form-fca73d65.js"),["js/Form-fca73d65.js","js/vant-1b4fb385.js","js/@vant-9df66e1a.js","js/@vue-2a6541b0.js","js/vue-router-f7e58f32.js","js/Test-1b6f4bba.js","js/monaco-editor-ba77745f.js","js/pinia-9e8e4c4b.js","js/vue-demi-3c8f99f1.js","js/pinia-plugin-persistedstate-f1177332.js","js/lodash-es-64c0f301.js","js/vconsole-90cc4834.js","js/axios-d6bcf34f.js","js/vite-plugin-mock-57207cc7.js","js/mockjs-22f713a3.js","js/path-to-regexp-dd3e7e88.js"]),meta:{title:"\u8868\u5355",keepAlive:!0,showTab:!0}},{path:"/preview",name:"preview",component:()=>l(()=>import("./Preview-b112644e.js"),["js/Preview-b112644e.js","js/vant-1b4fb385.js","js/@vant-9df66e1a.js","js/@vue-2a6541b0.js","js/vue-router-f7e58f32.js","js/Test-1b6f4bba.js","js/pinia-9e8e4c4b.js","js/vue-demi-3c8f99f1.js","js/pinia-plugin-persistedstate-f1177332.js","js/lodash-es-64c0f301.js","js/vconsole-90cc4834.js","js/axios-d6bcf34f.js","js/vite-plugin-mock-57207cc7.js","js/mockjs-22f713a3.js","js/path-to-regexp-dd3e7e88.js"]),meta:{title:"\u9884\u89C8",keepAlive:!1,showTab:!0}}]}],He=k({id:"auth",state:()=>({userInfo:{},isAuth:!1,code:""}),actions:{saveUserInfo(e){this.$state.userInfo=e},setIsAuth(e){this.$state.isAuth=e},setCode(e){this.$state.code=e}},persist:{key:"auth",storage:window.localStorage}}),qe=k({id:"link",state:()=>({initLink:""}),actions:{setInitLink(e){this.$state.initLink=e}},persist:{key:"link",storage:window.localStorage}}),P=ce({history:me("/test/"),routes:$e,strict:!0,scrollBehavior:()=>({left:0,top:0})});P.beforeEach((e,t,o)=>{He(),De(e.meta.title);//! 解决ios微信下，分享签名不成功的问题,将第一次的进入的url缓存起来。
window.entryUrl===void 0&&(window.entryUrl=location.href.split("#")[0]),Se(),Oe(),o()});P.afterEach((e,t,o)=>{const n=qe();let s;xe()==="ios"?s=window.entryUrl:s=window.location.href,console.log("linkStore",n),n.setInitLink(s)});function v(e,{message:t="ok"}={}){return{code:0,data:e,message:t,type:"success"}}function ze(e,t,o,{message:n="ok"}={}){const s=F(e,t,o);return x(S({},v({items:s,total:o.length})),{message:n})}function Ke(e="Request failed",{code:t=-1,data:o=null}={}){return{code:t,data:o,message:e,type:"error"}}function F(e,t,o){const n=(e-1)*Number(t);return n+Number(t)>=o.length?o.slice(n,o.length):o.slice(n,n+Number(t))}function We({headers:e}){return e==null?void 0:e.authorization}var Qe=Object.freeze(Object.defineProperty({__proto__:null,resultSuccess:v,resultPageSuccess:ze,resultError:Ke,pagination:F,getRequestToken:We},Symbol.toStringTag,{value:"Module"})),Ge=[{url:"/getTimingData",method:"get",response:e=>v({nickname:"@cname",age:"@integer(10-100)",uid:"@id",url:"@image",city:"@city",country:"@county(true)",province:"@province",mobile_phone:"@phone",email:"@email",region:"@region"})}],Je=Object.freeze(Object.defineProperty({__proto__:null,default:Ge},Symbol.toStringTag,{value:"Module"}));function Xe(){return[{userId:"1",username:"vben",realName:"Vben Admin",avatar:"https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640",desc:"manager",password:"123456",token:"fakeToken1",homePath:"/dashboard/analysis",roles:[{roleName:"Super Admin",value:"super"}]},{userId:"2",username:"test",password:"123456",realName:"test user",avatar:"https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640",desc:"tester",token:"fakeToken2",homePath:"/dashboard/workbench",roles:[{roleName:"Tester",value:"test"}]}]}var Ye=[{url:"/user/info",method:"get",response:e=>v({author:"ynzy",avatar:"https://avatars.githubusercontent.com/u/39397772?s=60&v=4",projectAddress:"https://github.com/ynzy/vue3-ts-wx-h5-template",demoUrl:"https://vue3-ts-wx-h5-template.vercel.app/",demoCodeUrl:"https://files.catbox.moe/lxle3w.png"})}],Ze=Object.freeze(Object.defineProperty({__proto__:null,createFakeUserList:Xe,default:Ye},Symbol.toStringTag,{value:"Module"}));const V={"./_util.ts":Qe,"./sys/time.ts":Je,"./sys/user.ts":Ze},j=[];Object.keys(V).forEach(e=>{e.includes("/_")||j.push(...V[e].default)});function et(){he(j)}const tt=new fe,h=ae(ge);window.vm=h;h.use(M);h.use(P);h.use(tt);h.mount("#app");et();export{Re as _,nt as __vite_legacy_guard,U as c,Ce as k};
