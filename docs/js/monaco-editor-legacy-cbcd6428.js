!function(){function e(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function t(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?e(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(e,t,i,n,o,s,r){try{var a=e[s](r),l=a.value}catch(d){return void i(d)}a.done?t(l):Promise.resolve(l).then(n,o)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(o,s){var r=e.apply(t,n);function a(e){i(r,o,s,a,l,"next",e)}function l(e){i(r,o,s,a,l,"throw",e)}a(void 0)}))}}function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}System.register([],(function(e){"use strict";return{execute:function(){function i(e,t,...i){return function(e,t){let i;return i=0===t.length?e:e.replace(/\{(\d+)\}/g,(function(e,i){const n=i[0];return void 0!==t[n]?t[n]:e})),i}(t,i)}var s;e({W:function(){return new Worker("/test/assets/json.worker.67fda3ea.js",{type:"module"})},a:function(){return new Worker("/test/assets/css.worker.5eaf9c51.js",{type:"module"})},b:function(){return new Worker("/test/assets/html.worker.f941e9c1.js",{type:"module"})},c:function(){return new Worker("/test/assets/ts.worker.e3647f8f.js",{type:"module"})}
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/((e,t,i,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of NH(t))IH.call(e,o)||!i&&"default"===o||DH(e,o,{get:()=>t[o],enumerable:!(n=TH(t,o))||n.enumerable})})(AH,LH);var RH={},MH={},OH=class e{static getOrCreate(t){return MH[t]||(MH[t]=new e(t)),MH[t]}constructor(e){o(this,"_languageId",void 0),o(this,"_loadingTriggered",void 0),o(this,"_lazyLoadPromise",void 0),o(this,"_lazyLoadPromiseResolve",void 0),o(this,"_lazyLoadPromiseReject",void 0),this._languageId=e,this._loadingTriggered=!1,this._lazyLoadPromise=new Promise(((e,t)=>{this._lazyLoadPromiseResolve=e,this._lazyLoadPromiseReject=t}))}load(){return this._loadingTriggered||(this._loadingTriggered=!0,RH[this._languageId].loader().then((e=>this._lazyLoadPromiseResolve(e)),(e=>this._lazyLoadPromiseReject(e)))),this._lazyLoadPromise}};function PH(e){const t=e.id;RH[t]=e,AH.languages.register(e);const i=OH.getOrCreate(t);var o;AH.languages.registerTokensProviderFactory(t,{create:(o=n((function*(){return(yield i.load()).language})),function(){return o.apply(this,arguments)})}),AH.languages.onLanguage(t,n((function*(){const e=yield i.load();AH.languages.setLanguageConfiguration(t,e.conf)})))}
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/PH({id:"abap",extensions:[".abap"],aliases:["abap","ABAP"],loader:()=>Promise.resolve().then((function(){return e8}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"apex",extensions:[".cls"],aliases:["Apex","apex"],mimetypes:["text/x-apex-source","text/x-apex"],loader:()=>Promise.resolve().then((function(){return o8}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"azcli",extensions:[".azcli"],aliases:["Azure CLI","azcli"],loader:()=>Promise.resolve().then((function(){return s8}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"bat",extensions:[".bat",".cmd"],aliases:["Batch","bat"],loader:()=>Promise.resolve().then((function(){return a8}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"bicep",extensions:[".bicep"],aliases:["Bicep"],loader:()=>Promise.resolve().then((function(){return h8}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"cameligo",extensions:[".mligo"],aliases:["Cameligo"],loader:()=>Promise.resolve().then((function(){return u8}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"clojure",extensions:[".clj",".cljs",".cljc",".edn"],aliases:["clojure","Clojure"],loader:()=>Promise.resolve().then((function(){return g8}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"coffeescript",extensions:[".coffee"],aliases:["CoffeeScript","coffeescript","coffee"],mimetypes:["text/x-coffeescript","text/coffeescript"],loader:()=>Promise.resolve().then((function(){return m8}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"c",extensions:[".c",".h"],aliases:["C","c"],loader:()=>Promise.resolve().then((function(){return _8}))}),PH({id:"cpp",extensions:[".cpp",".cc",".cxx",".hpp",".hh",".hxx"],aliases:["C++","Cpp","cpp"],loader:()=>Promise.resolve().then((function(){return _8}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"csharp",extensions:[".cs",".csx",".cake"],aliases:["C#","csharp"],loader:()=>Promise.resolve().then((function(){return v8}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"csp",extensions:[],aliases:["CSP","csp"],loader:()=>Promise.resolve().then((function(){return C8}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"css",extensions:[".css"],aliases:["CSS","css"],mimetypes:["text/css"],loader:()=>Promise.resolve().then((function(){return y8}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"dart",extensions:[".dart"],aliases:["Dart","dart"],mimetypes:["text/x-dart-source","text/x-dart"],loader:()=>Promise.resolve().then((function(){return S8}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"dockerfile",extensions:[".dockerfile"],filenames:["Dockerfile"],aliases:["Dockerfile"],loader:()=>Promise.resolve().then((function(){return x8}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"ecl",extensions:[".ecl"],aliases:["ECL","Ecl","ecl"],loader:()=>Promise.resolve().then((function(){return E8}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"elixir",extensions:[".ex",".exs"],aliases:["Elixir","elixir","ex"],loader:()=>Promise.resolve().then((function(){return L8}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"flow9",extensions:[".flow"],aliases:["Flow9","Flow","flow9","flow"],loader:()=>Promise.resolve().then((function(){return D8}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"fsharp",extensions:[".fs",".fsi",".ml",".mli",".fsx",".fsscript"],aliases:["F#","FSharp","fsharp"],loader:()=>Promise.resolve().then((function(){return N8}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"freemarker2",extensions:[".ftl",".ftlh",".ftlx"],aliases:["FreeMarker2","Apache FreeMarker2"],loader:()=>Promise.resolve().then((function(){return J8})).then((e=>e.TagAutoInterpolationDollar))}),PH({id:"freemarker2.tag-angle.interpolation-dollar",aliases:["FreeMarker2 (Angle/Dollar)","Apache FreeMarker2 (Angle/Dollar)"],loader:()=>Promise.resolve().then((function(){return J8})).then((e=>e.TagAngleInterpolationDollar))}),PH({id:"freemarker2.tag-bracket.interpolation-dollar",aliases:["FreeMarker2 (Bracket/Dollar)","Apache FreeMarker2 (Bracket/Dollar)"],loader:()=>Promise.resolve().then((function(){return J8})).then((e=>e.TagBracketInterpolationDollar))}),PH({id:"freemarker2.tag-angle.interpolation-bracket",aliases:["FreeMarker2 (Angle/Bracket)","Apache FreeMarker2 (Angle/Bracket)"],loader:()=>Promise.resolve().then((function(){return J8})).then((e=>e.TagAngleInterpolationBracket))}),PH({id:"freemarker2.tag-bracket.interpolation-bracket",aliases:["FreeMarker2 (Bracket/Bracket)","Apache FreeMarker2 (Bracket/Bracket)"],loader:()=>Promise.resolve().then((function(){return J8})).then((e=>e.TagBracketInterpolationBracket))}),PH({id:"freemarker2.tag-auto.interpolation-dollar",aliases:["FreeMarker2 (Auto/Dollar)","Apache FreeMarker2 (Auto/Dollar)"],loader:()=>Promise.resolve().then((function(){return J8})).then((e=>e.TagAutoInterpolationDollar))}),PH({id:"freemarker2.tag-auto.interpolation-bracket",aliases:["FreeMarker2 (Auto/Bracket)","Apache FreeMarker2 (Auto/Bracket)"],loader:()=>Promise.resolve().then((function(){return J8})).then((e=>e.TagAutoInterpolationBracket))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"go",extensions:[".go"],aliases:["Go"],loader:()=>Promise.resolve().then((function(){return e9}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"graphql",extensions:[".graphql",".gql"],aliases:["GraphQL","graphql","gql"],mimetypes:["application/graphql"],loader:()=>Promise.resolve().then((function(){return t9}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"handlebars",extensions:[".handlebars",".hbs"],aliases:["Handlebars","handlebars","hbs"],mimetypes:["text/x-handlebars-template"],loader:()=>Promise.resolve().then((function(){return d9}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"hcl",extensions:[".tf",".tfvars",".hcl"],aliases:["Terraform","tf","HCL","hcl"],loader:()=>Promise.resolve().then((function(){return c9}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"html",extensions:[".html",".htm",".shtml",".xhtml",".mdoc",".jsp",".asp",".aspx",".jshtm"],aliases:["HTML","htm","html","xhtml"],mimetypes:["text/html","text/x-jshtm","text/template","text/ng-template"],loader:()=>Promise.resolve().then((function(){return b9}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"ini",extensions:[".ini",".properties",".gitconfig"],filenames:["config",".gitattributes",".gitconfig",".editorconfig"],aliases:["Ini","ini"],loader:()=>Promise.resolve().then((function(){return v9}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"java",extensions:[".java",".jav"],aliases:["Java","java"],mimetypes:["text/x-java-source","text/x-java"],loader:()=>Promise.resolve().then((function(){return w9}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"javascript",extensions:[".js",".es6",".jsx",".mjs",".cjs"],firstLine:"^#!.*\\bnode",filenames:["jakefile"],aliases:["JavaScript","javascript","js"],mimetypes:["text/javascript"],loader:()=>Promise.resolve().then((function(){return A9}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"julia",extensions:[".jl"],aliases:["julia","Julia"],loader:()=>Promise.resolve().then((function(){return R9}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"kotlin",extensions:[".kt"],aliases:["Kotlin","kotlin"],mimetypes:["text/x-kotlin-source","text/x-kotlin"],loader:()=>Promise.resolve().then((function(){return O9}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"less",extensions:[".less"],aliases:["Less","less"],mimetypes:["text/x-less","text/less"],loader:()=>Promise.resolve().then((function(){return F9}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"lexon",extensions:[".lex"],aliases:["Lexon"],loader:()=>Promise.resolve().then((function(){return V9}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"lua",extensions:[".lua"],aliases:["Lua","lua"],loader:()=>Promise.resolve().then((function(){return W9}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"liquid",extensions:[".liquid",".html.liquid"],aliases:["Liquid","liquid"],mimetypes:["application/liquid"],loader:()=>Promise.resolve().then((function(){return G9}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"m3",extensions:[".m3",".i3",".mg",".ig"],aliases:["Modula-3","Modula3","modula3","m3"],loader:()=>Promise.resolve().then((function(){return Z9}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"markdown",extensions:[".md",".markdown",".mdown",".mkdn",".mkd",".mdwn",".mdtxt",".mdtext"],aliases:["Markdown","markdown"],loader:()=>Promise.resolve().then((function(){return X9}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"mips",extensions:[".s"],aliases:["MIPS","MIPS-V"],mimetypes:["text/x-mips","text/mips","text/plaintext"],loader:()=>Promise.resolve().then((function(){return J9}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"msdax",extensions:[".dax",".msdax"],aliases:["DAX","MSDAX"],loader:()=>Promise.resolve().then((function(){return e6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"mysql",extensions:[],aliases:["MySQL","mysql"],loader:()=>Promise.resolve().then((function(){return t6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"objective-c",extensions:[".m"],aliases:["Objective-C"],loader:()=>Promise.resolve().then((function(){return i6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"pascal",extensions:[".pas",".p",".pp"],aliases:["Pascal","pas"],mimetypes:["text/x-pascal-source","text/x-pascal"],loader:()=>Promise.resolve().then((function(){return o6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"pascaligo",extensions:[".ligo"],aliases:["Pascaligo","ligo"],loader:()=>Promise.resolve().then((function(){return s6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"perl",extensions:[".pl"],aliases:["Perl","pl"],loader:()=>Promise.resolve().then((function(){return r6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"pgsql",extensions:[],aliases:["PostgreSQL","postgres","pg","postgre"],loader:()=>Promise.resolve().then((function(){return a6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"php",extensions:[".php",".php4",".php5",".phtml",".ctp"],aliases:["PHP","php"],mimetypes:["application/x-php"],loader:()=>Promise.resolve().then((function(){return d6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"pla",extensions:[".pla"],loader:()=>Promise.resolve().then((function(){return c6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"postiats",extensions:[".dats",".sats",".hats"],aliases:["ATS","ATS/Postiats"],loader:()=>Promise.resolve().then((function(){return h6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"powerquery",extensions:[".pq",".pqm"],aliases:["PQ","M","Power Query","Power Query M"],loader:()=>Promise.resolve().then((function(){return u6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"powershell",extensions:[".ps1",".psm1",".psd1"],aliases:["PowerShell","powershell","ps","ps1"],loader:()=>Promise.resolve().then((function(){return p6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"proto",extensions:[".proto"],aliases:["protobuf","Protocol Buffers"],loader:()=>Promise.resolve().then((function(){return _6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"pug",extensions:[".jade",".pug"],aliases:["Pug","Jade","jade"],loader:()=>Promise.resolve().then((function(){return b6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"python",extensions:[".py",".rpy",".pyw",".cpy",".gyp",".gypi"],aliases:["Python","py"],firstLine:"^#!/.*\\bpython[0-9.-]*\\b",loader:()=>Promise.resolve().then((function(){return k6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"qsharp",extensions:[".qs"],aliases:["Q#","qsharp"],loader:()=>Promise.resolve().then((function(){return E6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"r",extensions:[".r",".rhistory",".rmd",".rprofile",".rt"],aliases:["R","r"],loader:()=>Promise.resolve().then((function(){return L6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"razor",extensions:[".cshtml"],aliases:["Razor","razor"],mimetypes:["text/x-cshtml"],loader:()=>Promise.resolve().then((function(){return O6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"redis",extensions:[".redis"],aliases:["redis"],loader:()=>Promise.resolve().then((function(){return P6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"redshift",extensions:[],aliases:["Redshift","redshift"],loader:()=>Promise.resolve().then((function(){return F6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"restructuredtext",extensions:[".rst"],aliases:["reStructuredText","restructuredtext"],loader:()=>Promise.resolve().then((function(){return V6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"ruby",extensions:[".rb",".rbx",".rjs",".gemspec",".pp"],filenames:["rakefile","Gemfile"],aliases:["Ruby","rb"],loader:()=>Promise.resolve().then((function(){return H6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"rust",extensions:[".rs",".rlib"],aliases:["Rust","rust"],loader:()=>Promise.resolve().then((function(){return U6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"sb",extensions:[".sb"],aliases:["Small Basic","sb"],loader:()=>Promise.resolve().then((function(){return $6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"scala",extensions:[".scala",".sc",".sbt"],aliases:["Scala","scala","SBT","Sbt","sbt","Dotty","dotty"],mimetypes:["text/x-scala-source","text/x-scala","text/x-sbt","text/x-dotty"],loader:()=>Promise.resolve().then((function(){return K6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"scheme",extensions:[".scm",".ss",".sch",".rkt"],aliases:["scheme","Scheme"],loader:()=>Promise.resolve().then((function(){return q6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"scss",extensions:[".scss"],aliases:["Sass","sass","scss"],mimetypes:["text/x-scss","text/scss"],loader:()=>Promise.resolve().then((function(){return Z6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"shell",extensions:[".sh",".bash"],aliases:["Shell","sh"],loader:()=>Promise.resolve().then((function(){return Y6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"sol",extensions:[".sol"],aliases:["sol","solidity","Solidity"],loader:()=>Promise.resolve().then((function(){return X6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"aes",extensions:[".aes"],aliases:["aes","sophia","Sophia"],loader:()=>Promise.resolve().then((function(){return Q6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"sparql",extensions:[".rq"],aliases:["sparql","SPARQL"],loader:()=>Promise.resolve().then((function(){return J6}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"sql",extensions:[".sql"],aliases:["SQL"],loader:()=>Promise.resolve().then((function(){return e7}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"st",extensions:[".st",".iecst",".iecplc",".lc3lib"],aliases:["StructuredText","scl","stl"],loader:()=>Promise.resolve().then((function(){return i7}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"swift",aliases:["Swift","swift"],extensions:[".swift"],mimetypes:["text/swift"],loader:()=>Promise.resolve().then((function(){return n7}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"systemverilog",extensions:[".sv",".svh"],aliases:["SV","sv","SystemVerilog","systemverilog"],loader:()=>Promise.resolve().then((function(){return s7}))}),PH({id:"verilog",extensions:[".v",".vh"],aliases:["V","v","Verilog","verilog"],loader:()=>Promise.resolve().then((function(){return s7}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"tcl",extensions:[".tcl"],aliases:["tcl","Tcl","tcltk","TclTk","tcl/tk","Tcl/Tk"],loader:()=>Promise.resolve().then((function(){return r7}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"twig",extensions:[".twig"],aliases:["Twig","twig"],mimetypes:["text/x-twig"],loader:()=>Promise.resolve().then((function(){return a7}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"typescript",extensions:[".ts",".tsx"],aliases:["TypeScript","ts","typescript"],mimetypes:["text/typescript"],loader:()=>Promise.resolve().then((function(){return T9}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"vb",extensions:[".vb"],aliases:["Visual Basic","vb"],loader:()=>Promise.resolve().then((function(){return d7}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"xml",extensions:[".xml",".dtd",".ascx",".csproj",".config",".wxi",".wxl",".wxs",".xaml",".svg",".svgz",".opf",".xsl"],firstLine:"(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",aliases:["XML","xml"],mimetypes:["text/xml","application/xml","application/xaml+xml","application/xml-dtd"],loader:()=>Promise.resolve().then((function(){return f7}))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
PH({id:"yaml",extensions:[".yaml",".yml"],aliases:["YAML","yaml","YML","yml"],mimetypes:["application/x-yaml","text/x-yaml"],loader:()=>Promise.resolve().then((function(){return _7}))});
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
var FH=Object.defineProperty,BH=Object.getOwnPropertyDescriptor,VH=Object.getOwnPropertyNames,WH=Object.prototype.hasOwnProperty,HH={};((e,t,i,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of VH(t))WH.call(e,o)||!i&&"default"===o||FH(e,o,{get:()=>t[o],enumerable:!(n=BH(t,o))||n.enumerable})})(HH,LH);var zH=class{constructor(e,t,i){o(this,"_onDidChange",new HH.Emitter),o(this,"_options",void 0),o(this,"_modeConfiguration",void 0),o(this,"_languageId",void 0),this._languageId=e,this.setOptions(t),this.setModeConfiguration(i)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get modeConfiguration(){return this._modeConfiguration}get diagnosticsOptions(){return this.options}get options(){return this._options}setOptions(e){this._options=e||Object.create(null),this._onDidChange.fire(this)}setDiagnosticsOptions(e){this.setOptions(e)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}},UH={validate:!0,lint:{compatibleVendorPrefixes:"ignore",vendorPrefix:"warning",duplicateProperties:"warning",emptyRules:"warning",importStatement:"ignore",boxModel:"ignore",universalSelector:"ignore",zeroUnits:"ignore",fontFaceProperties:"warning",hexColorLength:"error",argumentsInColorFunction:"error",unknownProperties:"warning",ieHack:"ignore",unknownVendorSpecificProperties:"ignore",propertyIgnoredDueToDisplay:"warning",important:"ignore",float:"ignore",idSelector:"ignore"},data:{useDefaultDataProvider:!0}},$H={completionItems:!0,hovers:!0,documentSymbols:!0,definitions:!0,references:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,diagnostics:!0,selectionRanges:!0},jH=new zH("css",UH,$H),KH=new zH("scss",UH,$H),qH=new zH("less",UH,$H);function GH(){return Promise.resolve().then((function(){return qte}))}HH.languages.css={cssDefaults:jH,lessDefaults:qH,scssDefaults:KH},HH.languages.onLanguage("less",(()=>{GH().then((e=>e.setupMode(qH)))})),HH.languages.onLanguage("scss",(()=>{GH().then((e=>e.setupMode(KH)))})),HH.languages.onLanguage("css",(()=>{GH().then((e=>e.setupMode(jH)))}));
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
var ZH=Object.defineProperty,YH=Object.getOwnPropertyDescriptor,XH=Object.getOwnPropertyNames,QH=Object.prototype.hasOwnProperty,JH={};((e,t,i,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of XH(t))QH.call(e,o)||!i&&"default"===o||ZH(e,o,{get:()=>t[o],enumerable:!(n=YH(t,o))||n.enumerable})})(JH,LH);var ez={format:{tabSize:4,insertSpaces:!1,wrapLineLength:120,unformatted:'default": "a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, q, samp, select, small, span, strong, sub, sup, textarea, tt, var',contentUnformatted:"pre",indentInnerHtml:!1,preserveNewLines:!0,maxPreserveNewLines:void 0,indentHandlebars:!1,endWithNewline:!1,extraLiners:"head, body, /html",wrapAttributes:"auto"},suggest:{},data:{useDefaultDataProvider:!0}};function tz(e){return{completionItems:!0,hovers:!0,documentSymbols:!0,links:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,selectionRanges:!0,diagnostics:e===iz,documentFormattingEdits:e===iz,documentRangeFormattingEdits:e===iz}}var iz="html",nz="handlebars",oz="razor",sz=hz(iz,ez,tz(iz)),rz=sz.defaults,az=hz(nz,ez,tz(nz)),lz=az.defaults,dz=hz(oz,ez,tz(oz)),cz=dz.defaults;function hz(e,t=ez,i=tz(e)){const s=new class{constructor(e,t,i){o(this,"_onDidChange",new JH.Emitter),o(this,"_options",void 0),o(this,"_modeConfiguration",void 0),o(this,"_languageId",void 0),this._languageId=e,this.setOptions(t),this.setModeConfiguration(i)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get options(){return this._options}get modeConfiguration(){return this._modeConfiguration}setOptions(e){this._options=e||Object.create(null),this._onDidChange.fire(this)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}}(e,t,i);let r;const a=JH.languages.onLanguage(e,n((function*(){r=(yield Promise.resolve().then((function(){return Ane}))).setupMode(s)})));return{defaults:s,dispose(){var e;a.dispose(),null===(e=r)||void 0===e||e.dispose(),r=void 0}}}
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/JH.languages.html={htmlDefaults:rz,razorDefaults:cz,handlebarDefaults:lz,htmlLanguageService:sz,handlebarLanguageService:az,razorLanguageService:dz,registerHTMLLanguageService:hz};var uz=Object.defineProperty,gz=Object.getOwnPropertyDescriptor,pz=Object.getOwnPropertyNames,mz=Object.prototype.hasOwnProperty,fz={};((e,t,i,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of pz(t))mz.call(e,o)||!i&&"default"===o||uz(e,o,{get:()=>t[o],enumerable:!(n=gz(t,o))||n.enumerable})})(fz,LH);var _z=new class{constructor(e,t,i){o(this,"_onDidChange",new fz.Emitter),o(this,"_diagnosticsOptions",void 0),o(this,"_modeConfiguration",void 0),o(this,"_languageId",void 0),this._languageId=e,this.setDiagnosticsOptions(t),this.setModeConfiguration(i)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get modeConfiguration(){return this._modeConfiguration}get diagnosticsOptions(){return this._diagnosticsOptions}setDiagnosticsOptions(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(this)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}}("json",{validate:!0,allowComments:!0,schemas:[],enableSchemaRequest:!1,schemaRequest:"warning",schemaValidation:"warning",comments:"error",trailingCommas:"error"},{documentFormattingEdits:!0,documentRangeFormattingEdits:!0,completionItems:!0,hovers:!0,documentSymbols:!0,tokens:!0,colors:!0,foldingRanges:!0,diagnostics:!0,selectionRanges:!0});fz.languages.json={jsonDefaults:_z},fz.languages.register({id:"json",extensions:[".json",".bowerrc",".jshintrc",".jscsrc",".eslintrc",".babelrc",".har"],aliases:["JSON","json"],mimetypes:["application/json"]}),fz.languages.onLanguage("json",(()=>{Promise.resolve().then((function(){return Pse})).then((e=>e.setupMode(_z)))}));
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/((e,t,i,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of Yte(t))Xte.call(e,o)||!i&&"default"===o||Gte(e,o,{get:()=>t[o],enumerable:!(n=Zte(t,o))||n.enumerable})})(Qte,LH);var Jte,eie,tie,iie,nie,oie,sie,rie,aie,lie,die,cie,hie,uie,gie,pie,mie,fie,_ie,bie,vie,Cie,wie,yie,Sie,xie,kie=class{constructor(e){o(this,"_defaults",void 0),o(this,"_idleCheckInterval",void 0),o(this,"_lastUsedTime",void 0),o(this,"_configChangeListener",void 0),o(this,"_worker",void 0),o(this,"_client",void 0),this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){if(!this._worker)return;Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=Qte.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}};!function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647}(Jte||(Jte={})),function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647}(eie||(eie={})),function(e){e.create=function(e,t){return e===Number.MAX_VALUE&&(e=eie.MAX_VALUE),t===Number.MAX_VALUE&&(t=eie.MAX_VALUE),{line:e,character:t}},e.is=function(e){var t=e;return sne.objectLiteral(t)&&sne.uinteger(t.line)&&sne.uinteger(t.character)}}(tie||(tie={})),function(e){e.create=function(e,t,i,n){if(sne.uinteger(e)&&sne.uinteger(t)&&sne.uinteger(i)&&sne.uinteger(n))return{start:tie.create(e,t),end:tie.create(i,n)};if(tie.is(e)&&tie.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+i+", "+n+"]")},e.is=function(e){var t=e;return sne.objectLiteral(t)&&tie.is(t.start)&&tie.is(t.end)}}(iie||(iie={})),function(e){e.create=function(e,t){return{uri:e,range:t}},e.is=function(e){var t=e;return sne.defined(t)&&iie.is(t.range)&&(sne.string(t.uri)||sne.undefined(t.uri))}}(nie||(nie={})),function(e){e.create=function(e,t,i,n){return{targetUri:e,targetRange:t,targetSelectionRange:i,originSelectionRange:n}},e.is=function(e){var t=e;return sne.defined(t)&&iie.is(t.targetRange)&&sne.string(t.targetUri)&&(iie.is(t.targetSelectionRange)||sne.undefined(t.targetSelectionRange))&&(iie.is(t.originSelectionRange)||sne.undefined(t.originSelectionRange))}}(oie||(oie={})),function(e){e.create=function(e,t,i,n){return{red:e,green:t,blue:i,alpha:n}},e.is=function(e){var t=e;return sne.numberRange(t.red,0,1)&&sne.numberRange(t.green,0,1)&&sne.numberRange(t.blue,0,1)&&sne.numberRange(t.alpha,0,1)}}(sie||(sie={})),function(e){e.create=function(e,t){return{range:e,color:t}},e.is=function(e){var t=e;return iie.is(t.range)&&sie.is(t.color)}}(rie||(rie={})),function(e){e.create=function(e,t,i){return{label:e,textEdit:t,additionalTextEdits:i}},e.is=function(e){var t=e;return sne.string(t.label)&&(sne.undefined(t.textEdit)||fie.is(t))&&(sne.undefined(t.additionalTextEdits)||sne.typedArray(t.additionalTextEdits,fie.is))}}(aie||(aie={})),function(e){e.Comment="comment",e.Imports="imports",e.Region="region"}(lie||(lie={})),function(e){e.create=function(e,t,i,n,o){var s={startLine:e,endLine:t};return sne.defined(i)&&(s.startCharacter=i),sne.defined(n)&&(s.endCharacter=n),sne.defined(o)&&(s.kind=o),s},e.is=function(e){var t=e;return sne.uinteger(t.startLine)&&sne.uinteger(t.startLine)&&(sne.undefined(t.startCharacter)||sne.uinteger(t.startCharacter))&&(sne.undefined(t.endCharacter)||sne.uinteger(t.endCharacter))&&(sne.undefined(t.kind)||sne.string(t.kind))}}(die||(die={})),function(e){e.create=function(e,t){return{location:e,message:t}},e.is=function(e){var t=e;return sne.defined(t)&&nie.is(t.location)&&sne.string(t.message)}}(cie||(cie={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(hie||(hie={})),function(e){e.Unnecessary=1,e.Deprecated=2}(uie||(uie={})),function(e){e.is=function(e){var t=e;return null!=t&&sne.string(t.href)}}(gie||(gie={})),function(e){e.create=function(e,t,i,n,o,s){var r={range:e,message:t};return sne.defined(i)&&(r.severity=i),sne.defined(n)&&(r.code=n),sne.defined(o)&&(r.source=o),sne.defined(s)&&(r.relatedInformation=s),r},e.is=function(e){var t,i=e;return sne.defined(i)&&iie.is(i.range)&&sne.string(i.message)&&(sne.number(i.severity)||sne.undefined(i.severity))&&(sne.integer(i.code)||sne.string(i.code)||sne.undefined(i.code))&&(sne.undefined(i.codeDescription)||sne.string(null===(t=i.codeDescription)||void 0===t?void 0:t.href))&&(sne.string(i.source)||sne.undefined(i.source))&&(sne.undefined(i.relatedInformation)||sne.typedArray(i.relatedInformation,cie.is))}}(pie||(pie={})),function(e){e.create=function(e,t){for(var i=[],n=2;n<arguments.length;n++)i[n-2]=arguments[n];var o={title:e,command:t};return sne.defined(i)&&i.length>0&&(o.arguments=i),o},e.is=function(e){var t=e;return sne.defined(t)&&sne.string(t.title)&&sne.string(t.command)}}(mie||(mie={})),function(e){e.replace=function(e,t){return{range:e,newText:t}},e.insert=function(e,t){return{range:{start:e,end:e},newText:t}},e.del=function(e){return{range:e,newText:""}},e.is=function(e){var t=e;return sne.objectLiteral(t)&&sne.string(t.newText)&&iie.is(t.range)}}(fie||(fie={})),function(e){e.create=function(e,t,i){var n={label:e};return void 0!==t&&(n.needsConfirmation=t),void 0!==i&&(n.description=i),n},e.is=function(e){var t=e;return void 0!==t&&sne.objectLiteral(t)&&sne.string(t.label)&&(sne.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(sne.string(t.description)||void 0===t.description)}}(_ie||(_ie={})),function(e){e.is=function(e){return"string"==typeof e}}(bie||(bie={})),function(e){e.replace=function(e,t,i){return{range:e,newText:t,annotationId:i}},e.insert=function(e,t,i){return{range:{start:e,end:e},newText:t,annotationId:i}},e.del=function(e,t){return{range:e,newText:"",annotationId:t}},e.is=function(e){var t=e;return fie.is(t)&&(_ie.is(t.annotationId)||bie.is(t.annotationId))}}(vie||(vie={})),function(e){e.create=function(e,t){return{textDocument:e,edits:t}},e.is=function(e){var t=e;return sne.defined(t)&&Die.is(t.textDocument)&&Array.isArray(t.edits)}}(Cie||(Cie={})),function(e){e.create=function(e,t,i){var n={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(n.options=t),void 0!==i&&(n.annotationId=i),n},e.is=function(e){var t=e;return t&&"create"===t.kind&&sne.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||sne.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||sne.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||bie.is(t.annotationId))}}(wie||(wie={})),function(e){e.create=function(e,t,i,n){var o={kind:"rename",oldUri:e,newUri:t};return void 0===i||void 0===i.overwrite&&void 0===i.ignoreIfExists||(o.options=i),void 0!==n&&(o.annotationId=n),o},e.is=function(e){var t=e;return t&&"rename"===t.kind&&sne.string(t.oldUri)&&sne.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||sne.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||sne.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||bie.is(t.annotationId))}}(yie||(yie={})),function(e){e.create=function(e,t,i){var n={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(n.options=t),void 0!==i&&(n.annotationId=i),n},e.is=function(e){var t=e;return t&&"delete"===t.kind&&sne.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||sne.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||sne.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||bie.is(t.annotationId))}}(Sie||(Sie={})),function(e){e.is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return sne.string(e.kind)?wie.is(e)||yie.is(e)||Sie.is(e):Cie.is(e)})))}}(xie||(xie={}));var Eie,Lie,Die,Tie,Nie,Iie,Aie,Rie,Mie,Oie,Pie,Fie,Bie,Vie,Wie,Hie,zie,Uie,$ie,jie,Kie,qie,Gie,Zie,Yie,Xie,Qie,Jie,ene,tne,ine,nne=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,i){var n,o;if(void 0===i?n=fie.insert(e,t):bie.is(i)?(o=i,n=vie.insert(e,t,i)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(i),n=vie.insert(e,t,o)),this.edits.push(n),void 0!==o)return o},e.prototype.replace=function(e,t,i){var n,o;if(void 0===i?n=fie.replace(e,t):bie.is(i)?(o=i,n=vie.replace(e,t,i)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(i),n=vie.replace(e,t,o)),this.edits.push(n),void 0!==o)return o},e.prototype.delete=function(e,t){var i,n;if(void 0===t?i=fie.del(e):bie.is(t)?(n=t,i=vie.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),n=this.changeAnnotations.manage(t),i=vie.del(e,n)),this.edits.push(i),void 0!==n)return n},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),one=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var i;if(bie.is(e)?i=e:(i=this.nextId(),t=e),void 0!==this._annotations[i])throw new Error("Id "+i+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+i);return this._annotations[i]=t,this._size++,i},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new one(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(Cie.is(e)){var i=new nne(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=i}}))):e.changes&&Object.keys(e.changes).forEach((function(i){var n=new nne(e.changes[i]);t._textEditChanges[i]=n}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(Die.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version};if(!(n=this._textEditChanges[t.uri])){var i={textDocument:t,edits:o=[]};this._workspaceEdit.documentChanges.push(i),n=new nne(o,this._changeAnnotations),this._textEditChanges[t.uri]=n}return n}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var n;if(!(n=this._textEditChanges[e])){var o=[];this._workspaceEdit.changes[e]=o,n=new nne(o),this._textEditChanges[e]=n}return n},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new one,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,i){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var n,o,s;if(_ie.is(t)||bie.is(t)?n=t:i=t,void 0===n?o=wie.create(e,i):(s=bie.is(n)?n:this._changeAnnotations.manage(n),o=wie.create(e,i,s)),this._workspaceEdit.documentChanges.push(o),void 0!==s)return s},e.prototype.renameFile=function(e,t,i,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var o,s,r;if(_ie.is(i)||bie.is(i)?o=i:n=i,void 0===o?s=yie.create(e,t,n):(r=bie.is(o)?o:this._changeAnnotations.manage(o),s=yie.create(e,t,n,r)),this._workspaceEdit.documentChanges.push(s),void 0!==r)return r},e.prototype.deleteFile=function(e,t,i){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var n,o,s;if(_ie.is(t)||bie.is(t)?n=t:i=t,void 0===n?o=Sie.create(e,i):(s=bie.is(n)?n:this._changeAnnotations.manage(n),o=Sie.create(e,i,s)),this._workspaceEdit.documentChanges.push(o),void 0!==s)return s}}(),function(e){e.create=function(e){return{uri:e}},e.is=function(e){var t=e;return sne.defined(t)&&sne.string(t.uri)}}(Eie||(Eie={})),function(e){e.create=function(e,t){return{uri:e,version:t}},e.is=function(e){var t=e;return sne.defined(t)&&sne.string(t.uri)&&sne.integer(t.version)}}(Lie||(Lie={})),function(e){e.create=function(e,t){return{uri:e,version:t}},e.is=function(e){var t=e;return sne.defined(t)&&sne.string(t.uri)&&(null===t.version||sne.integer(t.version))}}(Die||(Die={})),function(e){e.create=function(e,t,i,n){return{uri:e,languageId:t,version:i,text:n}},e.is=function(e){var t=e;return sne.defined(t)&&sne.string(t.uri)&&sne.string(t.languageId)&&sne.integer(t.version)&&sne.string(t.text)}}(Tie||(Tie={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(Nie||(Nie={})),function(e){e.is=function(t){var i=t;return i===e.PlainText||i===e.Markdown}}(Nie||(Nie={})),function(e){e.is=function(e){var t=e;return sne.objectLiteral(e)&&Nie.is(t.kind)&&sne.string(t.value)}}(Iie||(Iie={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(Aie||(Aie={})),function(e){e.PlainText=1,e.Snippet=2}(Rie||(Rie={})),function(e){e.Deprecated=1}(Mie||(Mie={})),function(e){e.create=function(e,t,i){return{newText:e,insert:t,replace:i}},e.is=function(e){var t=e;return t&&sne.string(t.newText)&&iie.is(t.insert)&&iie.is(t.replace)}}(Oie||(Oie={})),function(e){e.asIs=1,e.adjustIndentation=2}(Pie||(Pie={})),function(e){e.create=function(e){return{label:e}}}(Fie||(Fie={})),function(e){e.create=function(e,t){return{items:e||[],isIncomplete:!!t}}}(Bie||(Bie={})),function(e){e.fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},e.is=function(e){var t=e;return sne.string(t)||sne.objectLiteral(t)&&sne.string(t.language)&&sne.string(t.value)}}(Vie||(Vie={})),function(e){e.is=function(e){var t=e;return!!t&&sne.objectLiteral(t)&&(Iie.is(t.contents)||Vie.is(t.contents)||sne.typedArray(t.contents,Vie.is))&&(void 0===e.range||iie.is(e.range))}}(Wie||(Wie={})),function(e){e.create=function(e,t){return t?{label:e,documentation:t}:{label:e}}}(Hie||(Hie={})),function(e){e.create=function(e,t){for(var i=[],n=2;n<arguments.length;n++)i[n-2]=arguments[n];var o={label:e};return sne.defined(t)&&(o.documentation=t),sne.defined(i)?o.parameters=i:o.parameters=[],o}}(zie||(zie={})),function(e){e.Text=1,e.Read=2,e.Write=3}(Uie||(Uie={})),function(e){e.create=function(e,t){var i={range:e};return sne.number(t)&&(i.kind=t),i}}($ie||($ie={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(jie||(jie={})),function(e){e.Deprecated=1}(Kie||(Kie={})),function(e){e.create=function(e,t,i,n,o){var s={name:e,kind:t,location:{uri:n,range:i}};return o&&(s.containerName=o),s}}(qie||(qie={})),function(e){e.create=function(e,t,i,n,o,s){var r={name:e,detail:t,kind:i,range:n,selectionRange:o};return void 0!==s&&(r.children=s),r},e.is=function(e){var t=e;return t&&sne.string(t.name)&&sne.number(t.kind)&&iie.is(t.range)&&iie.is(t.selectionRange)&&(void 0===t.detail||sne.string(t.detail))&&(void 0===t.deprecated||sne.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))}}(Gie||(Gie={})),function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"}(Zie||(Zie={})),function(e){e.create=function(e,t){var i={diagnostics:e};return null!=t&&(i.only=t),i},e.is=function(e){var t=e;return sne.defined(t)&&sne.typedArray(t.diagnostics,pie.is)&&(void 0===t.only||sne.typedArray(t.only,sne.string))}}(Yie||(Yie={})),function(e){e.create=function(e,t,i){var n={title:e},o=!0;return"string"==typeof t?(o=!1,n.kind=t):mie.is(t)?n.command=t:n.edit=t,o&&void 0!==i&&(n.kind=i),n},e.is=function(e){var t=e;return t&&sne.string(t.title)&&(void 0===t.diagnostics||sne.typedArray(t.diagnostics,pie.is))&&(void 0===t.kind||sne.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||mie.is(t.command))&&(void 0===t.isPreferred||sne.boolean(t.isPreferred))&&(void 0===t.edit||xie.is(t.edit))}}(Xie||(Xie={})),function(e){e.create=function(e,t){var i={range:e};return sne.defined(t)&&(i.data=t),i},e.is=function(e){var t=e;return sne.defined(t)&&iie.is(t.range)&&(sne.undefined(t.command)||mie.is(t.command))}}(Qie||(Qie={})),function(e){e.create=function(e,t){return{tabSize:e,insertSpaces:t}},e.is=function(e){var t=e;return sne.defined(t)&&sne.uinteger(t.tabSize)&&sne.boolean(t.insertSpaces)}}(Jie||(Jie={})),function(e){e.create=function(e,t,i){return{range:e,target:t,data:i}},e.is=function(e){var t=e;return sne.defined(t)&&iie.is(t.range)&&(sne.undefined(t.target)||sne.string(t.target))}}(ene||(ene={})),function(e){e.create=function(e,t){return{range:e,parent:t}},e.is=function(t){var i=t;return void 0!==i&&iie.is(i.range)&&(void 0===i.parent||e.is(i.parent))}}(tne||(tne={})),function(e){function t(e,i){if(e.length<=1)return e;var n=e.length/2|0,o=e.slice(0,n),s=e.slice(n);t(o,i),t(s,i);for(var r=0,a=0,l=0;r<o.length&&a<s.length;){var d=i(o[r],s[a]);e[l++]=d<=0?o[r++]:s[a++]}for(;r<o.length;)e[l++]=o[r++];for(;a<s.length;)e[l++]=s[a++];return e}e.create=function(e,t,i,n){return new rne(e,t,i,n)},e.is=function(e){var t=e;return!!(sne.defined(t)&&sne.string(t.uri)&&(sne.undefined(t.languageId)||sne.string(t.languageId))&&sne.uinteger(t.lineCount)&&sne.func(t.getText)&&sne.func(t.positionAt)&&sne.func(t.offsetAt))},e.applyEdits=function(e,i){for(var n=e.getText(),o=t(i,(function(e,t){var i=e.range.start.line-t.range.start.line;return 0===i?e.range.start.character-t.range.start.character:i})),s=n.length,r=o.length-1;r>=0;r--){var a=o[r],l=e.offsetAt(a.range.start),d=e.offsetAt(a.range.end);if(!(d<=s))throw new Error("Overlapping edit");n=n.substring(0,l)+a.newText+n.substring(d,n.length),s=l}return n}}(ine||(ine={}));var sne,rne=function(){function e(e,t,i,n){this._uri=e,this._languageId=t,this._version=i,this._content=n,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),i=this.offsetAt(e.end);return this._content.substring(t,i)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,i=!0,n=0;n<t.length;n++){i&&(e.push(n),i=!1);var o=t.charAt(n);i="\r"===o||"\n"===o,"\r"===o&&n+1<t.length&&"\n"===t.charAt(n+1)&&n++}i&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),i=0,n=t.length;if(0===n)return tie.create(0,e);for(;i<n;){var o=Math.floor((i+n)/2);t[o]>e?n=o:i=o+1}var s=i-1;return tie.create(s,e-t[s])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var i=t[e.line],n=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(i+e.character,n),i)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();!function(e){var t=Object.prototype.toString;e.defined=function(e){return void 0!==e},e.undefined=function(e){return void 0===e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===t.call(e)},e.number=function(e){return"[object Number]"===t.call(e)},e.numberRange=function(e,i,n){return"[object Number]"===t.call(e)&&i<=e&&e<=n},e.integer=function(e){return"[object Number]"===t.call(e)&&-2147483648<=e&&e<=2147483647},e.uinteger=function(e){return"[object Number]"===t.call(e)&&0<=e&&e<=2147483647},e.func=function(e){return"[object Function]"===t.call(e)},e.objectLiteral=function(e){return null!==e&&"object"==typeof e},e.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)}}(sne||(sne={}));function ane(e){switch(e){case hie.Error:return Qte.MarkerSeverity.Error;case hie.Warning:return Qte.MarkerSeverity.Warning;case hie.Information:return Qte.MarkerSeverity.Info;case hie.Hint:return Qte.MarkerSeverity.Hint;default:return Qte.MarkerSeverity.Info}}var lne=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,i,n){const o=e.uri;return this._worker(o).then((e=>e.doComplete(o.toString(),dne(t)))).then((i=>{if(!i)return;const n=e.getWordUntilPosition(t),o=new Qte.Range(t.lineNumber,n.startColumn,t.lineNumber,n.endColumn),s=i.items.map((e=>{const t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(i=e.command,i&&"editor.action.triggerSuggest"===i.command?{id:i.command,title:i.title,arguments:i.arguments}:void 0),range:o,kind:une(e.kind)};var i,n;return e.textEdit&&(void 0!==(n=e.textEdit).insert&&void 0!==n.replace?t.range={insert:hne(e.textEdit.insert),replace:hne(e.textEdit.replace)}:t.range=hne(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(gne)),e.insertTextFormat===Rie.Snippet&&(t.insertTextRules=Qte.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:i.isIncomplete,suggestions:s}}))}};function dne(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function cne(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function hne(e){if(e)return new Qte.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function une(e){const t=Qte.languages.CompletionItemKind;switch(e){case Aie.Text:return t.Text;case Aie.Method:return t.Method;case Aie.Function:return t.Function;case Aie.Constructor:return t.Constructor;case Aie.Field:return t.Field;case Aie.Variable:return t.Variable;case Aie.Class:return t.Class;case Aie.Interface:return t.Interface;case Aie.Module:return t.Module;case Aie.Property:return t.Property;case Aie.Unit:return t.Unit;case Aie.Value:return t.Value;case Aie.Enum:return t.Enum;case Aie.Keyword:return t.Keyword;case Aie.Snippet:return t.Snippet;case Aie.Color:return t.Color;case Aie.File:return t.File;case Aie.Reference:return t.Reference}return t.Property}function gne(e){if(e)return{range:hne(e.range),text:e.newText}}var pne=class{constructor(e){this._worker=e}provideHover(e,t,i){let n=e.uri;return this._worker(n).then((e=>e.doHover(n.toString(),dne(t)))).then((e=>{if(e)return{range:hne(e.range),contents:fne(e.contents)}}))}};function mne(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function fne(e){if(e)return Array.isArray(e)?e.map(mne):[mne(e)]}var _ne=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,i){const n=e.uri;return this._worker(n).then((e=>e.findDocumentHighlights(n.toString(),dne(t)))).then((e=>{if(e)return e.map((e=>({range:hne(e.range),kind:bne(e.kind)})))}))}};function bne(e){switch(e){case Uie.Read:return Qte.languages.DocumentHighlightKind.Read;case Uie.Write:return Qte.languages.DocumentHighlightKind.Write;case Uie.Text:return Qte.languages.DocumentHighlightKind.Text}return Qte.languages.DocumentHighlightKind.Text}function vne(e){return{uri:Qte.Uri.parse(e.uri),range:hne(e.range)}}var Cne=class{constructor(e){this._worker=e}provideRenameEdits(e,t,i,n){const o=e.uri;return this._worker(o).then((e=>e.doRename(o.toString(),dne(t),i))).then((e=>function(e){if(!e||!e.changes)return;let t=[];for(let i in e.changes){const n=Qte.Uri.parse(i);for(let o of e.changes[i])t.push({resource:n,edit:{range:hne(o.range),text:o.newText}})}return{edits:t}}(e)))}};var wne=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){const i=e.uri;return this._worker(i).then((e=>e.findDocumentSymbols(i.toString()))).then((e=>{if(e)return e.map((e=>({name:e.name,detail:"",containerName:e.containerName,kind:yne(e.kind),range:hne(e.location.range),selectionRange:hne(e.location.range),tags:[]})))}))}};function yne(e){let t=Qte.languages.SymbolKind;switch(e){case jie.File:return t.Array;case jie.Module:return t.Module;case jie.Namespace:return t.Namespace;case jie.Package:return t.Package;case jie.Class:return t.Class;case jie.Method:return t.Method;case jie.Property:return t.Property;case jie.Field:return t.Field;case jie.Constructor:return t.Constructor;case jie.Enum:return t.Enum;case jie.Interface:return t.Interface;case jie.Function:return t.Function;case jie.Variable:return t.Variable;case jie.Constant:return t.Constant;case jie.String:return t.String;case jie.Number:return t.Number;case jie.Boolean:return t.Boolean;case jie.Array:return t.Array}return t.Function}var Sne=class{constructor(e){this._worker=e}provideLinks(e,t){const i=e.uri;return this._worker(i).then((e=>e.findDocumentLinks(i.toString()))).then((e=>{if(e)return{links:e.map((e=>({range:hne(e.range),url:e.target})))}}))}},xne=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,i){const n=e.uri;return this._worker(n).then((e=>e.format(n.toString(),null,Ene(t)).then((e=>{if(e&&0!==e.length)return e.map(gne)}))))}},kne=class{constructor(e){this._worker=e}provideDocumentRangeFormattingEdits(e,t,i,n){const o=e.uri;return this._worker(o).then((e=>e.format(o.toString(),cne(t),Ene(i)).then((e=>{if(e&&0!==e.length)return e.map(gne)}))))}};function Ene(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var Lne=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,i){const n=e.uri;return this._worker(n).then((e=>e.getFoldingRanges(n.toString(),t))).then((e=>{if(e)return e.map((e=>{const t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case lie.Comment:return Qte.languages.FoldingRangeKind.Comment;case lie.Imports:return Qte.languages.FoldingRangeKind.Imports;case lie.Region:return Qte.languages.FoldingRangeKind.Region}return}(e.kind)),t}))}))}};var Dne=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,i){const n=e.uri;return this._worker(n).then((e=>e.getSelectionRanges(n.toString(),t.map(dne)))).then((e=>{if(e)return e.map((e=>{const t=[];for(;e;)t.push({range:hne(e.range)}),e=e.parent;return t}))}))}},Tne=class extends lne{constructor(e){super(e,[".",":","<",'"',"=","/"])}};function Nne(e){return{dispose:()=>Ine(e)}}function Ine(e){for(;e.length;)e.pop().dispose()}var Ane=Object.freeze(Object.defineProperty({__proto__:null,CompletionAdapter:lne,DefinitionAdapter:class{constructor(e){this._worker=e}provideDefinition(e,t,i){const n=e.uri;return this._worker(n).then((e=>e.findDefinition(n.toString(),dne(t)))).then((e=>{if(e)return[vne(e)]}))}},DiagnosticsAdapter:class{constructor(e,t,i){o(this,"_disposables",[]),o(this,"_listener",Object.create(null)),this._languageId=e,this._worker=t;const n=e=>{let t,i=e.getLanguageId();i===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent((()=>{window.clearTimeout(t),t=window.setTimeout((()=>this._doValidate(e.uri,i)),500)})),this._doValidate(e.uri,i))},s=e=>{Qte.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),i=this._listener[t];i&&(i.dispose(),delete this._listener[t])};this._disposables.push(Qte.editor.onDidCreateModel(n)),this._disposables.push(Qte.editor.onWillDisposeModel(s)),this._disposables.push(Qte.editor.onDidChangeModelLanguage((e=>{s(e.model),n(e.model)}))),this._disposables.push(i((e=>{Qte.editor.getModels().forEach((e=>{e.getLanguageId()===this._languageId&&(s(e),n(e))}))}))),this._disposables.push({dispose:()=>{Qte.editor.getModels().forEach(s);for(let e in this._listener)this._listener[e].dispose()}}),Qte.editor.getModels().forEach(n)}dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables.length=0}_doValidate(e,t){this._worker(e).then((t=>t.doValidation(e.toString()))).then((i=>{const n=i.map((e=>function(e,t){let i="number"==typeof t.code?String(t.code):t.code;return{severity:ane(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:i,source:t.source}}(0,e)));let o=Qte.editor.getModel(e);o&&o.getLanguageId()===t&&Qte.editor.setModelMarkers(o,t,n)})).then(void 0,(e=>{console.error(e)}))}},DocumentColorAdapter:class{constructor(e){this._worker=e}provideDocumentColors(e,t){const i=e.uri;return this._worker(i).then((e=>e.findDocumentColors(i.toString()))).then((e=>{if(e)return e.map((e=>({color:e.color,range:hne(e.range)})))}))}provideColorPresentations(e,t,i){const n=e.uri;return this._worker(n).then((e=>e.getColorPresentations(n.toString(),t.color,cne(t.range)))).then((e=>{if(e)return e.map((e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=gne(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(gne)),t}))}))}},DocumentFormattingEditProvider:xne,DocumentHighlightAdapter:_ne,DocumentLinkAdapter:Sne,DocumentRangeFormattingEditProvider:kne,DocumentSymbolAdapter:wne,FoldingRangeAdapter:Lne,HoverAdapter:pne,ReferenceAdapter:class{constructor(e){this._worker=e}provideReferences(e,t,i,n){const o=e.uri;return this._worker(o).then((e=>e.findReferences(o.toString(),dne(t)))).then((e=>{if(e)return e.map(vne)}))}},RenameAdapter:Cne,SelectionRangeAdapter:Dne,WorkerManager:kie,fromPosition:dne,fromRange:cne,setupMode:function(e){const t=[],i=[],n=new kie(e);t.push(n);const o=(...e)=>n.getLanguageServiceWorker(...e);return function(){const{languageId:t,modeConfiguration:n}=e;Ine(i),n.completionItems&&i.push(Qte.languages.registerCompletionItemProvider(t,new Tne(o))),n.hovers&&i.push(Qte.languages.registerHoverProvider(t,new pne(o))),n.documentHighlights&&i.push(Qte.languages.registerDocumentHighlightProvider(t,new _ne(o))),n.links&&i.push(Qte.languages.registerLinkProvider(t,new Sne(o))),n.documentSymbols&&i.push(Qte.languages.registerDocumentSymbolProvider(t,new wne(o))),n.rename&&i.push(Qte.languages.registerRenameProvider(t,new Cne(o))),n.foldingRanges&&i.push(Qte.languages.registerFoldingRangeProvider(t,new Lne(o))),n.selectionRanges&&i.push(Qte.languages.registerSelectionRangeProvider(t,new Dne(o))),n.documentFormattingEdits&&i.push(Qte.languages.registerDocumentFormattingEditProvider(t,new xne(o))),n.documentRangeFormattingEdits&&i.push(Qte.languages.registerDocumentRangeFormattingEditProvider(t,new kne(o)))}(),t.push(Nne(i)),Nne(t)},setupMode1:function(e){const t=new kie(e),i=(...e)=>t.getLanguageServiceWorker(...e);let n=e.languageId;Qte.languages.registerCompletionItemProvider(n,new Tne(i)),Qte.languages.registerHoverProvider(n,new pne(i)),Qte.languages.registerDocumentHighlightProvider(n,new _ne(i)),Qte.languages.registerLinkProvider(n,new Sne(i)),Qte.languages.registerFoldingRangeProvider(n,new Lne(i)),Qte.languages.registerDocumentSymbolProvider(n,new wne(i)),Qte.languages.registerSelectionRangeProvider(n,new Dne(i)),Qte.languages.registerRenameProvider(n,new Cne(i)),"html"===n&&(Qte.languages.registerDocumentFormattingEditProvider(n,new xne(i)),Qte.languages.registerDocumentRangeFormattingEditProvider(n,new kne(i)))},toRange:hne,toTextEdit:gne},Symbol.toStringTag,{value:"Module"})),Rne=Object.defineProperty,Mne=Object.getOwnPropertyDescriptor,One=Object.getOwnPropertyNames,Pne=Object.prototype.hasOwnProperty,Fne={};
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt