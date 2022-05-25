const spanRef = document.querySelector("#name-output");
document.querySelector("#name-input").addEventListener("input", (event) => {
  spanRef.textContent = event.currentTarget.value || "Anonymous";
});
