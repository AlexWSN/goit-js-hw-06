function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Selectăm butoanele și inputul
const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// Funcție pentru a crea cutiile
const createBoxes = (amount) => {
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
    size += 10;
  }

  boxesContainer.append(...elements);
};

// Funcție pentru a șterge cutiile
const destroyBoxes = () => {
  boxesContainer.innerHTML = "";
};

// Adăugăm event listeners pentru butoane
createButton.addEventListener("click", () => createBoxes(Number(input.value)));
destroyButton.addEventListener("click", destroyBoxes);
