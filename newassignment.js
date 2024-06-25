

let travellersAges = [23,3,1,45,78,90,34,32,56,75,23];

let totalCharge=0;
let countOfAgeUnder5=0;
let countOfAgeBetween5And12=0;
let countOfAgeBetween13And64=0;
let countOfAge65AndAbove=0;

for(let ind=0;ind<travellersAges.length;ind++){
   
   if(travellersAges[ind] > 0 && travellersAges[ind] <6){
    totalCharge += 0;
    
   }
   else if(travellersAges[ind]>=6 && travellersAges[ind]<=12){
   totalCharge += 2.5;

   }
   else if(travellersAges[ind]>=13 && travellersAges[ind]<=64){

    totalCharge += 5;
   }

   else if(travellersAges[ind]>=65){
      totalCharge += 3.5;
   }
}


totalCharge=(countOfAgeUnder5*0)+
(countOfAgeBetween5And12*2.50)+(countOfAgeBetween13And64*5.00)+
(countOfAge65AndAbove*3.50);

console.log(totalCharge);

 
//const Input = [70, 30, 80, 90, 40] 
const Input= [-10, 60, 75, 110, 95]
//const Input = [45, 60, 55, 75, 100]
//0-50 fail 50-100 pass
function gradeChecker(marks){
    let resultsArray = [];

    for(let i = 0; i < marks.length; i++){

        if(marks[i] >= 0 && marks[i] <= 50){
            resultsArray[i] = "fail";
        }
        else if(marks[i] > 50 && marks[i] <= 100){
            resultsArray[i] = "pass";
        }
        else{
            resultsArray[i] = "invalid";
        }



    }
    console.log(resultsArray);

}
console.log("case 2")

 console.log(Input)
 gradeChecker(Input)

 