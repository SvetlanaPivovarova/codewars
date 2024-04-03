const bearFur = (bears) => {

    if (bears[0] === bears[1]) {
        return bears[0]
    }
    else if ((bears[0] === 'black' && bears[1] === 'brown') || (bears[0] === 'brown' && bears[1] === 'black')) {
        return 'dark brown'
    }
    else if ((bears[0] === 'black' && bears[1] === 'white') || (bears[0] === 'white' && bears[1] === 'black')) {
        return 'grey'
    }
    else if ((bears[0] === 'brown' && bears[1] === 'white') || (bears[0] === 'white' && bears[1] === 'brown')) {
        return 'light brown'
    }
    else return 'unknown'
};

console.log(bearFur(['brown', 'white']))