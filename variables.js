// Working with variables

// 1. Declare and assign values to 3 variables using each of the following keywords let, const, and var.

// 2. Use console.log() to display the value of the variables in the browser's console.

// 3. Change the value of the variables declared with the let and var. Print their new value to the console with console.log()

// 4. What happens if you try to change the value of the variable declared with the const and print its new value to the console?

// 5. Why might you choose to use the const keyword?

// 6. What is one reason it not best practice to use the var keyword?


function variables() {

let qty = 150;

const price = 20;

var product = "cozy throw";

qty = 1;
product = 'Womens Gloves'

return `Quantity of ${qty} at $${price} each: your total is $${qty*price} for the ${product}`;
}
console.log(variables());
showMessage(variables());

// 4. setting constant price to a value Uncaught TypeError: Assignment to constant variable

// 5. You may want to use const if the value of the constant will never change, for instance 'const quarter = 25' where quarter is 25 always.

// 6. Using var is not best practice, there are other keywords that can be used that are more useful

