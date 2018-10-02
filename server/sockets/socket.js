const { io } = require('../server');

io.on('connection', (cliente) => {
    console.log('Usuario conectado');

    cliente.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta app'
    });


    cliente.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar al cliente
    cliente.on('enviarMensaje', (data, callback) => {
        // console.log(data);

        // cliente.emit('enviarMensaje', data); // para emitir mensaje al cliente que envia el mensaje
        cliente.broadcast.emit('enviarMensaje', data); // para emitir mensajes a todos los clientes

        /* if (data.usuario) {

            callback({
                resp: 'Todo salió bien'
            });

        } else {
            callback({
                resp: 'Todo salió mal!!!'
            });
        } */

    });
});