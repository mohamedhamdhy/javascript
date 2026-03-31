/**
 * Folder: Function Hoisting
 * Description:
 *   Demonstrates function hoisting in JavaScript.
 *   Function declarations are fully hoisted, meaning both
 *   the name and the function body are moved to the top of the scope.
 *
 * Author: Mohamed Al Hamdhy
 * Date: 2026
 */

// =======================
// Example 1: Normal function declaration
// =======================
function sayHello() {
  console.log("Hello Function");
}

sayHello(); // Output: Hello Function
// Explanation:
// - This is a standard function declaration.
// - Calling it **after declaration** works as expected.

// =======================
// Example 2: Calling function before declaration
// =======================
sayBye(); // Output: Bye Function

function sayBye() {
  console.log("Bye Function");
}

// Explanation:
// - Function declarations are **fully hoisted**.
//   That means the JS engine moves the **entire function** (name + body) to the top of the scope.
// - You can call the function **before it appears in the code**.
// - This is different from variables declared with `var`, `let`, or `const`,
//   where **only the declaration is hoisted, not the assignment**.

// =======================
// Key Points about Function Hoisting
// =======================
// 1. **Function declarations** are hoisted: name + body.
// 2. You can call functions **before their declaration** in code.
// 3. Function expressions (e.g., `var fn = function() {}`) behave differently:
//    - Only the variable is hoisted (if `var`), not the function body.
//    - Calling it before assignment will result in `undefined` (or ReferenceError for `let`/`const`).
