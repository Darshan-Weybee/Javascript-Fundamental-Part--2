
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
        return `Dolphin wins (${average[0]} vs. ${average[1]})`;
    }
    else if (average[1] >= average[0] * 2) {
        return `Koalas wins (${average[1]} vs. ${average[0]})`;
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

let friends = ["Mihcel", "Peter", "Steven"];
for(let i=0; i<friends.length; i++){
    console.log(friends[i]);
}

let years = new Array(1991, 1992, 1993, 1994, 1995);
for(let i=0; i<years.length; i++){
    console.log(years[i]);
}

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037-1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);


const calcAge1 = function(birthYear){
    return 2037-birthYear;
}

const year = [1991, 1992, 1998, 2000];
for(let i=0; i<year.length; i++){
    console.log(year[i]);
}

let age = [];
for(let i=0; i<year.length; i++){
    age.push(calcAge1(year[i]));
}
for(let i=0; i<year.length; i++){
    console.log(age[i]);
}

console.log("\n");
const friends1 = ["Michel", "Jay", "Bob", "John"];
let newLength = friends1.push("Steven");
console.log(newLength);
for(let i=0; i<friends1.length; i++){
    console.log(friends1[i]);
}

console.log("\n");
let popped = friends1.pop();
console.log(popped);
for(let i=0; i<friends1.length; i++){
    console.log(friends1[i]);
}

console.log("\n");
newLength = friends1.unshift("Dustin");
console.log(newLength);
for(let i=0; i<friends1.length; i++){
    console.log(friends1[i]);
}

console.log("\n");
popped = friends1.shift();
console.log(popped);
for(let i=0; i<friends1.length; i++){
    console.log(friends1[i]);
}

console.log("\n");
console.log(friends1.indexOf("Steven"));
console.log(friends1.indexOf("Michel"));

console.log("\n");
console.log(friends1.includes("Michel"));
console.log(friends1.includes("Peter"));
friends1.push("Dustin");
if(friends1.includes("Dustin"))
           console.log(friends1.indexOf("Dustin"));

for(let i=0; i<friends1.length; i++){
    console.log(friends1[i]);
}

