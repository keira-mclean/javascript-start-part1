// Working with Strings

// 1. Create 5 variables. All variables should be assigned a string value.
//     -Assign 1 variable a verb
//     -Assign 1 variable a noun
//     -Assign 1 variable an adjective
//     -Assign 1 variable a color
//     -Assign 1 variable a name
// 2. Create a variable called madlib and assign it a string value.

//     -Use all the variables created in step one to construct a Madlib.
//     -Use the + operator for concatenation when building your Madlib.
//     -Use the appropriate escape characters to make sure each sentence in the 
//      Madlib appears on a new line.  escape "hello \"world\"";
//     -Print the Madlib to the console
// 3. Create a variable called madlibLiteral. Refactor your Madlib using template 
//      literals and interpolation. Print the new variable to the console.

// 4. Why would we want to convert a string to a number in JavaScript and what is 
//      one way to accomplish this?
//      in the event there is a variable amount, and we want to display it as a 
//      string.  You can add "variable.toString" to accomplish this


function strings() {
    let verb = "sitting";
    let noun = "book";
    let adjective = "barely";
    let color = "red";
    let name = "steve";

    let madlib = "Madlib string " + verb + " whatever comes next \n" +
        "I like " + noun + "'s. See " + name + " run, he's " + adjective + " sweating " + color + ".";

    return madlib;

}
function madLibString() {
    let verb = "sitting";
    let noun = "book";
    let adjective = "barely";
    let color = "red";
    let name = "steve";

    let madlibLiteral = `Madlib string ${verb} whatever comes next 
    \nI like ${noun}'s.  See ${name} run, he's ${adjective} sweating ${color}`;

    return madlibLiteral;

}
console.log(strings());
showMessage(madLibString());