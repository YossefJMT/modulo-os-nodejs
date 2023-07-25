// Importamos la librería 'os' para acceder a información y
// funcionalidades del sistema operativo
const os = require('os');

/**
 * Muestra el directorio temporal del sistema utilizando la librería 'os'.
 * Imprime en la consola la ruta del directorio temporal del sistema.
 */
function showTempDir() {
  console.log('=== Directorio temporal del sistema ===');
  // Mostramos la ruta del directorio temporal en el sistema.
  console.log('Directorio temporal:', os.tmpdir());
  console.log('=========================================');
}

// Exportamos la función para que pueda ser utilizada desde otros archivos
module.exports = showTempDir;
