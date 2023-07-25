// Importamos las funciones desde los archivos correspondientes
const showOSInfo = require('./osInfo');
const showCPUInfo = require('./cpuInfo');
const showMemoryInfo = require('./memoryInfo');
const showNetworkInfo = require('./networkInfo');
const showTempDir = require('./tempDir');
const showEOL = require('./eol');
const showUserHomeDir = require('./userHomeDir');

/**
 * Muestra un menú interactivo con opciones relacionadas a la librería 'os'.
 *
 * @param {*} rl - Instancia de la interfaz readline
 * para leer la entrada del usuario y mostrar resultados.
 */
function showMenu(rl) {
  console.log('===========================================');
  console.log('=== MENU DE FUNCIONES DE LA LIBRERÍA OS ===');
  console.log('1. Información del sistema operativo');
  console.log('2. Información de la CPU');
  console.log('3. Información de la memoria');
  console.log('4. Información de la red');
  console.log('5. Directorio temporal del sistema');
  console.log('6. Código de fin de línea predeterminado');
  console.log('7. Directorio principal del usuario');
  console.log('8. Salir');
  console.log('=========================================');
  console.log();

  rl.question('Seleccione una opción: ', (option) => {
    option = parseInt(option);
    switch (option) {
      case 1:
        // Llamamos a la función para mostrar información del sistema operativo
        showOSInfo();
        break;
      case 2:
        // Llamamos a la función para mostrar información de la CPU
        showCPUInfo();
        break;
      case 3:
        // Llamamos a la función para mostrar información de la memoria
        showMemoryInfo();
        break;
      case 4:
        // Llamamos a la función para mostrar información de la red
        showNetworkInfo();
        break;
      case 5:
        // Llamamos a la función para mostrar el directorio temporal del sistema
        showTempDir();
        break;
      case 6:
        // Llamamos a la función para mostrar el
        // código de fin de línea predeterminado
        showEOL();
        break;
      case 7:
        // Llamamos a la función para mostrar el
        // directorio principal del usuario
        showUserHomeDir();
        break;
      case 8:
        // Cerramos la instancia de readline y finalizamos la ejecución
        console.log('Saliendo...');
        rl.close();
        return;
      default:
        // La opcion entrada no es ninguna de las propuestas
        console.log('===========================================');
        console.log('Opción inválida. Intente nuevamente.');
    }

    // Mostramos nuevamente el menú para que el usuario seleccione otra opción
    showMenu(rl);
  });
}
// Exportamos la función para que pueda ser utilizada desde otros archivos
module.exports = showMenu;
