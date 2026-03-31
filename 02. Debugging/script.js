/**
 * Folder: Debugging
 * Description:
 *   Demonstrates various ways to use the console object in JavaScript
 *   including logging messages, numbers, arrays, objects, warnings, errors,
 *   timers, and table display.
 *
 * Author: Mohamed Al Hamdhy
 * Date: 2026
 */

// 1. Print a string message to the console
console.log("Welcome To Mohamed Al Hamdhy");

// 2. Print an integer number to the console
console.log(123456);

// 3. Print a floating-point number to the console
console.log(18.25);

// 4. Print a boolean value to the console
console.log(true);

// 5. Print an array to the console
console.log([58, 78, 96, 35]);

// 6. Print an object to the console
console.log({ fname: "Mohamed", age: 24 });

// 7. Display an object in a table format for better readability
console.table({ fname: "Mohamed", age: 24 });

// 8. Display a custom error message in the console (appears in red)
console.error("Custom Sample Error");

// 9. Display a custom warning message in the console (appears in yellow)
console.warn("Custom Sample Warning");

// 10. Start a timer with the label "Timer" to measure execution time
console.time("Timer");

// 11. Loop from 0 to 9 and print each number
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 12. Stop the timer and print the elapsed time since console.time("Timer")
console.timeEnd("Timer");

// 13. Clears the console (currently commented out)
// console.clear();