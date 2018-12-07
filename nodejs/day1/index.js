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
    console.log(numbers.reduce((a, b) => a + b, 0));

    findFirstDuplicate(numbers);
}

function findFirstDuplicate(numbers) {
    let i = 0;
    let j = i + 1;
    let tmp;
    for (let k = 0; k < numbers.length; k++) {
        console.log(numbers[i] + " " + numbers[j]);
        i++;
        if (i !== (numbers.length - 1)) {
            j++;
        }
    }
}