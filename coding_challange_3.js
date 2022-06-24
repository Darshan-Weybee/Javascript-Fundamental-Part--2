console.log("=============Coding_Challange_3============");

let markBMI = {
    firstName: "Mark Miller",
    weight: 79,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.weight/this.height**2;
        return this.BMI;
    }
}

let johnBMI = {
    firstName: "John Smith",
    weight: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.weight/this.height**2;
        return this.BMI;
    }
}

if(markBMI.BMI > johnBMI.BMI)
       console.log(`${markBMI.firstName}'s BMI (${markBMI.calcBMI()}) is higher than ${johnBMI.firstName}'s (${johnBMI.calcBMI()})`);
else
     console.log(`${markBMI.firstName}'s BMI (${markBMI.calcBMI()}) is higher than ${johnBMI.firstName}'s (${johnBMI.calcBMI()})`);


