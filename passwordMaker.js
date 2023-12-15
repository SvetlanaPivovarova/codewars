function makePassword(phrase) {
    let arr = phrase.split(' ')
    let pass = []
    for (let i = 0; i < arr.length; i++) {
        pass.push(arr[i][0])
    }
    return pass
        .map(i => i
            .replace('o', 0)
            .replace('O', 0)
            .replace('i', 1)
            .replace('I', 1)
            .replace('s', 5)
            .replace('S', 5))
        .join('')
}
makePassword("Sikd tF VO onASFX NbChrJ Knd owaiq")