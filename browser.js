// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(e){return"string"==typeof e}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):s.call(n)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function j(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var E=String.fromCharCode,x=isNaN,S=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,o,a,l,s,f,p;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,f=0;f<e.length;f++)if(u(n=e[f]))l+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,x(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,i;for(t=[],i=0,n=A.exec(e);n;)(r=e.slice(i,A.lastIndex-n[0].length)).length&&t.push(r),t.push(V(n)),i=A.lastIndex,n=A.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function O(e){return"string"==typeof e}function $(e){var r,t,n;if(!O(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var C,I=Object.prototype,P=I.toString,B=I.__defineGetter__,R=I.__defineSetter__,L=I.__lookupGetter__,G=I.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(e,r,t.get),a&&R&&R.call(e,r,t.set),e};var Z=C;function M(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W=/./;function N(e){return"boolean"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,q=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&q.call(e,r)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"",K=X()?function(e){var r,t,n;if(null==e)return z.call(e);t=e[J],r=D(e,J);try{e[J]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[J]=t:delete e[J],n}:function(e){return z.call(e)},Q=Boolean,Y=Boolean.prototype.toString,ee=X();function re(e){return"object"==typeof e&&(e instanceof Q||(ee?function(e){try{return Y.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function te(e){return N(e)||re(e)}function ne(){return new Function("return this;")()}M(te,"isPrimitive",N),M(te,"isObject",re);var ie="object"==typeof self?self:null,oe="object"==typeof window?window:null,ae="object"==typeof globalThis?globalThis:null,ce=function(e){if(arguments.length){if(!N(e))throw new TypeError($("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(ae)return ae;if(ie)return ie;if(oe)return oe;throw new Error("unexpected error. Unable to resolve global object.")}(),ue=ce.document&&ce.document.childNodes,le=Int8Array;function se(){return/^\s*function\s*([^(]*)/i}var fe=/^\s*function\s*([^(]*)/i;M(se,"REGEXP",fe);var pe=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};function ge(e){return null!==e&&"object"==typeof e}function de(e){var r,t,n,i;if(("Object"===(t=K(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=fe.exec(n.toString()))return r[1]}return ge(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(ge,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError($("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!pe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ge));var ye="function"==typeof W||"object"==typeof le||"function"==typeof ue?function(e){return de(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?de(e).toLowerCase():r};function he(e){return"function"===ye(e)}var be="function"==typeof H&&"symbol"==typeof H("foo")&&D(H,"iterator")&&"symbol"==typeof H.iterator?Symbol.iterator:null;return function e(r,t,n){var i,o,a,c,u;if(u=typeof(c=r),null===c||"object"!==u&&"function"!==u||!he(c.next))throw new TypeError($("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!he(t))throw new TypeError($("invalid argument. Second argument must be a function. Value: `%s`.",t));return a=-1,M(i={},"next",(function(){var e;return o?{done:!0}:(e=r.next(),a+=1,e.done?(o=!0,e):{value:t.call(n,e.value,a),done:!1})})),M(i,"return",(function(e){return o=!0,arguments.length?{value:e,done:!0}:{done:!0}})),be&&he(r[be])&&M(i,be,(function(){return e(r[be](),t,n)})),i}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterMap=r();
//# sourceMappingURL=browser.js.map
