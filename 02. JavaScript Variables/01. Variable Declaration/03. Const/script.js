/**
 * Folder: Const
 * Description:
 *   Demonstrates all main JavaScript data types using `const`.
 *   Includes: Number, String, Boolean, Undefined, Null, Symbol, BigInt, Array, Object, and Functions.
 *   Shows that with `const`, redeclaration and reassignment are NOT allowed,
 *   but for objects/arrays, internal properties/elements can be modified.
 *
 * Author: Mohamed Al Hamdhy
 * Date: 2026
 */

// =======================
// 1. Number (integer & floating-point)
// =======================
const num1 = 30; // integer
const num2 = 18.25; // floating-point
console.log("Number Examples:", num1, num2);
// Numbers store numeric values (integer or decimal)
// Output: 30 18.25

// ❌ Reassignment NOT allowed
// num1 = 50; // TypeError: Assignment to constant variable

// =======================
// 2. String
// =======================
const firstName = "Mohamed";
const lastName = "Hamdhy";
console.log("String Example:", firstName + " " + lastName);
// Strings store text. Concatenation (+) combines strings

// ❌ Reassignment NOT allowed
// firstName = "Ali"; // TypeError

// =======================
// 3. Boolean
// =======================
const isActive = true;
const isAdmin = false;
console.log("Boolean Examples:", isActive, isAdmin);
// Booleans store logical true/false values

// ❌ Reassignment NOT allowed
// isActive = false; // TypeError

// =======================
// 4. Undefined
// =======================
// ❌ `const` must be initialized during declaration
// const notAssigned; // SyntaxError

// =======================
// 5. Null
// =======================
const emptyValue = null;
console.log("Null Example:", emptyValue);
// ❌ Reassignment NOT allowed
// emptyValue = "something"; // TypeError

// =======================
// 6. Symbol (unique identifier)
// =======================
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log("Symbol Example:", sym1, sym2);
console.log("Symbol equality:", sym1 === sym2); // false

// =======================
// 7. BigInt (for very large numbers)
// =======================
const bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt Example:", bigNumber);

// =======================
// 8. Array
// =======================
const numbers = [10, 20, 30, 40];
const mixedArray = [1, "two", true, null, undefined, { name: "JS" }];
console.log("Array Examples:", numbers);
console.log("Mixed Array Example:", mixedArray);

// ✅ Important: For arrays declared with `const`
// - You **cannot reassign the array itself**, but can modify elements
numbers[0] = 100; // ✅ Allowed
mixedArray.push("new"); // ✅ Allowed
console.log("Modified Array:", numbers);
console.log("Modified Mixed Array:", mixedArray);

// ❌ Reassignment NOT allowed
// numbers = [1,2,3]; // TypeError

// =======================
// 9. Object
// =======================
const person = {
  name: "Mohamed",
  age: 24,
  isActive: true,
};
console.log("Object Example:", person);
console.table(person);

// ✅ Modifying properties is allowed
person.age = 25;
person.name = "Ali";
console.log("Modified Object:", person);

// ❌ Reassigning the object is NOT allowed
// person = { name: "New", age: 30 }; // TypeError

// =======================
// 10. Function
// =======================
const greet = function (name) {
  return "Hello, " + name + "!";
};
console.log("Function Example:", greet("Mohamed"));

// ✅ You can modify the function reference by modifying internal objects, but cannot reassign greet
// greet = function(name){ return "Hi"; } // ❌ TypeError

// =======================
// 11. Combined Example: Using all types together
// =======================
const demo = {
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
  // ❌ notAssigned: undefined  // const must be initialized
};

console.log("Combined Object Example:", demo);
console.table(demo);
console.log(demo.sayHello());

// =======================
// ✅ Key Takeaways for `const`
// =======================
// - `const` is **block-scoped**: exists only in nearest {} block
// - **Cannot redeclare** in the same scope
// - **Cannot reassign** primitives, objects, arrays, or functions
// - ✅ BUT for objects/arrays, **internal properties or elements can be modified**
// - Use `const` for values that should remain constant (recommended for most variables in modern JS)
