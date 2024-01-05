var qe=Object.defineProperty,Ke=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var ie=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var _e=Math.pow,be=(e,t,n)=>t in e?qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))Re.call(t,n)&&be(e,n,t[n]);if(ie)for(var n of ie(t))Ie.call(t,n)&&be(e,n,t[n]);return e},Le=(e,t)=>Ke(e,xe(t));var ae=(e,t)=>{var n={};for(var r in e)Re.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ie)for(var r of ie(e))t.indexOf(r)<0&&Ie.call(e,r)&&(n[r]=e[r]);return n};var fe=(e,t,n)=>new Promise((r,s)=>{var h=l=>{try{c(n.next(l))}catch(g){s(g)}},m=l=>{try{c(n.throw(l))}catch(g){s(g)}},c=l=>l.done?r(l.value):Promise.resolve(l.value).then(h,m);c((n=n.apply(e,t)).next())});import{q as Ue,p as Be,r as d,i as Me,a as Z,c as je,w as ve,o as Ve,u as He}from"./@vue-2a6541b0.js";const Ye={},Ne=Symbol("GLOBAL_OPTIONS_PROVIDE_KEY"),Ge=()=>Ye;Ue({name:"RequestConfig",props:{config:{type:Object,required:!0}},setup(e,{slots:t}){const{config:n}=e;return Be(Ne,n),()=>{var r;return(r=t.default)===null||r===void 0?void 0:r.call(t)}}});const $e=Object.prototype.toString,Ae=e=>$e.call(e),ze=e=>Ae(e)==="[object String]",Je=e=>Ae(e)==="[object Object]",Te=e=>e!==null&&typeof e=="object",Xe=e=>Te(e)&&de(e.then)&&de(e.catch),de=e=>e instanceof Function,le=e=>e==null,ye=typeof window=="undefined",Ee=()=>{var e,t;return!ye&&((e=window)===null||e===void 0||(t=e.document)===null||t===void 0?void 0:t.visibilityState)==="visible"},Ce=()=>{var e,t,n;return(e=!ye&&((t=window)===null||t===void 0||(n=t.navigator)===null||n===void 0?void 0:n.onLine))!==null&&e!==void 0?e:!0},Ze=e=>{const t={};return Object.keys(e).forEach(n=>{t[n]=He(e[n])}),t},ee=Promise.resolve(null),Se=(...e)=>fe(void 0,null,function*(){const t=yield fetch(...e);if(t.ok)return t.json();throw new Error(t.statusText)});function en(e,t){const n=Object.assign({},e);for(const r of t)delete n[r];return n}const nn=(e,t=!1)=>{const n=`Warning: [vue-request] ${e}`;if(t)return new Error(n);console.error(n)},tn=(e,t)=>{let n=!1;return(...r)=>{n||(n=!0,e(...r),setTimeout(()=>{n=!1},t))}};var me;const Fe=new Set,Pe=new Set,Qe=new Set,ue=(e,t)=>{let n;switch(e){case"FOCUS_LISTENER":n=Fe;break;case"RECONNECT_LISTENER":n=Qe;break;case"VISIBLE_LISTENER":n=Pe;break}if(!n.has(t))return n.add(t),()=>{n.delete(t)}},ge=e=>{e.forEach(t=>{t()})};!ye&&(me=window)!==null&&me!==void 0&&me.addEventListener&&(window.addEventListener("visibilitychange",()=>{Ee()&&ge(Pe)},!1),window.addEventListener("focus",()=>ge(Fe),!1),window.addEventListener("online",()=>ge(Qe),!1));function ke(e,t,n){let r,s,h,m,c,l,g=0,L=!1,C=!1,F=!0;const M=!t&&t!==0&&typeof window.requestAnimationFrame=="function";if(typeof e!="function")throw new TypeError("Expected a function");t=+t||0,Te(n)&&(L=!!n.leading,C="maxWait"in n,h=C?Math.max(+n.maxWait||0,t):h,F="trailing"in n?!!n.trailing:F);function b(a){const u=r,E=s;return r=s=void 0,g=a,m=e.apply(E,u),m}function R(a,u){return M?(window.cancelAnimationFrame(c),window.requestAnimationFrame(a)):setTimeout(a,u)}function k(a){if(M)return window.cancelAnimationFrame(a);clearTimeout(a)}function p(a){return g=a,c=R(I,t),L?b(a):m}function W(a){const u=a-l,E=a-g,y=t-u;return C?Math.min(y,h-E):y}function V(a){const u=a-l,E=a-g;return l===void 0||u>=t||u<0||C&&E>=h}function I(){const a=Date.now();if(V(a))return z(a);c=R(I,W(a))}function z(a){return c=void 0,F&&r?b(a):(r=s=void 0,m)}function S(){c!==void 0&&k(c),g=0,r=l=s=c=void 0}function D(){return c===void 0?m:z(Date.now())}function q(){return c!==void 0}function w(...a){const u=Date.now(),E=V(u);if(r=a,s=this,l=u,E){if(c===void 0)return p(l);if(C)return c=R(I,t),b(l)}return c===void 0&&(c=R(I,t)),m}return w.cancel=S,w.flush=D,w.pending=q,w}function rn(e,t,n){let r=!0,s=!0;if(typeof e!="function")throw new TypeError("Expected a function");return Te(n)&&(r="leading"in n?!!n.leading:r,s="trailing"in n?!!n.trailing:s),ke(e,t,{leading:r,trailing:s,maxWait:t})}const on=(e,t)=>n=>{Object.keys(n).forEach(r=>{e[r].value=n[r]}),t.forEach(r=>r(e))},se=(e,t,n)=>{var r,s,h;const{initialAutoRunFlag:m,initialData:c,loadingDelay:l,pollingInterval:g,debounceInterval:L,debounceOptions:C,throttleInterval:F,throttleOptions:M,pollingWhenHidden:b,pollingWhenOffline:R,errorRetryCount:k,errorRetryInterval:p,stopPollingWhenHiddenOrOffline:W,refreshOnWindowFocus:V,refocusTimespan:I,updateCache:z,formatResult:S,onSuccess:D,onError:q,onBefore:w,onAfter:a}=t,u=d(0),E=d((r=n==null?void 0:n.loading)!==null&&r!==void 0?r:!1),y=d((s=n==null?void 0:n.data)!==null&&s!==void 0?s:c),P=d(n==null?void 0:n.error),K=d((h=n==null?void 0:n.params)!==null&&h!==void 0?h:[]),j=on({loading:E,data:y,error:P,params:K},[i=>z(i)]),H=()=>{u.value=0},Q=d(0),Y=d(),J=d(),G=d(),ne=()=>{Y.value&&Y.value(),G.value&&G.value(),J.value&&J.value()},X=()=>{let i;return l&&(i=setTimeout(j,l,{loading:!0})),()=>i&&clearTimeout(i)},te=i=>{if(P.value&&k!==0)return;let T;if(!le(g)&&g>=0)if((b||Ee())&&(R||Ce()))T=setTimeout(i,g);else{W.value=!0;return}return()=>T&&clearTimeout(T)},re=je(()=>{if(p)return p;const i=1e3,T=1,O=9,B=Math.floor(Math.random()*_e(2,Math.min(u.value,O))+T);return i*B}),o=i=>{let T;const O=k===-1,B=u.value<k;return P.value&&(O||B)&&(O||(u.value+=1),T=setTimeout(i,re.value)),()=>T&&clearTimeout(T)},v=(...i)=>{j({loading:!l,params:i}),G.value=X(),Q.value+=1;const T=Q.value;return w==null||w(i),e(...i).then(O=>{if(T===Q.value){const B=S?S(O):O;return j({data:B,loading:!1,error:void 0}),D&&D(B,i),H(),B}return ee}).catch(O=>(T===Q.value&&(j({data:void 0,loading:!1,error:O}),q&&q(O,i),console.error(O)),ee)).finally(()=>{T===Q.value&&(G.value(),J.value=o(()=>v(...i)),Y.value=te(()=>v(...i)),a==null||a(i))})},f=!le(L)&&ke(v,L,C),_=!le(F)&&rn(v,F,M),N=(...i)=>(ne(),!m.value&&f?(f(...i),ee):_?(_(...i),ee):(H(),v(...i))),x=()=>{Q.value+=1,j({loading:!1}),f&&f.cancel(),_&&_.cancel(),ne()},U=()=>N(...K.value),De=i=>{const T=de(i)?i(y.value):i;j({data:T})},pe=[],oe=i=>{i&&pe.push(i)},we=()=>{W.value&&(b||Ee())&&(R||Ce())&&(U(),W.value=!1)};b||oe(ue("VISIBLE_LISTENER",we)),R||oe(ue("RECONNECT_LISTENER",we));const Oe=tn(U,I);return V&&(oe(ue("VISIBLE_LISTENER",Oe)),oe(ue("FOCUS_LISTENER",Oe))),{loading:E,data:y,error:P,params:K,run:N,cancel:x,refresh:U,mutate:De,unmount:()=>{pe.forEach(i=>i())}}},ce=new Map,he=e=>{if(le(e))return;const t=ce.get(e);if(!!t)return{data:t.data,cacheTime:t.cacheTime}},an=(e,t,n)=>{const r=ce.get(e);r!=null&&r.timer&&clearTimeout(r.timer);const s=setTimeout(()=>ce.delete(e),n);ce.set(e,{data:t,timer:s,cacheTime:new Date().getTime()})},$="__QUERY_DEFAULT_KEY__";function un(e,t){const n=Me(Ne,{}),re=A(A(A({},Ge()),n),t),{cacheKey:r,defaultParams:s=[],manual:h=!1,ready:m=d(!0),refreshDeps:c=[],loadingDelay:l=0,pollingWhenHidden:g=!1,pollingWhenOffline:L=!1,refreshOnWindowFocus:C=!1,refocusTimespan:F=5e3,cacheTime:M=6e5,staleTime:b=0,errorRetryCount:R=0,errorRetryInterval:k=0,queryKey:p}=re,W=ae(re,["cacheKey","defaultParams","manual","ready","refreshDeps","loadingDelay","pollingWhenHidden","pollingWhenOffline","refreshOnWindowFocus","refocusTimespan","cacheTime","staleTime","errorRetryCount","errorRetryInterval","queryKey"]),V=d(!1),I=d(!1),S=A({initialAutoRunFlag:I,loadingDelay:l,pollingWhenHidden:g,pollingWhenOffline:L,stopPollingWhenHiddenOrOffline:V,cacheKey:r,errorRetryCount:R,errorRetryInterval:k,refreshOnWindowFocus:C,refocusTimespan:F,updateCache:o=>{var v,f;if(!r)return;const _=(v=he(r))===null||v===void 0?void 0:v.data,N=_==null?void 0:_.queries,x=Ze(o),U=(f=p==null?void 0:p(...o.params.value))!==null&&f!==void 0?f:$;an(r,{queries:Le(A({},N),{[U]:A(A({},N==null?void 0:N[U]),x)}),latestQueriesKey:U},M)}},en(W,["pagination","listKey"])),D=d(!1),q=d(),w=d(),a=d(),u=Z({[$]:Z(se(e,S))}),E=d($),y=je(()=>{var o;return(o=u[E.value])!==null&&o!==void 0?o:{}});if(ve(y,o=>{D.value=o.loading,q.value=o.data,w.value=o.error,a.value=o.params},{immediate:!0,deep:!0}),r){var P;const o=he(r);o!=null&&(P=o.data)!==null&&P!==void 0&&P.queries&&(Object.keys(o.data.queries).forEach(v=>{const f=o.data.queries[v];u[v]=Z(se(e,S,{loading:f.loading,params:f.params,data:f.data,error:f.error}))}),o.data.latestQueriesKey&&(E.value=o.data.latestQueriesKey))}const K=d(),j=d(!1),H=(...o)=>{var v;if(!m.value&&!j.value)return K.value=o,ee;const f=(v=p==null?void 0:p(...o))!==null&&v!==void 0?v:$;return u[f]||(u[f]=Z(se(e,S))),E.value=f,y.value.run(...o)},Q=()=>{Y(),E.value=$,u[$]=Z(se(e,S))},Y=()=>{Object.keys(u).forEach(o=>{u[o].cancel(),u[o].unmount(),delete u[o]})},J=()=>y.value.cancel(),G=()=>y.value.refresh(),ne=o=>y.value.mutate(o);if(!h){var X;I.value=!0;const o=he(r),v=(X=o==null?void 0:o.data.queries)!==null&&X!==void 0?X:{},f=o&&(b===-1||o.cacheTime+b>new Date().getTime()),_=Object.keys(v).length>0;f||(_?Object.keys(u).forEach(N=>{var x;(x=u[N])===null||x===void 0||x.refresh()}):H(...s)),I.value=!1}const te=d();return te.value=ve(m,o=>{j.value=!0,o&&K.value&&(H(...K.value),te.value())},{flush:"sync"}),c.length&&ve(c,()=>{!h&&y.value.refresh()}),Ve(()=>{Y()}),{loading:D,data:q,error:w,params:a,cancel:J,refresh:G,mutate:ne,run:H,reset:Q,queries:u}}const We=e=>(...t)=>{if(de(e))return We(e(...t))();if(Xe(e))return e;if(Je(e)){const n=e,{url:r}=n,s=ae(n,["url"]);return Se(r,s)}else{if(ze(e))return Se(e);throw nn("Unknown service type",!0)}};function dn(e,t){const n=We(e),l=un(n,t!=null?t:{}),{reset:r,run:s}=l,h=ae(l,["reset","run"]),m=d(!1);return A({reload:()=>fe(this,null,function*(){const{defaultParams:g=[],manual:L}=t;r(),L||(m.value=!0,yield s(...g),m.value=!1)}),run:s,reloading:m},h)}export{dn as u};
