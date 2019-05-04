const Hapi = require('@hapi/hapi');
const Database = require('./config/database');

const init = async () => {

    const server = Hapi.server({
        port: 8000,
        host: 'localhost'
    });
    
    Database.connect();

    await server.register([
    ]);

    await server.start();
    console.log('Listening on %s', server.info.uri);

}

init();
