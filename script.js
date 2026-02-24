let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let total = document.getElementById("total");
let interviewCount = document.getElementById("interview-count");
let rejectCount = document.getElementById("rejected-count");
let jobsCount = document.getElementById("jobs-count");

let allFilterBtn = document.getElementById("all-btn");
let interviewFilterBtn = document.getElementById("interview-btn");
let rejectedFilterBtn = document.getElementById("rejected-btn");

let allCardSection = document.getElementById("allCards");
let empty = document.getElementById("empty");

function calculateCount() {
  const cards = document.querySelectorAll("#allCards .card");
  total.innerText = cards.length;
  interviewCount.innerText = interviewList.length;
  rejectCount.innerText = rejectedList.length;

  let count = cards.length;
  let text;
  if (count !== 1) {
    text = count + " jobs";
  } else {
    text = count + " job";
  }

  jobsCount.innerText = text;

  if (cards.length === 0) {
    empty.classList.remove("hidden");
    allCardSection.classList.add("hidden");
  } else {
    empty.classList.add("hidden");
    allCardSection.classList.remove("hidden");
  }
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
  let visible = 0;
  let Cards = document.querySelectorAll("#allCards .card");
  for (let card of Cards) {
    let statusText = card.querySelector("p:nth-of-type(2)").innerText;

    if (currentStatus === "all-btn") {
      card.classList.remove("hidden");
      visible++;
    } else if (currentStatus === "interview-btn") {
      if (statusText === "INTERVIEW") {
        card.classList.remove("hidden");
        visible++;
      } else {
        card.classList.add("hidden");
      }
    } else if (currentStatus === "rejected-btn") {
      if (statusText === "REJECTED") {
        card.classList.remove("hidden");
        visible++;
      } else {
        card.classList.add("hidden");
      }
    }
  }

}

allFilterBtn.addEventListener("click", function () {
  toggleStyle("all-btn");
});
interviewFilterBtn.addEventListener("click", function () {
  toggleStyle("interview-btn");
});
rejectedFilterBtn.addEventListener("click", function () {
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

    statusElement.classList.remove(
      "bg-[#EEF4FF]",
      "bg-red-100",
      "text-red-600",
      "bg-green-100",
      "text-green-600",
    );
    statusElement.classList.add("bg-green-100", "text-green-600");

    if (!interviewList.includes(jobTitle)) {
      interviewList.push(jobTitle);
    }
    rejectedList = rejectedList.filter((item) => item !== jobTitle);
  }

  // REJECTED BUTTON
  if (event.target.innerText === "REJECTED") {
    statusElement.innerText = "REJECTED";
    statusElement.classList.remove("bg-[#EEF4FF]");
    statusElement.classList.add("bg-red-100", "text-red-600");

    statusElement.classList.remove(
      "bg-[#EEF4FF]",
      "bg-red-100",
      "text-red-600",
      "bg-green-100",
      "text-green-600",
    );
    statusElement.classList.add("bg-red-100", "text-red-600");

    if (!rejectedList.includes(jobTitle)) {
      rejectedList.push(jobTitle);
    }
    interviewList = interviewList.filter((item) => item !== jobTitle);
  }

  // DELETE BUTTON
  if (event.target.closest(".fa-trash-can")) {
    interviewList = interviewList.filter((item) => item !== jobTitle);
    rejectedList = rejectedList.filter((item) => item !== jobTitle);
    card.remove();
  }

  calculateCount();
  filterCards();
});
