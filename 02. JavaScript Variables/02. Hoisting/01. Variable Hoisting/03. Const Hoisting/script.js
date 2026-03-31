/**
 * Folder: Const Hoisting
 * Description:
 *   Demonstrates the concept of hoisting in JavaScript using `const`.
 *   `const` variables are hoisted to the top of their block scope but
 *   are **not initialized**, causing a Temporal Dead Zone (TDZ)
 *   if accessed before declaration.
 *
 * Author: Mohamed Al Hamdhy
 * Date: 2026
 */

// =======================
// Example 1: Accessing const before declaration
// =======================
try {
  console.log(pi); // ❌ ReferenceError: Cannot access 'pi' before initialization
} catch (err) {
  console.error("Error accessing pi before declaration:", err.message);
}

const pi = 3.14159;
console.log("Const pi after declaration:", pi); // Output: 3.14159

// Explanation:
// - `const pi` is hoisted to the top of its block scope.
// - It exists in a **Temporal Dead Zone (TDZ)** until the line where it is declared.
// - Accessing it before initialization throws a ReferenceError.
// - After declaration, `pi` can be used normally, but cannot be reassigned.
