(this["webpackJsonp@uiw/react-split"]=this["webpackJsonp@uiw/react-split"]||[]).push([[500],{1192:function(O,T,E){!function(O){"use strict";O.defineMode("pig",(function(O,T){var E=T.keywords,e=T.builtins,I=T.types,N=T.multiLineStrings,t=/[*+\-%<>=&?:\/!|]/;function A(O,T,E){return T.tokenize=E,E(O,T)}function R(O,T){for(var E,e=!1;E=O.next();){if("/"==E&&e){T.tokenize=S;break}e="*"==E}return"comment"}function S(O,T){var r,n=O.next();return'"'==n||"'"==n?A(O,T,(r=n,function(O,T){for(var E,e=!1,I=!1;null!=(E=O.next());){if(E==r&&!e){I=!0;break}e=!e&&"\\"==E}return(I||!e&&!N)&&(T.tokenize=S),"error"})):/[\[\]{}\(\),;\.]/.test(n)?null:/\d/.test(n)?(O.eatWhile(/[\w\.]/),"number"):"/"==n?O.eat("*")?A(O,T,R):(O.eatWhile(t),"operator"):"-"==n?O.eat("-")?(O.skipToEnd(),"comment"):(O.eatWhile(t),"operator"):t.test(n)?(O.eatWhile(t),"operator"):(O.eatWhile(/[\w\$_]/),E&&E.propertyIsEnumerable(O.current().toUpperCase())&&!O.eat(")")&&!O.eat(".")?"keyword":e&&e.propertyIsEnumerable(O.current().toUpperCase())?"variable-2":I&&I.propertyIsEnumerable(O.current().toUpperCase())?"variable-3":"variable")}return{startState:function(){return{tokenize:S,startOfLine:!0}},token:function(O,T){return O.eatSpace()?null:T.tokenize(O,T)}}})),function(){function T(O){for(var T={},E=O.split(" "),e=0;e<E.length;++e)T[E[e]]=!0;return T}var E="ABS ACOS ARITY ASIN ATAN AVG BAGSIZE BINSTORAGE BLOOM BUILDBLOOM CBRT CEIL CONCAT COR COS COSH COUNT COUNT_STAR COV CONSTANTSIZE CUBEDIMENSIONS DIFF DISTINCT DOUBLEABS DOUBLEAVG DOUBLEBASE DOUBLEMAX DOUBLEMIN DOUBLEROUND DOUBLESUM EXP FLOOR FLOATABS FLOATAVG FLOATMAX FLOATMIN FLOATROUND FLOATSUM GENERICINVOKER INDEXOF INTABS INTAVG INTMAX INTMIN INTSUM INVOKEFORDOUBLE INVOKEFORFLOAT INVOKEFORINT INVOKEFORLONG INVOKEFORSTRING INVOKER ISEMPTY JSONLOADER JSONMETADATA JSONSTORAGE LAST_INDEX_OF LCFIRST LOG LOG10 LOWER LONGABS LONGAVG LONGMAX LONGMIN LONGSUM MAX MIN MAPSIZE MONITOREDUDF NONDETERMINISTIC OUTPUTSCHEMA  PIGSTORAGE PIGSTREAMING RANDOM REGEX_EXTRACT REGEX_EXTRACT_ALL REPLACE ROUND SIN SINH SIZE SQRT STRSPLIT SUBSTRING SUM STRINGCONCAT STRINGMAX STRINGMIN STRINGSIZE TAN TANH TOBAG TOKENIZE TOMAP TOP TOTUPLE TRIM TEXTLOADER TUPLESIZE UCFIRST UPPER UTF8STORAGECONVERTER ",e="VOID IMPORT RETURNS DEFINE LOAD FILTER FOREACH ORDER CUBE DISTINCT COGROUP JOIN CROSS UNION SPLIT INTO IF OTHERWISE ALL AS BY USING INNER OUTER ONSCHEMA PARALLEL PARTITION GROUP AND OR NOT GENERATE FLATTEN ASC DESC IS STREAM THROUGH STORE MAPREDUCE SHIP CACHE INPUT OUTPUT STDERROR STDIN STDOUT LIMIT SAMPLE LEFT RIGHT FULL EQ GT LT GTE LTE NEQ MATCHES TRUE FALSE DUMP",I="BOOLEAN INT LONG FLOAT DOUBLE CHARARRAY BYTEARRAY BAG TUPLE MAP ";O.defineMIME("text/x-pig",{name:"pig",builtins:T(E),keywords:T(e),types:T(I)}),O.registerHelper("hintWords","pig",(E+I+e).split(" "))}()}(E(53))}}]);
//# sourceMappingURL=500.c8ccba93.chunk.js.map