function lostSheep(friday,saturday,total){
    console.log(friday.concat(saturday).reduce((s,l)=>s-l,total))

    if (friday.length === 0 && saturday.length === 0) {
        return total
    } if (friday.length === 0) {
        return total - saturday.reduce((sum,i) => {return sum + i})
    } if (saturday.length === 0) {
        return total - friday.reduce((sum,i) => {return sum + i})
    } else {
        return total - friday.reduce((sum,i) => {return sum + i}) - saturday.reduce((sum,i) => {return sum + i})
    }
}

lostSheep([], [], 15)