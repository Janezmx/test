import{s,u as n}from"./index.es.449f667e.js";import{d as a,n as r,q as c,o as l,f as i,x as u,t as p}from"./vendor.e0f8e8d7.js";import"./index.c2041d84.js";import"./index.869bf55a.js";const m=()=>s({url:"/getTimingData",method:"GET"}),x=a({setup(g){const t=r({}),o=async()=>{n(m,{pollingInterval:5e3,onSuccess:e=>{console.log("onSuccess",e),t.value=e}})};return c(()=>{o()}),(e,f)=>(l(),i("div",null,[u("pre",null,p(t.value),1)]))}});export{x as default};