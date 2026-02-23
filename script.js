let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let total = document.getElementById("total");
let interviewCount = document.getElementById("interview-count");
let rejectCount = document.getElementById("rejected-count");

let allFilterBtn = document.getElementById("all-btn");
let interviewFilterBtn = document.getElementById("interview-btn");
let rejectedFilterBtn = document.getElementById("rejected-btn");

let allCardSection = document.getElementById("allCards");
let cards = document.querySelectorAll(".card");

function calculateCount() {
  total.innerText = cards.length;
  interviewCount.innerText = interviewList.length;
  rejectCount.innerText = rejectedList.length;
}

calculateCount();

function toggleStyle(id) {
  let buttons = [allFilterBtn, interviewFilterBtn, rejectedFilterBtn];
  buttons.forEach((btn) => {
    btn.classList.remove("bg-blue-600", "text-white");
    btn.classList.add("bg-gray-100", "text-gray-600");
  });

  let selected = document.getElementById(id);
  selected.classList.remove("bg-gray-100", "text-gray-600");
  selected.classList.add("bg-blue-600", "text-white");
  currentStatus = id;
  filterCards();
}
