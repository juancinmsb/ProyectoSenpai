const button = document.getElementById("register");
const nameElement = document.getElementById("name");
const mailElement = document.getElementById("mail");
const passwordElement = document.getElementById("password");

button.addEventListener("click", () => {
  const mail = mailElement.value;
  const password = passwordElement.value;
  const name = nameElement.value;

  if (mail && password && nameElement) {
    const objetoBody = {
      mail: mail,
      name: name,
      password: password,
    };

    fetch("http://localhost:3000/auth/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetoBody),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        debugger;

        if (!response.error) {
          localStorage.setItem("token", response.token);

          alert("Registro exitoso");
        } else {
          alert("Registro fallido");
        }
      });
  } else {
    alert("Falta completar campos");
  }
});