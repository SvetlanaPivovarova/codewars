function showObjectKeys(obj){
    for (var key in obj){
        console.log(key);
    }
}
function showObjectValues(obj){
    for (var key in obj){
        console.log(obj[key]);
    }
}
var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
console.log("keys of ob:")
showObjectKeys(ob);
console.log("values of ob:")
showObjectValues(ob);

function giveMeFive(obj){
    let arr = [];
    for (let key in obj) {
        if (obj[key].length === 5) {
            arr.push(obj[key])
        }
    }
    console.log(arr)
    return arr
}

giveMeFive(ob)