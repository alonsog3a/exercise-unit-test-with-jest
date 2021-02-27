// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the doller value
    return valueInDollar;
}

// we declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to Yen
    let valueInYen = valueInDollar * 106.60;
    //return the doller value
    return valueInYen;
}

// we declare the function with the exact name "fromYenToDollar"
const fromYenToPound = function(valueInYen){
    // convert the given valueInYen to Pound
    let valueInPound = valueInYen * 0.0078;
    //return the doller value
    return valueInPound;
}


// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(7,3)

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};