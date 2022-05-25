// Напиши скрипт который:
// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>)
// и количество элементов в категории(всех вложенных в него < li >).

// 1.
console.log(
  `Number of categories: ${
    document.querySelector("#categories").children.length
  }`
);

// 2.
document.querySelectorAll(".item").forEach((ref) => {
  console.log(`Category: ${ref.firstElementChild.textContent}`);
  console.log(`Elements: ${ref.lastElementChild.children.length}`);
});
