/**
 * Folder: Block Scope
 * Description:
 *   Demonstrates block scope in JavaScript using var, let, and const.
 *   - let and const are block-scoped: only accessible within the nearest {}
 *   - var ignores block scope (except functions) and is accessible outside
 *
 * Author: Mohamed Al Hamdhy
 * Date: 2026
 */

console.log("=== Block Scope Example ===");

// Block scope example
{
  var vname = "I am var"; // ❌ Not truly block-scoped
  let lname = "I am let"; // ✅ Block-scoped
  const cname = "I am const"; // ✅ Block-scoped

  console.log("Inside block - vname:", vname); // Output: I am var
  console.log("Inside block - lname:", lname); // Output: I am let
  console.log("Inside block - cname:", cname); // Output: I am const
}

console.log("Outside block - vname:", vname); // Output: I am var

try {
  console.log("Outside block - lname:", lname); // ❌ ReferenceError
} catch (err) {
  console.error("Outside block - lname:", err.message);
}

try {
  console.log("Outside block - cname:", cname); // ❌ ReferenceError
} catch (err) {
  console.error("Outside block - cname:", err.message);
}

// Explanation:
// - var ignores block scope, so it is accessible outside the block.
// - let and const are block-scoped and throw ReferenceError outside their block.
