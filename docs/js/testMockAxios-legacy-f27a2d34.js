!function(){function n(n,e,t,c,u,a,i){try{var o=n[a](i),s=o.value}catch(l){return void t(l)}o.done?e(s):Promise.resolve(s).then(c,u)}System.register(["./request-legacy-4229b441.js","./vue-request-legacy-30e17dac.js","./@vue-legacy-b86327d3.js","./axios-legacy-1d058a1c.js","./vant-legacy-b062184a.js","./@vant-legacy-270078ef.js","./index-legacy-0a4f49c2.js","./pinia-legacy-eaae6d52.js","./vue-demi-legacy-cf2ccb43.js","./pinia-plugin-persistedstate-legacy-d4b8a6c7.js","./vue-router-legacy-5923daa8.js","./lodash-es-legacy-9934df71.js","./vconsole-legacy-2de85e2c.js","./vite-plugin-mock-legacy-95a233c7.js","./mockjs-legacy-0ecbc81d.js","./path-to-regexp-legacy-558a8e0c.js"],(function(e){"use strict";var t,c,u,a,i,o,s,l,r;return{setters:[function(n){t=n.s},function(n){c=n.u},function(n){u=n.q,a=n.r,i=n.e,o=n.s,s=n.J,l=n.M,r=n.u},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const f=()=>t({url:"/user/info",method:"get",loading:!0});var d=u({setup(){const e=a(null),t=function(){var t,u=(t=function*(){var n,t;const{data:u,run:a}=c(f);yield a(),console.log(null===(n=u.value)||void 0===n?void 0:n.data),e.value=null===(t=u.value)||void 0===t?void 0:t.data},function(){var e=this,c=arguments;return new Promise((function(u,a){var i=t.apply(e,c);function o(e){n(i,u,a,o,s,"next",e)}function s(e){n(i,u,a,o,s,"throw",e)}o(void 0)}))});return function(){return u.apply(this,arguments)}}();return i((()=>{t()})),()=>o("div",{class:"test-mock-axios"},[o("div",null,[`${JSON.stringify(e.value)}`])])}});e("default",u({setup:n=>(n,e)=>(s(),l("div",null,[o(r(d))]))}))}}}))}();
