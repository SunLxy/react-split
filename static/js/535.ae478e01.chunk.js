(this["webpackJsonp@uiw/react-split"]=this["webpackJsonp@uiw/react-split"]||[]).push([[535],{1229:function(e,t,n){!function(e){"use strict";e.defineMode("verilog",(function(t,n){var i=t.indentUnit,r=n.statementIndentUnit||i,a=n.dontAlignCalls,o=n.noIndentKeywords||[],l=n.multiLineStrings,s=n.hooks||{};function c(e){for(var t={},n=e.split(" "),i=0;i<n.length;++i)t[n[i]]=!0;return t}var d,u,f=c("accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 null or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor"),m=/[\+\-\*\/!~&|^%=?:]/,p=/[\[\]{}()]/,v=/\d[0-9_]*/,g=/\d*\s*'s?d\s*\d[0-9_]*/i,h=/\d*\s*'s?b\s*[xz01][xz01_]*/i,k=/\d*\s*'s?o\s*[xz0-7][xz0-7_]*/i,y=/\d*\s*'s?h\s*[0-9a-fxz?][0-9a-fxz?_]*/i,b=/(\d[\d_]*(\.\d[\d_]*)?E-?[\d_]+)|(\d[\d_]*\.\d[\d_]*)/i,w=/^((\w+)|[)}\]])/,x=/[)}\]]/,_=c("case checker class clocking config function generate interface module package primitive program property specify sequence table task"),I={};for(var z in _)I[z]="end"+z;for(var C in I.begin="end",I.casex="endcase",I.casez="endcase",I.do="while",I.fork="join;join_any;join_none",I.covergroup="endgroup",o)z=o[C],I[z]&&(I[z]=void 0);var S=c("always always_comb always_ff always_latch assert assign assume else export for foreach forever if import initial repeat while");function j(e,t){var n,i,r=e.peek();if(s[r]&&0!=(n=s[r](e,t)))return n;if(s.tokenBase&&0!=(n=s.tokenBase(e,t)))return n;if(/[,;:\.]/.test(r))return d=e.next(),null;if(p.test(r))return d=e.next(),"bracket";if("`"==r)return e.next(),e.eatWhile(/[\w\$_]/)?"def":null;if("$"==r)return e.next(),e.eatWhile(/[\w\$_]/)?"meta":null;if("#"==r)return e.next(),e.eatWhile(/[\d_.]/),"def";if('"'==r)return e.next(),t.tokenize=(i=r,function(e,t){for(var n,r=!1,a=!1;null!=(n=e.next());){if(n==i&&!r){a=!0;break}r=!r&&"\\"==n}return(a||!r&&!l)&&(t.tokenize=j),"string"}),t.tokenize(e,t);if("/"==r){if(e.next(),e.eat("*"))return t.tokenize=E,E(e,t);if(e.eat("/"))return e.skipToEnd(),"comment";e.backUp(1)}if(e.match(b)||e.match(g)||e.match(h)||e.match(k)||e.match(y)||e.match(v)||e.match(b))return"number";if(e.eatWhile(m))return"meta";if(e.eatWhile(/[\w\$_]/)){var a=e.current();return f[a]?(I[a]&&(d="newblock"),S[a]&&(d="newstatement"),u=a,"keyword"):"variable"}return e.next(),null}function E(e,t){for(var n,i=!1;n=e.next();){if("/"==n&&i){t.tokenize=j;break}i="*"==n}return"comment"}function $(e,t,n,i,r){this.indented=e,this.column=t,this.type=n,this.align=i,this.prev=r}function A(e,t,n){var i=new $(e.indented,t,n,null,e.context);return e.context=i}function M(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}function q(e,t){if(e==t)return!0;var n=t.split(";");for(var i in n)if(e==n[i])return!0;return!1}return{electricInput:function(){var e=[];for(var t in I)if(I[t]){var n=I[t].split(";");for(var i in n)e.push(n[i])}return new RegExp("[{}()\\[\\]]|("+e.join("|")+")$")}(),startState:function(e){var t={tokenize:null,context:new $((e||0)-i,0,"top",!1),indented:0,startOfLine:!0};return s.startState&&s.startState(t),t},token:function(e,t){var n,i=t.context;if(e.sol()&&(null==i.align&&(i.align=!1),t.indented=e.indentation(),t.startOfLine=!0),s.token&&void 0!==(n=s.token(e,t)))return n;if(e.eatSpace())return null;if(d=null,u=null,"comment"==(n=(t.tokenize||j)(e,t))||"meta"==n||"variable"==n)return n;if(null==i.align&&(i.align=!0),d==i.type)M(t);else if(";"==d&&"statement"==i.type||i.type&&q(u,i.type))for(i=M(t);i&&"statement"==i.type;)i=M(t);else if("{"==d)A(t,e.column(),"}");else if("["==d)A(t,e.column(),"]");else if("("==d)A(t,e.column(),")");else if(i&&"endcase"==i.type&&":"==d)A(t,e.column(),"statement");else if("newstatement"==d)A(t,e.column(),"statement");else if("newblock"==d&&("function"!=u||!i||"statement"!=i.type&&"endgroup"!=i.type))if("task"==u&&i&&"statement"==i.type);else{var r=I[u];A(t,e.column(),r)}return t.startOfLine=!1,n},indent:function(t,n){if(t.tokenize!=j&&null!=t.tokenize)return e.Pass;if(s.indent){var o=s.indent(t);if(o>=0)return o}var l=t.context,c=n&&n.charAt(0);"statement"==l.type&&"}"==c&&(l=l.prev);var d=!1,u=n.match(w);return u&&(d=q(u[0],l.type)),"statement"==l.type?l.indented+("{"==c?0:r):x.test(l.type)&&l.align&&!a?l.column+(d?0:1):")"!=l.type||d?l.indented+(d?0:i):l.indented+r},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"indent"}})),e.defineMIME("text/x-verilog",{name:"verilog"}),e.defineMIME("text/x-systemverilog",{name:"verilog"});var t={"|":"link",">":"property",$:"variable",$$:"variable","?$":"qualifier","?*":"qualifier","-":"hr","/":"property","/-":"property","@":"variable-3","@-":"variable-3","@++":"variable-3","@+=":"variable-3","@+=-":"variable-3","@--":"variable-3","@-=":"variable-3","%+":"tag","%-":"tag","%":"tag",">>":"tag","<<":"tag","<>":"tag","#":"tag","^":"attribute","^^":"attribute","^!":"attribute","*":"variable-2","**":"variable-2","\\":"keyword",'"':"comment"},n={"/":"beh-hier",">":"beh-hier","-":"phys-hier","|":"pipe","?":"when","@":"stage","\\":"keyword"},i=/^([~!@#\$%\^&\*-\+=\?\/\\\|'"<>]+)([\d\w_]*)/,r=/^[! ]  /,a=/^[! ] */,o=/^\/[\/\*]/;function l(e,t,n){var i=t/3;return"tlv-"+e.tlvIndentationStyle[i]+"-"+n}e.defineMIME("text/x-tlv",{name:"verilog",hooks:{electricInput:!1,token:function(e,s){var c=void 0;if(e.sol()&&!s.tlvInBlockComment){"\\"==e.peek()&&(c="def",e.skipToEnd(),e.string.match(/\\SV/)?s.tlvCodeActive=!1:e.string.match(/\\TLV/)&&(s.tlvCodeActive=!0)),s.tlvCodeActive&&0==e.pos&&0==s.indented&&(g=e.match(a,!1))&&(s.indented=g[0].length);var d=s.indented,u=d/3;if(u<=s.tlvIndentationStyle.length){var f=e.string.length==d,m=3*u;if(m<e.string.length){var p=e.string.slice(m),v=p[0];n[v]&&(g=p.match(i))&&t[g[1]]&&(d+=3,"\\"==v&&m>0||(s.tlvIndentationStyle[u]=n[v],u++))}if(!f)for(;s.tlvIndentationStyle.length>u;)s.tlvIndentationStyle.pop()}s.tlvNextIndent=d}if(s.tlvCodeActive){var g,h=!1;if(void 0!==c)c+=" "+l(s,0,"scope-ident");else if(e.pos/3<s.tlvIndentationStyle.length&&(g=e.match(e.sol()?r:/^   /)))c="tlv-indent-"+(e.pos%2==0?"even":"odd")+" "+l(s,e.pos-3,"indent"),"!"==g[0].charAt(0)&&(c+=" tlv-alert-line-prefix"),function(e){var t;return(t=e.match(i,!1))&&t[2].length>0}(e)&&(c+=" "+l(s,e.pos,"before-scope-ident"));else if(s.tlvInBlockComment)e.match(/^.*?\*\//)?s.tlvInBlockComment=!1:e.skipToEnd(),c="comment";else if((g=e.match(o))&&!s.tlvInBlockComment)"//"==g[0]?e.skipToEnd():s.tlvInBlockComment=!0,c="comment";else if(g=e.match(i)){var k=g[1],y=g[2];t.hasOwnProperty(k)&&(y.length>0||e.eol())?(c=t[k],e.column()==s.indented&&(c+=" "+l(s,e.column(),"scope-ident"))):(e.backUp(e.current().length-1),c="tlv-default")}else e.match(/^\t+/)?c="tlv-tab":e.match(/^[\[\]{}\(\);\:]+/)?c="meta":(g=e.match(/^[mM]4([\+_])?[\w\d_]*/))?c="+"==g[1]?"tlv-m4-plus":"tlv-m4":e.match(/^ +/)?c=e.eol()?"error":"tlv-default":e.match(/^[\w\d_]+/)?c="number":(e.next(),c="tlv-default");h&&(c+=" tlv-statement")}else e.match(/^[mM]4([\w\d_]*)/)&&(c="tlv-m4");return c},indent:function(e){return 1==e.tlvCodeActive?e.tlvNextIndent:-1},startState:function(e){e.tlvIndentationStyle=[],e.tlvCodeActive=!0,e.tlvNextIndent=-1,e.tlvInBlockComment=!1}}})}(n(53))}}]);
//# sourceMappingURL=535.ae478e01.chunk.js.map