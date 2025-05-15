const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const cityInput = document.getElementById("city"); // optional
const stateInput = document.getElementById("state"); // optional
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");

// Phone Mask on typing
phoneInput.addEventListener("input", () => {
  let input = phoneInput.value.replace(/\D/g, "").substring(0, 10);
  let formatted = "";
  if (input.length > 0) formatted += "(" + input.substring(0, 3);
  if (input.length >= 4) formatted += ") " + input.substring(3, 6);
  if (input.length >= 7) formatted += "-" + input.substring(6, 10);
  phoneInput.value = formatted;
});

// Clear error style
function clearErrors() {
  [nameInput, phoneInput, emailInput].forEach((input) => {
    input.classList.remove("error");
  });
}

form.addEventListener("submit", function (e) {
  console.log("here");
  e.preventDefault();
  clearErrors();
  let isValid = true;

  // Validate Name
  if (nameInput.value.trim().length < 2) {
    console.log("ll");
    nameInput.classList.add("error");
    isValid = false;
  }

  // Validate Phone
  const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
  if (!phonePattern.test(phoneInput.value)) {
    phoneInput.classList.add("error");
    isValid = false;
  }

  // Validate Email
  const emailValue = emailInput.value.trim();
  if (!emailValue) {
    emailInput.classList.add("error");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    emailInput.classList.add("error");
    isValid = false;
  }

  if (isValid) {
    submitBtn.textContent = "Submitted";
    submitBtn.disabled = true;
    submitBtn.classList.add("disabled");
    form.reset();
  }
});
