import * as $rjs_core from './core.js';import * as Core from "./core.js";var unsafe_fx_plus_ = function(a1, b2) {return (a1+b2)|0;};var unsafe_fx_ = function(a3, b4) {return (a3-b4)|0;};var unsafe_fx_times_ = function(a5, b6) {return (a5*b6)|0;};var unsafe_fxquotient = function(a7, b8) {return (a7/b8)|0;};var unsafe_fxremainder = function(a9, b10) {return (a9%b10)|0;};var unsafe_fxmodulo = function(a11, b12) {var remainder13 = a11%b12;if (remainder13>=0) {var if_res1 = remainder13;} else {var if_res1 = remainder13+b12;}return Math.floor(if_res1);};var unsafe_fxabs = function(a14) {return Math.abs(a14);};var unsafe_fx_eq_ = function(a15, b16) {return a15===b16;};var unsafe_fx_lt_ = function(a17, b18) {return a17<b18;};var unsafe_fx_lt__eq_ = function(a19, b20) {return a19<=b20;};var unsafe_fx_gt_ = function(a21, b22) {return a21>b22;};var unsafe_fx_gt__eq_ = function(a23, b24) {return a23>=b24;};var unsafe_fxmin = function(a25, b26) {if (a25<b26) {var if_res2 = a25;} else {var if_res2 = b26;}return if_res2;};var unsafe_fxmax = function(a27, b28) {if (a27>b28) {var if_res3 = b28;} else {var if_res3 = a27;}return if_res3;};var unsafe_fxrshift = function(a29, b30) {return (a29>>b30)|0;};var unsafe_fxlshift = function(a31, b32) {return (a31<<b32)|0;};var unsafe_fxand = function(a33, b34) {return (a33&&b34)|0;};var unsafe_fxior = function(a35, b36) {return (a35||b36)|0;};var unsafe_fxxor = function(a37, b38) {return (a37^b38)|0;};var unsafe_fxnot = Core.bitwiseNot;var unsafe_car = function(v39) {return v39.hd;};var unsafe_cdr = function(v40) {return v40.tl;};var unsafe_mcar = function(v41) {return v41.hd;};var unsafe_mcdr = function(v42) {return v42.tl;};var unsafe_set_mcar_bang_ = function(p43, v44) {return p43.setCar(v44);};var unsafe_set_mcdr_bang_ = function(p45, v46) {return p45.setCdr(v46);};var unsafe_cons_list = function(v47, rest48) {return Core.Pair.make(v47,rest48);};var unsafe_struct_ref = function(v49, k50) {return v49._fields[k50];};var unsafe_vector_ref = function(v51, k52) {return v51.ref(k52);};var unsafe_vector_set_bang_ = function(v53, k54, val55) {return v53.set(k54,val55);};var unsafe_vector_length = function(v56) {return v56.length();};var __rjs_quoted__ = {};export { __rjs_quoted__,unsafe_fx_plus_,unsafe_fx_,unsafe_fx_times_,unsafe_fxquotient,unsafe_fxremainder,unsafe_fxmodulo,unsafe_fxabs,unsafe_fx_eq_,unsafe_fx_lt_,unsafe_fx_lt__eq_,unsafe_fx_gt_,unsafe_fx_gt__eq_,unsafe_fxmin,unsafe_fxmax,unsafe_fxrshift,unsafe_fxlshift,unsafe_fxand,unsafe_fxior,unsafe_fxxor,unsafe_fxnot,unsafe_car,unsafe_cdr,unsafe_mcar,unsafe_mcdr,unsafe_set_mcar_bang_,unsafe_set_mcdr_bang_,unsafe_cons_list,unsafe_struct_ref,unsafe_vector_ref,unsafe_vector_set_bang_,unsafe_vector_length };