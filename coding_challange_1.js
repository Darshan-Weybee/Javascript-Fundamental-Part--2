console.log("==============Coding_Challange_1============");

let calcAverage = (score1, score2, score3) =>{
    return (score1+score2+score3)/3;
}

let dscore1 = 44;
let dscore2 = 23;
let dscore3 = 71;

let dScoreAverage = calcAverage(dscore1, dscore2, dscore3);
console.log(dScoreAverage);

let kscore1 = 65;
let kscore2 = 54;
let kscore3 = 49;

let kScoreAverage = calcAverage(kscore1, kscore2, kscore3);
console.log(kScoreAverage);

let result = checkWinner(dScoreAverage, kScoreAverage);
console.log(result);

function checkWinner(dScoreAverage, kScoreAverage){
    if(dScoreAverage >= kScoreAverage*2){
        return `Dolphin wins (${dScoreAverage} vs. ${kScoreAverage})`;
    }
    else if(kScoreAverage >= dScoreAverage*2){
        return `koalas wins (${kScoreAverage} vs. ${dScoreAverage})`;
    }
    else
        return "no team will win"
}

dscore1 = 85;
dscore2 = 54;
dscore3 = 41;

dScoreAverage = calcAverage(dscore1, dscore2, dscore3);
console.log(dScoreAverage);

kscore1 = 23;
kscore2 = 34;
kscore3 = 27;

kScoreAverage = calcAverage(kscore1, kscore2, kscore3);
console.log(kScoreAverage);

result = checkWinner(dScoreAverage, kScoreAverage);
console.log(result);


let friends = ["Mihcel", "Peter", "Steven"];
console.log(friends);

let years = new Array(1991, 1992, 1993, 1994, 1995);
console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

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

const agey1 = calcAge1(year[0]);
const agey2 = calcAge1(year[1]);
const agey3 = calcAge1(year[year.length-1]);
console.log(agey1, agey2, agey3);

const ages = [calcAge1(year[0]), calcAge1(year[1]), calcAge1(year[year.length-1])];
console.log(ages);


const friends1 = ["Michel", "Jay", "Bob", "John"];
let newLength = friends1.push("Steven");
console.log(newLength);
console.log(friends1);

let popped = friends1.pop();
console.log(popped);
console.log(friends1);

newLength = friends1.unshift("Dustin");
console.log(newLength);
console.log(friends1);

popped = friends1.shift();
console.log(popped);
console.log(friends1);

console.log(friends1.indexOf("Steven"));
console.log(friends1.indexOf("Michel"));

console.log(friends1.includes("Michel"));
console.log(friends1.includes("Peter"));
friends1.push("Dustin");
if(friends1.includes("Dustin"))
           console.log(friends1.indexOf("Dustin"));
console.log(friends1);
