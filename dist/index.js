"use strict";var g=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var m=g(function(w,f){
var v=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/assert-is-function/dist'),x=require('@stdlib/assert-is-iterator-like/dist'),a=require('@stdlib/symbol-iterator/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function c(e,r,u){var n,i,o;if(!x(e))throw new TypeError(s('0PL46',e));if(!l(r))throw new TypeError(s('0PL2H',r));return o=-1,n={},v(n,"next",d),v(n,"return",p),a&&l(e[a])&&v(n,a,q),n;function d(){var t;return i?{done:!0}:(t=e.next(),o+=1,t.done?(i=!0,t):{value:r.call(u,t.value,o),done:!1})}function p(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function q(){return c(e[a](),r,u)}}f.exports=c
});var y=m();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
