import{d as e,o as r,c as t,r as o,a as n,b as s,N as i,e as a,f as c}from "./vendor.6f9af74c.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const l=e({setup: e=>(e, n)=>{const s=o("router-view");return r(),t(s)}}),d={},u=function(e, r){return r&&0!==r.length?Promise.all(r.map((e=>{if((e=`/${e}`)in d)return;d[e]=!0;const r=e.endsWith(".css"),t=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const o=document.createElement("link");return o.rel=r?"stylesheet":"modulepreload",r||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),r?new Promise(((r, t)=>{o.addEventListener("load",r),o.addEventListener("error",(()=>t(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())):e()};const f=[{path:"/",name:"Login",component:()=>u((()=>import("./Login.f14e4902.js")),["./Login.f14e4902.js","./Login.068baccb.css","./vendor.6f9af74c.js","./vendor.4356e6a6.css"])},{path:"/:pathMatch(.*)*",name:"404",component:()=>u((()=>import("./404.04f25e4a.js")),["./404.04f25e4a.js","./vendor.6f9af74c.js","./vendor.4356e6a6.css"])}],p=n({history:s(),routes:f});p.beforeEach(((e, r, t)=>{i.start(),t()})),p.afterEach((()=>{i.done()})),a(l).use(c()).use(p).mount("#app");
