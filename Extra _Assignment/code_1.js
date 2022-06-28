
let calcAverage = (score) =>{
    let sum = 0;
    for(let i=0; i<score.length; i++){
        sum += score[i];
    }
    return sum/3;
}

let dolphinScore = [44,23,71];

let dolphinAverage = calcAverage(dolphinScore);
console.log(dolphinAverage);

let koalasScore = [65,54,49];

let koalasAverage = calcAverage(koalasScore);
console.log(koalasAverage);

let averageScore = {
    dolphinAverage: dolphinAverage,
    koalasAverage: koalasAverage
};
console.log(averageScore);


let result = checkWinner(averageScore);
console.log(result);

function checkWinner(averageScore){
    if(averageScore.dolphinAverage >= averageScore.koalasAverage*2){
        return `Dolphin wins (${averageScore.dolphinAverage} vs. ${averageScore.koalasAverage})`;
    }
    else if(averageScore.koalasAverage >= averageScore.dolphinAverage*2){
        return `koalas wins (${averageScore.koalasAverage} vs. ${averageScore.dolphinAverage})`;
    }
    else
        return "no team will win"
}

dolphinScore = [85,54,41];

dolphinAverage = calcAverage(dolphinScore);
console.log(dolphinAverage);

koalasScore = [23,34,27];

koalasAverage = calcAverage(koalasScore);
console.log(koalasAverage);

averageScore.dolphinAverage = dolphinAverage;
averageScore.koalasAverage = koalasAverage;

result = checkWinner(averageScore);
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
