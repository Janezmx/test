import{s as r,u}from"./index.es.9598bb81.js";import{d as o,l,n as c,v as a,o as i,f as d,u as f}from"./vendor.64aee9b8.js";import"./index.c2041d84.js";import"./index.dcfb2b4a.js";const m=()=>r({url:"/user/info",method:"get",loading:!0});var p=o({setup(){const e=l(null),s=async()=>{const{data:t,run:n}=u(m);await n(),console.log(t.value?.data),e.value=t.value?.data};return c(()=>{s()}),()=>a("div",{class:"test-mock-axios"},[a("div",null,[`${JSON.stringify(e.value)}`])])}});const h=o({setup(e){return(s,t)=>(i(),d("div",null,[a(f(p))]))}});export{h as default};
