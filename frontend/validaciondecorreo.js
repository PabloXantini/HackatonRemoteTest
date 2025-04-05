const codigoGuardado = localStorage.getItem("codigoCorreo");

document.getElementById("verificationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  //Inserte logica del backend
  const codigoIngresado = document.getElementById("verificationCode").value.trim();

  if (codigoIngresado === codigoGuardado) {
    alert("\u2705 Verificado correctamente. Redirigiendo...");
         localStorage.removeItem("codigoCorreo");
         window.location.href = "../index.html";
  } else {
        alert("\u274C Código incorrecto. Intenta nuevamente.");
  }
});