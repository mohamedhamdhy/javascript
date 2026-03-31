/**
 * Folder: Global Scope
 * Description:
 *   Demonstrates global scope in JavaScript using var, let, and const.
 *   - Variables declared outside any function/block have global scope.
 *   - They are accessible anywhere in the script.
 *   - Assigning a variable without declaration automatically creates a global variable (not recommended).
 *
 * Author: Mohamed Al Hamdhy
 * Date: 2026
 */

console.log("=== Global Scope Example ===");

// Global variables
var vname = "I am global var";
let lname = "I am global let";
const cname = "I am global const";

// Accessing variables anywhere
console.log("Global vname:", vname); // Output: I am global var
console.log("Global lname:", lname); // Output: I am global let
console.log("Global cname:", cname); // Output: I am global const

// Assigning without declaration (creates global var automatically)
potato = "I am implicitly global";
console.log("Implicit global potato:", potato); // Output: I am implicitly global

function accessGlobal() {
  console.log("Inside function - vname:", vname); // ✅ Accessible
  console.log("Inside function - lname:", lname); // ✅ Accessible
  console.log("Inside function - cname:", cname); // ✅ Accessible
  console.log("Inside function - potato:", potato); // ✅ Accessible
}

// Call function to demonstrate global access
accessGlobal();

// Explanation:
// - var, let, const declared outside functions/blocks are **global**.
// - Implicit globals (without declaration) are also global, but should be avoided.
// - All global variables are accessible inside functions unless shadowed.
