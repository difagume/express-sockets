var socket = io();

// escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
// Cuando perdemos conexion con el servidor
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el  servidor');
});


// enviar información
socket.emit('enviarMensaje', {
    usuario: 'diego fa',
    mensaje: 'holi'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

// escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});