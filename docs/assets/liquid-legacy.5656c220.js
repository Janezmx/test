System.register(["./Form-legacy.e7f27402.js","./vendor-legacy.1f829e1b.js","./index-legacy.637f3556.js","./index-legacy.637f35562.js","./index-legacy.f25f109a.js","./index-legacy.f25f109a2.js","./Test-legacy.19062309.js","./index-legacy.f7bee6cf.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.m},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){
/*!-----------------------------------------------------------------------------
       * Copyright (c) Microsoft Corporation. All rights reserved.
       * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
       * Released under the MIT license
       * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
       *-----------------------------------------------------------------------------*/
var i=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,l={};((e,t,l,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of o(t))r.call(e,s)||!l&&"default"===s||i(e,s,{get:()=>t[s],enumerable:!(a=n(t,s))||a.enumerable})})(l,t);var a=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];e("conf",{wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,brackets:[["\x3c!--","--\x3e"],["<",">"],["{{","}}"],["{%","%}"],["{","}"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"%",close:"%"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"<",close:">"},{open:'"',close:'"'},{open:"'",close:"'"}],onEnterRules:[{beforeText:new RegExp(`<(?!(?:${a.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,"i"),afterText:/^<\/(\w[\w\d]*)\s*>$/i,action:{indentAction:l.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp(`<(?!(?:${a.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,"i"),action:{indentAction:l.languages.IndentAction.Indent}}]}),e("language",{defaultToken:"",tokenPostfix:"",builtinTags:["if","else","elseif","endif","render","assign","capture","endcapture","case","endcase","comment","endcomment","cycle","decrement","for","endfor","include","increment","layout","raw","endraw","render","tablerow","endtablerow","unless","endunless"],builtinFilters:["abs","append","at_least","at_most","capitalize","ceil","compact","date","default","divided_by","downcase","escape","escape_once","first","floor","join","json","last","lstrip","map","minus","modulo","newline_to_br","plus","prepend","remove","remove_first","replace","replace_first","reverse","round","rstrip","size","slice","sort","sort_natural","split","strip","strip_html","strip_newlines","times","truncate","truncatewords","uniq","upcase","url_decode","url_encode","where"],constants:["true","false"],operators:["==","!=",">","<",">=","<="],symbol:/[=><!]+/,identifier:/[a-zA-Z_][\w]*/,tokenizer:{root:[[/\{\%\s*comment\s*\%\}/,"comment.start.liquid","@comment"],[/\{\{/,{token:"@rematch",switchTo:"@liquidState.root"}],[/\{\%/,{token:"@rematch",switchTo:"@liquidState.root"}],[/(<)([\w\-]+)(\/>)/,["delimiter.html","tag.html","delimiter.html"]],[/(<)([:\w]+)/,["delimiter.html",{token:"tag.html",next:"@otherTag"}]],[/(<\/)([\w\-]+)/,["delimiter.html",{token:"tag.html",next:"@otherTag"}]],[/</,"delimiter.html"],[/\{/,"delimiter.html"],[/[^<{]+/]],comment:[[/\{\%\s*endcomment\s*\%\}/,"comment.end.liquid","@pop"],[/./,"comment.content.liquid"]],otherTag:[[/\{\{/,{token:"@rematch",switchTo:"@liquidState.otherTag"}],[/\{\%/,{token:"@rematch",switchTo:"@liquidState.otherTag"}],[/\/?>/,"delimiter.html","@pop"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/]],liquidState:[[/\{\{/,"delimiter.output.liquid"],[/\}\}/,{token:"delimiter.output.liquid",switchTo:"@$S2.$S3"}],[/\{\%/,"delimiter.tag.liquid"],[/raw\s*\%\}/,"delimiter.tag.liquid","@liquidRaw"],[/\%\}/,{token:"delimiter.tag.liquid",switchTo:"@$S2.$S3"}],{include:"liquidRoot"}],liquidRaw:[[/^(?!\{\%\s*endraw\s*\%\}).+/],[/\{\%/,"delimiter.tag.liquid"],[/@identifier/],[/\%\}/,{token:"delimiter.tag.liquid",next:"@root"}]],liquidRoot:[[/\d+(\.\d+)?/,"number.liquid"],[/"[^"]*"/,"string.liquid"],[/'[^']*'/,"string.liquid"],[/\s+/],[/@symbol/,{cases:{"@operators":"operator.liquid","@default":""}}],[/\./],[/@identifier/,{cases:{"@constants":"keyword.liquid","@builtinFilters":"predefined.liquid","@builtinTags":"predefined.liquid","@default":"variable.liquid"}}],[/[^}|%]/,"variable.liquid"]]}})}}}));
