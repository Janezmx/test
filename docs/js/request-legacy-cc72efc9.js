!function(){function e(e,s,a,r,t,n,c){try{var o=e[n](c),i=o.value}catch(u){return void a(u)}o.done?s(i):Promise.resolve(i).then(r,t)}System.register(["./axios-legacy-1d058a1c.js","./vant-legacy-b2f45a12.js","./index-legacy-fa9f85aa.js"],(function(s){"use strict";var a,r,t,n;return{setters:[function(e){a=e.a},function(e){r=e.c,t=e.D},function(e){n=e.c}],execute:function(){const c=s("s",a.create({baseURL:n.baseApi,timeout:5e3,withCredentials:!1}));c.interceptors.request.use((e=>(e.loading&&r.loading({message:"加载中...",forbidClick:!0}),e)),(e=>{Promise.reject(e)})),c.interceptors.response.use(function(){var s,a=(s=function*(e){r.clear();const s=e.data;if(0!==s.code){if(401===s.code)return;return 403==s.code?void t.alert({title:"警告",message:s.msg}):Promise.reject(new Error(s.msg||"Error"))}return e.data},function(){var a=this,r=arguments;return new Promise((function(t,n){var c=s.apply(a,r);function o(s){e(c,t,n,o,i,"next",s)}function i(s){e(c,t,n,o,i,"throw",s)}o(void 0)}))});return function(e){return a.apply(this,arguments)}}(),(e=>{if(r.clear(),e&&e.response)switch(e.response.status){case 400:e.message="请求错误(400)";break;case 401:e.message="未授权,请登录(401)";break;case 403:e.message="拒绝访问(403)";break;case 404:e.message=`请求地址出错: ${e.response.config.url}`;break;case 405:e.message="请求方法未允许(405)";break;case 408:e.message="请求超时(408)";break;case 500:e.message="服务器内部错误(500)";break;case 501:e.message="服务未实现(501)";break;case 502:e.message="网络错误(502)";break;case 503:e.message="服务不可用(503)";break;case 504:e.message="网络超时(504)";break;case 505:e.message="HTTP版本不受支持(505)";break;default:e.message=`连接错误: ${e.message}`}else"Network Error"==e.message&&e.message,e.message="连接到服务器失败，请联系管理员";return r(e.message),Promise.reject(e)}))}}}))}();
