
    /*var nombres = ["Jimena", "Alejandra", "Luis", "Joel", "Karen"];
    var apellidos = ["Sosa", "Ramirez", "Vargas", "Jimenez", "Acosta"];

    var nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    var apellidoAleatorio = Math.floor(Math.random() * apellidos.length);

    document.getElementById('result').innerHTML="<h1>Nombre</h1><div><h2>"+nombres[nombreAleatorio]+" "+apellidos[apellidoAleatorio]+"</h2></div>";*/

var nombres = ['Juan', 'María', 'Carlos', 'Laura', 'Pedro', 'Ana', 'Luis', 'Sofía', 'Diego', 'Marta'];
var apellidos = ['González', 'López', 'Pérez', 'Rodríguez', 'Martínez', 'Gómez', 'Hernández', 'Fernández', 'García', 'Torres'];

// Función para generar un nombre completo aleatorio
function generarNombreCompleto() {
  var nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
  var apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];
  var nombreCompleto = nombreAleatorio + ' ' + apellidoAleatorio;

  document.getElementById('result').textContent = nombreCompleto;
}

// Generar un nombre completo aleatorio
    