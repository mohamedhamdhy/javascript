/**
 * Folder: Var
 * Description:
 *   Demonstrates all main JavaScript data types using `var`.
 *   Includes: Number, String, Boolean, Undefined, Null, Symbol, BigInt, Array, Object, and Functions.
 *   Also shows a combined object example with all types.
 *
 * Author: Mohamed Al Hamdhy
 * Date: 2026
 */

// =======================
// 1. Number (integer & floating-point)
// =======================
var num1 = 30; // integer number
var num2 = 18.25; // floating-point number
console.log("Number Examples:", num1, num2);
// Numbers in JS can be integers or decimals.
// Output: 30 18.25

// =======================
// 2. String
// =======================
var firstName = "Mohamed";
var lastName = "Hamdhy";
console.log("String Example:", firstName + " " + lastName);
// Strings store text.
// Concatenation (+) combines two or more strings.
// Output: "Mohamed Hamdhy"

// =======================
// 3. Boolean
// =======================
var isActive = true; // true/false value
var isAdmin = false; // true/false value
console.log("Boolean Examples:", isActive, isAdmin);
// Booleans represent logical values.
// Output: true false

// =======================
// 4. Undefined
// =======================
var notAssigned; // variable declared but not assigned a value
console.log("Undefined Example:", notAssigned);
// 'undefined' means the variable exists but has no value.
// Output: undefined

// =======================
// 5. Null
// =======================
var emptyValue = null;
console.log("Null Example:", emptyValue);
// 'null' is explicitly assigned to indicate "no value".
// Output: null

// =======================
// 6. Symbol (unique identifier)
// =======================
var sym1 = Symbol("id");
var sym2 = Symbol("id");
console.log("Symbol Example:", sym1, sym2);
// Symbols are **unique identifiers** even if descriptions are same.
console.log("Symbol equality:", sym1 === sym2);
// Comparing two symbols always returns false unless they are the same symbol.
// Output: false

// =======================
// 7. BigInt (for very large numbers)
// =======================
var bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt Example:", bigNumber);
// BigInt allows storing integers larger than the safe JS Number limit (2^53-1).

// =======================
// 8. Array
// =======================
var numbers = [10, 20, 30, 40];
var mixedArray = [1, "two", true, null, undefined, { name: "JS" }];
console.log("Array Examples:", numbers);
console.log("Mixed Array Example:", mixedArray);
// Arrays store **ordered lists of values**.
// Elements can be of any data type (numbers, strings, booleans, objects, etc.)

// =======================
// 9. Object
// =======================
var person = {
  name: "Mohamed",
  age: 24,
  isActive: true,
};
console.log("Object Example:", person);
console.table(person);
// Objects store **key-value pairs**.
// Keys (properties) are strings (or symbols), and values can be any type.
// console.table() prints the object in a tabular format for readability.

// =======================
// 10. Function
// =======================
var greet = function (name) {
  return "Hello, " + name + "!";
};
console.log("Function Example:", greet("Mohamed"));
// Functions are reusable blocks of code.
// They can take parameters and return values.
// Output: "Hello, Mohamed!"

// =======================
// 11. Combined Example: Using all types together
// =======================
var demo = {
  id: Symbol("id"), // Symbol type
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
// This combined object shows how multiple data types can exist together.
// Objects are flexible and can hold nested objects, arrays, functions, and all primitives.
// console.table() makes it easy to read in the console.
