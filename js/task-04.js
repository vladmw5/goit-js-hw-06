let counterValue = 0;
const refs = {
  decrementButton: document.querySelector('[data-action="decrement"]'),
  incrementButton: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

refs.decrementButton.addEventListener("click", () => {
  counterValue--;
  refs.value.textContent = counterValue;
});

refs.incrementButton.addEventListener("click", () => {
  counterValue++;
  refs.value.textContent = counterValue;
});
