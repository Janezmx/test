!function(){function n(n,e,t,c,u,i,a){try{var o=n[i](a),s=o.value}catch(l){return void t(l)}o.done?e(s):Promise.resolve(s).then(c,u)}System.register(["./request-legacy-628f3598.js","./vue-request-legacy-82104a23.js","./@vue-legacy-c8e6a1b8.js","./axios-legacy-1d058a1c.js","./vant-legacy-b2f45a12.js","./@vant-legacy-55df1426.js","./index-legacy-ff9b9ae4.js","./pinia-legacy-bc7ae722.js","./vue-demi-legacy-cf2ccb43.js","./pinia-plugin-persistedstate-legacy-d4b8a6c7.js","./vue-router-legacy-e38d49bd.js","./lodash-es-legacy-9934df71.js","./vconsole-legacy-2de85e2c.js","./vite-plugin-mock-legacy-95a233c7.js","./mockjs-legacy-0ecbc81d.js","./path-to-regexp-legacy-558a8e0c.js"],(function(e){"use strict";var t,c,u,i,a,o,s,l,r;return{setters:[function(n){t=n.s},function(n){c=n.u},function(n){u=n.q,i=n.r,a=n.e,o=n.s,s=n.H,l=n.L,r=n.u},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const f=()=>t({url:"/user/info",method:"get",loading:!0});var v=u({setup(){const e=i(null),t=function(){var t,u=(t=function*(){var n,t;const{data:u,run:i}=c(f);yield i(),console.log(null===(n=u.value)||void 0===n?void 0:n.data),e.value=null===(t=u.value)||void 0===t?void 0:t.data},function(){var e=this,c=arguments;return new Promise((function(u,i){var a=t.apply(e,c);function o(e){n(a,u,i,o,s,"next",e)}function s(e){n(a,u,i,o,s,"throw",e)}o(void 0)}))});return function(){return u.apply(this,arguments)}}();return a((()=>{t()})),()=>o("div",{class:"test-mock-axios"},[o("div",null,[`${JSON.stringify(e.value)}`])])}});e("default",u({setup:n=>(n,e)=>(s(),l("div",null,[o(r(v))]))}))}}}))}();