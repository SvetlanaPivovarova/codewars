function flickSwitch(arr){
    let res = true
    let arrFin = []
    arrFin = arr.map((item) => {
        if (item === 'flick') {
            res = !res
            return res
        } else return res
    })
    console.log(arrFin)
    return arrFin
}

flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick'])