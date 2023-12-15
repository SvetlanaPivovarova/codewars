function colourAssociation(array){
    // We <3 colours..
    let arrFin = new Array
    for (let i = 0; i < array.length; i++) {
        let obj = {[array[i][0]]: array[i][1]}
        arrFin.push(obj)
    }
    console.log(arrFin)
    return arrFin
}


colourAssociation([["white", "goodness"]])