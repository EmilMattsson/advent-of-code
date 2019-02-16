let fs = require('fs');

fs.readFile('../input_data/day_2.txt', 'utf8', function(err, contents) {
    if (err) console.log(err.message)
    getChecksum(contents)
});

function getChecksum(input) {
    let strings = input.split('\n')
    let doubles = 0
    let triplets = 0
    
    strings.forEach(string => {
        let charArr = getUniqueCharactersInString(string)
        
        let doublesArr = []
        let triplesArr = []
        charArr.forEach(char => {
            let count = 0
            for (let i = 0; i < string.length; i++) {
                if (char === string.charAt(i)) count++
            }
            if (count === 2) doublesArr.push(char)
            if (count === 3) triplesArr.push(char)
        })
        
        if (doublesArr.length > 0 && triplesArr.length > 0 && doublesArr.length === triplesArr.length) {
            doubles++
            triplets++
        } else if (doublesArr.length > 0 && triplesArr.length < 1) {
            doubles++
        } else if (doublesArr.length < 1 && triplesArr.length > 0) {
            triplets++
        }
    })
    console.log(doubles)
    console.log(triplets)
    console.log(doubles * triplets)
}

function getUniqueCharactersInString(string) {
    let charArr = []
    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i)
        if (!charArr.includes(char)) charArr.push(char)
    }
    return charArr
}