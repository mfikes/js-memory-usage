import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "../../../runtime/kernel.rkt.js";var bad_list = function(who1512, orig_l1513) {return M0.__rjs_quoted__.raise_mismatch_error(who1512,"not a proper list: ",orig_l1513);};var memq1514 = function(v1515, orig_l1516) {var loop1517 = function(ls1518) {if (M0.null_p(ls1518)) {var if_res865 = false;} else {if (M0.not(M0.pair_p(ls1518))) {var if_res864 = bad_list($rjs_core.Symbol.make("memq"),orig_l1516);} else {if (M0.eq_p(v1515,M0.car(ls1518))) {var if_res863 = ls1518;} else {var if_res863 = loop1517(M0.cdr(ls1518));}var if_res864 = if_res863;}var if_res865 = if_res864;}return if_res865;};return loop1517(orig_l1516);};var memv1519 = function(v1520, orig_l1521) {var loop1522 = function(ls1523) {if (M0.null_p(ls1523)) {var if_res862 = false;} else {if (M0.not(M0.pair_p(ls1523))) {var if_res861 = bad_list($rjs_core.Symbol.make("memv"),orig_l1521);} else {if (M0.eqv_p(v1520,M0.car(ls1523))) {var if_res860 = ls1523;} else {var if_res860 = loop1522(M0.cdr(ls1523));}var if_res861 = if_res860;}var if_res862 = if_res861;}return if_res862;};return loop1522(orig_l1521);};var member1525 = function(v1526, orig_l1527) {var loop1528 = function(ls1529) {if (M0.null_p(ls1529)) {var if_res851 = false;} else {if (M0.not(M0.pair_p(ls1529))) {var if_res850 = bad_list($rjs_core.Symbol.make("member"),orig_l1527);} else {if (M0.equal_p(v1526,M0.car(ls1529))) {var if_res849 = ls1529;} else {var if_res849 = loop1528(M0.cdr(ls1529));}var if_res850 = if_res849;}var if_res851 = if_res850;}return if_res851;};return loop1528(orig_l1527);};var default1524 = member1525;var cl852 = function(v1531, orig_l1532) {return default1524(v1531,orig_l1532);};var cl853 = function(v1533, orig_l1534, eq_p1535) {if (M0.procedure_p(eq_p1535)) {var if_res855 = M0.procedure_arity_includes_p(eq_p1535,2);} else {var if_res855 = false;}if (if_res855) {var if_res856 = M0.rvoid();} else {var if_res856 = M0.raise_argument_error($rjs_core.Symbol.make("member"),"(procedure-arity-includes/c 2)",eq_p1535);}if_res856;var member1536 = function(v1537, orig_l1538) {var loop1539 = function(ls1540) {if (M0.null_p(ls1540)) {var if_res859 = false;} else {if (M0.not(M0.pair_p(ls1540))) {var if_res858 = bad_list($rjs_core.Symbol.make("member"),orig_l1538);} else {if (eq_p1535(v1537,M0.car(ls1540))) {var if_res857 = ls1540;} else {var if_res857 = loop1539(M0.cdr(ls1540));}var if_res858 = if_res857;}var if_res859 = if_res858;}return if_res859;};return loop1539(orig_l1538);};return member1536(v1533,orig_l1534);};var member1530 = $rjs_core.attachProcedureArity(function() {var fixed_lam854 = {'2':cl852,'3':cl853}[arguments.length];if (fixed_lam854!==undefined) {return fixed_lam854.apply(null,arguments);} else {return M0.error("case-lambda: invalid case");}},[2,3]);var let_result866 = M0.values(memq1514,memv1519,member1530);var memq = let_result866.getAt(0);var memv = let_result866.getAt(1);var member = let_result866.getAt(2);var __rjs_quoted__ = {};export { __rjs_quoted__,member,memv,memq };