console.log("HERE!!")

// getElementsByTagName
// select all p tags from our HTML document and create a collection

let paragraphs = document.getElementsByTagName("p")
// log paragraphs
// console.log(paragraphs);

// change the color and font family of all the p tags 
// using a for loop
for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "green";
    paragraphs[i].style.fontFamily = "aria";

}

// TODO: 
// Add more h1 elements
// Use getElementsByTagName to change some of their CSS settings




// Classes
// getElementsByClassName

// select all elements in our HTML document with the class name "my-class"
let myClass = document.getElementsByClassName("my-class")
// console.log(myClass);

// loop through my-class elements and 
// change their font color and font style
for (let i=0; i < myClass.length; i++){
    myClass[i].style.color = "red";
    myClass[i].style.fontStyle ="italic";
}

// Nested Elements

const todo = document.getElementById("todo");
// console.log(todo);

const todoItems = todo.getElementsByTagName("li");


for (let i=0; i < todoItems.length; i++){

    const items = todoItems[i];
    items.textContent =items.textContent + "📌";
}

// TODO: Add a new HTML list with a different id
// Write JavaScript code to add a different emoji to the 
// end of each item in your new list. 






// Event Listeners
// addEventListener()
const calculateButton = document.getElementById("calculateButton");
const resultElement = document.getElementById("result");

// Add event listener
calculateButton.addEventListener("click", function() {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;

    // if / else statement to check whether either of the numbers entered is empty /
    //  or isn't a number! This is what Nan means.

    if (isNaN(number1) || isNaN(number2)) {
        resultElement.textContent = "Please enter valid numbers!";
        // else, multiply the two numbers.
      } else {
        let result = number1 * number2;
        resultElement.textContent = "Answer: " + "✨" + result + "✨";
      }
})

// TODO: Add an event listener to the new button that clears the result when it’s clicked.
// hint: when the clear button is clicked, set the button textContent = '';





// TIMERS
// setTimeout()
const list = document.getElementById("fruits");
const listItems = list.getElementsByTagName("li");

// Find the index of the last item
let index = listItems.length - 1;

function showNextItem() {
    if (index >=0) {
        listItems[index].style.visibility = "visible"
        index--; // count down

        setTimeout(showNextItem, 2000); // 1 sec delay
    }
}

showNextItem();

// TODO: Add a function to add a gold star emoji to the web page 
// and call that function 0.5 seconds after revealing the whole list. 


// Local Storage