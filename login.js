document.addEventListener("DOMContentLoaded", function () {

  const formulario = document.getElementById("loginForm");

  if (!formulario) {
    return;
  }

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("mensaje");

    const usuarioGuardado = localStorage.getItem("usuario");

    if (!usuarioGuardado) {
      mensaje.textContent = "No existe ninguna cuenta registrada.";
      mensaje.style.color = "red";
      return;
    }

    const usuario = JSON.parse(usuarioGuardado);

    if (
      correo === usuario.correo &&
      password === usuario.password
    ) {

      mensaje.textContent = "Inicio de sesión correcto.";
      mensaje.style.color = "green";

      setTimeout(function () {
        window.location.href = "dashboard.html";
      }, 1000);

    } else {

      mensaje.textContent = "Correo o contraseña incorrectos.";
      mensaje.style.color = "red";

    }
  });

});
