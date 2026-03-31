/**
 * Folder: Function Expression Hoisting
 * Description:
 *   Demonstrates function expressions in JavaScript and how they behave
 *   differently from function declarations with respect to hoisting.
 *
 * Author: Mohamed Al Hamdhy
 * Date: 2026
 */

// =======================
// Example 1: Function expression with const
// =======================

try {
  sayHello(); // ❌ ReferenceError: Cannot access 'sayHello' before initialization
} catch (err) {
  console.error("Error calling sayHello before declaration:", err.message);
}

const sayHello = () => {
  console.log("Hello Function Expression");
};

sayHello(); // ✅ Output: Hello Function Expression

// Explanation:
// - `sayHello` is a **const variable** holding an arrow function.
// - `const` is hoisted but remains in a **Temporal Dead Zone (TDZ)** until declaration.
// - Calling the function **before declaration** throws a ReferenceError.
// - After declaration, the function can be called normally.

// =======================
// Example 2: Function expression with let
// =======================

try {
  sayBye(); // ❌ ReferenceError: Cannot access 'sayBye' before initialization
} catch (err) {
  console.error("Error calling sayBye before declaration:", err.message);
}

let sayBye = () => {
  console.log("Bye Function Expression");
};

sayBye(); // ✅ Output: Bye Function Expression

// Explanation:
// - `let` behaves the same as `const` for function expressions.
// - TDZ prevents calling the function before declaration.
// - After declaration, it works as expected.

// =======================
// Key Points about Function Expressions
// =======================
// 1. Function expressions (including arrow functions) are **not fully hoisted**.
// 2. If declared with `var`, the variable is hoisted but initialized as `undefined`:
//    - Calling it before assignment → TypeError (undefined is not a function).
// 3. If declared with `let` or `const`, they are hoisted but in **TDZ**:
//    - Calling before declaration → ReferenceError.
// 4. Unlike function declarations, you **cannot call them before their line in code**.
