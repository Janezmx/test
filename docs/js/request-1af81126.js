var i=(u,e,a)=>new Promise((D,c)=>{var E=s=>{try{m(a.next(s))}catch(F){c(F)}},B=s=>{try{m(a.throw(s))}catch(F){c(F)}},m=s=>s.done?D(s.value):Promise.resolve(s.value).then(E,B);m((a=a.apply(u,e)).next())});import{a as n}from"./axios-d6bcf34f.js";import{d as t,D as C}from"./vant-ea2a3469.js";import{c as b}from"./index-0eb504c6.js";const g=n.create({baseURL:b.baseApi,timeout:5e3,withCredentials:!1});g.interceptors.request.use(u=>(u.loading&&t.loading({message:"\u52A0\u8F7D\u4E2D...",forbidClick:!0}),u),u=>{Promise.reject(u)});g.interceptors.response.use(u=>i(void 0,null,function*(){t.clear();const e=u.data;if(e.code!==0){if(e.code===401)return;if(e.code==403){C.alert({title:"\u8B66\u544A",message:e.msg});return}return Promise.reject(new Error(e.msg||"Error"))}else return u.data}),u=>{if(t.clear(),u&&u.response)switch(u.response.status){case 400:u.message="\u8BF7\u6C42\u9519\u8BEF(400)";break;case 401:u.message="\u672A\u6388\u6743,\u8BF7\u767B\u5F55(401)";break;case 403:u.message="\u62D2\u7EDD\u8BBF\u95EE(403)";break;case 404:u.message=`\u8BF7\u6C42\u5730\u5740\u51FA\u9519: ${u.response.config.url}`;break;case 405:u.message="\u8BF7\u6C42\u65B9\u6CD5\u672A\u5141\u8BB8(405)";break;case 408:u.message="\u8BF7\u6C42\u8D85\u65F6(408)";break;case 500:u.message="\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF(500)";break;case 501:u.message="\u670D\u52A1\u672A\u5B9E\u73B0(501)";break;case 502:u.message="\u7F51\u7EDC\u9519\u8BEF(502)";break;case 503:u.message="\u670D\u52A1\u4E0D\u53EF\u7528(503)";break;case 504:u.message="\u7F51\u7EDC\u8D85\u65F6(504)";break;case 505:u.message="HTTP\u7248\u672C\u4E0D\u53D7\u652F\u6301(505)";break;default:u.message=`\u8FDE\u63A5\u9519\u8BEF: ${u.message}`}else u.message=="Network Error"&&u.message=="\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\uFF01",u.message="\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458";return t(u.message),Promise.reject(u)});export{g as s};
