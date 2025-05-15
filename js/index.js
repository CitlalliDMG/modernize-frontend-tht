const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function (e) {
  let input = e.target.value.replace(/\D/g, ""); // Remove all non-digits
  if (input.length > 10) input = input.substring(0, 10);

  let formatted = "";

  if (input.length > 0) {
    formatted += "(" + input.substring(0, 3);
  }
  if (input.length >= 4) {
    formatted += ") " + input.substring(3, 6);
  }
  if (input.length >= 7) {
    formatted += "-" + input.substring(6, 10);
  }

  e.target.value = formatted;
});
