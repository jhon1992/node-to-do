const argv = require('./config/yargs').argv;
const colors = require('colors');
const toDo = require('./to-do/to-do');

let command = argv._[0];

switch (command) {
    case 'crear':
        let tarea = toDo.crear(argv.description);
        console.log(tarea);
        break;
    case 'listar':
        let lista = toDo.listar();
        for (let tarea of lista) {
            console.log('============== To Do ============='.green);
            console.log(tarea.description);
            console.log('Estado: ', tarea.completado);
            console.log('=================================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = toDo.actualizar(argv.description, argv.completado);
        if (actualizado) {
            console.log('Tarea actualizada');
        } else {
            console.log('No se pudo actualizar la tarea');
        }
        break;
    case 'eliminar':
        if (toDo.eliminar(argv.description)) {
            console.log('Tarea eliminada');
        } else {
            console.log('No se pudo eliminar la tarea');
        }
        break;
    default:
        console.log('Comando no reconocido');
}