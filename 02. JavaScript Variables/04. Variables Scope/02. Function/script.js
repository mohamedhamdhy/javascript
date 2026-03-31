/**
 * Folder: Function Scope
 * Description:
 *   Demonstrates function scope in JavaScript using var, let, and const.
 *   - All variables declared inside a function are only accessible within that function.
 *   - var, let, and const behave the same inside a function scope.
 *
 * Author: Mohamed Al Hamdhy
 * Date: 2026
 */

console.log("=== Function Scope Example ===");

function FunctionScope() {
  var vname = "I am var inside function";
  let lname = "I am let inside function";
  const cname = "I am const inside function";

  console.log("Inside function - vname:", vname); // Output: I am var inside function
  console.log("Inside function - lname:", lname); // Output: I am let inside function
  console.log("Inside function - cname:", cname); // Output: I am const inside function
}

FunctionScope();

try {
  console.log("Outside function - vname:", vname); // ❌ ReferenceError
} catch (err) {
  console.error("Outside function - vname:", err.message);
}
try {
  console.log("Outside function - lname:", lname); // ❌ ReferenceError
} catch (err) {
  console.error("Outside function - lname:", err.message);
}
try {
  console.log("Outside function - cname:", cname); // ❌ ReferenceError
} catch (err) {
  console.error("Outside function - cname:", err.message);
}

// Explanation:
// - All variables declared inside a function (var, let, const) are function-scoped.
// - They are **not accessible outside the function**.
// - This protects variables from polluting the global scope.
