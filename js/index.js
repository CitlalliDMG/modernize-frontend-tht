// FUNCTION TO OPEN LINK IN NEW WINDOW

function openInNewWindow() {
  window.open("https://www.google.com", "_blank", "width=800,height=600");
}

// MOCK SERVER via fetch override
const originalFetch = window.fetch;
window.fetch = function (url, options) {
  const MOCK_ENDPOINT =
    "https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar";
  if (url === MOCK_ENDPOINT && options.method === "POST") {
    console.log("[MOCK SERVER] Intercepted POST to:", url);
    console.log("[MOCK SERVER] Data:", JSON.parse(options.body));

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          new Response(
            JSON.stringify({
              success: true,
              message: "Mock submission received",
            }),
            {
              status: 200,
              headers: { "Content-Type": "application/json" },
            }
          )
        );
      }, 1000); // Simulate network latency
    });
  }

  // fallback to real fetch
  return originalFetch.apply(this, arguments);
};

// FORM HANDLING
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

  if (!isValid) return;

  if (isValid) {
    // Prepare data for submission
    const data = {
      name: nameInput.value.trim(),
      city: cityInput.value.trim(),
      state: stateInput.value.trim(),
      phone: phoneInput.value.trim(),
      email: emailInput.value.trim(),
    };

    // Disable button and show "Submitting"
    submitBtn.textContent = "Submitting...";
    submitBtn.disabled = true;
    submitBtn.classList.add("disabled");

    // Send AJAX request
    fetch("https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(() => {
        submitBtn.textContent = "Submitted";
        form.reset();
      })
      .catch((error) => {
        submitBtn.textContent = "Submit";
        submitBtn.disabled = false;
        submitBtn.classList.remove("disabled");
        alert("Submission failed: " + error.message);
      });
  }
});
