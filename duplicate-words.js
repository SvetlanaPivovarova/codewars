//Remove consecutive duplicate words

const sec = "alpha alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
const random = "fXh fXh sgpSLRzc fXh sgpSLRzc pjNdbMDgW RReEf ZTzJnYP RReEf pjNdbMDgW RReEf ZTzJnYP RReEf ZTzJnYP fXh sgpSLRzc fXh pjNdbMDgW RReEf ZTzJnYP RReEf pjNdbMDgW fXh odxXRHwLgY pjNdbMDgW RReEf pjNdbMDgW fXh ZTzJnYP sgpSLRzc ZTzJnYP pjNdbMDgW fXh sgpSLRzc fXh"

const removeConsecutiveDuplicates = (s) => {
    const arr = s.toString().toLowerCase().split(' ')
    let result = []
    result[0] = arr[0]
    for (let i = 1; i < (arr.length ); i++) {
        if(arr[i] !== arr[i-1]) {
            result.push(arr[i])
        }
    }
    console.log(result.join(' '))
    return result.join(' ')
}

removeConsecutiveDuplicates(sec)

