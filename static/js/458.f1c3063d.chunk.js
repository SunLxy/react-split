(this["webpackJsonp@uiw/react-split"]=this["webpackJsonp@uiw/react-split"]||[]).push([[458],{1141:function(t,e,n){!function(t){"use strict";t.defineMode("commonlisp",(function(t){var e,n=/^(block|let*|return-from|catch|load-time-value|setq|eval-when|locally|symbol-macrolet|flet|macrolet|tagbody|function|multiple-value-call|the|go|multiple-value-prog1|throw|if|progn|unwind-protect|labels|progv|let|quote)$/,r=/^with|^def|^do|^prog|case$|^cond$|bind$|when$|unless$/,o=/^(?:[+\-]?(?:\d+|\d*\.\d+)(?:[efd][+\-]?\d+)?|[+\-]?\d+(?:\/[+\-]?\d+)?|#b[+\-]?[01]+|#o[+\-]?[0-7]+|#x[+\-]?[\da-f]+)/,i=/[^\s'`,@()\[\]";]/;function c(t){for(var e;e=t.next();)if("\\"==e)t.next();else if(!i.test(e)){t.backUp(1);break}return t.current()}function l(t,i){if(t.eatSpace())return e="ws",null;if(t.match(o))return"number";var l;if("\\"==(l=t.next())&&(l=t.next()),'"'==l)return(i.tokenize=a)(t,i);if("("==l)return e="open","bracket";if(")"==l||"]"==l)return e="close","bracket";if(";"==l)return t.skipToEnd(),e="ws","comment";if(/['`,@]/.test(l))return null;if("|"==l)return t.skipTo("|")?(t.next(),"symbol"):(t.skipToEnd(),"error");if("#"==l)return"("==(l=t.next())?(e="open","bracket"):/[+\-=\.']/.test(l)||/\d/.test(l)&&t.match(/^\d*#/)?null:"|"==l?(i.tokenize=u)(t,i):":"==l?(c(t),"meta"):"\\"==l?(t.next(),c(t),"string-2"):"error";var s=c(t);return"."==s?null:(e="symbol","nil"==s||"t"==s||":"==s.charAt(0)?"atom":"open"==i.lastType&&(n.test(s)||r.test(s))?"keyword":"&"==s.charAt(0)?"variable-2":"variable")}function a(t,e){for(var n,r=!1;n=t.next();){if('"'==n&&!r){e.tokenize=l;break}r=!r&&"\\"==n}return"string"}function u(t,n){for(var r,o;r=t.next();){if("#"==r&&"|"==o){n.tokenize=l;break}o=r}return e="ws","comment"}return{startState:function(){return{ctx:{prev:null,start:0,indentTo:0},lastType:null,tokenize:l}},token:function(n,o){n.sol()&&"number"!=typeof o.ctx.indentTo&&(o.ctx.indentTo=o.ctx.start+1),e=null;var i=o.tokenize(n,o);return"ws"!=e&&(null==o.ctx.indentTo?"symbol"==e&&r.test(n.current())?o.ctx.indentTo=o.ctx.start+t.indentUnit:o.ctx.indentTo="next":"next"==o.ctx.indentTo&&(o.ctx.indentTo=n.column()),o.lastType=e),"open"==e?o.ctx={prev:o.ctx,start:n.column(),indentTo:null}:"close"==e&&(o.ctx=o.ctx.prev||o.ctx),i},indent:function(t,e){var n=t.ctx.indentTo;return"number"==typeof n?n:t.ctx.start+1},closeBrackets:{pairs:'()[]{}""'},lineComment:";;",blockCommentStart:"#|",blockCommentEnd:"|#"}})),t.defineMIME("text/x-common-lisp","commonlisp")}(n(53))}}]);
//# sourceMappingURL=458.f1c3063d.chunk.js.map