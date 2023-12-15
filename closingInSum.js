function closingInSum(n) {
    const ar = n.toString().split('')

    let sum = 0
    const last = ar.length - 1
    if(ar.length % 2 !== 0) {
        for (let i = 0; i < (ar.length - 1) / 2; i++) {
            const a = Number(ar[i] + ar[last-i])
            sum = sum + a
        }
        sum = sum + Number(ar[(ar.length - 1) / 2])
        return sum;
    } else {
        for (let i = 0; i < ar.length / 2; i++) {
            const a = Number(ar[i] + ar[last-i])
            sum = sum + a
            console.log(sum)
        }
        return sum;
    }

}

closingInSum(1039n)