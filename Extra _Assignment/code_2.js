
let score = [[44, 23, 71], [65, 54, 49]];
let average = [];
calcAverage(score);

function calcAverage(score) {
    for (let i = 0; i < score.length; i++) {
        let sum = 0;
        for (let j = 0; j < score[0].length; j++) {
            sum += score[i][j];
        }
        sum = sum / 3;
        average.push(sum);
    }
}
console.log(average);

let result = checkWinner(average);
console.log(result);

function checkWinner(average) {
    if (average[0] >= average[1] * 2) {
        return `index0 wins (${average[0]} vs. ${average[1]})`;
    }
    else if (average[1] >= average[0] * 2) {
        return `index1 wins (${average[1]} vs. ${average[0]})`;
    }
    else
        return "no team will win"
}

score = [[85, 54, 41], [23, 34, 27]];
average = [];
calcAverage(score);
console.log(average);

result = checkWinner(average);
console.log(result);
