// Common exceptions include TypeError, ReferenceError, SyntaxError, and RangeError, 
// each indicating a specific type of problem in the code.


// Syntax Error

console.log('hello world');

function addNumbers (a, b) {
    return a + b;
}

// This type of error will typically prevent the code from running at all, 
// and a message indicating a syntax error will be displayed in the console or output.




//  Reference Error
console.log(username);

// the code tries to log the value of username to the console, 
// but the variable hasn't been declared or defined anywhere in the current scope. 
// This results in a ReferenceError with a message indicating that username is not defined.




// What error is this?
const name = "Cecilia";
name();

// This leads to a TypeError because strings cannot be executed as functions.



// // Handling Exceptions

// Undefined variable
try {
    let obj = null;
    console.log(obj.name);  // This will throw a TypeError


} catch (error) {
    console.log(error);
    console.error("Caught an exception:",error.message);  // Output: Caught an exception: Cannot read property 'name' of null
}

// Parsing JSON

let jsonString = '{"name": "John", "age": 30}';

try {
    let user = JSON.parse(jsonString);
    console.log(user.name);  // Output: John
} catch (error) {
    console.error("Invalid JSON string:", error.message);
}

let badJsonString = '{"name": "John", "age": 30';  // Missing closing brace

try {
    let user = JSON.parse(badJsonString);
    console.log(user.name);
} catch (error) {
    console.log("Invalid JSON string:", error.message);  // Output: Invalid JSON string: Unexpected end of JSON input
}

// Handling exceptions
// try {some code if it fails} catch () { catch error here} finally { do this regardless}
function handleOperations(value){
    try {
        // Reference Error
        console.log(nonExistentVariable);

        // Type Error
        value();

        // Range Error
        const arr = new Array(-1) // invalid array size

    } catch(error) {
        if(error instanceof ReferenceError) {
            console.error("Caught a Reference Error", error.message)

        } else if (error instanceof TypeError) {
            console.error("Caught a Type Error", error.message)

        } else if (error instanceof RangeError) {
            console.error("Caught a Range Error", error.message)

        } else {
            console.error("Unexpected error", error.message)
        }

    }
    finally {
        
    }

}

