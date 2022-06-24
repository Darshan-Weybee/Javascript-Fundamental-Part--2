console.log("=============Conding_Challange_2==========");

let bill1 = 100;
let tip1 = calcTip(bill1);
let bills = [125, 555, 44];
let tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
let total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(bill1, tip1);
console.log(tips);
console.log(total);

function calcTip(bill){
    if(bill>=50 && bill<=300)
         return 0.15*bill;
    else
         return 0.20*bill;
}