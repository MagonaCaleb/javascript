/*
let person = {
   
    
    products : ["cakes","bread","milk","water", {patient:"we are kawa",boy:40},{girl:"bigeyes",mother:"caring"}],

    example: function() {
      return this.products[5].mother;
    }
  };
  
  
  console.log(person.example())



const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
let text = "";
for (let x in person) {
  text += person[x] + " ";
};

console.log(text)
//getting the array location
myArr[2][1];





let total = 0;
const items = [ { name: 'T-shirt', price: 20 }, { name: 'Jeans', price: 50 }, { name: 'Shoes', price: 80 } ];
items.forEach(sum);

function sum(value, index, array) {
    
  total += value.price;

}

console.log(total)

*/
let decreament = 1000 ;

const drugs = [
      {drugname:"paracetamol",dosage:"2*3",manufacturer:"Abacus",price:5000,quantity:20},
      {drugname:"aspirin",dosage:"1*1",manufacturer:"rene industry",price:8000,quantity:25},
      {drugname:"goffen",dosage:"2*2",manufacturer:"beta health care",price:90000,quantity:50},
      {drugname:"ibendazol",dosage:"3*3",manufacturer:"Kampala pharmaceutical industries",price:1000,quantity:60},
      {drugname:"penicilin",dosage:"4*5",manufacturer:"medipharm industries",price:2000,quantity:100},
      {drugname:"atenolo",dosage:"2*4",manufacturer:"Astra Pharma UTD",price:4500,quantity:80},
    ]
   
    /*

    drugs.forEach(deadline);
    
    function deadline(value, index, array) {
        
     let dosage = "4*6"
     console.log(typeof parseInt(dosage[0]))
      let x = parseInt(dosage[0]);
      let y = parseInt(dosage[2]);
      let sum = x*y;
      let days = (value.quantity)/sum
      console.log(array[index])

    }
    */
    

  drugs.forEach(myFunction);
  function myFunction(value, index, array){
       let x=parseInt(value.dosage[0]);
       let y=parseInt(value.dosage[2]); 
       let numberOfMedicinesTakenPerDay=x*y;
       let days=(value.quantity)/numberOfMedicinesTakenPerDay;
      array[index]["number of days the medicine will take"]=numberOfMedicinesTakenPerDay;    
      array[index]["number of days the medicine will take"]=x;
      console.log(array[index]); 
      //console.log(x); 

  }







 