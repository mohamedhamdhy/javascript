/**
 * Folder: Variables Scope Declaration
 * Description:
 *   Demonstrates variable declarations in JavaScript using var, let, and const,
 *   and their behavior in different scopes (global, function, and block scope).
 *
 * Author: Mohamed Al Hamdhy
 * Date: 2026
 */

// -------------------------------------------------------------
// VAR, LET, CONST SCOPE BEHAVIOR
// -------------------------------------------------------------
// var   -> function/global scoped, accessible outside blocks
// let   -> block scoped, accessible only inside the block, can be reassigned
// const -> block scoped, accessible only inside the block, cannot be reassigned

// -------------------------------------------------------------
// 1. If condition using VAR
// 'var' is function-scoped or global-scoped, so it is accessible outside the block
if (true) {
  var msgVar = "Message 1"; // declare 'msgVar' inside the block
}
console.log("VAR Scope:", msgVar); // accessible here because 'var' ignores block scope

// -------------------------------------------------------------
// 2. If condition using LET
// 'let' is block-scoped, so it is only accessible inside the block
if (true) {
  let msgLet = "Message 2"; // declare 'msgLet' inside the block
  console.log("LET Scope inside block:", msgLet); // accessible here inside the block
}
// console.log(msgLet); // ❌ Would throw an error if uncommented, because 'msgLet' is not accessible outside the block

// -------------------------------------------------------------
// 3. If condition using CONST
// 'const' is block-scoped and cannot be reassigned
if (true) {
  const msgConst = "Message 3"; // declare constant 'msgConst' inside the block
  console.log("CONST Scope inside block:", msgConst); // accessible here inside the block
}
// console.log(msgConst); // ❌ Would throw an error if uncommented, because 'msgConst' is not accessible outside the block
