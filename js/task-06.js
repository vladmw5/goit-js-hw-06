document
  .querySelector("#validation-input")
  .addEventListener("blur", (event) => {
    const input = event.currentTarget;
    if (input.value.length === Number(input.dataset.length)) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
    }
  });
