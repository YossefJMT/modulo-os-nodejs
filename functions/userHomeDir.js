// Importamos la librería 'os' para acceder a información y
// funcionalidades del sistema operativo
const os = require('os');

/**
 * Muestra el directorio principal del usuario utilizando la librería 'os'.
 * Imprime en la consola la ruta del directorio principal del usuario.
 */
function showUserHomeDir() {
  console.log('=== Directorio principal del usuario ===');
  // Mostramos la ruta del directorio principal del usuario.
  console.log('Directorio principal:', os.homedir());
  console.log('=========================================');
}

// Exportamos la función para que pueda ser utilizada desde otros archivos
module.exports = showUserHomeDir;
