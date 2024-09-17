const counter = document.querySelector("#value");
let counterValue = 0;

const increment = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

document.querySelector('[data-action="increment"]').addEventListener("click", increment);
document.querySelector('[data-action="decrement"]').addEventListener("click", decrement);
