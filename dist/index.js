"use strict";var g=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=g(function(w,f){
var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/assert-is-function/dist'),x=require('@stdlib/assert-is-iterator-like/dist'),u=require('@stdlib/symbol-iterator/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function c(e,r,v){var n,a,i;if(!x(e))throw new TypeError(s('0PL46',e));if(!l(r))throw new TypeError(s('0PL2H',r));return i=-1,n={},o(n,"next",d),o(n,"return",p),u&&l(e[u])&&o(n,u,q),n;function d(){var t;return a?{done:!0}:(t=e.next(),i+=1,t.done?(a=!0,t):{value:r.call(v,t.value,i),done:!1})}function p(t){return a=!0,arguments.length?{value:t,done:!0}:{done:!0}}function q(){return c(e[u](),r,v)}}f.exports=c
});var y=m();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
