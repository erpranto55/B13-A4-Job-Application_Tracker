let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total");
let interviewCount = document.getElementById("interview-count");
let rejectCount = document.getElementById("rejected-count");

let allFilterBtn = document.getElementById("all-btn");
let interviewFilterBtn = document.getElementById("interview-btn");
let rejectedFilterBtn = document.getElementById("rejected-btn");

let allCardSection = document.getElementById("allCards");
let mainContainer = document.querySelector("main");

function calculateCount() {
  total.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectCount.innerText = rejectedList.length;
}

calculateCount();


