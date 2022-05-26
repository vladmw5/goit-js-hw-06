function addRemoveClass(toAdd, toRemove) {
  this.classList.add(toAdd);
  this.classList.remove(toRemove);
}

document
  .querySelector("#validation-input")
  .addEventListener("blur", (event) => {
    const input = event.currentTarget;
    if (input.value.length === Number(input.dataset.length)) {
      addRemoveClass.call(input, "valid", "invalid");
    } else {
      addRemoveClass.call(input, "invalid", "valid");
    }
  });
