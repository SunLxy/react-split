(this["webpackJsonp@uiw/react-split"]=this["webpackJsonp@uiw/react-split"]||[]).push([[375],{601:function(t,e){!function(t){function e(t,e,a){return{pattern:RegExp("<#"+t+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+t+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:e,alias:a}}}}t.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:function(a){var n=t.languages[a],i="language-"+a;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:e("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\w+(?=\s)/,"attr-name":/\w+/}),expression:e("=",n,i),"class-feature":e("\\+",n,i),standard:e("",n,i)}}}}})}(Prism)}}]);
//# sourceMappingURL=375.a2f186ab.chunk.js.map