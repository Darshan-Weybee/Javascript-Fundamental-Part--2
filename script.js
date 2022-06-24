"use strict";

let hasDrivingLicence  = false;
const passTest = true;

if(passTest) hasDrivingLicence = true;
if(hasDrivingLicence) console.log("I can drive");

function logger(){
    console.log("My name is jonas");
}
//calling invoking running
logger();
logger();

function fruitProcessor(apples, orange){
        console.log(apples, orange);
        let juice = `Juice with ${apples} apples and ${orange} oranges`;
        return juice;
}
let juice = fruitProcessor(5, 0);
console.log(juice);
console.log(fruitProcessor(5, 0));

let appleOrangejuice = fruitProcessor(2, 4);
console.log(appleOrangejuice);

let num = Number("23");

function calcAgel(birthYear){
    const age = 2037 - birthYear
    return age;
}
const age = calcAgel(1991);
console.log(age);

const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntillRetirement = (birthYear, firstName) =>{
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntillRetirement(1991, "jonas"));

function cutFruitPieces(fruit){
    return fruit * 4;
}
function fruitProcessor(apples, orange){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(orange);

    let juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges`;
    return juice;
}
console.log(fruitProcessor(2, 4));

function calcAge(birthYear){
    return 2037 - birthYear;
}
const yearsOfRetirement = function(birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    
    if(retirement > 0)
            return `${firstName} retires in ${retirement} years`;
    else
            return `${firstName} has already retired`;
}
console.log(yearsOfRetirement(1991, "Jonas"));


let personal = {
    firstName: "jonas",
    lastName : "Doe",
    age : 2037-1991,
    job : "Teacher",
    friends : ["Peter", "John", "Steven"]
};
console.log(personal);
console.log(personal.lastName);
console.log(personal["firstName"]);
const nameKey = "Name";
console.log(personal["first"+nameKey]);
console.log(personal["last"+nameKey]);

// const interstedIn = prompt("what do you want to know about Jonas? choose between firstname, lastname, age, job, and friends");
// console.log(personal[interstedIn]);
// if(personal[interstedIn])
//      console.log(personal[interstedIn]);
// else
//      console.log("Wrong request choose between firstname, lastname, age, job, and friends");

personal.location = "Portugal";
personal.twitter = "@jonasdoe";
console.log(personal);

console.log(`${personal.firstName} has ${personal.friends.length} friends, and his best friend is called ${personal.friends[0]}`);


personal = {
    firstName: "jonas",
    lastName : "Doe",
    birthYear : 1991,
    job : "Teacher",
    friends : ["Peter", "John", "Steven"],
    calcAge : function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary : function(){
        return `${this.firstName} ${this.lastName} is a ${this.age} old ${this.job} and his friends are ${this.friends}`;
    }
};
// console.log(personal.calcAge(1991));
// console.log(personal["calcAge"](1991));
console.log(personal.calcAge());
console.log(personal.age);
console.log(personal);
console.log(personal.getSummary());


for(let rep = 1; rep <= 10; rep++){
    console.log("Lifting weights repetition" + rep);
}

let ocean = ["Darshan", 20, 2002];
let types = [];

for(let rep = 0; rep <ocean.length; rep++){
    console.log(ocean[rep]);
    types[rep] = typeof ocean[rep];
}
console.log(types);

const years1 = [1991, 2007, 1993, 2020, 1999];
const ages1 = [];
for(let i=0; i<years1.length; i++){
    ages1.push(2037-years1[i]);
}
console.log(ages1);

for(let i=0; i<ocean.length; i++){
    if(typeof ocean[i] != "string")
          continue;
    console.log(ocean[i], typeof ocean[i]);
}

for(let i=0; i<ocean.length; i++){
    if(typeof ocean[i] == "number")
          break;
    console.log(ocean[i], typeof ocean[i]);
}


for(let i=ocean.length-1; i>=0; i--){
    console.log(ocean[i]);
}

for(let i=1; i<=3; i++){
    console.log(`=====Exercise ${i}`);
    for(let j=1; j<=5; j++){
        console.log(`Exercise ${i}: Lifting weights repetition ${j}`);
    }
}

let rep = 1;
while(rep<=10){
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}
let dice = Math.trunc(Math.random()*6)+1;
while(dice!=6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6)+1;
    if(dice == 6)
          console.log("Loop is about to end........");
}