import{s}from"./index.a1220c1e.js";import{u as n}from"./index.es.cef63f2c.js";import{d as a,l as r,J as l,o as c,f as i,n as u,t as m}from"./vendor.36c2bc47.js";const p=()=>s({url:"/getTimingData",method:"GET"}),D=a({setup(f){const o=r({}),t=async()=>{n(p,{pollingInterval:5e3,onSuccess:e=>{console.log("onSuccess",e),o.value=e}})};return l(()=>{t()}),(e,g)=>(c(),i("div",null,[u("pre",null,m(o.value),1)]))}});export{D as default};
