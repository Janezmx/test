!function(){function e(e,t,n,a,l,o,r){try{var u=e[o](r),c=u.value}catch(i){return void n(i)}u.done?t(c):Promise.resolve(c).then(a,l)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function n(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?t(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):t(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./vant-legacy-b062184a.js","./vue-router-legacy-5923daa8.js","./Test-legacy-33b5c785.js","./monaco-editor-legacy-03ad5d45.js","./index-legacy-0a4f49c2.js","./@vue-legacy-b86327d3.js","./@vant-legacy-270078ef.js","./pinia-legacy-eaae6d52.js","./vue-demi-legacy-cf2ccb43.js","./pinia-plugin-persistedstate-legacy-d4b8a6c7.js","./lodash-es-legacy-9934df71.js","./vconsole-legacy-2de85e2c.js","./axios-legacy-1d058a1c.js","./vite-plugin-mock-legacy-95a233c7.js","./mockjs-legacy-0ecbc81d.js","./path-to-regexp-legacy-558a8e0c.js"],(function(t){"use strict";var a,l,o,r,u,c,i,s,f,d,v,p,g,m,y,b,j,O,h,w,_,V,P,k,x,B,E,L,R,S,z,D,M;return{setters:[function(e){a=e.N,l=e.F,o=e.R,r=e.e,u=e.f,c=e.B},function(e){i=e.b,s=e.o},function(e){f=e.T},function(e){d=e.W,v=e.a,p=e.b,g=e.c,m=e.d,y=e.e},function(e){b=e._,j=e.k},function(e){O=e.q,h=e.r,w=e.l,_=e.Y,V=e.e,P=e.x,k=e.t,x=e.J,B=e.M,E=e.a,L=e.s,R=e.L,S=e.F,z=e.u,D=e.P,M=e.B},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var C=b(O({props:{language:null},setup(e,{expose:t}){const n=e;self.MonacoEnvironment={getWorker:(e,t)=>"json"===t?new d:"css"===t||"scss"===t||"less"===t?new v:"html"===t||"handlebars"===t||"razor"===t?new p:"typescript"===t||"javascript"===t?new g:new m};const a=h(),l=h(),{language:o}=w(n);_((()=>{l.value&&y.setModelLanguage(k(l.value).getModel(),o.value)})),V((()=>{a.value&&(l.value=y.create(a.value,{value:"",language:o.value?o.value:"shell",theme:"vs-dark",formatOnPaste:!0,fontSize:14,minimap:{enabled:!1},overviewRulerBorder:!1,scrollBeyondLastLine:!1}))}));P((()=>{l.value&&k(l.value).dispose()}));return t({handleValue:()=>k(l.value).getValue(),setValue:e=>{k(l.value).setValue(e)},setReadOnly:()=>{l.value&&k(l.value).updateOptions({readOnly:!0})}}),(e,t)=>(x(),B("div",{ref_key:"inputContainer",ref:a,class:"editorStyle"},null,512))}}),[["__scopeId","data-v-2d4b0364"]]);const F=M("是"),U=M("否"),W={class:"radio_wrap"},T=D("div",{class:"radio_title"},"脚本类型：",-1),q=M("Bash"),I=M("Windows批处理"),J=M("预览"),N=j(),Y=O({name:"form-test",beforeRouteEnter(e,t,n){n((()=>{N.add(e.name)}))}});t("default",O(n(n({},Y),{},{setup(t){i();const n=function(){var t,n=(t=function*(){yield m(),g.value.setReadOnly()},function(){var n=this,a=arguments;return new Promise((function(l,o){var r=t.apply(n,a);function u(t){e(r,l,o,u,c,"next",t)}function c(t){e(r,l,o,u,c,"throw",t)}u(void 0)}))});return function(){return n.apply(this,arguments)}}(),d=E({files:"",overwrite:"0",file_format:1,content:""}),v=()=>history.back();s(((e,t,n)=>{console.log("leave"),"preview"===e.name||N.remove(t.name),n()}));const p=h(),g=h(),m=()=>p.value.validate(),y=()=>!!g.value.handleValue();return(e,t)=>{const i=a,s=l,m=o,b=r,j=u,O=c;return x(),B(S,null,[L(i,{title:"表单","left-text":"返回","left-arrow":"",onClickLeft:v}),L(f),L(j,{ref_key:"jobForm",ref:p},{default:R((()=>[L(s,{modelValue:z(d).files,"onUpdate:modelValue":t[0]||(t[0]=e=>z(d).files=e),label:"输入框",autocomplete:"off"},null,8,["modelValue"]),L(b,{modelValue:z(d).overwrite,"onUpdate:modelValue":t[1]||(t[1]=e=>z(d).overwrite=e),direction:"horizontal"},{default:R((()=>[L(m,{name:"0"},{default:R((()=>[F])),_:1}),L(m,{name:"1"},{default:R((()=>[U])),_:1})])),_:1},8,["modelValue"]),D("div",W,[T,L(b,{modelValue:z(d).file_format,"onUpdate:modelValue":t[2]||(t[2]=e=>z(d).file_format=e),direction:"horizontal"},{default:R((()=>[L(m,{name:1},{default:R((()=>[q])),_:1}),L(m,{name:2},{default:R((()=>[I])),_:1})])),_:1},8,["modelValue"])]),L(C,{ref_key:"codeEditor",ref:g,language:1===z(d).file_format?"shell":"bat",content:z(d).content},null,8,["language","content"]),L(s,{rules:[{validator:y,message:"录入内容不能为空"}]},null,8,["rules"])])),_:1},512),L(O,{onClick:n},{default:R((()=>[J])),_:1})],64)}}})))}}}))}();
