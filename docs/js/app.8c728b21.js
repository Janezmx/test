(function(t){function e(e){for(var i,a,c=e[0],u=e[1],s=e[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1f30":function(t,e,n){},"2e81":function(t,e,n){"use strict";n("9d08")},"4c04":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=(n("d3b7"),n("bc3a")),r=n.n(o),a={install:function(t,e){r.a.defaults.headers.post["Content-Type"]="application/json";var n=r.a.create(e||{});n.interceptors.request.use((function(e){return e.url=t.prototype.$urlPrefix+e.url,e})),n.interceptors.response.use((function(t){return t}),(function(t){var e=t.response||{status:404};return e.data={code:-e.status,message:t},Promise.reject(e)})),t.$http=n,t.prototype.$http=n}},c=(n("6562"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),u=[],s=n("1da1"),l=(n("96cf"),n("3a34")),d=n.n(l),f={name:"app",data:function(){return{}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return"1"===(null===(n=t.$route.query)||void 0===n?void 0:n.show)&&localStorage.setItem("showConsole","1"),"1"===localStorage.getItem("showConsole")&&new d.a,e.next=4,t.$nextTick();case 4:window.addEventListener("resize",t.onWindowResize),t.onWindowResize(),document.addEventListener("visibilitychange",(function(){var t=localStorage.getItem("visibilityState");localStorage.setItem("visibilityState",t+document.visibilityState),document.hidden}));case 7:case"end":return e.stop()}}),e)})))()},methods:{onWindowResize:function(){var t=this;setTimeout((function(){t.$store.commit("setClientHeight",document.getElementById("app").clientHeight),t.$store.commit("setClientWidth",document.getElementById("app").clientWidth)}),0)}}},p=f,h=(n("880d"),n("2e81"),n("2877")),v=Object(h["a"])(p,c,u,!1,null,"d2617984",null),m=v.exports,g=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("第一页")]),n("button",{on:{click:t.next}},[t._v("下一页")])])},b=[],w={name:"first",mounted:function(){console.log("first",location.href)},methods:{next:function(){this.$router.push({name:"second"})}}},x=w,S=Object(h["a"])(x,y,b,!1,null,"6909573c",null),O=S.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("第二页")]),n("button",{on:{click:t.next}},[t._v("下一页")])])},$=[],j={name:"second",mounted:function(){console.log("second",location.href)},methods:{next:function(){this.$router.push({name:"third"})}}},_=j,C=Object(h["a"])(_,P,$,!1,null,"5abd5a9e",null),W=C.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{height:1334*t.ClientHeightRate+"px",width:750*t.ClientWidthRate+"px"}},[i("video",{staticStyle:{"object-fit":"fill"},attrs:{src:n("c6ec"),controls:"",autoplay:"",preload:"auto"}})])},R=[],k={name:"third",mounted:function(){var t=this;document.querySelector("video");window.WeixinJSBridge?t.videoPlay():document.addEventListener("WeixinJSBridgeReady",(function(){t.videoPlay()}),!1)},methods:{videoPlay:function(){var t=document.querySelector("video");t.volumn=.1,WeixinJSBridge.invoke("getNetworkType",{},(function(){t.play()}))}}},H=k,T=(n("7b9d"),Object(h["a"])(H,E,R,!1,null,"1e5b9834",null)),I=T.exports,L=n("2f62"),M=n("7761");i["a"].use(L["a"]);var B=new L["a"].Store({state:{enterState:!1,clientWidth:0,clientHeight:0,year:"2001",isLandscape:!1},getters:{},mutations:{setEnterState:function(t,e){t.enterState=e},setClientHeight:function(t,e){t.clientHeight=e},setClientWidth:function(t,e){t.clientWidth=e},setYear:function(t,e){t.year=e},setLandscape:function(t,e){t.isLandscape=e}},actions:{dispatchEnterState:function(t,e){var n=t.commit;n("setEnterState",e)}},plugins:[Object(M["a"])()]}),J=B;i["a"].use(g["a"]);var q=new g["a"]({routes:[{path:"/",name:"first",component:O},{path:"/second",name:"second",component:W},{path:"/third",name:"third",component:I},{path:"/*",redirect:"/"}]});q.beforeEach((function(t,e,n){console.log("before",location.href),"/"===t.path&&"/"===e.path?(J.dispatch("dispatchEnterState",!0),n()):J.state.enterState?n():n("Loading")})),q.afterEach((function(){window.scrollTo(0,0)}));var z=q,A={computed:{ClientHeightRate:function(){return this.$store.state.clientHeight/1334},ClientWidthRate:function(){return this.$store.state.clientWidth/750},Rate:function(){return this.ClientHeightRate>this.ClientWidthRate?this.ClientWidthRate:this.ClientHeightRate}}},U=n("18a0"),N=n.n(U),X=(n("ac1f"),n("466d"),function(){var t=navigator.userAgent;return!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)||t.indexOf("iPhone")>-1||t.indexOf("Mac")>-1||t.indexOf("iPad")>-1}),Y=function(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0,i=0;i<e.length;i++)if(-1!=t.indexOf(e[i])){n=!1;break}return n},D={},F=function(t){for(var e in D)t.component(e,D[e])};i["a"].prototype.$urlPrefix="/api",i["a"].config.productionTip=!1,a.install(i["a"]),i["a"].mixin(A),i["a"].prototype.$wx=N.a,i["a"].prototype.$isIOS=X,i["a"].prototype.$isPC=Y,F(i["a"]),new i["a"]({router:z,store:J,render:function(t){return t(m)}}).$mount("#app")},6562:function(t,e,n){},"7b9d":function(t,e,n){"use strict";n("4c04")},"880d":function(t,e,n){"use strict";n("1f30")},"9d08":function(t,e,n){},c6ec:function(t,e,n){t.exports=n.p+"media/conan.a7a480c2.mp4"}});