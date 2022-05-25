const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

document.querySelector("#ingredients").append(
  ...ingredients.map((ingredient) => {
    const listElemRef = document.createElement("li");
    listElemRef.classList.add("item");
    listElemRef.textContent = ingredient;
    return listElemRef;
  })
);
