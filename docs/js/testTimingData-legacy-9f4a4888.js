!function(){function e(e,n,c,t,u,a,o){try{var i=e[a](o),s=i.value}catch(l){return void c(l)}i.done?n(s):Promise.resolve(s).then(t,u)}System.register(["./request-legacy-a5509397.js","./vue-request-legacy-30e17dac.js","./@vue-legacy-b86327d3.js","./axios-legacy-1d058a1c.js","./vant-legacy-95ac82c0.js","./@vant-legacy-270078ef.js","./index-legacy-8e3098ea.js","./pinia-legacy-eaae6d52.js","./vue-demi-legacy-cf2ccb43.js","./pinia-plugin-persistedstate-legacy-d4b8a6c7.js","./vue-router-legacy-5923daa8.js","./lodash-es-legacy-9934df71.js","./vconsole-legacy-2de85e2c.js","./vite-plugin-mock-legacy-95a233c7.js","./mockjs-legacy-0ecbc81d.js","./path-to-regexp-legacy-558a8e0c.js"],(function(n){"use strict";var c,t,u,a,o,i,s,l,r;return{setters:[function(e){c=e.s},function(e){t=e.u},function(e){u=e.q,a=e.r,o=e.e,i=e.J,s=e.M,l=e.P,r=e.O},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const f=()=>c({url:"/getTimingData",method:"GET"});n("default",u({setup(n){const c=a({}),u=function(){var n,u=(n=function*(){t(f,{pollingInterval:5e3,onSuccess:e=>{console.log("onSuccess",e),c.value=e}})},function(){var c=this,t=arguments;return new Promise((function(u,a){var o=n.apply(c,t);function i(n){e(o,u,a,i,s,"next",n)}function s(n){e(o,u,a,i,s,"throw",n)}i(void 0)}))});return function(){return u.apply(this,arguments)}}();return o((()=>{u()})),(e,n)=>(i(),s("div",null,[l("pre",null,r(c.value),1)]))}}))}}}))}();
