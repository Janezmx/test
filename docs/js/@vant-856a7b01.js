import{i as m,o as E,c as b,r as f,a as h,p as N,b as k,d as L,w as x,e as C,u as p,g as O,n as y,f as _,h as M}from"./@vue-3732ec2e.js";var w=typeof window!="undefined",P=n=>n===window,g=(n,e)=>({top:0,left:0,right:n,bottom:e,width:n,height:e}),I=n=>{const e=p(n);if(P(e)){const t=e.innerWidth,i=e.innerHeight;return g(t,i)}return e!=null&&e.getBoundingClientRect?e.getBoundingClientRect():g(0,0)};function H(n){const e=m(n,null);if(e){const t=O(),{link:i,unlink:r,internalChildren:o}=e;i(t),E(()=>r(t));const s=b(()=>o.indexOf(t));return{parent:e,index:s}}return{parent:null,index:f(-1)}}function R(n){const e=[],t=i=>{Array.isArray(i)&&i.forEach(r=>{var o;M(r)&&(e.push(r),(o=r.component)!=null&&o.subTree&&(e.push(r.component.subTree),t(r.component.subTree.children)),r.children&&t(r.children))})};return t(n),e}function S(n,e,t){const i=R(n.subTree.children);t.sort((o,s)=>i.indexOf(o.vnode)-i.indexOf(s.vnode));const r=t.map(o=>o.proxy);e.sort((o,s)=>{const c=r.indexOf(o),a=r.indexOf(s);return c-a})}function j(n){const e=h([]),t=h([]),i=O();return{children:e,linkChildren:o=>{N(n,Object.assign({link:a=>{a.proxy&&(t.push(a),e.push(a.proxy),S(i,e,t))},unlink:a=>{const u=t.indexOf(a);e.splice(u,1),t.splice(u,1)},children:e,internalChildren:t},o))}}}function D(n){let e;C(()=>{n(),y(()=>{e=!0})}),_(()=>{e&&n()})}function z(n,e,t={}){if(!w)return;const{target:i=window,passive:r=!1,capture:o=!1}=t;let s;const c=u=>{const d=p(u);d&&!s&&(d.addEventListener(n,e,{capture:o,passive:r}),s=!0)},a=u=>{const d=p(u);d&&s&&(d.removeEventListener(n,e,o),s=!1)};E(()=>a(i)),k(()=>a(i)),D(()=>c(i)),L(i)&&x(i,(u,d)=>{a(d),c(u)})}var l,v;function F(){if(!l&&(l=f(0),v=f(0),w)){const n=()=>{l.value=window.innerWidth,v.value=window.innerHeight};n(),window.addEventListener("resize",n,{passive:!0}),window.addEventListener("orientationchange",n,{passive:!0})}return{width:l,height:v}}var A=/scroll|auto/i,T=w?window:void 0;function B(n){return n.tagName!=="HTML"&&n.tagName!=="BODY"&&n.nodeType===1}function V(n,e=T){let t=n;for(;t&&t!==e&&B(t);){const{overflowY:i}=window.getComputedStyle(t);if(A.test(i))return t;t=t.parentNode}return e}function U(n,e=T){const t=f();return C(()=>{n.value&&(t.value=V(n.value,e))}),t}var W=Symbol("van-field");function J(n){const e=m(W,null);e&&!e.customValue.value&&(e.customValue.value=n,x(n,()=>{e.resetValidation(),e.validateWithTrigger("onChange")}))}export{W as C,j as a,H as b,z as c,J as d,I as e,U as f,V as g,D as o,F as u};