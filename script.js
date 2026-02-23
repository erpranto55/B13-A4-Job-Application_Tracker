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

function filterCards() {
  for (let card of cards) {
    let statusText = card.querySelector("p:nth-of-type(2)").innerText;

    if (currentStatus === "all-btn") {
      card.classList.remove("hidden");
    } else if (currentStatus === "interview-btn") {
      if (statusText === "INTERVIEW") {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    } else if (currentStatus === "rejected-btn") {
      if (statusText === "REJECTED") {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    }
  }
}

allFilterBtn.addEventListener("click", () => {
  toggleStyle("all-btn");
});
interviewFilterBtn.addEventListener("click", () => {
  toggleStyle("interview-btn");
});
rejectedFilterBtn.addEventListener("click", () => {
  toggleStyle("rejected-btn");
});

allCardSection.addEventListener("click", function (event) {
  const card = event.target.closest(".card");
  if (!card) return;
  const statusElement = card.querySelector("p:nth-of-type(2)");
  const jobTitle = card.querySelector("h2").innerText;

  // INTERVIEW BUTTON
  if (event.target.innerText === "INTERVIEW") {
    statusElement.innerText = "INTERVIEW";
    statusElement.classList.remove("bg-[#EEF4FF]");
    statusElement.classList.add("bg-green-100", "text-green-600");

    if (!interviewList.includes(jobTitle)) {
      interviewList.push(jobTitle);
    }
    rejectedList = rejectedList.filter((item) => item !== jobTitle);
  }


});
