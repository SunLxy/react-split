(this["webpackJsonp@uiw/react-split"]=this["webpackJsonp@uiw/react-split"]||[]).push([[480],{1106:function(t,r,n){!function(t){"use strict";t.defineMode("http",(function(){function t(t,r){return t.skipToEnd(),r.cur=c,"error"}function r(r,e){return r.match(/^HTTP\/\d\.\d/)?(e.cur=n,"keyword"):r.match(/^[A-Z]+/)&&/[ \t]/.test(r.peek())?(e.cur=i,"keyword"):t(r,e)}function n(r,n){var i=r.match(/^\d+/);if(!i)return t(r,n);n.cur=e;var u=Number(i[0]);return u>=100&&u<200?"positive informational":u>=200&&u<300?"positive success":u>=300&&u<400?"positive redirect":u>=400&&u<500?"negative client-error":u>=500&&u<600?"negative server-error":"error"}function e(t,r){return t.skipToEnd(),r.cur=c,null}function i(t,r){return t.eatWhile(/\S/),r.cur=u,"string-2"}function u(r,n){return r.match(/^HTTP\/\d\.\d$/)?(n.cur=c,"keyword"):t(r,n)}function c(t){return t.sol()&&!t.eat(/[ \t]/)?t.match(/^.*?:/)?"atom":(t.skipToEnd(),"error"):(t.skipToEnd(),"string")}function o(t){return t.skipToEnd(),null}return{token:function(t,r){var n=r.cur;return n!=c&&n!=o&&t.eatSpace()?null:n(t,r)},blankLine:function(t){t.cur=o},startState:function(){return{cur:r}}}})),t.defineMIME("message/http","http")}(n(51))}}]);
//# sourceMappingURL=480.6b1cd041.chunk.js.map