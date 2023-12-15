function blackAndWhite(arr){
    if(!Array.isArray(arr)) {
        console.log("It's a fake array")
        return "It's a fake array"
    } else {
        if(arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1) {
            console.log("It's a black array")
            return "It's a black array"
        } else {
            console.log("It's a white array")
            return "It's a white array"
        }
    }

}

blackAndWhite([5,12])