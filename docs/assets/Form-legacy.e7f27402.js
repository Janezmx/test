/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
var iz=Object.defineProperty,nz=Object.getOwnPropertyDescriptor,oz=Object.getOwnPropertyNames,sz=Object.prototype.hasOwnProperty,rz={};((e,t,i,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of oz(t))sz.call(e,o)||!i&&"default"===o||iz(e,o,{get:()=>t[o],enumerable:!(n=nz(t,o))||n.enumerable})})(rz,tz);var az={},lz={},hz=class e{static getOrCreate(t){return lz[t]||(lz[t]=new e(t)),lz[t]}constructor(e){o(this,"_languageId",void 0),o(this,"_loadingTriggered",void 0),o(this,"_lazyLoadPromise",void 0),o(this,"_lazyLoadPromiseResolve",void 0),o(this,"_lazyLoadPromiseReject",void 0),this._languageId=e,this._loadingTriggered=!1,this._lazyLoadPromise=new Promise(((e,t)=>{this._lazyLoadPromiseResolve=e,this._lazyLoadPromiseReject=t}))}load(){return this._loadingTriggered||(this._loadingTriggered=!0,az[this._languageId].loader().then((e=>this._lazyLoadPromiseResolve(e)),(e=>this._lazyLoadPromiseReject(e)))),this._lazyLoadPromise}};function dz(e){const t=e.id;az[t]=e,rz.languages.register(e);const i=hz.getOrCreate(t);var o;rz.languages.registerTokensProviderFactory(t,{create:(o=n((function*(){return(yield i.load()).language})),function(){return o.apply(this,arguments)})}),rz.languages.onLanguage(t,n((function*(){const e=yield i.load();rz.languages.setLanguageConfiguration(t,e.conf)})))}
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/dz({id:"abap",extensions:[".abap"],aliases:["abap","ABAP"],loader:()=>i.import("./abap-legacy.427979bb.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"apex",extensions:[".cls"],aliases:["Apex","apex"],mimetypes:["text/x-apex-source","text/x-apex"],loader:()=>i.import("./apex-legacy.88a0e7b6.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"azcli",extensions:[".azcli"],aliases:["Azure CLI","azcli"],loader:()=>i.import("./azcli-legacy.05c72349.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"bat",extensions:[".bat",".cmd"],aliases:["Batch","bat"],loader:()=>i.import("./bat-legacy.413e2bca.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"bicep",extensions:[".bicep"],aliases:["Bicep"],loader:()=>i.import("./bicep-legacy.10711d77.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"cameligo",extensions:[".mligo"],aliases:["Cameligo"],loader:()=>i.import("./cameligo-legacy.c0867c82.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"clojure",extensions:[".clj",".cljs",".cljc",".edn"],aliases:["clojure","Clojure"],loader:()=>i.import("./clojure-legacy.da1ebce9.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"coffeescript",extensions:[".coffee"],aliases:["CoffeeScript","coffeescript","coffee"],mimetypes:["text/x-coffeescript","text/coffeescript"],loader:()=>i.import("./coffee-legacy.dc1f2aae.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"c",extensions:[".c",".h"],aliases:["C","c"],loader:()=>i.import("./cpp-legacy.639ca6c2.js")}),dz({id:"cpp",extensions:[".cpp",".cc",".cxx",".hpp",".hh",".hxx"],aliases:["C++","Cpp","cpp"],loader:()=>i.import("./cpp-legacy.639ca6c2.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"csharp",extensions:[".cs",".csx",".cake"],aliases:["C#","csharp"],loader:()=>i.import("./csharp-legacy.36306a77.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"csp",extensions:[],aliases:["CSP","csp"],loader:()=>i.import("./csp-legacy.102c69e7.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"css",extensions:[".css"],aliases:["CSS","css"],mimetypes:["text/css"],loader:()=>i.import("./css-legacy.392e3fa2.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"dart",extensions:[".dart"],aliases:["Dart","dart"],mimetypes:["text/x-dart-source","text/x-dart"],loader:()=>i.import("./dart-legacy.80f32015.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"dockerfile",extensions:[".dockerfile"],filenames:["Dockerfile"],aliases:["Dockerfile"],loader:()=>i.import("./dockerfile-legacy.19ab7d47.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"ecl",extensions:[".ecl"],aliases:["ECL","Ecl","ecl"],loader:()=>i.import("./ecl-legacy.17ebcb1c.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"elixir",extensions:[".ex",".exs"],aliases:["Elixir","elixir","ex"],loader:()=>i.import("./elixir-legacy.bc3e5755.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"flow9",extensions:[".flow"],aliases:["Flow9","Flow","flow9","flow"],loader:()=>i.import("./flow9-legacy.2fc9d132.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"fsharp",extensions:[".fs",".fsi",".ml",".mli",".fsx",".fsscript"],aliases:["F#","FSharp","fsharp"],loader:()=>i.import("./fsharp-legacy.06c494c2.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"freemarker2",extensions:[".ftl",".ftlh",".ftlx"],aliases:["FreeMarker2","Apache FreeMarker2"],loader:()=>i.import("./freemarker2-legacy.b8561840.js").then((e=>e.TagAutoInterpolationDollar))}),dz({id:"freemarker2.tag-angle.interpolation-dollar",aliases:["FreeMarker2 (Angle/Dollar)","Apache FreeMarker2 (Angle/Dollar)"],loader:()=>i.import("./freemarker2-legacy.b8561840.js").then((e=>e.TagAngleInterpolationDollar))}),dz({id:"freemarker2.tag-bracket.interpolation-dollar",aliases:["FreeMarker2 (Bracket/Dollar)","Apache FreeMarker2 (Bracket/Dollar)"],loader:()=>i.import("./freemarker2-legacy.b8561840.js").then((e=>e.TagBracketInterpolationDollar))}),dz({id:"freemarker2.tag-angle.interpolation-bracket",aliases:["FreeMarker2 (Angle/Bracket)","Apache FreeMarker2 (Angle/Bracket)"],loader:()=>i.import("./freemarker2-legacy.b8561840.js").then((e=>e.TagAngleInterpolationBracket))}),dz({id:"freemarker2.tag-bracket.interpolation-bracket",aliases:["FreeMarker2 (Bracket/Bracket)","Apache FreeMarker2 (Bracket/Bracket)"],loader:()=>i.import("./freemarker2-legacy.b8561840.js").then((e=>e.TagBracketInterpolationBracket))}),dz({id:"freemarker2.tag-auto.interpolation-dollar",aliases:["FreeMarker2 (Auto/Dollar)","Apache FreeMarker2 (Auto/Dollar)"],loader:()=>i.import("./freemarker2-legacy.b8561840.js").then((e=>e.TagAutoInterpolationDollar))}),dz({id:"freemarker2.tag-auto.interpolation-bracket",aliases:["FreeMarker2 (Auto/Bracket)","Apache FreeMarker2 (Auto/Bracket)"],loader:()=>i.import("./freemarker2-legacy.b8561840.js").then((e=>e.TagAutoInterpolationBracket))}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"go",extensions:[".go"],aliases:["Go"],loader:()=>i.import("./go-legacy.cb6a871f.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"graphql",extensions:[".graphql",".gql"],aliases:["GraphQL","graphql","gql"],mimetypes:["application/graphql"],loader:()=>i.import("./graphql-legacy.3c34fd30.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"handlebars",extensions:[".handlebars",".hbs"],aliases:["Handlebars","handlebars","hbs"],mimetypes:["text/x-handlebars-template"],loader:()=>i.import("./handlebars-legacy.e88e6c94.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"hcl",extensions:[".tf",".tfvars",".hcl"],aliases:["Terraform","tf","HCL","hcl"],loader:()=>i.import("./hcl-legacy.407f2027.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"html",extensions:[".html",".htm",".shtml",".xhtml",".mdoc",".jsp",".asp",".aspx",".jshtm"],aliases:["HTML","htm","html","xhtml"],mimetypes:["text/html","text/x-jshtm","text/template","text/ng-template"],loader:()=>i.import("./html-legacy.8465d341.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"ini",extensions:[".ini",".properties",".gitconfig"],filenames:["config",".gitattributes",".gitconfig",".editorconfig"],aliases:["Ini","ini"],loader:()=>i.import("./ini-legacy.9efc8105.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"java",extensions:[".java",".jav"],aliases:["Java","java"],mimetypes:["text/x-java-source","text/x-java"],loader:()=>i.import("./java-legacy.90b5a04d.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"javascript",extensions:[".js",".es6",".jsx",".mjs",".cjs"],firstLine:"^#!.*\\bnode",filenames:["jakefile"],aliases:["JavaScript","javascript","js"],mimetypes:["text/javascript"],loader:()=>i.import("./javascript-legacy.d66eb6c3.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"julia",extensions:[".jl"],aliases:["julia","Julia"],loader:()=>i.import("./julia-legacy.5e31ff17.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"kotlin",extensions:[".kt"],aliases:["Kotlin","kotlin"],mimetypes:["text/x-kotlin-source","text/x-kotlin"],loader:()=>i.import("./kotlin-legacy.665b526a.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"less",extensions:[".less"],aliases:["Less","less"],mimetypes:["text/x-less","text/less"],loader:()=>i.import("./less-legacy.2ca514ec.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"lexon",extensions:[".lex"],aliases:["Lexon"],loader:()=>i.import("./lexon-legacy.dd6723b1.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"lua",extensions:[".lua"],aliases:["Lua","lua"],loader:()=>i.import("./lua-legacy.e46d0f27.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"liquid",extensions:[".liquid",".html.liquid"],aliases:["Liquid","liquid"],mimetypes:["application/liquid"],loader:()=>i.import("./liquid-legacy.5656c220.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"m3",extensions:[".m3",".i3",".mg",".ig"],aliases:["Modula-3","Modula3","modula3","m3"],loader:()=>i.import("./m3-legacy.48506f58.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"markdown",extensions:[".md",".markdown",".mdown",".mkdn",".mkd",".mdwn",".mdtxt",".mdtext"],aliases:["Markdown","markdown"],loader:()=>i.import("./markdown-legacy.edd20b98.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"mips",extensions:[".s"],aliases:["MIPS","MIPS-V"],mimetypes:["text/x-mips","text/mips","text/plaintext"],loader:()=>i.import("./mips-legacy.4718eec5.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"msdax",extensions:[".dax",".msdax"],aliases:["DAX","MSDAX"],loader:()=>i.import("./msdax-legacy.764db4c0.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"mysql",extensions:[],aliases:["MySQL","mysql"],loader:()=>i.import("./mysql-legacy.3a77d375.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"objective-c",extensions:[".m"],aliases:["Objective-C"],loader:()=>i.import("./objective-c-legacy.32864429.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"pascal",extensions:[".pas",".p",".pp"],aliases:["Pascal","pas"],mimetypes:["text/x-pascal-source","text/x-pascal"],loader:()=>i.import("./pascal-legacy.ad756771.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"pascaligo",extensions:[".ligo"],aliases:["Pascaligo","ligo"],loader:()=>i.import("./pascaligo-legacy.457b1854.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"perl",extensions:[".pl"],aliases:["Perl","pl"],loader:()=>i.import("./perl-legacy.5a703070.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"pgsql",extensions:[],aliases:["PostgreSQL","postgres","pg","postgre"],loader:()=>i.import("./pgsql-legacy.b98e2f91.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"php",extensions:[".php",".php4",".php5",".phtml",".ctp"],aliases:["PHP","php"],mimetypes:["application/x-php"],loader:()=>i.import("./php-legacy.46095f97.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"pla",extensions:[".pla"],loader:()=>i.import("./pla-legacy.e56a6215.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"postiats",extensions:[".dats",".sats",".hats"],aliases:["ATS","ATS/Postiats"],loader:()=>i.import("./postiats-legacy.1ae650bc.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"powerquery",extensions:[".pq",".pqm"],aliases:["PQ","M","Power Query","Power Query M"],loader:()=>i.import("./powerquery-legacy.fb670005.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"powershell",extensions:[".ps1",".psm1",".psd1"],aliases:["PowerShell","powershell","ps","ps1"],loader:()=>i.import("./powershell-legacy.395963ee.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"proto",extensions:[".proto"],aliases:["protobuf","Protocol Buffers"],loader:()=>i.import("./protobuf-legacy.732eb06e.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"pug",extensions:[".jade",".pug"],aliases:["Pug","Jade","jade"],loader:()=>i.import("./pug-legacy.4b283401.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"python",extensions:[".py",".rpy",".pyw",".cpy",".gyp",".gypi"],aliases:["Python","py"],firstLine:"^#!/.*\\bpython[0-9.-]*\\b",loader:()=>i.import("./python-legacy.aad314a5.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"qsharp",extensions:[".qs"],aliases:["Q#","qsharp"],loader:()=>i.import("./qsharp-legacy.3ac53e27.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"r",extensions:[".r",".rhistory",".rmd",".rprofile",".rt"],aliases:["R","r"],loader:()=>i.import("./r-legacy.9519a7d0.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"razor",extensions:[".cshtml"],aliases:["Razor","razor"],mimetypes:["text/x-cshtml"],loader:()=>i.import("./razor-legacy.95fc0267.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"redis",extensions:[".redis"],aliases:["redis"],loader:()=>i.import("./redis-legacy.e1365b6d.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"redshift",extensions:[],aliases:["Redshift","redshift"],loader:()=>i.import("./redshift-legacy.907ee80d.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"restructuredtext",extensions:[".rst"],aliases:["reStructuredText","restructuredtext"],loader:()=>i.import("./restructuredtext-legacy.1de054b7.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"ruby",extensions:[".rb",".rbx",".rjs",".gemspec",".pp"],filenames:["rakefile","Gemfile"],aliases:["Ruby","rb"],loader:()=>i.import("./ruby-legacy.3ab56978.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"rust",extensions:[".rs",".rlib"],aliases:["Rust","rust"],loader:()=>i.import("./rust-legacy.e135b2a7.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"sb",extensions:[".sb"],aliases:["Small Basic","sb"],loader:()=>i.import("./sb-legacy.ecd2feae.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"scala",extensions:[".scala",".sc",".sbt"],aliases:["Scala","scala","SBT","Sbt","sbt","Dotty","dotty"],mimetypes:["text/x-scala-source","text/x-scala","text/x-sbt","text/x-dotty"],loader:()=>i.import("./scala-legacy.d01b2f9d.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"scheme",extensions:[".scm",".ss",".sch",".rkt"],aliases:["scheme","Scheme"],loader:()=>i.import("./scheme-legacy.19040cc8.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"scss",extensions:[".scss"],aliases:["Sass","sass","scss"],mimetypes:["text/x-scss","text/scss"],loader:()=>i.import("./scss-legacy.dac26c05.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"shell",extensions:[".sh",".bash"],aliases:["Shell","sh"],loader:()=>i.import("./shell-legacy.2037810e.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"sol",extensions:[".sol"],aliases:["sol","solidity","Solidity"],loader:()=>i.import("./solidity-legacy.5748f02d.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"aes",extensions:[".aes"],aliases:["aes","sophia","Sophia"],loader:()=>i.import("./sophia-legacy.1951ec90.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"sparql",extensions:[".rq"],aliases:["sparql","SPARQL"],loader:()=>i.import("./sparql-legacy.d5ddd24d.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"sql",extensions:[".sql"],aliases:["SQL"],loader:()=>i.import("./sql-legacy.a3d5a5b2.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"st",extensions:[".st",".iecst",".iecplc",".lc3lib"],aliases:["StructuredText","scl","stl"],loader:()=>i.import("./st-legacy.7fd33b03.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"swift",aliases:["Swift","swift"],extensions:[".swift"],mimetypes:["text/swift"],loader:()=>i.import("./swift-legacy.3500fb02.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"systemverilog",extensions:[".sv",".svh"],aliases:["SV","sv","SystemVerilog","systemverilog"],loader:()=>i.import("./systemverilog-legacy.1ab55e30.js")}),dz({id:"verilog",extensions:[".v",".vh"],aliases:["V","v","Verilog","verilog"],loader:()=>i.import("./systemverilog-legacy.1ab55e30.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"tcl",extensions:[".tcl"],aliases:["tcl","Tcl","tcltk","TclTk","tcl/tk","Tcl/Tk"],loader:()=>i.import("./tcl-legacy.d10c69b0.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"twig",extensions:[".twig"],aliases:["Twig","twig"],mimetypes:["text/x-twig"],loader:()=>i.import("./twig-legacy.d0b9dcb1.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"typescript",extensions:[".ts",".tsx"],aliases:["TypeScript","ts","typescript"],mimetypes:["text/typescript"],loader:()=>i.import("./typescript-legacy.fc630e10.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"vb",extensions:[".vb"],aliases:["Visual Basic","vb"],loader:()=>i.import("./vb-legacy.58eb49cf.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"xml",extensions:[".xml",".dtd",".ascx",".csproj",".config",".wxi",".wxl",".wxs",".xaml",".svg",".svgz",".opf",".xsl"],firstLine:"(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",aliases:["XML","xml"],mimetypes:["text/xml","application/xml","application/xaml+xml","application/xml-dtd"],loader:()=>i.import("./xml-legacy.b5c7c134.js")}),
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
dz({id:"yaml",extensions:[".yaml",".yml"],aliases:["YAML","yaml","YML","yml"],mimetypes:["application/x-yaml","text/x-yaml"],loader:()=>i.import("./yaml-legacy.d25b8a1e.js")});
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
var cz=Object.defineProperty,uz=Object.getOwnPropertyDescriptor,gz=Object.getOwnPropertyNames,pz=Object.prototype.hasOwnProperty,mz={};((e,t,i,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of gz(t))pz.call(e,o)||!i&&"default"===o||cz(e,o,{get:()=>t[o],enumerable:!(n=uz(t,o))||n.enumerable})})(mz,tz);var fz=class{constructor(e,t,i){o(this,"_onDidChange",new mz.Emitter),o(this,"_options",void 0),o(this,"_modeConfiguration",void 0),o(this,"_languageId",void 0),this._languageId=e,this.setOptions(t),this.setModeConfiguration(i)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get modeConfiguration(){return this._modeConfiguration}get diagnosticsOptions(){return this.options}get options(){return this._options}setOptions(e){this._options=e||Object.create(null),this._onDidChange.fire(this)}setDiagnosticsOptions(e){this.setOptions(e)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}},_z={validate:!0,lint:{compatibleVendorPrefixes:"ignore",vendorPrefix:"warning",duplicateProperties:"warning",emptyRules:"warning",importStatement:"ignore",boxModel:"ignore",universalSelector:"ignore",zeroUnits:"ignore",fontFaceProperties:"warning",hexColorLength:"error",argumentsInColorFunction:"error",unknownProperties:"warning",ieHack:"ignore",unknownVendorSpecificProperties:"ignore",propertyIgnoredDueToDisplay:"warning",important:"ignore",float:"ignore",idSelector:"ignore"},data:{useDefaultDataProvider:!0}},bz={completionItems:!0,hovers:!0,documentSymbols:!0,definitions:!0,references:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,diagnostics:!0,selectionRanges:!0},vz=new fz("css",_z,bz),Cz=new fz("scss",_z,bz),wz=new fz("less",_z,bz);function yz(){return i.import("./cssMode-legacy.45dada13.js")}mz.languages.css={cssDefaults:vz,lessDefaults:wz,scssDefaults:Cz},mz.languages.onLanguage("less",(()=>{yz().then((e=>e.setupMode(wz)))})),mz.languages.onLanguage("scss",(()=>{yz().then((e=>e.setupMode(Cz)))})),mz.languages.onLanguage("css",(()=>{yz().then((e=>e.setupMode(vz)))}));
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/
var Sz=Object.defineProperty,Lz=Object.getOwnPropertyDescriptor,xz=Object.getOwnPropertyNames,Dz=Object.prototype.hasOwnProperty,kz={};((e,t,i,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of xz(t))Dz.call(e,o)||!i&&"default"===o||Sz(e,o,{get:()=>t[o],enumerable:!(n=Lz(t,o))||n.enumerable})})(kz,tz);var Nz={format:{tabSize:4,insertSpaces:!1,wrapLineLength:120,unformatted:'default": "a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, q, samp, select, small, span, strong, sub, sup, textarea, tt, var',contentUnformatted:"pre",indentInnerHtml:!1,preserveNewLines:!0,maxPreserveNewLines:void 0,indentHandlebars:!1,endWithNewline:!1,extraLiners:"head, body, /html",wrapAttributes:"auto"},suggest:{},data:{useDefaultDataProvider:!0}};function Ez(e){return{completionItems:!0,hovers:!0,documentSymbols:!0,links:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,selectionRanges:!0,diagnostics:e===Iz,documentFormattingEdits:e===Iz,documentRangeFormattingEdits:e===Iz}}var Iz="html",Tz="handlebars",Mz="razor",Az=Vz(Iz,Nz,Ez(Iz)),Oz=Az.defaults,Rz=Vz(Tz,Nz,Ez(Tz)),Pz=Rz.defaults,Fz=Vz(Mz,Nz,Ez(Mz)),Bz=Fz.defaults;function Vz(e,t=Nz,s=Ez(e)){const r=new class{constructor(e,t,i){o(this,"_onDidChange",new kz.Emitter),o(this,"_options",void 0),o(this,"_modeConfiguration",void 0),o(this,"_languageId",void 0),this._languageId=e,this.setOptions(t),this.setModeConfiguration(i)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get options(){return this._options}get modeConfiguration(){return this._modeConfiguration}setOptions(e){this._options=e||Object.create(null),this._onDidChange.fire(this)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}}(e,t,s);let a;const l=kz.languages.onLanguage(e,n((function*(){a=(yield i.import("./htmlMode-legacy.76a6ca02.js")).setupMode(r)})));return{defaults:r,dispose(){var e;l.dispose(),null===(e=a)||void 0===e||e.dispose(),a=void 0}}}
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/kz.languages.html={htmlDefaults:Oz,razorDefaults:Bz,handlebarDefaults:Pz,htmlLanguageService:Az,handlebarLanguageService:Rz,razorLanguageService:Fz,registerHTMLLanguageService:Vz};var Wz=Object.defineProperty,Hz=Object.getOwnPropertyDescriptor,zz=Object.getOwnPropertyNames,Uz=Object.prototype.hasOwnProperty,Kz={};((e,t,i,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of zz(t))Uz.call(e,o)||!i&&"default"===o||Wz(e,o,{get:()=>t[o],enumerable:!(n=Hz(t,o))||n.enumerable})})(Kz,tz);var jz=new class{constructor(e,t,i){o(this,"_onDidChange",new Kz.Emitter),o(this,"_diagnosticsOptions",void 0),o(this,"_modeConfiguration",void 0),o(this,"_languageId",void 0),this._languageId=e,this.setDiagnosticsOptions(t),this.setModeConfiguration(i)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get modeConfiguration(){return this._modeConfiguration}get diagnosticsOptions(){return this._diagnosticsOptions}setDiagnosticsOptions(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(this)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}}("json",{validate:!0,allowComments:!0,schemas:[],enableSchemaRequest:!1,schemaRequest:"warning",schemaValidation:"warning",comments:"error",trailingCommas:"error"},{documentFormattingEdits:!0,documentRangeFormattingEdits:!0,completionItems:!0,hovers:!0,documentSymbols:!0,tokens:!0,colors:!0,foldingRanges:!0,diagnostics:!0,selectionRanges:!0});Kz.languages.json={jsonDefaults:jz},Kz.languages.register({id:"json",extensions:[".json",".bowerrc",".jshintrc",".jscsrc",".eslintrc",".babelrc",".har"],aliases:["JSON","json"],mimetypes:["application/json"]}),Kz.languages.onLanguage("json",(()=>{i.import("./jsonMode-legacy.ca36c7ad.js").then((e=>e.setupMode(jz)))}));
/*!-----------------------------------------------------------------------------
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
             * Released under the MIT license
             * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
             *-----------------------------------------------------------------------------*/