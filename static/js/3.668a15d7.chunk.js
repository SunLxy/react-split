(this["webpackJsonp@uiw/react-split"]=this["webpackJsonp@uiw/react-split"]||[]).push([[3,446,538],{1054:function(t,e,n){!function(t){"use strict";var e={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},n={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};t.defineMode("xml",(function(r,i){var a,o,s=r.indentUnit,c={},u=i.htmlMode?e:n;for(var l in u)c[l]=u[l];for(var l in i)c[l]=i[l];function f(t,e){function n(n){return e.tokenize=n,n(t,e)}var r=t.next();return"<"==r?t.eat("!")?t.eat("[")?t.match("CDATA[")?n(d("atom","]]>")):null:t.match("--")?n(d("comment","--\x3e")):t.match("DOCTYPE",!0,!0)?(t.eatWhile(/[\w\._\-]/),n(function t(e){return function(n,r){for(var i;null!=(i=n.next());){if("<"==i)return r.tokenize=t(e+1),r.tokenize(n,r);if(">"==i){if(1==e){r.tokenize=f;break}return r.tokenize=t(e-1),r.tokenize(n,r)}}return"meta"}}(1))):null:t.eat("?")?(t.eatWhile(/[\w\._\-]/),e.tokenize=d("meta","?>"),"meta"):(a=t.eat("/")?"closeTag":"openTag",e.tokenize=p,"tag bracket"):"&"==r?(t.eat("#")?t.eat("x")?t.eatWhile(/[a-fA-F\d]/)&&t.eat(";"):t.eatWhile(/[\d]/)&&t.eat(";"):t.eatWhile(/[\w\.\-:]/)&&t.eat(";"))?"atom":"error":(t.eatWhile(/[^&<]/),null)}function p(t,e){var n=t.next();if(">"==n||"/"==n&&t.eat(">"))return e.tokenize=f,a=">"==n?"endTag":"selfcloseTag","tag bracket";if("="==n)return a="equals",null;if("<"==n){e.tokenize=f,e.state=v,e.tagName=e.tagStart=null;var r=e.tokenize(t,e);return r?r+" tag error":"tag error"}return/[\'\"]/.test(n)?(e.tokenize=function(t){var e=function(e,n){for(;!e.eol();)if(e.next()==t){n.tokenize=p;break}return"string"};return e.isInAttribute=!0,e}(n),e.stringStartCol=t.column(),e.tokenize(t,e)):(t.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function d(t,e){return function(n,r){for(;!n.eol();){if(n.match(e)){r.tokenize=f;break}n.next()}return t}}function m(t,e,n){this.prev=t.context,this.tagName=e,this.indent=t.indented,this.startOfLine=n,(c.doNotIndent.hasOwnProperty(e)||t.context&&t.context.noIndent)&&(this.noIndent=!0)}function h(t){t.context&&(t.context=t.context.prev)}function g(t,e){for(var n;;){if(!t.context)return;if(n=t.context.tagName,!c.contextGrabbers.hasOwnProperty(n)||!c.contextGrabbers[n].hasOwnProperty(e))return;h(t)}}function v(t,e,n){return"openTag"==t?(n.tagStart=e.column(),S):"closeTag"==t?b:v}function S(t,e,n){return"word"==t?(n.tagName=e.current(),o="tag",T):c.allowMissingTagName&&"endTag"==t?(o="tag bracket",T(t,0,n)):(o="error",S)}function b(t,e,n){if("word"==t){var r=e.current();return n.context&&n.context.tagName!=r&&c.implicitlyClosed.hasOwnProperty(n.context.tagName)&&h(n),n.context&&n.context.tagName==r||!1===c.matchClosing?(o="tag",x):(o="tag error",k)}return c.allowMissingTagName&&"endTag"==t?(o="tag bracket",x(t,0,n)):(o="error",k)}function x(t,e,n){return"endTag"!=t?(o="error",x):(h(n),v)}function k(t,e,n){return o="error",x(t,0,n)}function T(t,e,n){if("word"==t)return o="attribute",M;if("endTag"==t||"selfcloseTag"==t){var r=n.tagName,i=n.tagStart;return n.tagName=n.tagStart=null,"selfcloseTag"==t||c.autoSelfClosers.hasOwnProperty(r)?g(n,r):(g(n,r),n.context=new m(n,r,i==n.indented)),v}return o="error",T}function M(t,e,n){return"equals"==t?y:(c.allowMissing||(o="error"),T(t,0,n))}function y(t,e,n){return"string"==t?j:"word"==t&&c.allowUnquoted?(o="string",T):(o="error",T(t,0,n))}function j(t,e,n){return"string"==t?j:T(t,0,n)}return f.isInText=!0,{startState:function(t){var e={tokenize:f,state:v,indented:t||0,tagName:null,tagStart:null,context:null};return null!=t&&(e.baseIndent=t),e},token:function(t,e){if(!e.tagName&&t.sol()&&(e.indented=t.indentation()),t.eatSpace())return null;a=null;var n=e.tokenize(t,e);return(n||a)&&"comment"!=n&&(o=null,e.state=e.state(a||n,t,e),o&&(n="error"==o?n+" error":o)),n},indent:function(e,n,r){var i=e.context;if(e.tokenize.isInAttribute)return e.tagStart==e.indented?e.stringStartCol+1:e.indented+s;if(i&&i.noIndent)return t.Pass;if(e.tokenize!=p&&e.tokenize!=f)return r?r.match(/^(\s*)/)[0].length:0;if(e.tagName)return!1!==c.multilineTagIndentPastTag?e.tagStart+e.tagName.length+2:e.tagStart+s*(c.multilineTagIndentFactor||1);if(c.alignCDATA&&/<!\[CDATA\[/.test(n))return 0;var a=n&&/^<(\/)?([\w_:\.-]*)/.exec(n);if(a&&a[1])for(;i;){if(i.tagName==a[2]){i=i.prev;break}if(!c.implicitlyClosed.hasOwnProperty(i.tagName))break;i=i.prev}else if(a)for(;i;){var o=c.contextGrabbers[i.tagName];if(!o||!o.hasOwnProperty(a[2]))break;i=i.prev}for(;i&&i.prev&&!i.startOfLine;)i=i.prev;return i?i.indent+s:e.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",configuration:c.htmlMode?"html":"xml",helperType:c.htmlMode?"html":"xml",skipAttribute:function(t){t.state==y&&(t.state=T)},xmlCurrentTag:function(t){return t.tagName?{name:t.tagName,close:"closeTag"==t.type}:null},xmlCurrentContext:function(t){for(var e=[],n=t.context;n;n=n.prev)n.tagName&&e.push(n.tagName);return e.reverse()}}})),t.defineMIME("text/xml","xml"),t.defineMIME("application/xml","xml"),t.mimeModes.hasOwnProperty("text/html")||t.defineMIME("text/html",{name:"xml",htmlMode:!0})}(n(51))},1055:function(t,e,n){!function(t){"use strict";var e={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]},n={};function r(t,e){var r=t.match(function(t){var e=n[t];return e||(n[t]=new RegExp("\\s+"+t+"\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"))}(e));return r?/^\s*(.*?)\s*$/.exec(r[2])[1]:""}function i(t,e){return new RegExp((e?"^":"")+"</s*"+t+"s*>","i")}function a(t,e){for(var n in t)for(var r=e[n]||(e[n]=[]),i=t[n],a=i.length-1;a>=0;a--)r.unshift(i[a])}t.defineMode("htmlmixed",(function(n,o){var s=t.getMode(n,{name:"xml",htmlMode:!0,multilineTagIndentFactor:o.multilineTagIndentFactor,multilineTagIndentPastTag:o.multilineTagIndentPastTag}),c={},u=o&&o.tags,l=o&&o.scriptTypes;if(a(e,c),u&&a(u,c),l)for(var f=l.length-1;f>=0;f--)c.script.unshift(["type",l[f].matches,l[f].mode]);function p(e,a){var o,u=s.token(e,a.htmlState),l=/\btag\b/.test(u);if(l&&!/[<>\s\/]/.test(e.current())&&(o=a.htmlState.tagName&&a.htmlState.tagName.toLowerCase())&&c.hasOwnProperty(o))a.inTag=o+" ";else if(a.inTag&&l&&/>$/.test(e.current())){var f=/^([\S]+) (.*)/.exec(a.inTag);a.inTag=null;var d=">"==e.current()&&function(t,e){for(var n=0;n<t.length;n++){var i=t[n];if(!i[0]||i[1].test(r(e,i[0])))return i[2]}}(c[f[1]],f[2]),m=t.getMode(n,d),h=i(f[1],!0),g=i(f[1],!1);a.token=function(t,e){return t.match(h,!1)?(e.token=p,e.localState=e.localMode=null,null):function(t,e,n){var r=t.current(),i=r.search(e);return i>-1?t.backUp(r.length-i):r.match(/<\/?$/)&&(t.backUp(r.length),t.match(e,!1)||t.match(r)),n}(t,g,e.localMode.token(t,e.localState))},a.localMode=m,a.localState=t.startState(m,s.indent(a.htmlState,"",""))}else a.inTag&&(a.inTag+=e.current(),e.eol()&&(a.inTag+=" "));return u}return{startState:function(){return{token:p,inTag:null,localMode:null,localState:null,htmlState:t.startState(s)}},copyState:function(e){var n;return e.localState&&(n=t.copyState(e.localMode,e.localState)),{token:e.token,inTag:e.inTag,localMode:e.localMode,localState:n,htmlState:t.copyState(s,e.htmlState)}},token:function(t,e){return e.token(t,e)},indent:function(e,n,r){return!e.localMode||/^\s*<\//.test(n)?s.indent(e.htmlState,n,r):e.localMode.indent?e.localMode.indent(e.localState,n,r):t.Pass},innerMode:function(t){return{state:t.localState||t.htmlState,mode:t.localMode||s}}}}),"xml","javascript","css"),t.defineMIME("text/html","htmlmixed")}(n(51),n(1054),n(1057),n(1056))},1068:function(t,e,n){!function(t){"use strict";t.defineMode("pug",(function(e){var n="keyword",r={"{":"}","(":")","[":"]"},i=t.getMode(e,"javascript");function a(){this.javaScriptLine=!1,this.javaScriptLineExcludesColon=!1,this.javaScriptArguments=!1,this.javaScriptArgumentsDepth=0,this.isInterpolating=!1,this.interpolationNesting=0,this.jsState=t.startState(i),this.restOfLine="",this.isIncludeFiltered=!1,this.isEach=!1,this.lastTag="",this.scriptType="",this.isAttrs=!1,this.attrsNest=[],this.inAttributeName=!0,this.attributeIsType=!1,this.attrValue="",this.indentOf=1/0,this.indentToken="",this.innerMode=null,this.innerState=null,this.innerModeForLine=!1}function o(t,e){if(t.match("#{"))return e.isInterpolating=!0,e.interpolationNesting=0,"punctuation"}function s(n,r){var i;if(n.match(/^:([\w\-]+)/))return e&&e.innerModes&&(i=e.innerModes(n.current().substring(1))),i||(i=n.current().substring(1)),"string"===typeof i&&(i=t.getMode(e,i)),c(n,r,i),"atom"}function c(n,r,i){i=t.mimeModes[i]||i,i=e.innerModes&&e.innerModes(i)||i,i=t.mimeModes[i]||i,i=t.getMode(e,i),r.indentOf=n.indentation(),i&&"null"!==i.name?r.innerMode=i:r.indentToken="string"}function u(e,n,r){if(e.indentation()>n.indentOf||n.innerModeForLine&&!e.sol()||r)return n.innerMode?(n.innerState||(n.innerState=n.innerMode.startState?t.startState(n.innerMode,e.indentation()):{}),e.hideFirstChars(n.indentOf+2,(function(){return n.innerMode.token(e,n.innerState)||!0}))):(e.skipToEnd(),n.indentToken);e.sol()&&(n.indentOf=1/0,n.indentToken=null,n.innerMode=null,n.innerState=null)}return a.prototype.copy=function(){var e=new a;return e.javaScriptLine=this.javaScriptLine,e.javaScriptLineExcludesColon=this.javaScriptLineExcludesColon,e.javaScriptArguments=this.javaScriptArguments,e.javaScriptArgumentsDepth=this.javaScriptArgumentsDepth,e.isInterpolating=this.isInterpolating,e.interpolationNesting=this.interpolationNesting,e.jsState=t.copyState(i,this.jsState),e.innerMode=this.innerMode,this.innerMode&&this.innerState&&(e.innerState=t.copyState(this.innerMode,this.innerState)),e.restOfLine=this.restOfLine,e.isIncludeFiltered=this.isIncludeFiltered,e.isEach=this.isEach,e.lastTag=this.lastTag,e.scriptType=this.scriptType,e.isAttrs=this.isAttrs,e.attrsNest=this.attrsNest.slice(),e.inAttributeName=this.inAttributeName,e.attributeIsType=this.attributeIsType,e.attrValue=this.attrValue,e.indentOf=this.indentOf,e.indentToken=this.indentToken,e.innerModeForLine=this.innerModeForLine,e},{startState:function(){return new a},copyState:function(t){return t.copy()},token:function(e,a){var l=u(e,a)||function(t,e){if(t.sol()&&(e.restOfLine=""),e.restOfLine){t.skipToEnd();var n=e.restOfLine;return e.restOfLine="",n}}(e,a)||function(t,e){if(e.isInterpolating){if("}"===t.peek()){if(e.interpolationNesting--,e.interpolationNesting<0)return t.next(),e.isInterpolating=!1,"punctuation"}else"{"===t.peek()&&e.interpolationNesting++;return i.token(t,e.jsState)||!0}}(e,a)||function(t,e){if(e.isIncludeFiltered){var n=s(t,e);return e.isIncludeFiltered=!1,e.restOfLine="string",n}}(e,a)||function(t,e){if(e.isEach){if(t.match(/^ in\b/))return e.javaScriptLine=!0,e.isEach=!1,n;if(t.sol()||t.eol())e.isEach=!1;else if(t.next()){for(;!t.match(/^ in\b/,!1)&&t.next(););return"variable"}}}(e,a)||function e(n,a){if(a.isAttrs){if(r[n.peek()]&&a.attrsNest.push(r[n.peek()]),a.attrsNest[a.attrsNest.length-1]===n.peek())a.attrsNest.pop();else if(n.eat(")"))return a.isAttrs=!1,"punctuation";if(a.inAttributeName&&n.match(/^[^=,\)!]+/))return"="!==n.peek()&&"!"!==n.peek()||(a.inAttributeName=!1,a.jsState=t.startState(i),"script"===a.lastTag&&"type"===n.current().trim().toLowerCase()?a.attributeIsType=!0:a.attributeIsType=!1),"attribute";var o=i.token(n,a.jsState);if(a.attributeIsType&&"string"===o&&(a.scriptType=n.current().toString()),0===a.attrsNest.length&&("string"===o||"variable"===o||"keyword"===o))try{return Function("","var x "+a.attrValue.replace(/,\s*$/,"").replace(/^!/,"")),a.inAttributeName=!0,a.attrValue="",n.backUp(n.current().length),e(n,a)}catch(s){}return a.attrValue+=n.current(),o||!0}}(e,a)||function(t,e){if(t.sol()&&(e.javaScriptLine=!1,e.javaScriptLineExcludesColon=!1),e.javaScriptLine){if(e.javaScriptLineExcludesColon&&":"===t.peek())return e.javaScriptLine=!1,void(e.javaScriptLineExcludesColon=!1);var n=i.token(t,e.jsState);return t.eol()&&(e.javaScriptLine=!1),n||!0}}(e,a)||function(t,e){if(e.javaScriptArguments)return 0===e.javaScriptArgumentsDepth&&"("!==t.peek()?void(e.javaScriptArguments=!1):("("===t.peek()?e.javaScriptArgumentsDepth++:")"===t.peek()&&e.javaScriptArgumentsDepth--,0===e.javaScriptArgumentsDepth?void(e.javaScriptArguments=!1):i.token(t,e.jsState)||!0)}(e,a)||function(t,e){if(e.mixinCallAfter)return e.mixinCallAfter=!1,t.match(/^\( *[-\w]+ *=/,!1)||(e.javaScriptArguments=!0,e.javaScriptArgumentsDepth=0),!0}(e,a)||function(t){if(t.match(/^yield\b/))return"keyword"}(e)||function(t){if(t.match(/^(?:doctype) *([^\n]+)?/))return"meta"}(e)||o(e,a)||function(t,e){if(t.match(/^case\b/))return e.javaScriptLine=!0,n}(e,a)||function(t,e){if(t.match(/^when\b/))return e.javaScriptLine=!0,e.javaScriptLineExcludesColon=!0,n}(e,a)||function(t){if(t.match(/^default\b/))return n}(e)||function(t,e){if(t.match(/^extends?\b/))return e.restOfLine="string",n}(e,a)||function(t,e){if(t.match(/^append\b/))return e.restOfLine="variable",n}(e,a)||function(t,e){if(t.match(/^prepend\b/))return e.restOfLine="variable",n}(e,a)||function(t,e){if(t.match(/^block\b *(?:(prepend|append)\b)?/))return e.restOfLine="variable",n}(e,a)||function(t,e){if(t.match(/^include\b/))return e.restOfLine="string",n}(e,a)||function(t,e){if(t.match(/^include:([a-zA-Z0-9\-]+)/,!1)&&t.match("include"))return e.isIncludeFiltered=!0,n}(e,a)||function(t,e){if(t.match(/^mixin\b/))return e.javaScriptLine=!0,n}(e,a)||function(t,e){return t.match(/^\+([-\w]+)/)?(t.match(/^\( *[-\w]+ *=/,!1)||(e.javaScriptArguments=!0,e.javaScriptArgumentsDepth=0),"variable"):t.match(/^\+#{/,!1)?(t.next(),e.mixinCallAfter=!0,o(t,e)):void 0}(e,a)||function(t,e){if(t.match(/^(if|unless|else if|else)\b/))return e.javaScriptLine=!0,n}(e,a)||function(t,e){if(t.match(/^(- *)?(each|for)\b/))return e.isEach=!0,n}(e,a)||function(t,e){if(t.match(/^while\b/))return e.javaScriptLine=!0,n}(e,a)||function(t,e){var n;if(n=t.match(/^(\w(?:[-:\w]*\w)?)\/?/))return e.lastTag=n[1].toLowerCase(),"script"===e.lastTag&&(e.scriptType="application/javascript"),"tag"}(e,a)||s(e,a)||function(t,e){if(t.match(/^(!?=|-)/))return e.javaScriptLine=!0,"punctuation"}(e,a)||function(t){if(t.match(/^#([\w-]+)/))return"builtin"}(e)||function(t){if(t.match(/^\.([\w-]+)/))return"qualifier"}(e)||function(t,e){if("("==t.peek())return t.next(),e.isAttrs=!0,e.attrsNest=[],e.inAttributeName=!0,e.attrValue="",e.attributeIsType=!1,"punctuation"}(e,a)||function(t,e){if(t.match(/^&attributes\b/))return e.javaScriptArguments=!0,e.javaScriptArgumentsDepth=0,"keyword"}(e,a)||function(t){if(t.sol()&&t.eatSpace())return"indent"}(e)||function(t,e){return t.match(/^(?:\| ?| )([^\n]+)/)?"string":t.match(/^(<[^\n]*)/,!1)?(c(t,e,"htmlmixed"),e.innerModeForLine=!0,u(t,e,!0)):void 0}(e,a)||function(t,e){if(t.match(/^ *\/\/(-)?([^\n]*)/))return e.indentOf=t.indentation(),e.indentToken="comment","comment"}(e,a)||function(t){if(t.match(/^: */))return"colon"}(e)||function(t,e){if(t.eat(".")){var n=null;return"script"===e.lastTag&&-1!=e.scriptType.toLowerCase().indexOf("javascript")?n=e.scriptType.toLowerCase().replace(/"|'/g,""):"style"===e.lastTag&&(n="css"),c(t,e,n),"dot"}}(e,a)||function(t){return t.next(),null}(e);return!0===l?null:l}}}),"javascript","css","htmlmixed"),t.defineMIME("text/x-pug","pug"),t.defineMIME("text/x-jade","pug")}(n(51),n(1057),n(1056),n(1055))}}]);
//# sourceMappingURL=3.668a15d7.chunk.js.map