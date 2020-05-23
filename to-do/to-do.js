const fs = require('fs');


let listToDo = [];

const saveDb = () => {
    let data = JSON.stringify(listToDo);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar ', err)
    });
}

const leerDb = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
}

const listar = () => {
    leerDb();
    return listToDo;
}

const actualizar = (description, completado = true) => {
    leerDb();
    let index = listToDo.findIndex(tarea => {
        return tarea.description === description
    });
    if (index > -1) {
        listToDo[index].completado = completado;
        saveDb();
        return true;
    } else {
        return false;
    }
}

const eliminar = (description) => {
    leerDb();
    let index = listToDo.findIndex(tarea => {
        return tarea.description === description
    });
    console.log(index);
    if (index > -1) {
        listToDo.splice(index, 1);
        saveDb();
        return true;
    } else {
        return false;
    }
}

const crear = (description) => {
    leerDb();
    let toDo = {
        description,
        completado: false
    };
    listToDo.push(toDo);
    saveDb();
    return toDo;
};

module.exports = {
    crear,
    listar,
    actualizar,
    eliminar
}