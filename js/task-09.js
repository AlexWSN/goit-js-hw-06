function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Selectăm butonul și elementele relevante
const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.querySelector("body");

// Funcție pentru a genera o culoare aleatorie
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

// Funcție pentru a schimba culoarea de fundal
const changeBackgroundColor = () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
};

// Adăugăm event listener pentru click
changeColorButton.addEventListener("click", changeBackgroundColor);
