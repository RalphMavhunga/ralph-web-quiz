//navbar code
const primaryHeader = document.querySelector(".menu");
const navWrapper = document.querySelector(".nav-bar");
const primaryNav = document.querySelector(".primary-navigation");
const hamburgerIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

//show navbar
navWrapper.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navWrapper.setAttribute("aria-expanded", false)
    : navWrapper.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");

  if (hamburgerIcon.style.display === "none") {
    hamburgerIcon.style.display = "inline";
    closeIcon.style.display = "none";
  } else {
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "inline";
  }
});

//modal code
const dropdownButton = document.getElementById("dropdownButton");
const dropdownContent = document.getElementById("dropdownContent");
const selectedOptions = document.querySelectorAll(".section-4-select-option");
const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];
const modalContent = document.getElementById("modalContent");

//show custom select options
dropdownButton.addEventListener("click", () => {
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
});

//show modal
selectedOptions.forEach((selectedOption) => {
  selectedOption.addEventListener("click", function () {
    const selectedValue = selectedOption.getAttribute("value");
    dropdownButton.textContent = selectedValue;
    modalContent.textContent = selectedValue;
    modal.style.display = "block";
  });
});

//close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  dropdownButton.textContent = "Select";
});

//close when user click outside the modal 
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    dropdownButton.textContent = "Select";
  }
});
