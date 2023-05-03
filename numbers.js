// Working with Numbers

// 1. Create a variable using the let keyword and assign a number to it.

// 2. On a new line, add 15 to your variable

// 3. On a new line, subtract 8 from your variable without using the variable when calculating the new value

// 4. Calculate the average of 26, 44, 72, 86, 112. Assign the calculated average to a new variable.

// 5. Modify the following code so it outputs 15 without adding any new lines of code.

    let theNumber = 14;
//    console.log(theNumber++) change the order of operations
    console.log(++theNumber)

// 6. What operator can you use to find out if a variable contains a number?

function numbers() {
    let price = 20;
    price += 15;
    //I don't know what it means to subtract from a variable w/out using the variable
    let avgNums = [26, 44, 72, 86, 112];
    
    let average = avgNums.reduce((a, b) => {
        return a + b;
    }, 10);




    return (`Total price $${price} and average is ${average}`);
    

}
showMessage(numbers());
console.log(numbers());

// += add, -= subtract, *= multiply, /= divide, %= modulus(remainder)

//adding increment operator matters console.log uses increment after variable, function uses before variable

// use typeOf operator to determine a string or a number of a variable