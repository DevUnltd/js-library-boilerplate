/*!
 * 
 *   @hodgef/js-library-boilerplate v2.7.636
 *   https://github.com/hodgef/js-library-boilerplate
 *
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(e,r){"object"===typeof exports&&"object"===typeof module?module.exports=r():"function"===typeof define&&define.amd?define("MyLibrary",[],r):"object"===typeof exports?exports.MyLibrary=r():e.MyLibrary=r()}(this,(()=>(()=>{"use strict";const e={d:(r,o)=>{if(Array.isArray(o))for(var t=0;t<o.length;){var n=o[t++],i=o[t++];e.o(r,n)?0===i&&t++:0===i?Object.defineProperty(r,n,{enumerable:!0,value:o[t++]}):Object.defineProperty(r,n,{enumerable:!0,get:i})}else for(var n in o)e.o(o,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:o[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}};let r={};e.r(r),e.d(r,{default:()=>o});const o=class{constructor(){this.myVar=!0,this.myArrowMethod=()=>{console.log("Arrow method fired")};const e=this.myArrowMethod,r=this.myVar;console.log("Lib constructor called",r),e()}};return r})()));
//# sourceMappingURL=index.js.map