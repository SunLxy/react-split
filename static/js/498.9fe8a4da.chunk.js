(this["webpackJsonp@uiw/react-split"]=this["webpackJsonp@uiw/react-split"]||[]).push([[498],{1189:function(t,e,n){!function(t){"use strict";t.defineMode("pegjs",(function(e){var n=t.getMode(e,"javascript");return{startState:function(){return{inString:!1,stringType:null,inComment:!1,inCharacterClass:!1,braced:0,lhs:!0,localState:null}},token:function(e,r){if(e&&(r.inString||r.inComment||'"'!=e.peek()&&"'"!=e.peek()||(r.stringType=e.peek(),e.next(),r.inString=!0)),r.inString||r.inComment||!e.match(/^\/\*/)||(r.inComment=!0),r.inString){for(;r.inString&&!e.eol();)e.peek()===r.stringType?(e.next(),r.inString=!1):"\\"===e.peek()?(e.next(),e.next()):e.match(/^.[^\\\"\']*/);return r.lhs?"property string":"string"}if(r.inComment){for(;r.inComment&&!e.eol();)e.match(/\*\//)?r.inComment=!1:e.match(/^.[^\*]*/);return"comment"}if(r.inCharacterClass)for(;r.inCharacterClass&&!e.eol();)e.match(/^[^\]\\]+/)||e.match(/^\\./)||(r.inCharacterClass=!1);else{if("["===e.peek())return e.next(),r.inCharacterClass=!0,"bracket";if(e.match(/^\/\//))return e.skipToEnd(),"comment";if(r.braced||"{"===e.peek()){null===r.localState&&(r.localState=t.startState(n));var a=n.token(e,r.localState),i=e.current();if(!a)for(var c=0;c<i.length;c++)"{"===i[c]?r.braced++:"}"===i[c]&&r.braced--;return a}if(function(t){return t.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)}(e))return":"===e.peek()?"variable":"variable-2";if(-1!=["[","]","(",")"].indexOf(e.peek()))return e.next(),"bracket";e.eatSpace()||e.next()}return null}}}),"javascript")}(n(53),n(1120))}}]);
//# sourceMappingURL=498.9fe8a4da.chunk.js.map