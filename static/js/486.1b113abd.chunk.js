(this["webpackJsonp@uiw/react-split"]=this["webpackJsonp@uiw/react-split"]||[]).push([[486],{1113:function(e,t,a){!function(e){"use strict";e.defineMode("mathematica",(function(e,t){var a="(?:\\.\\d+|\\d+\\.\\d*|\\d+)",n="(?:`(?:`?"+a+")?)",c=new RegExp("(?:(?:\\d+)(?:\\^\\^(?:\\.\\w+|\\w+\\.\\w*|\\w+)"+n+"?(?:\\*\\^[+-]?\\d+)?))"),m=new RegExp("(?:"+a+n+"?(?:\\*\\^[+-]?\\d+)?)"),o=new RegExp("(?:`?)(?:[a-zA-Z\\$][a-zA-Z0-9\\$]*)(?:`(?:[a-zA-Z\\$][a-zA-Z0-9\\$]*))*(?:`?)");function r(e,t){var a;return'"'===(a=e.next())?(t.tokenize=z,t.tokenize(e,t)):"("===a&&e.eat("*")?(t.commentLevel++,t.tokenize=i,t.tokenize(e,t)):(e.backUp(1),e.match(c,!0,!1)||e.match(m,!0,!1)?"number":e.match(/(?:In|Out)\[[0-9]*\]/,!0,!1)?"atom":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/,!0,!1)?"meta":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/,!0,!1)?"string-2":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/,!0,!1)||e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)||e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/,!0,!1)||e.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)?"variable-2":e.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/,!0,!1)?"variable-3":e.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":e.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/,!0,!1)?"variable-2":e.match(o,!0,!1)?"keyword":e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/,!0,!1)?"operator":(e.next(),"error"))}function z(e,t){for(var a,n=!1,c=!1;null!=(a=e.next());){if('"'===a&&!c){n=!0;break}c=!c&&"\\"===a}return n&&!c&&(t.tokenize=r),"string"}function i(e,t){for(var a,n;t.commentLevel>0&&null!=(n=e.next());)"("===a&&"*"===n&&t.commentLevel++,"*"===a&&")"===n&&t.commentLevel--,a=n;return t.commentLevel<=0&&(t.tokenize=r),"comment"}return{startState:function(){return{tokenize:r,commentLevel:0}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},blockCommentStart:"(*",blockCommentEnd:"*)"}})),e.defineMIME("text/x-mathematica",{name:"mathematica"})}(a(51))}}]);
//# sourceMappingURL=486.1b113abd.chunk.js.map