import{s as n,u}from"./index.es.d1cf599e.js";import{d as o,l,J as c,p as a,o as i,f as d,u as f}from"./vendor.7b2428d5.js";import"./index.c2041d84.js";import"./index.0ad63c2f.js";const m=()=>n({url:"/user/info",method:"get",loading:!0});var p=o({setup(){const e=l(null),s=async()=>{const{data:t,run:r}=u(m);await r(),console.log(t.value?.data),e.value=t.value?.data};return c(()=>{s()}),()=>a("div",{class:"test-mock-axios"},[a("div",null,[`${JSON.stringify(e.value)}`])])}});const h=o({setup(e){return(s,t)=>(i(),d("div",null,[a(f(p))]))}});export{h as default};