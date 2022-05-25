const abracadabraRef = document.querySelector("#text");
document
  .querySelector("#font-size-control")
  .addEventListener("input", (event) => {
    abracadabraRef.style.fontSize = `${event.currentTarget.value}px`;
  });
