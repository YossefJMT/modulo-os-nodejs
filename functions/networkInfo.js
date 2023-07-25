// Importamos la librería 'os' para acceder a información y
// funcionalidades del sistema operativo
const os = require('os');

/**
 * Muestra información de la red utilizando la librería 'os'.
 * Imprime en la consola las interfaces de red disponibles en el sistema.
 */
function showNetworkInfo() {
  console.log('=== Información de la red ===');

  console.log('Interfaces de red:');
  // Mostramos la información de las interfaces de red en la consola
  console.log(os.networkInterfaces());
  console.log('=========================================');
}

// Exportamos la función para que pueda ser utilizada desde otros archivos
module.exports = showNetworkInfo;
