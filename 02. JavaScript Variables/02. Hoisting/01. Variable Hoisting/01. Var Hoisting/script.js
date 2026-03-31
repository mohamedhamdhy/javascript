/**
 * File: var-hoisting-and-implicit-global.js
 * Folder: JavaScript Hoisting
 * Description:
 *   Demonstrates var hoisting and the behavior of assigning values to variables
 *   without declaring them (implicit globals) in JavaScript.
 *
 * Author: Mohamed Al Hamdhy
 * Date: 2026
 */

// =======================
// Example 0: Assigning without declaration
// =======================
c = 25; // No var/let/const used
console.log("Implicit Global c:", c); // Output: 25
// Explanation:
// - In non-strict mode, assigning a value to an undeclared variable creates a **global variable**.
// - This is called an **implicit global**.
// - It behaves similarly to a global `var`, but is considered bad practice.
// - If "use strict"; is enabled, this will throw a ReferenceError.

// =======================
// Example 1: Normal var declaration and assignment
// =======================
var a = 25; // Declaration and assignment
console.log("Var a:", a); // Output: 25
// Explanation:
// - JavaScript hoists the declaration `var a` to the top of the scope.
// - Assignment (=25) remains in place.
// - Equivalent internally to:
//   var a;    // hoisted
//   a = 25;   // assignment happens here

// =======================
// Example 2: Using var before assignment (hoisting effect)
// =======================
console.log("Var b before assignment:", b); // Output: undefined
var b = 25;
// Explanation:
// - Declaration `var b` is hoisted to the top of the scope, but assignment happens later.
// - Before assignment, variable exists but is `undefined`.
// Internal equivalent:
//   var b;
//   console.log(b); // undefined
//   b = 25;

// =======================
// Example 3: Explicit vs implicit global comparison
// =======================

// Using var
var x = 10;
console.log("Explicit var x:", x); // 10

// Without declaration (implicit global)
y = 20;
console.log("Implicit global y:", y); // 20

// ✅ Key Points:
// 1. **var** is hoisted: declaration moves to top, assignment stays in place.
// 2. Assigning a variable without var/let/const creates an **implicit global** in non-strict mode.
// 3. Implicit globals can lead to **hard-to-debug issues**, especially in large codebases.
// 4. In **strict mode** (`"use strict";`), assigning to undeclared variables will throw a ReferenceError.
// 5. Recommended: always declare variables explicitly using `let` or `const`.

// =======================
// Example 4: Strict mode (optional demonstration)
// =======================

("use strict"); // Enable strict mode

try {
  z = 30; // ❌ Will throw ReferenceError in strict mode
  console.log(z);
} catch (err) {
  console.error("Strict mode error:", err.message);
}
// Explanation:
// - Strict mode prevents accidental creation of global variables.
// - Good practice: always enable strict mode in modern JS to catch these mistakes.
