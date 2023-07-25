// Importamos la librería readline para
// manejar la entrada y salida en la consola
const readline = require('node:readline');

// Importamos la función showMenu desde el archivo showMenu.js
const showMenu = require('./functions/showMenu.js');

/**
 * Creamos una instancia de la interfaz
 * readline para leer la entrada del
 * usuario y mostrar resultados
 */
const rl = readline.createInterface({
  // Utilizamos el flujo de entrada
  // estándar (stdin) para leer la entrada del usuario
  input: process.stdin,
  // Utilizamos el flujo de salida
  // estándar (stdout) para mostrar los resultados
  output: process.stdout,
});

// Mostramos el menú utilizando la función
// showMenu y pasamos la instancia de readline como argumento
showMenu(rl);
