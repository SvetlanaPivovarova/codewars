function timeCorrect(timestring) {
    let res = []
    const Regex = /^\d{1,2}\:\d{2}\:\d{2}$/;
    if (timestring === null) {
        return null
    }
    if (timestring) {
        if (timestring.match(Regex)) {
            const [h, m, s] = timestring.split(":")
                res[0] = h > 23 ? (Number(h) % 24) : h;
                res[1] = m > 59 ? (Number(m) - 60) : m;
                res[2] = s > 59 ? (Number(m) - 60) : s;
                if (m > 59) {
                    res[0]++
                }
                if (s > 59) {
                    res[1]++
                }
            if(h === '0') {
                res[0] = "00"
            }

                return res.join(":");

        }
        return null
    }
    else return ""
}

console.log(timeCorrect("0:01:01"))