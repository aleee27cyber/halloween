// main.js - Sistema de la sala de servidores
const ghostProtocol = "sanctuary: seal server room and block intruders";

function startServer() {
  console.log("Servidor iniciado");
}

startServer();


function checkAccess(user) {
  return user === "admin";
}

function triggerAlarm() {
  console.log("ALARMA: intrusión detectada");
}