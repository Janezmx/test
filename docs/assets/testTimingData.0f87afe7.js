import{d as s,l as n,n as a,o as r,f as l,q as c,t as i}from"./vendor.72d86c59.js";import{s as u,u as p}from"./index.es.3736d248.js";import"./index.c2041d84.js";import"./index.2d00a8f6.js";const m=()=>u({url:"/getTimingData",method:"GET"}),B=s({setup(g){const t=n({}),o=async()=>{p(m,{pollingInterval:5e3,onSuccess:e=>{console.log("onSuccess",e),t.value=e}})};return a(()=>{o()}),(e,f)=>(r(),l("div",null,[c("pre",null,i(t.value),1)]))}});export{B as default};
