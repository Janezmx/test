import{d as u,o as l,f as c,n as e,u as r}from"./vendor.36c2bc47.js";var i="/assets/pic.8d2dc3c0.jpeg",a="/assets/\u56FE\u7247.1b54b261.jpg",d="data:undefined;base64,Ly8gaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKCXNldHVwKCkgewoJCXJldHVybiAoKSA9PiB7CgkJCXJldHVybiA8ZGl2PmhlbGxvIHRzeDwvZGl2PgoJCX0KCX0KfSkK",n=`console.log('\u6D4B\u8BD5\u6587\u4EF6')
export const a = 1
`;function p(){return new Worker("/assets/worker.4ae28b42.js",{type:"module"})}const v="vite-vue3-h5-template",g="1.0.0",m={dev:"vite --mode development",test:"vite --mode test",prod:"vite --mode production",build:"vue-tsc --noEmit && vite build",preview:"vite preview"},b={vue:"^3.2.25"},w={"@types/node":"^12.20.39","@vitejs/plugin-vue":"^2.0.0","@vitejs/plugin-vue-jsx":"^1.3.3",sass:"^1.45.1",typescript:"^4.4.4",vite:"^2.7.2","vue-tsc":"^0.29.8"};var F={name:v,version:g,scripts:m,dependencies:b,devDependencies:w};const B=e("h1",null,"\u6D4B\u8BD5\u9759\u6001\u8D44\u6E90\u4F7F\u7528",-1),D=e("img",{src:i,alt:""},null,-1),_=["src"],C=u({setup(f){console.log("\u9759\u6001\u56FE\u7247--",a),console.log("\u663E\u5F0F\u52A0\u8F7D\u8D44\u6E90\u7684url--",d),console.log("\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u52A0\u8F7D\u8D44\u6E90--",`\u7C7B\u578B${typeof n}`,n),console.log("\u8BFB\u53D6json--",F);const t=new p;t.onmessage=function(s){console.log("worker\u76D1\u542C---",s)};const o=new URL("/assets/year.8db53ba6.png",self.location).href;return console.log("\u4F7F\u7528 new URL ---------"),console.log(o),(s,E)=>(l(),c("div",null,[B,D,e("img",{src:r(o),alt:""},null,8,_)]))}});export{C as default};