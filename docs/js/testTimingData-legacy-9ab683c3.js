!function(){function n(n,e,c,t,u,o,a){try{var i=n[o](a),s=i.value}catch(l){return void c(l)}i.done?e(s):Promise.resolve(s).then(t,u)}System.register(["./request-legacy-4229b441.js","./vue-request-legacy-30e17dac.js","./@vue-legacy-b86327d3.js","./axios-legacy-1d058a1c.js","./vant-legacy-b062184a.js","./@vant-legacy-270078ef.js","./index-legacy-0a4f49c2.js","./pinia-legacy-eaae6d52.js","./vue-demi-legacy-cf2ccb43.js","./pinia-plugin-persistedstate-legacy-d4b8a6c7.js","./vue-router-legacy-5923daa8.js","./lodash-es-legacy-9934df71.js","./vconsole-legacy-2de85e2c.js","./vite-plugin-mock-legacy-95a233c7.js","./mockjs-legacy-0ecbc81d.js","./path-to-regexp-legacy-558a8e0c.js"],(function(e){"use strict";var c,t,u,o,a,i,s,l,r;return{setters:[function(n){c=n.s},function(n){t=n.u},function(n){u=n.q,o=n.r,a=n.e,i=n.J,s=n.M,l=n.P,r=n.O},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const f=()=>c({url:"/getTimingData",method:"GET"});e("default",u({setup(e){const c=o({}),u=function(){var e,u=(e=function*(){t(f,{pollingInterval:5e3,onSuccess:n=>{console.log("onSuccess",n),c.value=n}})},function(){var c=this,t=arguments;return new Promise((function(u,o){var a=e.apply(c,t);function i(e){n(a,u,o,i,s,"next",e)}function s(e){n(a,u,o,i,s,"throw",e)}i(void 0)}))});return function(){return u.apply(this,arguments)}}();return a((()=>{u()})),(n,e)=>(i(),s("div",null,[l("pre",null,r(c.value),1)]))}}))}}}))}();