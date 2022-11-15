// Escribe de nuevo este código añadiendo//
//comentarios siguiendo la nomenclatura javadoc y buenas prácticas://

// Objeto formulas con su método areaCirculo

function formulas() {

    // El método calcula el área según el radio pasado por parámetro //

    this.areaCirculo = function (radio) {
        return Math.PI * Math.pow(radio,2);
    }
}

// Variable con el objeto formulas //

var f = new formulas();

// Salida del resultado //

console.log ("El área de un círculo de radio 2 es " + f.areaCirculo(2));


