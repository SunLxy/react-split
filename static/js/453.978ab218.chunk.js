(this["webpackJsonp@uiw/react-split"]=this["webpackJsonp@uiw/react-split"]||[]).push([[453],{1137:function(e,t,n){!function(e){"use strict";var t="><+-.,[]".split("");e.defineMode("brainfuck",(function(){return{startState:function(){return{commentLine:!1,left:0,right:0,commentLoop:!1}},token:function(e,n){if(e.eatSpace())return null;e.sol()&&(n.commentLine=!1);var i=e.next().toString();return-1===t.indexOf(i)?(n.commentLine=!0,e.eol()&&(n.commentLine=!1),"comment"):!0===n.commentLine?(e.eol()&&(n.commentLine=!1),"comment"):"]"===i||"["===i?("["===i?n.left++:n.right++,"bracket"):"+"===i||"-"===i?"keyword":"<"===i||">"===i?"atom":"."===i||","===i?"def":void(e.eol()&&(n.commentLine=!1))}}})),e.defineMIME("text/x-brainfuck","brainfuck")}(n(53))}}]);
//# sourceMappingURL=453.978ab218.chunk.js.map