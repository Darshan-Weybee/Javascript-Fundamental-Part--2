console.log("\n");

console.log("==============Coding_Challange_4================");

console.log("\n");


let bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips1 = [];
let total1 = [];

for(let i=0; i<bills1.length; i++){
    tips1.push(calcTip1(bills1[i]));
    total1.push(tips1[i]+bills1[i]);
}

console.log(tips1);
console.log(total1);

function calcTip1(bill){
    if(bill>=50 && bill<=300)
         return 0.15*bill;
    else
         return 0.20*bill;
}

let average = calcAverage1(total1);
console.log(average);
function calcAverage1(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    let average = sum/arr.length;
    return average;
}