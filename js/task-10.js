function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButtonRef = document.querySelector("[data-create]");
const destroyButtonRef = document.querySelector("[data-destroy]");
const inputRef = document.querySelector("#controls").firstElementChild;
const boxesDivRef = document.querySelector("#boxes");

function createBoxes(amount) {
  //Створюємо масив об'єктів
  const boxArr = [];
  for (let i = 0; i < amount; i++) {
    boxArr.push({
      color: getRandomHexColor(),
      width: `${30 + i * 10}px`,
      height: `${30 + i * 10}px`,
    });
  }

  //Перетворюємо його у розмітку
  const markup = boxArr
    .map(
      ({ color, width, height }) =>
        `<div style="background-color: ${color}; width:${width}; height:${height};"></div>`
    )
    .join("");
  boxesDivRef.insertAdjacentHTML("beforeend", markup);
}

function destroyBoxes() {
  boxesDivRef.innerHTML = "";
}

createButtonRef.addEventListener("click", () => {
  const boxesToCreate = Number(inputRef.value || 0);
  createBoxes(boxesToCreate);
});

destroyButtonRef.addEventListener("click", destroyBoxes);
