const validationInput = document.querySelector("#validation-input");

const validateInput = (event) => {
  const inputLength = event.target.value.length;
  const requiredLength = parseInt(validationInput.dataset.length);

  if (inputLength === requiredLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
};

validationInput.addEventListener("blur", validateInput);
