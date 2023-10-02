// Escuchar el evento submit del formulario
document.getElementById("registroForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

  // Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;

  // Crear un objeto con los datos del formulario
  const formData = {
    Nombre: nombre,
    Apellido: apellido,
    FechaNacimiento: fechaNacimiento,
  };

  // URL del endpoint donde enviarás la solicitud POST
  const url = "https://jsonplaceholder.typicode.com/users";

  // Configuración de la solicitud
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  // Realizar la solicitud POST
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log("Respuesta del servidor:", data);
      alert("Registro exitoso");
      // Puedes redirigir a otra página o realizar otras acciones después del registro exitoso.
    })
    .catch((error) => {
      console.error("Error al enviar la solicitud:", error);
      alert("Error al registrar");
    });
});
