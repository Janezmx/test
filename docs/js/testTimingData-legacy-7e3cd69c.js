!function(){function n(n,e,c,t,u,o,i){try{var a=n[o](i),s=a.value}catch(l){return void c(l)}a.done?e(s):Promise.resolve(s).then(t,u)}System.register(["./request-legacy-4d53c327.js","./vue-request-legacy-08af5460.js","./@vue-legacy-a7d5e4be.js","./axios-legacy-1d058a1c.js","./vant-legacy-b5fa835e.js","./@vant-legacy-8a4dc373.js","./index-legacy-8d4b6cc2.js","./pinia-legacy-1dd935db.js","./vue-demi-legacy-cf2ccb43.js","./pinia-plugin-persistedstate-legacy-d4b8a6c7.js","./vue-router-legacy-50f495f2.js","./lodash-es-legacy-9934df71.js","./vconsole-legacy-2de85e2c.js","./vite-plugin-mock-legacy-95a233c7.js","./mockjs-legacy-0ecbc81d.js","./path-to-regexp-legacy-558a8e0c.js"],(function(e){"use strict";var c,t,u,o,i,a,s,l,r;return{setters:[function(n){c=n.s},function(n){t=n.u},function(n){u=n.q,o=n.r,i=n.e,a=n.H,s=n.L,l=n.O,r=n.N},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const f=()=>c({url:"/getTimingData",method:"GET"});e("default",u({setup(e){const c=o({}),u=function(){var e,u=(e=function*(){t(f,{pollingInterval:5e3,onSuccess:n=>{console.log("onSuccess",n),c.value=n}})},function(){var c=this,t=arguments;return new Promise((function(u,o){var i=e.apply(c,t);function a(e){n(i,u,o,a,s,"next",e)}function s(e){n(i,u,o,a,s,"throw",e)}a(void 0)}))});return function(){return u.apply(this,arguments)}}();return i((()=>{u()})),(n,e)=>(a(),s("div",null,[l("pre",null,r(c.value),1)]))}}))}}}))}();
