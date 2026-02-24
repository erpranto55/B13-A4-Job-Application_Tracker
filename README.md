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
