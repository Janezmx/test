import{s as n,u}from"./index.es.96b5b15b.js";import{d as s,n as l,q as c,y as a,o as i,f as d,u as m}from"./vendor.18746c01.js";import"./index.5a19bca4.js";import"./index.c2041d84.js";import"./index.36fb6b2f.js";const f=()=>n({url:"/user/info",method:"get",loading:!0});var p=s({setup(){const e=l(null),o=async()=>{const{data:t,run:r}=u(f);await r(),console.log(t.value?.data),e.value=t.value?.data};return c(()=>{o()}),()=>a("div",{class:"test-mock-axios"},[a("div",null,[`${JSON.stringify(e.value)}`])])}});const x=s({setup(e){return(o,t)=>(i(),d("div",null,[a(m(p))]))}});export{x as default};