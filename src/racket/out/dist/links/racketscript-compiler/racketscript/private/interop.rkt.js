"use strict";function _interopRequireWildcard(r){if(r&&r.__esModule)return r;var e={};if(null!=r)for(var _ in r)Object.prototype.hasOwnProperty.call(r,_)&&(e[_]=r[_]);return e.default=r,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.__js_ffi=exports.__rjs_quoted__=void 0;var _core=require("../../../../runtime/core.js"),$rjs_core=_interopRequireWildcard(_core),_kernelRkt=require("../../../../runtime/kernel.rkt.js"),M0=_interopRequireWildcard(_kernelRkt),__js_ffi=$rjs_core.attachProcedureArity(function(){$rjs_core.Pair.listFromArray($rjs_core.argumentsToArray(arguments));return M0.error($rjs_core.Symbol.make("racketscript"),"can't make JS ffi calls in Racket")}),__rjs_quoted__={};exports.__rjs_quoted__=__rjs_quoted__,exports.__js_ffi=__js_ffi;