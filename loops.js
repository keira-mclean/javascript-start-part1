
/*
Loops (for and while)

1. Write a for loop that counts from 0 to 100, printing each number to the console.

    for (let i = 0; i <=100; i++){
    console.log(i);
    }

2. Write a for loop that counts from 0 to 100 in increments of 2, printing each number to the console.

for (let i = 0; i <=100; i+=2){
    console.log(i);
    }


3. Write a for loop that counts down from 100 to 0, printing each number to the console.

    for (let i = 100; i >=0; i--) {
        console.log(i);
    }


4. Write a for loop that counts from 0 to 50 but only prints the odd numbers 
    that are multiples of 5 to the console.

    for (let i = 0; i <=50; i++) {
        if(i % 2!==0) {
            console.log(i);
        } 
    }


5. Keeping track of a total with a loop.

    // -Create a variable called total and assign it a value of 0 
    //  (make sure total is defined outside of your loop).
    let total = 0;
    // -Create a loop that counts from 1 to 10, incrementing by 1.
    for (let i = 0; i <=10; i++) {
    // -On each iteration of the loop, add 3 to the total variable in step 1.
        total = (i+3);
    // -After your loop, print the value of total to the console.
        
    }console.log(total);

   
// 6. Refactor the last questions loop to use the while() loop syntax
    let total = 0;
    while (total <= 10) {
        console.log(total);
        total = total+3;
    }


// 7. What do the continue and break statements do in JavaScript in the context 
//      of a loop?

// 8. Fizz Buzz Interview Question

//     -Write a loop that prints all numbers from 1 - 100.
        // for (let i = 0; i <=100; i++){
        //     console.log(i);
        //     }

//     -If a number is divisible by 3 log "Fizz" instead of the number.
        // for (let i = 0; i <=50; i++) {
        //     if(i % 3===0) {
        //         console.log("fizz");
        //     } 
        // }
//     -If a number is divisible by 5 log "Buzz" instead of the number.
        // for (let i = 0; i <=50; i++) {
        //     if(i % 5===0) {
        //         console.log("buzz");
        //     } 
        // }

//     -If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
        // for (let i = 0; i <=50; i++) {
        //     if(i % 3===0 && i % 5===0) {
        //         console.log("FizzBuzz");
        //     } 
        // }

// 9. What is the difference between the do...while() and the while() or for() loop?
    A for loop is used when we know what the terminating condition is.  While loop is
    when you have a controlled loop that will evaluate the condition prior to executing
    if the condition is true.
    The do while will execute after a condition is met, it will continue to execute as 
    long as the condition is true.

*/ 