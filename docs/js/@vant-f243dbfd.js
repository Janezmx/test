import{i as m,o as E,c as O,r as v,a as h,p as T,w as x,g as C,b,d as N,u as p,e as k,n as L,f as y,h as _}from"./@vue-9c0d8f5b.js";var w=typeof window!="undefined",M=n=>n===window,g=(n,e)=>({top:0,left:0,right:n,bottom:e,width:n,height:e}),Y=n=>{const e=p(n);if(M(e)){const t=e.innerWidth,i=e.innerHeight;return g(t,i)}return e!=null&&e.getBoundingClientRect?e.getBoundingClientRect():g(0,0)};function I(n){const e=m(n,null);if(e){const t=C(),{link:i,unlink:r,internalChildren:o}=e;i(t),E(()=>r(t));const s=O(()=>o.indexOf(t));return{parent:e,index:s}}return{parent:null,index:v(-1)}}function R(n){const e=[],t=i=>{Array.isArray(i)&&i.forEach(r=>{var o;_(r)&&(e.push(r),(o=r.component)!=null&&o.subTree&&(e.push(r.component.subTree),t(r.component.subTree.children)),r.children&&t(r.children))})};return t(n),e}function D(n,e,t){const i=R(n.subTree.children);t.sort((o,s)=>i.indexOf(o.vnode)-i.indexOf(s.vnode));const r=t.map(o=>o.proxy);e.sort((o,s)=>{const c=r.indexOf(o),a=r.indexOf(s);return c-a})}function H(n){const e=h([]),t=h([]),i=C();return{children:e,linkChildren:o=>{T(n,Object.assign({link:a=>{a.proxy&&(t.push(a),e.push(a.proxy),D(i,e,t))},unlink:a=>{const u=t.indexOf(a);e.splice(u,1),t.splice(u,1)},children:e,internalChildren:t},o))}}}function S(n){let e;k(()=>{n(),L(()=>{e=!0})}),y(()=>{e&&n()})}function j(n,e,t={}){if(!w)return;const{target:i=window,passive:r=!1,capture:o=!1}=t;let s;const c=u=>{const d=p(u);d&&!s&&(d.addEventListener(n,e,{capture:o,passive:r}),s=!0)},a=u=>{const d=p(u);d&&s&&(d.removeEventListener(n,e,o),s=!1)};E(()=>a(i)),b(()=>a(i)),S(()=>c(i)),N(i)&&x(i,(u,d)=>{a(d),c(u)})}var l,f;function z(){if(!l&&(l=v(0),f=v(0),w)){const n=()=>{l.value=window.innerWidth,f.value=window.innerHeight};n(),window.addEventListener("resize",n,{passive:!0}),window.addEventListener("orientationchange",n,{passive:!0})}return{width:l,height:f}}var A=/scroll|auto/i,B=w?window:void 0;function P(n){return n.tagName!=="HTML"&&n.tagName!=="BODY"&&n.nodeType===1}function F(n,e=B){let t=n;for(;t&&t!==e&&P(t);){const{overflowY:i}=window.getComputedStyle(t);if(A.test(i))return t;t=t.parentNode}return e}var V=Symbol("van-field");function U(n){const e=m(V,null);e&&!e.customValue.value&&(e.customValue.value=n,x(n,()=>{e.resetValidation(),e.validateWithTrigger("onChange")}))}export{V as C,H as a,I as b,j as c,U as d,Y as e,F as g,S as o,z as u};
