import{M as pe,O as Lt,d as Ft,P as Bt,l as E,Q as _t,k as ie,b as ot,m as Ae,R as Pt,u as $t}from"./vendor.72d86c59.js";import"./index.c2041d84.js";import{c as It}from"./index.2d00a8f6.js";var je={exports:{}},ut=function(e,r){return function(){for(var a=new Array(arguments.length),s=0;s<a.length;s++)a[s]=arguments[s];return e.apply(r,a)}},jt=ut,W=Object.prototype.toString;function Ue(t){return Array.isArray(t)}function Pe(t){return typeof t>"u"}function Ut(t){return t!==null&&!Pe(t)&&t.constructor!==null&&!Pe(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function lt(t){return W.call(t)==="[object ArrayBuffer]"}function kt(t){return W.call(t)==="[object FormData]"}function qt(t){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&lt(t.buffer),e}function Ht(t){return typeof t=="string"}function Mt(t){return typeof t=="number"}function ct(t){return t!==null&&typeof t=="object"}function Ee(t){if(W.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function Wt(t){return W.call(t)==="[object Date]"}function Qt(t){return W.call(t)==="[object File]"}function Jt(t){return W.call(t)==="[object Blob]"}function ft(t){return W.call(t)==="[object Function]"}function Vt(t){return ct(t)&&ft(t.pipe)}function Kt(t){return W.call(t)==="[object URLSearchParams]"}function zt(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Yt(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function ke(t,e){if(!(t===null||typeof t>"u"))if(typeof t!="object"&&(t=[t]),Ue(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.call(null,t[a],a,t)}function $e(){var t={};function e(a,s){Ee(t[s])&&Ee(a)?t[s]=$e(t[s],a):Ee(a)?t[s]=$e({},a):Ue(a)?t[s]=a.slice():t[s]=a}for(var r=0,n=arguments.length;r<n;r++)ke(arguments[r],e);return t}function Gt(t,e,r){return ke(e,function(a,s){r&&typeof a=="function"?t[s]=jt(a,r):t[s]=a}),t}function Xt(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var x={isArray:Ue,isArrayBuffer:lt,isBuffer:Ut,isFormData:kt,isArrayBufferView:qt,isString:Ht,isNumber:Mt,isObject:ct,isPlainObject:Ee,isUndefined:Pe,isDate:Wt,isFile:Qt,isBlob:Jt,isFunction:ft,isStream:Vt,isURLSearchParams:Kt,isStandardBrowserEnv:Yt,forEach:ke,merge:$e,extend:Gt,trim:zt,stripBOM:Xt},X=x;function ze(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var dt=function(e,r,n){if(!r)return e;var a;if(n)a=n(r);else if(X.isURLSearchParams(r))a=r.toString();else{var s=[];X.forEach(r,function(l,v){l===null||typeof l>"u"||(X.isArray(l)?v=v+"[]":l=[l],X.forEach(l,function(f){X.isDate(f)?f=f.toISOString():X.isObject(f)&&(f=JSON.stringify(f)),s.push(ze(v)+"="+ze(f))}))}),a=s.join("&")}if(a){var u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e},Zt=x;function Ce(){this.handlers=[]}Ce.prototype.use=function(e,r,n){return this.handlers.push({fulfilled:e,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};Ce.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};Ce.prototype.forEach=function(e){Zt.forEach(this.handlers,function(n){n!==null&&e(n)})};var er=Ce,tr=x,rr=function(e,r){tr.forEach(e,function(a,s){s!==r&&s.toUpperCase()===r.toUpperCase()&&(e[r]=a,delete e[s])})},ht=function(e,r,n,a,s){return e.config=r,n&&(e.code=n),e.request=a,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},mt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nr=ht,vt=function(e,r,n,a,s){var u=new Error(e);return nr(u,r,n,a,s)},ar=vt,sr=function(e,r,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?e(n):r(ar("Request failed with status code "+n.status,n.config,null,n.request,n))},de=x,ir=de.isStandardBrowserEnv()?function(){return{write:function(r,n,a,s,u,o){var l=[];l.push(r+"="+encodeURIComponent(n)),de.isNumber(a)&&l.push("expires="+new Date(a).toGMTString()),de.isString(s)&&l.push("path="+s),de.isString(u)&&l.push("domain="+u),o===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){var n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),or=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},ur=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},lr=or,cr=ur,fr=function(e,r){return e&&!lr(r)?cr(e,r):r},xe=x,dr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],hr=function(e){var r={},n,a,s;return e&&xe.forEach(e.split(`
`),function(o){if(s=o.indexOf(":"),n=xe.trim(o.substr(0,s)).toLowerCase(),a=xe.trim(o.substr(s+1)),n){if(r[n]&&dr.indexOf(n)>=0)return;n==="set-cookie"?r[n]=(r[n]?r[n]:[]).concat([a]):r[n]=r[n]?r[n]+", "+a:a}}),r},Ye=x,mr=Ye.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),n;function a(s){var u=s;return e&&(r.setAttribute("href",u),u=r.href),r.setAttribute("href",u),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=a(window.location.href),function(u){var o=Ye.isString(u)?a(u):u;return o.protocol===n.protocol&&o.host===n.host}}():function(){return function(){return!0}}();function qe(t){this.message=t}qe.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};qe.prototype.__CANCEL__=!0;var Te=qe,he=x,vr=sr,pr=ir,Er=dt,br=fr,yr=hr,gr=mr,Ne=vt,wr=mt,Cr=Te,Ge=function(e){return new Promise(function(n,a){var s=e.data,u=e.headers,o=e.responseType,l;function v(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}he.isFormData(s)&&delete u["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";u.Authorization="Basic "+btoa(f+":"+y)}var p=br(e.baseURL,e.url);i.open(e.method.toUpperCase(),Er(p,e.params,e.paramsSerializer),!0),i.timeout=e.timeout;function N(){if(!!i){var g="getAllResponseHeaders"in i?yr(i.getAllResponseHeaders()):null,w=!o||o==="text"||o==="json"?i.responseText:i.response,T={data:w,status:i.status,statusText:i.statusText,headers:g,config:e,request:i};vr(function(S){n(S),v()},function(S){a(S),v()},T),i=null}}if("onloadend"in i?i.onloadend=N:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(N)},i.onabort=function(){!i||(a(Ne("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){a(Ne("Network Error",e,null,i)),i=null},i.ontimeout=function(){var w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",T=e.transitional||wr;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),a(Ne(w,e,T.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",i)),i=null},he.isStandardBrowserEnv()){var D=(e.withCredentials||gr(p))&&e.xsrfCookieName?pr.read(e.xsrfCookieName):void 0;D&&(u[e.xsrfHeaderName]=D)}"setRequestHeader"in i&&he.forEach(u,function(w,T){typeof s>"u"&&T.toLowerCase()==="content-type"?delete u[T]:i.setRequestHeader(T,w)}),he.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),o&&o!=="json"&&(i.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(g){!i||(a(!g||g&&g.type?new Cr("canceled"):g),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),s||(s=null),i.send(s)})},C=x,Xe=rr,Tr=ht,Or=mt,Rr={"Content-Type":"application/x-www-form-urlencoded"};function Ze(t,e){!C.isUndefined(t)&&C.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function Sr(){var t;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(t=Ge),t}function Ar(t,e,r){if(C.isString(t))try{return(e||JSON.parse)(t),C.trim(t)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(t)}var Oe={transitional:Or,adapter:Sr(),transformRequest:[function(e,r){return Xe(r,"Accept"),Xe(r,"Content-Type"),C.isFormData(e)||C.isArrayBuffer(e)||C.isBuffer(e)||C.isStream(e)||C.isFile(e)||C.isBlob(e)?e:C.isArrayBufferView(e)?e.buffer:C.isURLSearchParams(e)?(Ze(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):C.isObject(e)||r&&r["Content-Type"]==="application/json"?(Ze(r,"application/json"),Ar(e)):e}],transformResponse:[function(e){var r=this.transitional||Oe.transitional,n=r&&r.silentJSONParsing,a=r&&r.forcedJSONParsing,s=!n&&this.responseType==="json";if(s||a&&C.isString(e)&&e.length)try{return JSON.parse(e)}catch(u){if(s)throw u.name==="SyntaxError"?Tr(u,this,"E_JSON_PARSE"):u}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};C.forEach(["delete","get","head"],function(e){Oe.headers[e]={}});C.forEach(["post","put","patch"],function(e){Oe.headers[e]=C.merge(Rr)});var He=Oe,xr=x,Nr=He,Dr=function(e,r,n){var a=this||Nr;return xr.forEach(n,function(u){e=u.call(a,e,r)}),e},pt=function(e){return!!(e&&e.__CANCEL__)},et=x,De=Dr,Lr=pt,Fr=He,Br=Te;function Le(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Br("canceled")}var _r=function(e){Le(e),e.headers=e.headers||{},e.data=De.call(e,e.data,e.headers,e.transformRequest),e.headers=et.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),et.forEach(["delete","get","head","post","put","patch","common"],function(a){delete e.headers[a]});var r=e.adapter||Fr.adapter;return r(e).then(function(a){return Le(e),a.data=De.call(e,a.data,a.headers,e.transformResponse),a},function(a){return Lr(a)||(Le(e),a&&a.response&&(a.response.data=De.call(e,a.response.data,a.response.headers,e.transformResponse))),Promise.reject(a)})},F=x,Et=function(e,r){r=r||{};var n={};function a(i,f){return F.isPlainObject(i)&&F.isPlainObject(f)?F.merge(i,f):F.isPlainObject(f)?F.merge({},f):F.isArray(f)?f.slice():f}function s(i){if(F.isUndefined(r[i])){if(!F.isUndefined(e[i]))return a(void 0,e[i])}else return a(e[i],r[i])}function u(i){if(!F.isUndefined(r[i]))return a(void 0,r[i])}function o(i){if(F.isUndefined(r[i])){if(!F.isUndefined(e[i]))return a(void 0,e[i])}else return a(void 0,r[i])}function l(i){if(i in r)return a(e[i],r[i]);if(i in e)return a(void 0,e[i])}var v={url:u,method:u,data:u,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l};return F.forEach(Object.keys(e).concat(Object.keys(r)),function(f){var y=v[f]||s,p=y(f);F.isUndefined(p)&&y!==l||(n[f]=p)}),n},bt={version:"0.26.1"},Pr=bt.version,Me={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){Me[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});var tt={};Me.transitional=function(e,r,n){function a(s,u){return"[Axios v"+Pr+"] Transitional option '"+s+"'"+u+(n?". "+n:"")}return function(s,u,o){if(e===!1)throw new Error(a(u," has been removed"+(r?" in "+r:"")));return r&&!tt[u]&&(tt[u]=!0,console.warn(a(u," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(s,u,o):!0}};function $r(t,e,r){if(typeof t!="object")throw new TypeError("options must be an object");for(var n=Object.keys(t),a=n.length;a-- >0;){var s=n[a],u=e[s];if(u){var o=t[s],l=o===void 0||u(o,s,t);if(l!==!0)throw new TypeError("option "+s+" must be "+l);continue}if(r!==!0)throw Error("Unknown option "+s)}}var Ir={assertOptions:$r,validators:Me},yt=x,jr=dt,rt=er,nt=_r,Re=Et,gt=Ir,Z=gt.validators;function ue(t){this.defaults=t,this.interceptors={request:new rt,response:new rt}}ue.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=Re(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var n=r.transitional;n!==void 0&&gt.assertOptions(n,{silentJSONParsing:Z.transitional(Z.boolean),forcedJSONParsing:Z.transitional(Z.boolean),clarifyTimeoutError:Z.transitional(Z.boolean)},!1);var a=[],s=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(r)===!1||(s=s&&p.synchronous,a.unshift(p.fulfilled,p.rejected))});var u=[];this.interceptors.response.forEach(function(p){u.push(p.fulfilled,p.rejected)});var o;if(!s){var l=[nt,void 0];for(Array.prototype.unshift.apply(l,a),l=l.concat(u),o=Promise.resolve(r);l.length;)o=o.then(l.shift(),l.shift());return o}for(var v=r;a.length;){var i=a.shift(),f=a.shift();try{v=i(v)}catch(y){f(y);break}}try{o=nt(v)}catch(y){return Promise.reject(y)}for(;u.length;)o=o.then(u.shift(),u.shift());return o};ue.prototype.getUri=function(e){return e=Re(this.defaults,e),jr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};yt.forEach(["delete","get","head","options"],function(e){ue.prototype[e]=function(r,n){return this.request(Re(n||{},{method:e,url:r,data:(n||{}).data}))}});yt.forEach(["post","put","patch"],function(e){ue.prototype[e]=function(r,n,a){return this.request(Re(a||{},{method:e,url:r,data:n}))}});var Ur=ue,kr=Te;function te(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(a){e=a});var r=this;this.promise.then(function(n){if(!!r._listeners){var a,s=r._listeners.length;for(a=0;a<s;a++)r._listeners[a](n);r._listeners=null}}),this.promise.then=function(n){var a,s=new Promise(function(u){r.subscribe(u),a=u}).then(n);return s.cancel=function(){r.unsubscribe(a)},s},t(function(a){r.reason||(r.reason=new kr(a),e(r.reason))})}te.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};te.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};te.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};te.source=function(){var e,r=new te(function(a){e=a});return{token:r,cancel:e}};var qr=te,Hr=function(e){return function(n){return e.apply(null,n)}},Mr=x,Wr=function(e){return Mr.isObject(e)&&e.isAxiosError===!0},at=x,Qr=ut,be=Ur,Jr=Et,Vr=He;function wt(t){var e=new be(t),r=Qr(be.prototype.request,e);return at.extend(r,be.prototype,e),at.extend(r,e),r.create=function(a){return wt(Jr(t,a))},r}var I=wt(Vr);I.Axios=be;I.Cancel=Te;I.CancelToken=qr;I.isCancel=pt;I.VERSION=bt.version;I.all=function(e){return Promise.all(e)};I.spread=Hr;I.isAxiosError=Wr;je.exports=I;je.exports.default=I;var Kr=je.exports;const Ct=Kr.create({baseURL:It.baseApi,timeout:5e3,withCredentials:!1});Ct.interceptors.request.use(t=>(t.loading&&pe.loading({message:"\u52A0\u8F7D\u4E2D...",forbidClick:!0}),t),t=>{Promise.reject(t)});Ct.interceptors.response.use(async t=>{pe.clear();const e=t.data;if(e.code!==0){if(e.code===401)return;if(e.code==403){Lt.alert({title:"\u8B66\u544A",message:e.msg});return}return Promise.reject(new Error(e.msg||"Error"))}else return t.data},t=>{if(pe.clear(),t&&t.response)switch(t.response.status){case 400:t.message="\u8BF7\u6C42\u9519\u8BEF(400)";break;case 401:t.message="\u672A\u6388\u6743,\u8BF7\u767B\u5F55(401)";break;case 403:t.message="\u62D2\u7EDD\u8BBF\u95EE(403)";break;case 404:t.message=`\u8BF7\u6C42\u5730\u5740\u51FA\u9519: ${t.response.config.url}`;break;case 405:t.message="\u8BF7\u6C42\u65B9\u6CD5\u672A\u5141\u8BB8(405)";break;case 408:t.message="\u8BF7\u6C42\u8D85\u65F6(408)";break;case 500:t.message="\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF(500)";break;case 501:t.message="\u670D\u52A1\u672A\u5B9E\u73B0(501)";break;case 502:t.message="\u7F51\u7EDC\u9519\u8BEF(502)";break;case 503:t.message="\u670D\u52A1\u4E0D\u53EF\u7528(503)";break;case 504:t.message="\u7F51\u7EDC\u8D85\u65F6(504)";break;case 505:t.message="HTTP\u7248\u672C\u4E0D\u53D7\u652F\u6301(505)";break;default:t.message=`\u8FDE\u63A5\u9519\u8BEF: ${t.message}`}else t.message=="Network Error"&&t.message=="\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\uFF01",t.message="\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458";return pe(t.message),Promise.reject(t)});const zr={},Tt=Symbol("GLOBAL_OPTIONS_PROVIDE_KEY"),Yr=()=>zr;Ft({name:"RequestConfig",props:{config:{type:Object,required:!0}},setup(t,{slots:e}){const{config:r}=t;return Bt(Tt,r),()=>{var n;return(n=e.default)===null||n===void 0?void 0:n.call(e)}}});const Gr=Object.prototype.toString,Ot=t=>Gr.call(t),Xr=t=>Ot(t)==="[object String]",Zr=t=>Ot(t)==="[object Object]",We=t=>t!==null&&typeof t=="object",en=t=>We(t)&&we(t.then)&&we(t.catch),we=t=>t instanceof Function,ye=t=>t==null,Qe=typeof window>"u",Ie=()=>{var t,e;return!Qe&&((t=window)===null||t===void 0||(e=t.document)===null||e===void 0?void 0:e.visibilityState)==="visible"},st=()=>{var t,e,r;return(t=!Qe&&((e=window)===null||e===void 0||(r=e.navigator)===null||r===void 0?void 0:r.onLine))!==null&&t!==void 0?t:!0},tn=t=>{const e={};return Object.keys(t).forEach(r=>{e[r]=$t(t[r])}),e},oe=Promise.resolve(null),it=async(...t)=>{const e=await fetch(...t);if(e.ok)return e.json();throw new Error(e.statusText)};function rn(t,e){const r=Object.assign({},t);for(const n of e)delete r[n];return r}const nn=(t,e=!1)=>{const r=`Warning: [vue-request] ${t}`;if(e)return new Error(r);console.error(r)},an=(t,e)=>{let r=!1;return(...n)=>{r||(r=!0,t(...n),setTimeout(()=>{r=!1},e))}};var Fe;const Rt=new Set,St=new Set,At=new Set,me=(t,e)=>{let r;switch(t){case"FOCUS_LISTENER":r=Rt;break;case"RECONNECT_LISTENER":r=At;break;case"VISIBLE_LISTENER":r=St;break}if(!r.has(e))return r.add(e),()=>{r.delete(e)}},Be=t=>{t.forEach(e=>{e()})};!Qe&&(Fe=window)!==null&&Fe!==void 0&&Fe.addEventListener&&(window.addEventListener("visibilitychange",()=>{Ie()&&Be(St)},!1),window.addEventListener("focus",()=>Be(Rt),!1),window.addEventListener("online",()=>Be(At),!1));function xt(t,e,r){let n,a,s,u,o,l,v=0,i=!1,f=!1,y=!0;const p=!e&&e!==0&&typeof window.requestAnimationFrame=="function";if(typeof t!="function")throw new TypeError("Expected a function");e=+e||0,We(r)&&(i=!!r.leading,f="maxWait"in r,s=f?Math.max(+r.maxWait||0,e):s,y="trailing"in r?!!r.trailing:y);function N(h){const m=n,O=a;return n=a=void 0,v=h,u=t.apply(O,m),u}function D(h,m){return p?(window.cancelAnimationFrame(o),window.requestAnimationFrame(h)):setTimeout(h,m)}function g(h){if(p)return window.cancelAnimationFrame(h);clearTimeout(h)}function w(h){return v=h,o=D(S,e),i?N(h):u}function T(h){const m=h-l,O=h-v,L=e-m;return f?Math.min(L,s-O):L}function k(h){const m=h-l,O=h-v;return l===void 0||m>=e||m<0||f&&O>=s}function S(){const h=Date.now();if(k(h))return re(h);o=D(S,T(h))}function re(h){return o=void 0,y&&n?N(h):(n=a=void 0,u)}function j(){o!==void 0&&g(o),v=0,n=l=a=o=void 0}function Q(){return o===void 0?u:re(Date.now())}function J(){return o!==void 0}function B(...h){const m=Date.now(),O=k(m);if(n=h,a=this,l=m,O){if(o===void 0)return w(l);if(f)return o=D(S,e),N(l)}return o===void 0&&(o=D(S,e)),u}return B.cancel=j,B.flush=Q,B.pending=J,B}function sn(t,e,r){let n=!0,a=!0;if(typeof t!="function")throw new TypeError("Expected a function");return We(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),xt(t,e,{leading:n,trailing:a,maxWait:e})}const on=(t,e)=>r=>{Object.keys(r).forEach(n=>{t[n].value=r[n]}),e.forEach(n=>n(t))},ve=(t,e,r)=>{var n,a,s;const{initialAutoRunFlag:u,initialData:o,loadingDelay:l,pollingInterval:v,debounceInterval:i,debounceOptions:f,throttleInterval:y,throttleOptions:p,pollingWhenHidden:N,pollingWhenOffline:D,errorRetryCount:g,errorRetryInterval:w,stopPollingWhenHiddenOrOffline:T,refreshOnWindowFocus:k,refocusTimespan:S,updateCache:re,formatResult:j,onSuccess:Q,onError:J,onBefore:B,onAfter:h}=e,m=E(0),O=E((n=r?.loading)!==null&&n!==void 0?n:!1),L=E((a=r?.data)!==null&&a!==void 0?a:o),q=E(r?.error),V=E((s=r?.params)!==null&&s!==void 0?s:[]),U=on({loading:O,data:L,error:q,params:V},[d=>re(d)]),z=()=>{m.value=0},H=E(0),Y=E(),ne=E(),G=E(),le=()=>{Y.value&&Y.value(),G.value&&G.value(),ne.value&&ne.value()},ae=()=>{let d;return l&&(d=setTimeout(U,l,{loading:!0})),()=>d&&clearTimeout(d)},ce=d=>{if(q.value&&g!==0)return;let R;if(!ye(v)&&v>=0)if((N||Ie())&&(D||st()))R=setTimeout(d,v);else{T.value=!0;return}return()=>R&&clearTimeout(R)},c=ot(()=>{if(w)return w;const d=1e3,R=1,P=9,K=Math.floor(Math.random()*2**Math.min(m.value,P)+R);return d*K}),A=d=>{let R;const P=g===-1,K=m.value<g;return q.value&&(P||K)&&(P||(m.value+=1),R=setTimeout(d,c.value)),()=>R&&clearTimeout(R)},b=(...d)=>{U({loading:!l,params:d}),G.value=ae(),H.value+=1;const R=H.value;return B?.(d),t(...d).then(P=>{if(R===H.value){const K=j?j(P):P;return U({data:K,loading:!1,error:void 0}),Q&&Q(K,d),z(),K}return oe}).catch(P=>(R===H.value&&(U({data:void 0,loading:!1,error:P}),J&&J(P,d),console.error(P)),oe)).finally(()=>{R===H.value&&(G.value(),ne.value=A(()=>b(...d)),Y.value=ce(()=>b(...d)),h?.(d))})},$=!ye(i)&&xt(b,i,f),_=!ye(y)&&sn(b,y,p),M=(...d)=>(le(),!u.value&&$?($(...d),oe):_?(_(...d),oe):(z(),b(...d))),se=()=>{H.value+=1,U({loading:!1}),$&&$.cancel(),_&&_.cancel(),le()},Se=()=>M(...V.value),Dt=d=>{const R=we(d)?d(L.value):d;U({data:R})},Je=[],fe=d=>{d&&Je.push(d)},Ve=()=>{T.value&&(N||Ie())&&(D||st())&&(Se(),T.value=!1)};N||fe(me("VISIBLE_LISTENER",Ve)),D||fe(me("RECONNECT_LISTENER",Ve));const Ke=an(Se,S);return k&&(fe(me("VISIBLE_LISTENER",Ke)),fe(me("FOCUS_LISTENER",Ke))),{loading:O,data:L,error:q,params:V,run:M,cancel:se,refresh:Se,mutate:Dt,unmount:()=>{Je.forEach(d=>d())}}},ge=new Map,_e=t=>{if(ye(t))return;const e=ge.get(t);if(!!e)return{data:e.data,cacheTime:e.cacheTime}},un=(t,e,r)=>{const n=ge.get(t);n!=null&&n.timer&&clearTimeout(n.timer);const a=setTimeout(()=>ge.delete(t),r);ge.set(t,{data:e,timer:a,cacheTime:new Date().getTime()})},ee="__QUERY_DEFAULT_KEY__";function ln(t,e){const r=_t(Tt,{}),{cacheKey:n,defaultParams:a=[],manual:s=!1,ready:u=E(!0),refreshDeps:o=[],loadingDelay:l=0,pollingWhenHidden:v=!1,pollingWhenOffline:i=!1,refreshOnWindowFocus:f=!1,refocusTimespan:y=5e3,cacheTime:p=6e5,staleTime:N=0,errorRetryCount:D=0,errorRetryInterval:g=0,queryKey:w,...T}={...Yr(),...r,...e},k=E(!1),S=E(!1),j={initialAutoRunFlag:S,loadingDelay:l,pollingWhenHidden:v,pollingWhenOffline:i,stopPollingWhenHiddenOrOffline:k,cacheKey:n,errorRetryCount:D,errorRetryInterval:g,refreshOnWindowFocus:f,refocusTimespan:y,updateCache:c=>{var A,b;if(!n)return;const $=(A=_e(n))===null||A===void 0?void 0:A.data,_=$?.queries,M=tn(c),se=(b=w?.(...c.params.value))!==null&&b!==void 0?b:ee;un(n,{queries:{..._,[se]:{..._?.[se],...M}},latestQueriesKey:se},p)},...rn(T,["pagination","listKey"])},Q=E(!1),J=E(),B=E(),h=E(),m=ie({[ee]:ie(ve(t,j))}),O=E(ee),L=ot(()=>{var c;return(c=m[O.value])!==null&&c!==void 0?c:{}});if(Ae(L,c=>{Q.value=c.loading,J.value=c.data,B.value=c.error,h.value=c.params},{immediate:!0,deep:!0}),n){var q;const c=_e(n);c!=null&&(q=c.data)!==null&&q!==void 0&&q.queries&&(Object.keys(c.data.queries).forEach(A=>{const b=c.data.queries[A];m[A]=ie(ve(t,j,{loading:b.loading,params:b.params,data:b.data,error:b.error}))}),c.data.latestQueriesKey&&(O.value=c.data.latestQueriesKey))}const V=E(),U=E(!1),z=(...c)=>{var A;if(!u.value&&!U.value)return V.value=c,oe;const b=(A=w?.(...c))!==null&&A!==void 0?A:ee;return m[b]||(m[b]=ie(ve(t,j))),O.value=b,L.value.run(...c)},H=()=>{Y(),O.value=ee,m[ee]=ie(ve(t,j))},Y=()=>{Object.keys(m).forEach(c=>{m[c].cancel(),m[c].unmount(),delete m[c]})},ne=()=>L.value.cancel(),G=()=>L.value.refresh(),le=c=>L.value.mutate(c);if(!s){var ae;S.value=!0;const c=_e(n),A=(ae=c?.data.queries)!==null&&ae!==void 0?ae:{},b=c&&(N===-1||c.cacheTime+N>new Date().getTime()),$=Object.keys(A).length>0;b||($?Object.keys(m).forEach(_=>{var M;(M=m[_])===null||M===void 0||M.refresh()}):z(...a)),S.value=!1}const ce=E();return ce.value=Ae(u,c=>{U.value=!0,c&&V.value&&(z(...V.value),ce.value())},{flush:"sync"}),o.length&&Ae(o,()=>{!s&&L.value.refresh()}),Pt(()=>{Y()}),{loading:Q,data:J,error:B,params:h,cancel:ne,refresh:G,mutate:le,run:z,reset:H,queries:m}}const Nt=t=>(...e)=>{if(we(t))return Nt(t(...e))();if(en(t))return t;if(Zr(t)){const{url:r,...n}=t;return it(r,n)}else{if(Xr(t))return it(t);throw nn("Unknown service type",!0)}};function mn(t,e){const r=Nt(t),{reset:n,run:a,...s}=ln(r,e??{}),u=E(!1);return{reload:async()=>{const{defaultParams:l=[],manual:v}=e;n(),v||(u.value=!0,await a(...l),u.value=!1)},run:a,reloading:u,...s}}export{Ct as s,mn as u};
