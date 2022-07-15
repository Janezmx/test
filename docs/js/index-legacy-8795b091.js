!function(){function e(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function t(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?e(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}System.register(["./@vue-legacy-b86327d3.js","./pinia-legacy-eaae6d52.js","./pinia-plugin-persistedstate-legacy-d4b8a6c7.js","./vue-router-legacy-5923daa8.js","./vant-legacy-b062184a.js","./lodash-es-legacy-9934df71.js","./vconsole-legacy-2de85e2c.js","./vite-plugin-mock-legacy-95a233c7.js","./vue-demi-legacy-cf2ccb43.js","./@vant-legacy-270078ef.js","./axios-legacy-1d058a1c.js","./mockjs-legacy-0ecbc81d.js","./path-to-regexp-legacy-558a8e0c.js"],(function(e,o){"use strict";var n,a,s,l,i,c,r,u,d,m,p,g,h,f,b,v,y,w,k,j,_,T,P,O,A,x,E,I,S,U,M,D,C,V,R,B,H,L;return{setters:[function(e){n=e.q,a=e.I,s=e.J,l=e.K,i=e.c,c=e.L,r=e.M,u=e.N,d=e.B,m=e.O,p=e.F,g=e.u,h=e.d,f=e.a,b=e.r,v=e.w,y=e.e,w=e.x,k=e.P,j=e.s,_=e.Q,T=e.R,P=e.S,O=e.U,A=e.V,x=e.W,E=e.C},function(e){I=e.c,S=e.d},function(e){U=e.s},function(e){M=e.u,D=e.c,C=e.a},function(e){V=e.T,R=e.a},function(e){B=e.l},function(e){H=e.V},function(e){L=e.c},function(){},function(){},function(){},function(){},function(){}],execute:function(){const q=I();q.use(U);const N=n({setup:e=>(console.log("---环境变量----",{VITE_BUILD_COMPRESS:"none",VITE_ENV:"production",VITE_OUTPUT_DIR:"dist",VITE_PUBLIC_PATH:"/",VITE_USE_MOCK:"true",VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE:"false",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0}),(e,t)=>{const o=a("router-view");return s(),l(o)})});var $=Object.freeze(Object.defineProperty({__proto__:null,default:{env:"development",mock:!0,title:"开发",baseUrl:"",baseApi:"",APPID:"wx9790364d20b47d95",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"}},Symbol.toStringTag,{value:"Module"})),z=Object.freeze(Object.defineProperty({__proto__:null,default:{env:"production",mock:!0,title:"生产",baseUrl:"",baseApi:"",APPID:"wx74aac87d227a6750",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"}},Symbol.toStringTag,{value:"Module"})),F=Object.freeze(Object.defineProperty({__proto__:null,default:{env:"proV",mock:!0,title:"生产",baseUrl:"",baseApi:"",APPID:"wx74aac87d227a6750",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"}},Symbol.toStringTag,{value:"Module"})),K=Object.freeze(Object.defineProperty({__proto__:null,default:{env:"test",mock:!1,title:"测试",baseUrl:"https://test.xxx.com",baseApi:"https://test.xxx.com/api",APPID:"wx9790364d20b47d95",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"}},Symbol.toStringTag,{value:"Module"}));const G={},J={"./env.development.ts":$,"./env.production.ts":z,"./env.proV.ts":F,"./env.test.ts":K};Object.entries(J).forEach((([e,t])=>{const o=e.replace(/\.\/env\.(.*)\.ts$/,"$1");G[o]=t})),console.log("envMap",G);const Q=e("c",G.production.default);console.log("根据环境引入不同配置",Q);const W=function(e,t){return e()},X=n({props:{tabbars:{type:Array,default:()=>[]},active:Number},emits:["change","update:active"],setup(e,{emit:t}){const o=e,n=i({get:()=>o.active,set:e=>{t("update:active",e),t("change",e)}});return(t,o)=>{const a=V,i=R;return s(),l(i,{modelValue:g(n),"onUpdate:modelValue":o[0]||(o[0]=e=>h(n)?n.value=e:null),route:"",fixed:""},{default:c((()=>[(s(!0),r(p,null,u(e.tabbars,(e=>(s(),l(a,{to:e.to,icon:e.icon,key:e.to},{default:c((()=>[d(m(e.title),1)])),_:2},1032,["to","icon"])))),128))])),_:1},8,["modelValue"])}}}),Y=e("k",S({id:"keepAlive",state:()=>({caches:[]}),actions:{add(e){this.caches.includes(e)||this.caches.push(e)},remove(e){B.remove(this.caches,(t=>t===e)),console.log("remove",this.caches)}},persist:!0}));var Z=e("_",((e,t)=>{const o=e.__vccOpts||e;for(const[n,a]of t)o[n]=a;return o}));const ee=(e=>(A("data-v-d4d0ca22"),e=e(),x(),e))((()=>k("div",{class:"test-safe",id:"safe"},null,-1))),te={key:0,class:"layout-footer",id:"layout-footer"},oe=n({setup(e){const t=Y(),o=i((()=>t.caches)),n=M();console.log(n.meta);const u=f([{title:"首页",to:"/home",icon:"home-o"},{title:"项目信息",to:"/pkgInfo",icon:"label-o"},{title:"案例",to:"/demo",icon:"star-o"},{title:"关于我",to:"/about",icon:"user-o"}]),d=b(0);v(d,(e=>{console.log("tab value v-model:",e)}));const m=e=>{console.log("tab value @change:",e)};v(n,(e=>{console.log("route",e.name)}));const h=i((()=>{let e=0;return n.meta.showTab&&(e+=50),n.meta.bottomBtn&&(e+=44),`calc(100% - ${e}px)`}));return y((()=>{const e=document.getElementById("layout-footer"),t=document.getElementById("app"),o=document.getElementById("safe"),n=document.getElementById("layout-content");console.log("onMounted height footer",(null==e?void 0:e.offsetTop)||0,null==e?void 0:e.offsetHeight),console.log("onMounted height app",(null==t?void 0:t.offsetTop)||0,null==t?void 0:t.offsetHeight),console.log("onMounted client",document.documentElement.clientHeight,window.outerHeight),console.log("safe",o,null==o?void 0:o.offsetHeight),console.log("content",n,null==n?void 0:n.offsetHeight)})),v(h,(()=>{const e=document.getElementById("layout-footer"),t=document.getElementById("app");console.log("watch height footer",(null==e?void 0:e.offsetTop)||0,null==e?void 0:e.offsetHeight),console.log("watch height app",(null==t?void 0:t.offsetTop)||0,null==t?void 0:t.offsetHeight),console.log("watch client",document.documentElement.clientHeight,window.outerHeight)})),w((()=>{})),(e,t)=>{const i=a("router-view"),f=X;return s(),r(p,null,[ee,k("div",{class:"layout-content",id:"layout-content",style:P({height:g(h)})},[j(i,null,{default:c((({Component:e})=>[(s(),l(T,{include:g(o)},[(s(),l(_(e),{key:g(n).path}))],1032,["include"]))])),_:1})],4),g(n).meta.showTab?(s(),r("div",te,[j(f,{tabbars:g(u),modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=e=>d.value=e),onChange:m},null,8,["tabbars","modelValue"])])):O("",!0)],64)}}});const ne=[{path:"/",name:"Home",redirect:"/home",meta:{title:"首页",keepAlive:!1},component:Z(oe,[["__scopeId","data-v-d4d0ca22"]]),children:[{path:"/home",name:"Home",component:()=>W((()=>o.import("./Home-legacy-b36098db.js"))),meta:{title:"首页",keepAlive:!1,showTab:!0,bottomBtn:!0}},{path:"/demo",name:"Demo",component:()=>W((()=>o.import("./Demo-legacy-593ff31d.js"))),meta:{title:"测试案例",keepAlive:!1,showTab:!0}},{path:"/pkgInfo",name:"PkgInfo",component:()=>W((()=>o.import("./PkgInfo-legacy-426603a5.js"))),meta:{title:"项目信息",keepAlive:!1,showTab:!0}},{path:"/about",name:"About",component:()=>W((()=>o.import("./About-legacy-a0d2165a.js"))),meta:{title:"关于我",keepAlive:!1,showTab:!1}},{path:"/tsx",name:"Tsx",component:()=>W((()=>o.import("./demo-legacy-38a42468.js"))),meta:{title:"测试tsx",keepAlive:!1,showTab:!1}},{path:"/static",name:"Static",component:()=>W((()=>o.import("./testStatic-legacy-bcf61778.js"))),meta:{title:"测试静态资源",keepAlive:!1,showTab:!1}},{path:"/cssModel",name:"CssModel",component:()=>W((()=>o.import("./testCssModel-legacy-0f3c9a15.js"))),meta:{title:"测试css-model",keepAlive:!1,showTab:!1}},{path:"/mockAxios",name:"MockAxios",component:()=>W((()=>o.import("./testMockAxios-legacy-1b238bf8.js"))),meta:{title:"测试mock-axios",keepAlive:!1,showTab:!1}},{path:"/pinia",name:"Pinia",component:()=>W((()=>o.import("./testPinia-legacy-10c046c7.js"))),meta:{title:"测试pinia",keepAlive:!1,showTab:!1}},{path:"/testTimingData",name:"TestTimingData",component:()=>W((()=>o.import("./testTimingData-legacy-7305d55e.js"))),meta:{title:"定时请求数据",keepAlive:!1,showTab:!1}},{path:"/testComponent",name:"TestComponent",component:()=>W((()=>o.import("./testComponent-legacy-83023107.js"))),meta:{title:"测试全局组件",keepAlive:!1,showTab:!1}},{path:"/form",name:"form-test",component:()=>W((()=>o.import("./Form-legacy-a38260eb.js"))),meta:{title:"表单",keepAlive:!0,showTab:!0}},{path:"/preview",name:"preview",component:()=>W((()=>o.import("./Preview-legacy-a6f8260e.js"))),meta:{title:"预览",keepAlive:!1,showTab:!0}}]}],ae=S({id:"auth",state:()=>({userInfo:{},isAuth:!1,code:""}),actions:{saveUserInfo(e){this.$state.userInfo=e},setIsAuth(e){this.$state.isAuth=e},setCode(e){this.$state.code=e}},persist:{key:"auth",storage:window.localStorage}}),se=S({id:"link",state:()=>({initLink:""}),actions:{setInitLink(e){this.$state.initLink=e}},persist:{key:"link",storage:window.localStorage}}),le=D({history:C("/test/"),routes:ne,strict:!0,scrollBehavior:()=>({left:0,top:0})});le.beforeEach(((e,t,o)=>{var n;ae(),n=e.meta.title,document.title=n||Q.title,//! 解决ios微信下，分享签名不成功的问题,将第一次的进入的url缓存起来。
void 0===window.entryUrl&&(window.entryUrl=location.href.split("#")[0]),((e=document.location.toString())=>{const t=(e=decodeURI(e)).split("?"),o={};if(t.length>1){const e=t[1].indexOf("#");t[1]=-1==e?t[1]:t[1].slice(0,e);const n=t[1].split("&");for(let t=0;t<n.length;t++){const e=n[t].split("=");o[e[0]]=decodeURIComponent(e[1])}}})(),navigator.userAgent.match(/MicroMessenger/i),o()})),le.afterEach(((e,t,o)=>{const n=se();let a;a="ios"===(()=>{const e=navigator.userAgent,t=e.indexOf("Android")>-1||e.indexOf("Linux")>-1,o=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);return t?"android":o?"ios":void 0})()?window.entryUrl:window.location.href,console.log("linkStore",n),n.setInitLink(a)}));function ie(e,{message:t="ok"}={}){return{code:0,data:e,message:t,type:"success"}}function ce(e,t,o){const n=(e-1)*Number(t);return n+Number(t)>=o.length?o.slice(n,o.length):o.slice(n,n+Number(t))}var re=[{url:"/getTimingData",method:"get",response:e=>ie({nickname:"@cname",age:"@integer(10-100)",uid:"@id",url:"@image",city:"@city",country:"@county(true)",province:"@province",mobile_phone:"@phone",email:"@email",region:"@region"})}];var ue=[{url:"/user/info",method:"get",response:e=>ie({author:"ynzy",avatar:"https://avatars.githubusercontent.com/u/39397772?s=60&v=4",projectAddress:"https://github.com/ynzy/vue3-ts-wx-h5-template",demoUrl:"https://vue3-ts-wx-h5-template.vercel.app/",demoCodeUrl:"https://files.catbox.moe/lxle3w.png"})}];const de={"./_util.ts":Object.freeze(Object.defineProperty({__proto__:null,resultSuccess:ie,resultPageSuccess:function(e,o,n,{message:a="ok"}={}){return t(t({},ie({items:ce(e,o,n),total:n.length})),{},{message:a})},resultError:function(e="Request failed",{code:t=-1,data:o=null}={}){return{code:t,data:o,message:e,type:"error"}},pagination:ce,getRequestToken:function({headers:e}){return null==e?void 0:e.authorization}},Symbol.toStringTag,{value:"Module"})),"./sys/time.ts":Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"})),"./sys/user.ts":Object.freeze(Object.defineProperty({__proto__:null,createFakeUserList:function(){return[{userId:"1",username:"vben",realName:"Vben Admin",avatar:"https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640",desc:"manager",password:"123456",token:"fakeToken1",homePath:"/dashboard/analysis",roles:[{roleName:"Super Admin",value:"super"}]},{userId:"2",username:"test",password:"123456",realName:"test user",avatar:"https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640",desc:"tester",token:"fakeToken2",homePath:"/dashboard/workbench",roles:[{roleName:"Tester",value:"test"}]}]},default:ue},Symbol.toStringTag,{value:"Module"}))},me=[];Object.keys(de).forEach((e=>{e.includes("/_")||me.push(...de[e].default)})),new H;const pe=E(N);window.vm=pe,pe.use(q),pe.use(le),pe.mount("#app"),L(me)}}}))}();
