// Importamos la librería 'os' para acceder a información y
// funcionalidades del sistema operativo
const os = require('os');

/**
 * Muestra información de la CPU utilizando la librería 'os'.
 * Imprime en la consola detalles sobre cada núcleo de la CPU,
 * incluyendo el modelo y la velocidad en megahercios (MHz).
 */
function showCPUInfo() {
  console.log('=== Información de la CPU ===');
  // Obtenemos la información de los núcleos de la CPU en un array
  const cpus = os.cpus();

  // Recorremos cada núcleo de la CPU en el array y mostramos sus detalles
  cpus.forEach((cpu, index) => {
    // Mostramos el número de núcleo de CPU (index + 1)
    console.log('CPU', index + 1);
    // Mostramos el modelo de la CPU
    console.log('Modelo:', cpu.model);
    // Mostramos la velocidad de la CPU en MHz
    console.log('Velocidad:', cpu.speed, 'MHz');
  });

  console.log('=========================================');
}

// Exportamos la función para que pueda ser utilizada desde otros archivos
module.exports = showCPUInfo;
