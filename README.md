# Job Application Tracker

## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

a. getElementById - Is the way to select a single tags from the html code by using ID.<br>
Example: `let total = document.getElementById("total");` <br>
b. getElementsByClassName - is the procedure to select multiple element by using the class name from my html file.<br>
Example: `let cards = document.getElementsByClassName("card");`<br>
c. querySelector - It is a selector which select the first element by using css selector.<br>
Example: `let firstCard = document.querySelector(".card");`<br>
d. querySelectorAll - It is the selector system that can select al the element who are using the same CSS selector.<br>
Example: `let allCards = document.querySelectorAll(".card");`<br>

### 2. How do you create and insert a new element into the DOM?

Step-1: Firstly need to use document.createElement() to create HTML element. <br>
Example: `let newDiv = document.createElement("div");`<br>
Step-2: Secondly add values to the element.<br>
Example: `newDiv.innerText = "Hello World";`<br>
Step-3: Now append the child in parent.<br>
Example: `document.body.appendChild(newDiv);`<br>

### 3. What is Event Bubbling? And how does it work?

Part-1: Event Bubbling is one types of behavior of html file that is start from the target element and then goes up to the parent element. If I click on an any element. An event happens and bubbles up to the parent element.<br>
Part-2: Bubbling works like this:<br>
a. It started from an element.<br>
b. After landed on the element ,its started to move to the parent.<br>
c. Then it goes to the parent mostly to the html.<br>

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is the process to apply an event on the parent file instead of child element.It is useful because of saving memory,improving performance and makes the logic easier to manage.


