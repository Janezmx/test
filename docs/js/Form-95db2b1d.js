var D=Object.defineProperty,M=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var F=(o,t,e)=>t in o?D(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,y=(o,t)=>{for(var e in t||(t={}))O.call(t,e)&&F(o,e,t[e]);if(B)for(var e of B(t))j.call(t,e)&&F(o,e,t[e]);return o},W=(o,t)=>M(o,N(t));var E=(o,t,e)=>new Promise((c,a)=>{var l=u=>{try{_(e.next(u))}catch(r){a(r)}},m=u=>{try{_(e.throw(u))}catch(r){a(r)}},_=u=>u.done?c(u.value):Promise.resolve(u.value).then(l,m);_((e=e.apply(o,t)).next())});import{N as z,F as S,R as U,e as P,f as T,B as q}from"./vant-ae53d9e7.js";import{b as G,o as I}from"./vue-router-9ab623f9.js";import{T as J}from"./Test-449862ec.js";import{W as K,a as Y,b as H,c as Q,d as X,e as C}from"./monaco-editor-20666878.js";import{_ as Z,k as ee}from"./index-512db50b.js";import{q as w,r as k,l as te,Y as oe,e as ae,x as re,t as v,J as R,M as x,a as ne,s,L as i,F as se,u as d,P as A,B as g}from"./@vue-3732ec2e.js";import"./@vant-856a7b01.js";import"./pinia-b30b9bad.js";import"./vue-demi-3c8f99f1.js";import"./pinia-plugin-persistedstate-f1177332.js";import"./lodash-es-64c0f301.js";import"./vconsole-90cc4834.js";import"./axios-d6bcf34f.js";import"./vite-plugin-mock-57207cc7.js";import"./mockjs-22f713a3.js";import"./path-to-regexp-dd3e7e88.js";const ue=w({props:{language:null},setup(o,{expose:t}){const e=o;self.MonacoEnvironment={getWorker(f,n){return n==="json"?new K:n==="css"||n==="scss"||n==="less"?new Y:n==="html"||n==="handlebars"||n==="razor"?new H:n==="typescript"||n==="javascript"?new Q:new X}};const c=k(),a=k(),{language:l}=te(e),m=()=>{c.value&&(a.value=C.create(c.value,{value:"",language:l.value?l.value:"shell",theme:"vs-dark",formatOnPaste:!0,fontSize:14,minimap:{enabled:!1},overviewRulerBorder:!1,scrollBeyondLastLine:!1}))};oe(()=>{a.value&&C.setModelLanguage(v(a.value).getModel(),l.value)}),ae(()=>{m()});const _=()=>{a.value&&v(a.value).updateOptions({readOnly:!0})};return re(()=>{a.value&&v(a.value).dispose()}),t({handleValue:()=>v(a.value).getValue(),setValue:f=>{v(a.value).setValue(f)},setReadOnly:_}),(f,n)=>(R(),x("div",{ref_key:"inputContainer",ref:c,class:"editorStyle"},null,512))}});var le=Z(ue,[["__scopeId","data-v-2d4b0364"]]);const ie=g("\u662F"),de=g("\u5426"),ce={class:"radio_wrap"},_e=A("div",{class:"radio_title"},"\u811A\u672C\u7C7B\u578B\uFF1A",-1),fe=g("Bash"),me=g("Windows\u6279\u5904\u7406"),pe=g("\u9884\u89C8"),b=ee(),ve=w({name:"form-test",beforeRouteEnter(o,t,e){e(()=>{b.add(o.name)})}}),De=w(W(y({},ve),{setup(o){G();const t=()=>E(this,null,function*(){yield m(),l.value.setReadOnly()}),e=ne({files:"",overwrite:"0",file_format:1,content:""}),c=()=>history.back();I((u,r,f)=>{console.log("leave"),u.name==="preview"||b.remove(r.name),f()});const a=k(),l=k(),m=()=>a.value.validate(),_=()=>!!l.value.handleValue();return(u,r)=>{const f=z,n=S,V=U,h=P,L=T,$=q;return R(),x(se,null,[s(f,{title:"\u8868\u5355","left-text":"\u8FD4\u56DE","left-arrow":"",onClickLeft:c}),s(J),s(L,{ref_key:"jobForm",ref:a},{default:i(()=>[s(n,{modelValue:d(e).files,"onUpdate:modelValue":r[0]||(r[0]=p=>d(e).files=p),label:"\u8F93\u5165\u6846",autocomplete:"off"},null,8,["modelValue"]),s(h,{modelValue:d(e).overwrite,"onUpdate:modelValue":r[1]||(r[1]=p=>d(e).overwrite=p),direction:"horizontal"},{default:i(()=>[s(V,{name:"0"},{default:i(()=>[ie]),_:1}),s(V,{name:"1"},{default:i(()=>[de]),_:1})]),_:1},8,["modelValue"]),A("div",ce,[_e,s(h,{modelValue:d(e).file_format,"onUpdate:modelValue":r[2]||(r[2]=p=>d(e).file_format=p),direction:"horizontal"},{default:i(()=>[s(V,{name:1},{default:i(()=>[fe]),_:1}),s(V,{name:2},{default:i(()=>[me]),_:1})]),_:1},8,["modelValue"])]),s(le,{ref_key:"codeEditor",ref:l,language:d(e).file_format===1?"shell":"bat",content:d(e).content},null,8,["language","content"]),s(n,{rules:[{validator:_,message:"\u5F55\u5165\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A"}]},null,8,["rules"])]),_:1},512),s($,{onClick:t},{default:i(()=>[pe]),_:1})],64)}}}));export{De as default};
