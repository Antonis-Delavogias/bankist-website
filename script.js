"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  //   const s1coords = section1.getBoundingClientRect();
  //   window.scrollTo({
  //     left: s1coords.left + window.scrollX,
  //     top: s1coords.top + window.scrollY,
  //     behavior: "smooth",
  //   });
  // });
  section1.scrollIntoView({
    behavior: "smooth",
  });
});
/*
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

//Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections); //Returns a nodelist

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons); //Returns an HTML collection

console.log(document.getElementsByClassName("btn"));

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent =
// "We use cookies for improved functionality and analytics.";
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true)); // we get both of them , since they can exist only once
// header.before(message); // before exactly the header
// header.after(message);  // after the header

// Delete Elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
    // message.parentElement.removeChild(message); // selecting the parent element is called dom traversing
  });

// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.backgroundColor); // we cant get the code we have in CSS, only the code we write in javascript
//Unless we use a function
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";

// document.documentElement.style.setProperty("--color-primary", "orangered");

//Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.src);
console.log(logo.getAttribute("src"));

console.log(logo.alt);
console.log(logo.className);

logo.alt = "Beautiful minimalist logo";
//Non Standar
// console.log(logo.getAttribute('designer'));
logo.setAttribute("company", "Bankist");

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes (can add multiple classes)
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c", "j");
logo.classList.contains("c", "j"); // not includes

// Don't use
// logo.className = "jonas";
*/

const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("addEventListener: Great! You are reading the heading");

  // h1.removeEventListener("mouseenter", alertH1);
};
h1.addEventListener("mouseenter", alertH1);
setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);
//   "mouseenter",

//Old school
// h1.onmouseenter = function (e) {
//   alert("addEventListener: Great! You are reading the heading");
// };

// Remove an event handler
