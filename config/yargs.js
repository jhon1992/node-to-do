const options = {
    description: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: false
    }
};

const optionLista = {
    limite: {
        demand: true,
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea por hacer', options)
    .command('actualizar', 'Actualizar una nueva tarea por hacer', options)
    .command('listar', 'Listar una nueva tarea', optionLista)
    .command('eliminar', 'Eliminar una tarea', options)
    .help()
    .argv;

module.exports = {
    argv
}