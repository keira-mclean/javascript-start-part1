// Conditionals
function conditionals() {
    // 1. Create 2 variables, x and y, and assign them a number value.

    // let x = 2;
    // let y = 5;

    // // 2. Using an if statement, print "Hello World" to the console if x is 
    // //  greater than y;
    // if (x>y) {
    //     return "Hello World"
    // } 

    // // 3. Update the if statement to print "Goodbye World" to the console if x is not greater than y without modifying the existing condition.

    // else {
    //     return "Goodbye World"
    // };
    // 4. What are some examples of falsy values in JavaScript?
    //  boolean false, 0, empty string, null, udefined, NaN

    // 5. What will the following code output to the console and why?
    /*
            let number1 = 8;
            let number2 = "9";
    
            if("0" === 0){
                console.log("condition 1 is true")
            }else if(number1 > number2){
                console.log("condition 2 is true")
            }else if(typeof number2 === "number"){
                console.log("condition 3 is true")
            }else if(typeof number2 !== "number" && number1 > number2){
                console.log("condition 4 is true")
            }else if("0" == 0){
                console.log("condition 5 is true")
            }else{
                console.log("no condition was true")
            }
    
    */
    /*  condition 5 is true:
        condition 1 is evaluating if the string 0 matches exact to the integer 0.
        condition 2 is evaluating if integer 8 is greater than a string of 9
        condition 3 is evaluating if the type of number 2 is a "number", it is a string
        condition 4 is evaluating if the type of number 2 is not "number" AND if 
            integer 8 is greater than string 9
        condition 5 is evaluating the 0 with == so they are similar, but not exact
    */

    // 6. What is the difference between the == and === operator? What is the best practice to use and why?
    // == does a compare to see if the value is similar, === does an exact match, including type
    // 7. Refactor the if statement below to use a ternary operator:
    /*
            let addButter = true;
            let popcorn = "The popcorn is ready!";
    
                addButter ? popcorn = "The popcorn is delicious!" : 
                popcorn =  "The popcorn is good but could use some butter :("
            
            console.log( popcorn ) */
    // 8. What will the code below output and why?
//      I did not get tickets:  The message is asking if the soldOut is not true (
//            it is true, and the onSale is true.     
        // let soldOut = true;
        // let onSale = true

        // let message = (!soldOut && onSale) ? "I got tickets!" : "I did not get tickets";

        // console.log(message);

    // 9. Refactor the code from the previous question to use an if statement to instead of ternary to set the message variable.
        let soldOut = true;
        let onSale = true

        if(!soldOut && onSale) {
            message = "I got tickets!" 
        } else {
            message = "I did not get tickets"
        }

        console.log(message);
}

console.log(conditionals());
showMessage(conditionals());