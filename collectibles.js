const fs = require('fs');

function importar(marca) {
    if (marca == "Hot toys") {
        ruta =  './figuras1.json'
    }else if(marca=="Bandai"){
        ruta =  './figuras2.json'
    }else if(marca=="Star wars"){
        ruta =  './figuras3.json'
    }else{
        return "error"
    }
    let objeto=fs.readFileSync(ruta);
    return JSON.parse(objeto)
}
module.exports=importar