const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const updateName = (event) => {
  const inputValue = event.target.value;
  nameOutput.textContent = inputValue.trim() === "" ? "Anonymous" : inputValue;
};

nameInput.addEventListener("input", updateName);
