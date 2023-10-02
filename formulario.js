document.getElementById("registroForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;

  // Creo objeto con los datos del formulario
  const formData = {
    Nombre: nombre,
    Apellido: apellido,
    FechaNacimiento: fechaNacimiento,
  };

  const url = "https://jsonplaceholder.typicode.com/users";

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  // Realizoo la solicitud POST
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log("Respuesta del servidor:", data);
      alert("Te registraste correctamente");
    })
    .catch((error) => {
      console.error("Error al enviar la solicitud:", error);
      alert("Error al registrarse");
    });
});
