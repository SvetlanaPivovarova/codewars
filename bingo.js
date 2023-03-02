// BINGO
const arr = [
    {
        letter: 'B',
        min: 1,
        max: 15
    },
    {
        letter: 'I',
        min: 16,
        max: 30
    },
    {
        letter: 'N',
        min: 31,
        max: 45
    },
    {
        letter: 'G',
        min: 46,
        max: 60
    },
    {
        letter: 'O',
        min: 61,
        max: 75
    }
]

function randomInteger (max, min, letter) {
    let rand = min + Math.random() * (max + 1 - min)
    const card = letter + Math.floor(rand)
    return card
}

function getCard() {
    let cardsArray = []
    for (let i = 0; i < arr.length; i++) {
        let j = 0
        if (arr[i].letter !== 'N') {
                while (j < arr.length) {
                let card = randomInteger(arr[i].max , arr[i].min, arr[i].letter).toString()
                    if (cardsArray.includes(card, 0)) {
                        continue
                    }
                    cardsArray.push(card)
                j++
            }
        } else {
            while (j < arr.length - 1) {
                let card = randomInteger(arr[i].max , arr[i].min, arr[i].letter).toString()
                if (cardsArray.includes(card, 0)) {
                    continue
                }
                cardsArray.push(card)
                j++
            }
        }
    }
    console.log(cardsArray)
    return cardsArray
}

getCard()


function getCardN() {
    let card = [];

    function getArrayOfRandomInt(min, max, length) {
        let array = [];
        while (array.length < length) {
            let randomInt = Math.floor(Math.random() * (max - min)) + min;
            array.indexOf(randomInt) === -1 && array.push(randomInt);

        }
        return array;
    }

    getArrayOfRandomInt(1, 15, 5).forEach((value) => {card.push("B" + value)});
    getArrayOfRandomInt(16, 30, 5).forEach((value) => {card.push("I" + value)});
    getArrayOfRandomInt(31, 45, 4).forEach((value) => {card.push("N" + value)});
    getArrayOfRandomInt(46, 60, 5).forEach((value) => {card.push("G" + value)});
    getArrayOfRandomInt(61, 75, 5).forEach((value) => {card.push("O" + value)});

    console.log(card)
    return card;
}

getCardN()

