(this["webpackJsonp@uiw/react-split"]=this["webpackJsonp@uiw/react-split"]||[]).push([[512],{1140:function(e,t,n){!function(e){"use strict";e.defineMode("scheme",(function(){function e(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}var t=e("\u03bb case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt #f floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? #t tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"),n=e("define let letrec let* lambda");function r(e,t,n){this.indent=e,this.type=t,this.prev=n}function i(e,t,n){e.indentStack=new r(t,n,e.indentStack)}var a=new RegExp(/^(?:[-+]i|[-+][01]+#*(?:\/[01]+#*)?i|[-+]?[01]+#*(?:\/[01]+#*)?@[-+]?[01]+#*(?:\/[01]+#*)?|[-+]?[01]+#*(?:\/[01]+#*)?[-+](?:[01]+#*(?:\/[01]+#*)?)?i|[-+]?[01]+#*(?:\/[01]+#*)?)(?=[()\s;"]|$)/i),c=new RegExp(/^(?:[-+]i|[-+][0-7]+#*(?:\/[0-7]+#*)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?@[-+]?[0-7]+#*(?:\/[0-7]+#*)?|[-+]?[0-7]+#*(?:\/[0-7]+#*)?[-+](?:[0-7]+#*(?:\/[0-7]+#*)?)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?)(?=[()\s;"]|$)/i),o=new RegExp(/^(?:[-+]i|[-+][\da-f]+#*(?:\/[\da-f]+#*)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?@[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?[-+](?:[\da-f]+#*(?:\/[\da-f]+#*)?)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?)(?=[()\s;"]|$)/i),s=new RegExp(/^(?:[-+]i|[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)i|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)@[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)?i|(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*))(?=[()\s;"]|$)/i);function l(e){return e.match(a)}function d(e){return e.match(c)}function u(e,t){return!0===t&&e.backUp(1),e.match(s)}function m(e){return e.match(o)}return{startState:function(){return{indentStack:null,indentation:0,mode:!1,sExprComment:!1,sExprQuote:!1}},token:function(e,r){if(null==r.indentStack&&e.sol()&&(r.indentation=e.indentation()),e.eatSpace())return null;var a=null;switch(r.mode){case"string":for(var c=!1;null!=(o=e.next());){if('"'==o&&!c){r.mode=!1;break}c=!c&&"\\"==o}a="string";break;case"comment":for(var o,s=!1;null!=(o=e.next());){if("#"==o&&s){r.mode=!1;break}s="|"==o}a="comment";break;case"s-expr-comment":if(r.mode=!1,"("!=e.peek()&&"["!=e.peek()){e.eatWhile(/[^\s\(\)\[\]]/),a="comment";break}r.sExprComment=0;default:var p=e.next();if('"'==p)r.mode="string",a="string";else if("'"==p)"("==e.peek()||"["==e.peek()?("number"!=typeof r.sExprQuote&&(r.sExprQuote=0),a="atom"):(e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/),a="atom");else if("#"==p)if(e.eat("|"))r.mode="comment",a="comment";else if(e.eat(/[tf]/i))a="atom";else if(e.eat(";"))r.mode="s-expr-comment",a="comment";else{var f=null,h=!1,g=!0;e.eat(/[ei]/i)?h=!0:e.backUp(1),e.match(/^#b/i)?f=l:e.match(/^#o/i)?f=d:e.match(/^#x/i)?f=m:e.match(/^#d/i)?f=u:e.match(/^[-+0-9.]/,!1)?(g=!1,f=u):h||e.eat("#"),null!=f&&(g&&!h&&e.match(/^#[ei]/i),f(e)&&(a="number"))}else if(/^[-+0-9.]/.test(p)&&u(e,!0))a="number";else if(";"==p)e.skipToEnd(),a="comment";else if("("==p||"["==p){for(var x,b="",v=e.column();null!=(x=e.eat(/[^\s\(\[\;\)\]]/));)b+=x;b.length>0&&n.propertyIsEnumerable(b)?i(r,v+2,p):(e.eatSpace(),e.eol()||";"==e.peek()?i(r,v+1,p):i(r,v+e.current().length,p)),e.backUp(e.current().length-1),"number"==typeof r.sExprComment&&r.sExprComment++,"number"==typeof r.sExprQuote&&r.sExprQuote++,a="bracket"}else")"==p||"]"==p?(a="bracket",null!=r.indentStack&&r.indentStack.type==(")"==p?"(":"[")&&(function(e){e.indentStack=e.indentStack.prev}(r),"number"==typeof r.sExprComment&&0==--r.sExprComment&&(a="comment",r.sExprComment=!1),"number"==typeof r.sExprQuote&&0==--r.sExprQuote&&(a="atom",r.sExprQuote=!1))):(e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/),a=t&&t.propertyIsEnumerable(e.current())?"builtin":"variable")}return"number"==typeof r.sExprComment?"comment":"number"==typeof r.sExprQuote?"atom":a},indent:function(e){return null==e.indentStack?e.indentation:e.indentStack.indent},closeBrackets:{pairs:'()[]{}""'},lineComment:";;"}})),e.defineMIME("text/x-scheme","scheme")}(n(51))}}]);
//# sourceMappingURL=512.a6c25a60.chunk.js.map