/*!
 * 
 *   @hodgef/js-library-boilerplate v2.7.53
 *   https://github.com/hodgef/js-library-boilerplate
 *
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(e,o){"object"===typeof exports&&"object"===typeof module?module.exports=o():"function"===typeof define&&define.amd?define("MyLibrary",[],o):"object"===typeof exports?exports.MyLibrary=o():e.MyLibrary=o()}(this,(function(){return function(){"use strict";var e={r:function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};function _defineProperties(e,o){for(var r=0;r<o.length;r++){var t=o[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,o,r){return o&&_defineProperties(e.prototype,o),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}e.r(o);var r=_createClass((function App(){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,App),this.myVar=!0,this.myArrowMethod=function(){console.log("Arrow method fired")};var e=this.myArrowMethod,o=this.myVar;console.log("Lib constructor called",o),e()})),t=r;return new function(){this.demoArrowMethod=function(){console.log("Arrow methods will work")};var e=new t;console.log("Demo loaded!",e),this.demoArrowMethod()},o}()}));
//# sourceMappingURL=index.js.map