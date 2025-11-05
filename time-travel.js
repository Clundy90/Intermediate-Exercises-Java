/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let destination = "Ancient Egypt";
console.log(destination);
/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = "Medieval Europe";
console.log(destination);
/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`.
// Try to change the `travelDate` to another value and observe and explain what happens as a comment.
/*
 * Observations:
 * TODO: Explain here.
 */
const travelDate = "2024-03-15";
//travelDate = "2024-04-20"; // This line will cause an error because `travelDate` is declared as a constant using `const`, and constants cannot be reassigned after their initial assignment.
/* Explanation: In JavaScript, when a variable is declared with `const`, it means that the variable's value cannot be changed or reassigned. Attempting to do so will result in a TypeError. This is useful for values that should remain constant throughout the program, such as configuration settings or fixed dates. */
/* Uncommenting the line above will throw an error: TypeError: Assignment to constant variable. */
/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console.
// Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
/*

 * Observations:
 * TODO: Explain here.
 */
console.log(timeMachineModel); // Output: big long error and undefined
//explanation: In JavaScript, variables declared with `var` are hoisted to the top of their enclosing function or global scope. This means that the declaration of the variable is processed before any code is executed, but the assignment of the value happens at the original line of code. Therefore, when we try to access `timeMachineModel` before its declaration, it exists but is `undefined` because it has not yet been assigned a value. If we had used `let` or `const`, we would have encountered a ReferenceError instead, as these declarations are not hoisted in the same way. */
var timeMachineModel = "T-800"; // No error occurs here, but the value is assigned only after this line is executed. so it remains undefined before this line.
