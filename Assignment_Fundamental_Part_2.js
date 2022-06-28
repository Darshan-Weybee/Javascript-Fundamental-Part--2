console.log("\n");

console.log("==============Assignment_Fundamental_Part_2================");

console.log("\n");
console.log("==============LECTURE: Functions================");

function describeCountry(country, population, capitalCity){
    return (country +  "  has  " + population + "  million people and its capital city is  " + capitalCity);
}
let country1 = describeCountry("Finland" , 6 , "Helsinki");
let country2 = describeCountry("India" , 130 , "Delhi");
let country3 = describeCountry("America" , 10 , "New York");
console.log(country1);
console.log(country2);
console.log(country3);


console.log("==============LECTURE: Function Declarations vs. Expressions================");

function percentageOfWorld1(population){
    return (population/7900)*100+"%";
}
let population1 = percentageOfWorld1(1441);
let population2 = percentageOfWorld1(1450);
let population3 = percentageOfWorld1(1500);
console.log(population1);
console.log(population2);
console.log(population3);

const percentageOfWorld2 = function(population){
    return (population/7900)*100+"%";    
}
console.log("\n");
population1 = percentageOfWorld2(1441);
population2 = percentageOfWorld2(1450);
population3 = percentageOfWorld2(1500);
console.log(population1);
console.log(population2);
console.log(population3);


console.log("==============LECTURE: Arrow Functions================");

let percentageOfWorld3 = population => (population/7900)*100+"%";
population1 = percentageOfWorld3(1441);
population2 = percentageOfWorld3(1450);
population3 = percentageOfWorld3(1500);
console.log(population1);
console.log(population2);
console.log(population3);


console.log("==============LECTURE: Functions Calling Other Functions================");

function describePopulation(country, population){
    let population4 = percentageOfWorld1(population);
    return (country + " has " + population +" million people, which is about "+ population4 +" of the world.");
}
population1 = describePopulation("Los Angeles", 1506);
population2 = describePopulation("Los Vegas", 1600);
population3 = describePopulation("California", 1700);
console.log(population1);
console.log(population2);
console.log(population3);


console.log("==============LECTURE: Introduction to Arrays================");

let populations = [1800, 1900, 2000, 2100];
let length = populations.length == 4 ? true : false;
console.log(length);

let percentages = [];
percentages.push(percentageOfWorld1(populations[0]));
percentages.push(percentageOfWorld1(populations[1]));
percentages.push(percentageOfWorld1(populations[2]));
percentages.push(percentageOfWorld1(populations[3]));
console.log(percentages);


console.log("==============Basic Array Operations (Methods)================");

let neighbours = ["India" , "China", "Pakistan", "Srilanka"];
neighbours.push("Utopia");
neighbours.pop("Utopia");
console.log(neighbours);
if(neighbours.includes("Germany"))
    console.log(neighbours);
else
    console.log("Probably not a central European country :D");

let index1 = neighbours.indexOf("China");
neighbours[index1] = "Republic of China";

index1 = neighbours.indexOf("Srilanka");
neighbours[index1] = "Republic of Srilanka";
console.log(neighbours);


console.log("==============LECTURE: Introduction to Objects================");

let myCountry = {
    country: "India", 
    capital: "Delhi",
    language: "Hindi",
    population: 135, 
    neighbours: ["India" , "China", "Pakistan", "Srilanka"]
};
console.log(myCountry);


console.log("==============LECTURE: Dot vs. Bracket Notation================");

console.log(myCountry.country + " has "+ myCountry.population+" million " + myCountry.language +"  speaking people, "+ myCountry.neighbours.length +" neighbouring countries and a capital called "+ myCountry.capital+".");
myCountry.population+=2;
console.log(myCountry.population);
myCountry["population"]-=2;
console.log(myCountry.population);


console.log("==============LECTURE: Object Methods================");

myCountry.describe = function(){
    return (this.country + " has "+ this.population+" million " + this.language +"  speaking people, "+ this.neighbours.length +" neighbouring countries and a capital called "+ this.capital+".");
};
console.log(myCountry.describe());

myCountry.checkIsland = function(){
    let isIsland = this.neighbours.length == 0 ? true : false;
    return isIsland;
};
console.log(myCountry.isIsland);
console.log(myCountry.checkIsland());


console.log("==============LECTURE: Iteration: The for Loop================");

for(let i=1; i<=50; i++){
    console.log(`Voter number ${i} is currently voting`);
}


console.log("==============LECTURE: Looping Arrays, Breaking and Continuing================");

let percentages3 = [];
for(let i=0; i<populations.length; i++){
    percentages3[i] = percentageOfWorld1(populations[i]);
}
console.log(percentages3);


console.log("==============LECTURE: Looping Backwards and Loops in Loops================");

let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for(let i=0; i<listOfNeighbours.length; i++){
    let array = listOfNeighbours[i];
    for(j=0; j<array.length; j++){
        console.log(`Neighbour: ${array[j]}`);
    }
}


console.log("==============LECTURE: The while Loop================");

let percentages4 = [];
let i = 0;
while(i < populations.length){
    percentages4[i] = percentageOfWorld1(populations[i]);
    i++;
}
console.log(percentages4);

