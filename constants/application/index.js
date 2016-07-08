module.exports = {
    SERVER_PORT: 9000,
    SERVER_IP: 'localhost',
    SECRET: 'someSecret',
    CODE: {
        200: {status: 200, message: 'OK'},
        404: {status: 404, message: 'Page not found'},
        500: {status: 500, message: 'server internal error'}
    },
    TOKEN_EXPIRES: 3153600000000, // 10 years
    MONGO_IP: 'mongodb://localhost/gestiondetronos'
};