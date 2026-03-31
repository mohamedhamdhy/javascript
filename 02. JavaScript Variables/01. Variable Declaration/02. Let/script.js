/**
 * Folder: Let
 * Description:
 *   Demonstrates all main JavaScript data types using `let`.
 *   Includes: Number, String, Boolean, Undefined, Null, Symbol, BigInt, Array, Object, and Functions.
 *   Shows reassignment is allowed with `let` but redeclaration in the same scope is not.
 *
 * Author: Mohamed Al Hamdhy
 * Date: 2026
 */

// =======================
// 1. Number (integer & floating-point)
// =======================
let num1 = 30; // integer
let num2 = 18.25; // floating-point
console.log("Number Examples:", num1, num2);
// Numbers store numeric values, either integers or decimals.
// Using let, the variable is **block-scoped**, meaning it exists only in the current block.
// Output: 30 18.25

// Reassignment is allowed
num1 = 50;
console.log("Reassigned Number:", num1);
// Output: 50
// ✅ Key point: `let` allows reassignment but not redeclaration in the same scope.

// =======================
// 2. String
// =======================
let firstName = "Mohamed"; // String literal
let lastName = "Hamdhy";
console.log("String Example:", firstName + " " + lastName);
// Strings store text and can be concatenated using +
// Output: "Mohamed Hamdhy"

// Reassignment is allowed
firstName = "Ali";
console.log("Reassigned String:", firstName);
// Output: "Ali"

// =======================
// 3. Boolean
// =======================
let isActive = true; // Boolean true
let isAdmin = false; // Boolean false
console.log("Boolean Examples:", isActive, isAdmin);
// Booleans represent logical values: true or false
// Output: true false

// Reassignment allowed
isActive = false;
console.log("Reassigned Boolean:", isActive);
// Output: false

// =======================
// 4. Undefined
// =======================
let notAssigned;
console.log("Undefined Example:", notAssigned);
// Declared but not initialized variables hold the value `undefined`
// Output: undefined

// Assign a value later
notAssigned = 123;
console.log("Assigned Later:", notAssigned);
// Output: 123

// =======================
// 5. Null
// =======================
let emptyValue = null;
console.log("Null Example:", emptyValue);
// `null` represents an intentional absence of value
// Output: null

// Reassignment allowed
emptyValue = "Now has value";
console.log("Reassigned Null:", emptyValue);
// Output: "Now has value"

// =======================
// 6. Symbol (unique identifier)
// =======================
let sym1 = Symbol("id"); // Symbol with description
let sym2 = Symbol("id");
console.log("Symbol Example:", sym1, sym2);
// Symbols are always unique, even if descriptions are identical
console.log("Symbol equality:", sym1 === sym2);
// Comparing symbols shows they are not equal
// Output: false

// =======================
// 7. BigInt (for very large numbers)
// =======================
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt Example:", bigNumber);
// BigInt stores numbers larger than Number.MAX_SAFE_INTEGER

// =======================
// 8. Array
// =======================
let numbers = [10, 20, 30, 40];
let mixedArray = [1, "two", true, null, undefined, { name: "JS" }];
console.log("Array Examples:", numbers);
console.log("Mixed Array Example:", mixedArray);
// Arrays store ordered collections of values.
// They can contain multiple types, including numbers, strings, booleans, objects, null, undefined

// Reassignment allowed
numbers = [100, 200, 300];
console.log("Reassigned Array:", numbers);
// Output: [100, 200, 300]

// =======================
// 9. Object
// =======================
let person = {
  name: "Mohamed",
  age: 24,
  isActive: true,
};
console.log("Object Example:", person);
console.table(person);
// Objects store key-value pairs. Keys are strings (or symbols), values can be any type.
// console.table() prints objects in a readable table format

// Modify properties (allowed)
person.age = 25;
console.log("Modified Object:", person);

// Reassign object entirely (allowed)
person = { name: "Ali", age: 30 };
console.log("Reassigned Object:", person);

// =======================
// 10. Function
// =======================
let greet = function (name) {
  return "Hello, " + name + "!";
};
console.log("Function Example:", greet("Mohamed"));
// Functions are reusable code blocks. They can accept parameters and return values

// Reassignment allowed
greet = function (name) {
  return "Hi, " + name + "!";
};
console.log("Reassigned Function:", greet("Mohamed"));
// Output: "Hi, Mohamed!"

// =======================
// 11. Combined Example: Using all types together
// =======================
let demo = {
  id: Symbol("id"), // Symbol
  name: "Mohamed", // String
  age: 24, // Number
  isActive: true, // Boolean
  hobbies: ["coding", "reading", "gaming"], // Array
  address: { city: "Dubai", country: "UAE" }, // Object
  bigNumber: 9007199254740991n, // BigInt
  sayHello: function () {
    return "Hello from demo object";
  }, // Function
  emptyValue: null, // Null
  notAssigned: undefined, // Undefined
};

console.log("Combined Object Example:", demo);
console.table(demo);
console.log(demo.sayHello());
// This object demonstrates all main data types in one place
// ✅ Great for study purposes to understand type usage in real objects

// =======================
// ✅ Key Takeaways for `let`
// =======================
// - `let` is **block-scoped**: exists only in nearest {} block
// - **Cannot redeclare** in same scope
// - **Can reassign** primitives, objects, arrays, and functions
// - Preferred over `var` for safer and predictable code
