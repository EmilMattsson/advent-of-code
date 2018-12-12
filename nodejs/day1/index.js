let fs = require('fs');

fs.readFile('./input_data/day_1.txt', 'utf8', function(err, contents) {
    sumNumbers(contents);
});

function sumNumbers(input) {
    let array = input.split('\n');
    let numbers = [];
    array.forEach(element => {
        numbers.push(parseInt(element));
    })
    // console.log(numbers.reduce((a, b) => a + b, 0));

    findFirstDuplicate(numbers);
}

function findFirstDuplicate(numbers) {
    let sums = [];
    let sum = 0;
    // sums.push(sum);
    let noDuplicate = true;
    while (noDuplicate) {
        numbers.forEach(element => {
            sum = sum + element;
            if (sums.includes(sum)) {
                console.log(sum);
                noDuplicate = false;
            }
            sums.push(sum);
        })
    }
}