var p=(r,a,t)=>new Promise((i,e)=>{var s=o=>{try{n(t.next(o))}catch(m){e(m)}},c=o=>{try{n(t.throw(o))}catch(m){e(m)}},n=o=>o.done?i(o.value):Promise.resolve(o.value).then(s,c);n((t=t.apply(r,a)).next())});import{s as d}from"./request-4d658908.js";import{u as f}from"./vue-request-c36325b3.js";import{q as l,r as v,e as _,s as u,H as g,L as k,u as h}from"./@vue-9c0d8f5b.js";import"./axios-d6bcf34f.js";import"./vant-e7af1985.js";import"./@vant-f243dbfd.js";import"./index-c0401a1e.js";import"./pinia-16b77b12.js";import"./vue-demi-3c8f99f1.js";import"./pinia-plugin-persistedstate-f1177332.js";import"./vue-router-5f491500.js";import"./lodash-es-64c0f301.js";import"./vconsole-90cc4834.js";import"./vite-plugin-mock-57207cc7.js";import"./mockjs-22f713a3.js";import"./path-to-regexp-dd3e7e88.js";const x=()=>d({url:"/user/info",method:"get",loading:!0});var q=l({setup(){const r=v(null),a=()=>p(this,null,function*(){var e,s;const{data:t,run:i}=f(x);yield i(),console.log((e=t.value)==null?void 0:e.data),r.value=(s=t.value)==null?void 0:s.data});return _(()=>{a()}),()=>u("div",{class:"test-mock-axios"},[u("div",null,[`${JSON.stringify(r.value)}`])])}});const V=l({setup(r){return(a,t)=>(g(),k("div",null,[u(h(q))]))}});export{V as default};
