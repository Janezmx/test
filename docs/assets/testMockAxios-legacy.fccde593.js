!function(){function n(n,e,t,u,i,o,r){try{var c=n[o](r),a=c.value}catch(l){return void t(l)}c.done?e(a):Promise.resolve(a).then(u,i)}System.register(["./index.es-legacy.823db37f.js","./vendor-legacy.1f829e1b.js","./index-legacy.76e52e9e.js","./index-legacy.637f3556.js","./index-legacy.f7bee6cf.js"],(function(e){"use strict";var t,u,i,o,r,c,a,l,s;return{setters:[function(n){t=n.s,u=n.u},function(n){i=n.d,o=n.n,r=n.q,c=n.y,a=n.o,l=n.f,s=n.u},function(){},function(){},function(){}],execute:function(){const f=()=>t({url:"/user/info",method:"get",loading:!0});var d=i({setup(){const e=o(null),t=function(){var t,i=(t=function*(){var n,t;const{data:i,run:o}=u(f);yield o(),console.log(null===(n=i.value)||void 0===n?void 0:n.data),e.value=null===(t=i.value)||void 0===t?void 0:t.data},function(){var e=this,u=arguments;return new Promise((function(i,o){var r=t.apply(e,u);function c(e){n(r,i,o,c,a,"next",e)}function a(e){n(r,i,o,c,a,"throw",e)}c(void 0)}))});return function(){return i.apply(this,arguments)}}();return r((()=>{t()})),()=>c("div",{class:"test-mock-axios"},[c("div",null,[`${JSON.stringify(e.value)}`])])}});e("default",i({setup:n=>(n,e)=>(a(),l("div",null,[c(s(d))]))}))}}}))}();
