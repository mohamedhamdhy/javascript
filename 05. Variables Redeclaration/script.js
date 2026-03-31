/**
 * Folder: Variables Redeclaration & Reassignment
 * Description:
 *   Demonstrates how variable redeclaration and reassignment works in JavaScript
 *   using `var`, `let`, and `const`.
 *   - `var` allows redeclaration within the same scope.
 *   - `let` does NOT allow redeclaration but allows reassignment.
 *   - `const` does NOT allow redeclaration or reassignment.
 *   - Objects declared with `const` are mutable (their properties can be changed).
 *
 * Author: Mohamed Al Hamdhy
 * Date: 2026
 */

// =======================
// Example with `var`
// =======================
var a = 50;
console.log("Print a (initial):", a); // Output: 50

var a = 60;
console.log("Print a (after redeclaration):", a); // Output: 60

// ✅ Key Points:
// - `var` is function-scoped or global.
// - Redeclaration in the same scope is allowed.
// - Latest value overwrites previous value.

// =======================
// Example with `let`
// =======================
let b = 50;
console.log("Print b (initial):", b); // Output: 50

// let b = 60; // ❌ SyntaxError: Identifier 'b' has already been declared
// console.log("Print b (after redeclaration):", b);

// ✅ Explanation:
// - `let` is block-scoped.
// - Redeclaration in the same scope is NOT allowed.
// - Reassignment is allowed:
b = 60;
console.log("Print b (after reassignment):", b); // Output: 60

// =======================
// Example with `const`
// =======================
const c = 50;
console.log("Print c (initial):", c); // Output: 50

// ❌ Both redeclaration and reassignment are NOT allowed for const
// const c = 60; // SyntaxError: Identifier 'c' has already been declared
// c = 60;       // TypeError: Assignment to constant variable

// ✅ Explanation:
// - `const` is block-scoped.
// - Cannot be redeclared or reassigned.
// - Useful for values that should remain constant.

// =======================
// Example: Modifying a const object
// =======================
const students = { name: "Mohamed", age: 24 };

// Initial object
console.log("Students object (initial):", students);
console.table(students);

// Modify object property
students.name = "Hamdhy";
console.log("Students object (after changing name):", students);
console.table(students);

// Modify another property
students.age = 23;
console.log("Students object (after changing age):", students);
console.table(students);

// ✅ Key Points:
// - `const` prevents reassignment of the variable itself.
// - Properties of a `const` object can be changed (objects are mutable).
// - To make an object immutable, use `Object.freeze(students)`.
