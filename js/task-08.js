document
  .querySelector("form.login-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (!email.value || !password.value) {
      alert("All fields should be input");
      return;
    }
    console.log({
      [email.name]: email.value,
      [password.name]: password.value,
    });
    event.currentTarget.reset();
  });
