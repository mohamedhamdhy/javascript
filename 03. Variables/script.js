/**
 * Folder: Variables
 * Description:
 *   Complete study of JavaScript variable declarations using var, let, and const,
 *   including their behavior in global, function, and block scopes.
 *
 * Author: Mohamed Al Hamdhy
 * Date: 2026
 */

// -------------------------------------------------------------
// VAR, LET, CONST OVERVIEW
// -------------------------------------------------------------
// var   - Introduced in 1997 - Function-scoped or global-scoped
// let   - Introduced in ES6 (2015) - Block-scoped, can be reassigned
// const - Introduced in ES6 (2015) - Block-scoped, cannot be reassigned

// -------------------------------------------------------------
// 1. Variable declaration using VAR
// 'var' is function-scoped or global-scoped and can be reassigned
var a = 30; // declare variable 'a' and assign 30
var b = 40; // declare variable 'b' and assign 40
console.log("VAR Example:", a + b); // output the sum of a and b (70)

// -------------------------------------------------------------
// 2. Variable declaration using LET
// 'let' is block-scoped and can be reassigned
let d = 50; // declare variable 'd' and assign 50
let e = 60; // declare variable 'e' and assign 60
console.log("LET Example:", d + e); // output the sum of d and e (110)

// -------------------------------------------------------------
// 3. Variable declaration using CONST
// 'const' is block-scoped and cannot be reassigned
const f = 70; // declare constant 'f' and assign 70
const g = 80; // declare constant 'g' and assign 80
console.log("CONST Example:", f + g); // output the sum of f and g (150)