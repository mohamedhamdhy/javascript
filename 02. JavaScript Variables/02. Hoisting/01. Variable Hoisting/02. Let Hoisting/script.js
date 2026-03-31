/**
 * File: let-hoisting.js
 * Folder: JavaScript Hoisting
 * Description:
 *   Demonstrates the concept of hoisting in JavaScript using `let`.
 *   `let` variables are hoisted to the top of their block scope but
 *   are **not initialized**, causing a Temporal Dead Zone (TDZ)
 *   if accessed before declaration.
 *
 * Author: Mohamed Al Hamdhy
 * Date: 2026
 */

// =======================
// Example 1: Accessing let before declaration
// =======================
try {
  console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
} catch (err) {
  console.error("Error accessing x before declaration:", err.message);
}

let x = 25;
console.log("Let x after declaration:", x); // Output: 25

// Explanation:
// - `let x` is hoisted to the top of its block scope.
// - It is in a **Temporal Dead Zone (TDZ)** until the line where it is declared.
// - Accessing it before initialization throws a ReferenceError.
// - Once declared and initialized, `x` can be used normally.
// - Reassignment after declaration is allowed, but redeclaration in the same scope is not.
