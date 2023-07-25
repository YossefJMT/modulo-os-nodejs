// Importamos la librería 'os' para acceder a información y
// funcionalidades del sistema operativo
const os = require('os');

/**
 * Muestra información de la memoria utilizando la librería 'os'.
 * Imprime en la consola la cantidad de memoria libre y total en el sistema,
 * expresada en megabytes (MB).
 */
function showMemoryInfo() {
  console.log('=== Información de la memoria ===');
  // Mostramos la memoria libre en el sistema en MB.
  console.log('Memoria libre:', os.freemem() / (1024 * 1024), 'MB');
  // Mostramos la memoria total en el sistema en MB.
  console.log('Memoria total:', os.totalmem() / (1024 * 1024), 'MB');
  console.log('=========================================');
}

// Exportamos la función para que pueda ser utilizada desde otros archivos
module.exports = showMemoryInfo;
