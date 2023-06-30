let fs= require('fs')
let importar = require('./collectibles')
let hottoys =importar("Hot toys")
let bandai = importar("Bandai")
let starwars = importar("Star wars")
let unifiedCollectibles = [
    ...hottoys,
     ...bandai, 
     ...starwars
    ];
//4objetoliteral
let collectiblesobjeto={
    figuras :unifiedCollectibles,
    //funcion1a:
    listFigures(){
        this.figuras.forEach(figura => {
      console.log(`Marca: ${figura.marca}`);
      console.log(`Nombre: ${figura.nombre}`);
      console.log(`Precio: ${figura.precio}`);
      console.log(`Stock: ${figura.stock}`);
      console.log("-------------------");
    });
    },
    //funcio2b:
    figuresByBrand(marca){
        //los nombres que recibe la funcion son :Hot Toys,Bandai y Star Wars
         return this.figuras.filter(figura => figura.marca === marca);
    }
}
//ejemplo de la primera funcion :v
console.log("Todas las figuras:");
collectiblesobjeto.listFigures();
//ejemplo de la segunda funcion:)
console.log("Figuras de la marca Hot Toys:");
console.log(collectiblesobjeto.figuresByBrand("Hot Toys"));
console.log("hola")
console.log("segundo cambio")