(this["webpackJsonp@uiw/react-split"]=this["webpackJsonp@uiw/react-split"]||[]).push([[505],{1111:function(e,t,n){!function(e){"use strict";function t(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var n,r=t(["and","or","not","is"]),i=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in"],o=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];function a(e){return e.scopes[e.scopes.length-1]}e.registerHelper("hintWords","python",i.concat(o)),e.defineMode("python",(function(n,s){for(var c=s.delimiters||s.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,l=[s.singleOperators,s.doubleOperators,s.doubleDelimiters,s.tripleDelimiters,s.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],u=0;u<l.length;u++)l[u]||l.splice(u--,1);var f=s.hangingIndent||n.indentUnit,p=i,d=o;void 0!=s.extra_keywords&&(p=p.concat(s.extra_keywords)),void 0!=s.extra_builtins&&(d=d.concat(s.extra_builtins));var m=!(s.version&&Number(s.version)<3);if(m){var h=s.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;p=p.concat(["nonlocal","False","True","None","async","await"]),d=d.concat(["ascii","bytes","exec","print"]);var g=new RegExp("^(([rbuf]|(br)|(fr))?('{3}|\"{3}|['\"]))","i")}else h=s.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/,p=p.concat(["exec","print"]),d=d.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","False","True","None"]),g=new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))","i");var b=t(p),y=t(d);function k(e,t){var n=e.sol()&&"\\"!=t.lastToken;if(n&&(t.indent=e.indentation()),n&&"py"==a(t).type){var r=a(t).offset;if(e.eatSpace()){var i=e.indentation();return i>r?x(t):i<r&&_(e,t)&&"#"!=e.peek()&&(t.errorToken=!0),null}var o=v(e,t);return r>0&&_(e,t)&&(o+=" error"),o}return v(e,t)}function v(e,t,n){if(e.eatSpace())return null;if(!n&&e.match(/^#.*/))return"comment";if(e.match(/^[0-9\.]/,!1)){var i=!1;if(e.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(i=!0),e.match(/^[\d_]+\.\d*/)&&(i=!0),e.match(/^\.\d+/)&&(i=!0),i)return e.eat(/J/i),"number";var o=!1;if(e.match(/^0x[0-9a-f_]+/i)&&(o=!0),e.match(/^0b[01_]+/i)&&(o=!0),e.match(/^0o[0-7_]+/i)&&(o=!0),e.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(e.eat(/J/i),o=!0),e.match(/^0(?![\dx])/i)&&(o=!0),o)return e.eat(/L/i),"number"}if(e.match(g))return-1!==e.current().toLowerCase().indexOf("f")?(t.tokenize=function(e,t){for(;"rubf".indexOf(e.charAt(0).toLowerCase())>=0;)e=e.substr(1);var n=1==e.length;function r(e){return function(t,n){var o=v(t,n,!0);return"punctuation"==o&&("{"==t.current()?n.tokenize=r(e+1):"}"==t.current()&&(n.tokenize=e>1?r(e-1):i)),o}}function i(i,o){for(;!i.eol();)if(i.eatWhile(/[^'"\{\}\\]/),i.eat("\\")){if(i.next(),n&&i.eol())return"string"}else{if(i.match(e))return o.tokenize=t,"string";if(i.match("{{"))return"string";if(i.match("{",!1))return o.tokenize=r(0),i.current()?"string":o.tokenize(i,o);if(i.match("}}"))return"string";if(i.match("}"))return"error";i.eat(/['"]/)}if(n){if(s.singleLineStringErrors)return"error";o.tokenize=t}return"string"}return i.isString=!0,i}(e.current(),t.tokenize),t.tokenize(e,t)):(t.tokenize=function(e,t){for(;"rubf".indexOf(e.charAt(0).toLowerCase())>=0;)e=e.substr(1);var n=1==e.length;function r(r,i){for(;!r.eol();)if(r.eatWhile(/[^'"\\]/),r.eat("\\")){if(r.next(),n&&r.eol())return"string"}else{if(r.match(e))return i.tokenize=t,"string";r.eat(/['"]/)}if(n){if(s.singleLineStringErrors)return"error";i.tokenize=t}return"string"}return r.isString=!0,r}(e.current(),t.tokenize),t.tokenize(e,t));for(var a=0;a<l.length;a++)if(e.match(l[a]))return"operator";return e.match(c)?"punctuation":"."==t.lastToken&&e.match(h)?"property":e.match(b)||e.match(r)?"keyword":e.match(y)?"builtin":e.match(/^(self|cls)\b/)?"variable-2":e.match(h)?"def"==t.lastToken||"class"==t.lastToken?"def":"variable":(e.next(),n?null:"error")}function x(e){for(;"py"!=a(e).type;)e.scopes.pop();e.scopes.push({offset:a(e).offset+n.indentUnit,type:"py",align:null})}function _(e,t){for(var n=e.indentation();t.scopes.length>1&&a(t).offset>n;){if("py"!=a(t).type)return!0;t.scopes.pop()}return a(t).offset!=n}function z(e,t){e.sol()&&(t.beginningOfLine=!0);var n=t.tokenize(e,t),r=e.current();if(t.beginningOfLine&&"@"==r)return e.match(h,!1)?"meta":m?"operator":"error";if(/\S/.test(r)&&(t.beginningOfLine=!1),"variable"!=n&&"builtin"!=n||"meta"!=t.lastToken||(n="meta"),"pass"!=r&&"return"!=r||(t.dedent+=1),"lambda"==r&&(t.lambda=!0),":"!=r||t.lambda||"py"!=a(t).type||x(t),1==r.length&&!/string|comment/.test(n)){var i="[({".indexOf(r);if(-1!=i&&function(e,t,n){var r=e.match(/^([\s\[\{\(]|#.*)*$/,!1)?null:e.column()+1;t.scopes.push({offset:t.indent+f,type:n,align:r})}(e,t,"])}".slice(i,i+1)),-1!=(i="])}".indexOf(r))){if(a(t).type!=r)return"error";t.indent=t.scopes.pop().offset-f}}return t.dedent>0&&e.eol()&&"py"==a(t).type&&(t.scopes.length>1&&t.scopes.pop(),t.dedent-=1),n}return{startState:function(e){return{tokenize:k,scopes:[{offset:e||0,type:"py",align:null}],indent:e||0,lastToken:null,lambda:!1,dedent:0}},token:function(e,t){var n=t.errorToken;n&&(t.errorToken=!1);var r=z(e,t);return r&&"comment"!=r&&(t.lastToken="keyword"==r||"punctuation"==r?e.current():r),"punctuation"==r&&(r=null),e.eol()&&t.lambda&&(t.lambda=!1),n?r+" error":r},indent:function(t,n){if(t.tokenize!=k)return t.tokenize.isString?e.Pass:0;var r=a(t),i=r.type==n.charAt(0);return null!=r.align?r.align-(i?1:0):r.offset-(i?f:0)},electricInput:/^\s*[\}\]\)]$/,closeBrackets:{triples:"'\""},lineComment:"#",fold:"indent"}})),e.defineMIME("text/x-python","python"),e.defineMIME("text/x-cython",{name:"python",extra_keywords:(n="by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE",n.split(" "))})}(n(51))}}]);
//# sourceMappingURL=505.80fddc6e.chunk.js.map