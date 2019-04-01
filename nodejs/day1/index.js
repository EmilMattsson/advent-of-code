let fs = require('fs');

fs.readFile('../input_data/day_1.txt', 'utf8', function(err, contents) {
    if (err) console.log(err.message)
    let strings = splitDataIntoArrayOfStrings(contents)
    let numbers = parseIntArrayOfStrings(strings)
    console.log(sumNumbers(numbers))
    console.log(findFirstDuplicateSum(numbers))
});

function sumNumbers(input) {
    return input.reduce((a, b) => a + b, 0);
}

function splitDataIntoArrayOfStrings(input) {
    return input.split('\n');
}

function parseIntArrayOfStrings(strings) {
    let numbers = [];
    strings.forEach(element => {
        numbers.push(parseInt(element));
    })
    return numbers
}

function findFirstDuplicateSum(numbers) {
    let sums = [];
    let sum = 0;
    // sums.push(sum);
    let noDuplicate = true;
    while (noDuplicate) {
        numbers.forEach(element => {
            sum = sum + element;
            if (sums.includes(sum)) {
                noDuplicate = false;
                return sum
            }
            sums.push(sum);
        })
    }
}