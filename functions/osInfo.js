// Importamos la librería 'os' para acceder a información
// y funcionalidades del sistema operativo
const os = require('os');

/**
 * Muestra información del sistema operativo utilizando la librería 'os'.
 * Imprime en la consola detalles como la plataforma, tipo de sistema, versión,
 * memoria libre y total, número de núcleos de CPU y arquitectura de la CPU.
 */
function showOSInfo() {
  console.log('=== Información del sistema operativo ===');
  // Muestra la plataforma del sistema operativo
  // (ej. 'win32', 'linux', 'darwin', etc.).
  console.log('Plataforma:', os.platform());
  // Muestra el tipo de sistema operativo
  // (ej. 'Linux', 'Darwin', 'Windows_NT', etc.).
  console.log('Tipo:', os.type());
  // Muestra la versión del sistema operativo (ej. '10.0.19043' en Windows 10).
  console.log('Versión:', os.release());
  // Muestra la cantidad de memoria libre en el sistema en MB.
  console.log('Memoria libre:', os.freemem() / (1024 * 1024), 'MB');
  // Muestra la cantidad total de memoria en el sistema en MB.
  console.log('Memoria total:', os.totalmem() / (1024 * 1024), 'MB');
  // Muestra el número de núcleos de CPU en el sistema.
  console.log('Número de núcleos de CPU:', os.cpus().length);
  // Muestra la arquitectura de la CPU (ej. 'x64', 'x86', 'arm', etc.).
  console.log('Arquitectura de CPU:', os.arch());
  console.log('=========================================');
}

// Exportamos la función para que pueda ser utilizada desde otros archivos
module.exports = showOSInfo;
