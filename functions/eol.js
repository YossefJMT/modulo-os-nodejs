// Importamos la librería 'os' para acceder a información y
// funcionalidades del sistema operativo
const os = require('os');

/**
 * Muestra el código de fin de línea predeterminado utilizando la librería 'os'.
 * Imprime en la consola el código de fin de
 * línea predeterminado en formato JSON.
 */
function showEOL() {
  console.log('=== Código de fin de línea predeterminado ===');
  // Mostramos el código de fin de línea predeterminado en formato JSON.
  console.log('Fin de línea:', JSON.stringify(os.EOL));
  console.log('=========================================');
}

// Exportamos la función para que pueda ser utilizada desde otros archivos
module.exports = showEOL;
