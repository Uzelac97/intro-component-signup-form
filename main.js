const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

const inputs = [firstName, lastName, email, password];

function showError(input, errorImg, errorMessage) {
  input.classList.add("error");
  errorImg.style.display = "inline";
  errorMessage.style.display = "block";
  input.placeholder = "";
}

function hideError(input, errorImg, errorMessage) {
  input.classList.remove("error");
  errorImg.style.display = "none";
  errorMessage.style.display = "none";
}

function validateInput(input) {
  const errorImg = input.nextElementSibling;
  const errorMessage = input.parentElement.nextElementSibling;

  if (input.value.trim() === "") {
    showError(input, errorImg, errorMessage);
    return false;
  } else {
    hideError(input, errorImg, errorMessage);
    return true;
  }
}

function validateEmail(input) {
  const errorImg = input.nextElementSibling;
  const errorMessage = input.parentElement.nextElementSibling;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (input.value.trim() === "") {
    showError(input, errorImg, errorMessage);
    input.classList.add("invalid-email");
    input.value = "";
    input.placeholder = "example@example/com";
    return false;
  } else if (!emailRegex.test(input.value.trim())) {
    showError(input, errorImg, errorMessage);
    input.classList.add("invalid-email");
    input.value = "";
    input.placeholder = "example@example/com";
    return false;
  } else {
    hideError(input, errorImg, errorMessage);
    input.classList.remove("invalid-email");
    return true;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let allValid = true;

  inputs.forEach((input) => {
    if (email === input) {
      if (!validateEmail(input)) {
        allValid = false;
      }
    } else {
      if (!validateInput(input)) {
        allValid = false;
      }
    }
  });

  if (allValid) {
    alert("Form submitted successfully!");
  }
});
