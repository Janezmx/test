import{s,u as n}from"./index.es.9598bb81.js";import{d as a,l as r,n as l,o as c,f as i,q as u,t as p}from"./vendor.64aee9b8.js";import"./index.c2041d84.js";import"./index.dcfb2b4a.js";const m=()=>s({url:"/getTimingData",method:"GET"}),B=a({setup(g){const t=r({}),o=async()=>{n(m,{pollingInterval:5e3,onSuccess:e=>{console.log("onSuccess",e),t.value=e}})};return l(()=>{o()}),(e,f)=>(c(),i("div",null,[u("pre",null,p(t.value),1)]))}});export{B as default};
