//celebrating employee milestones

//function for days left
function thisYearsBirthday(dateOfBirth) {
    let today = new Date();
    let thisYearsFullYear = today.getFullYear();
    let birthMonth = new Date(dateOfBirth).getMonth();
    let birthDate = new Date(dateOfBirth).getDate();
   

    let thisYearsBirthday = new Date(thisYearsFullYear, birthMonth, birthDate);

    return thisYearsBirthday;
}

console.log(thisYearsBirthday("1990-08-31"));

//function for days left
function daysLeft(thisYearsBirthday) {
    let today = new Date();

    const oneDay = 24 * 60 * 60 * 1000;
  let daysLeft = Math.ceil((thisYearsBirthday.getTime()-today.getTime())/oneDay);
    return daysLeft;
}

 // console.log("days left to birthday "+daysLeft(thisYearsBirthday("1990-08-31")))



 
// //function for email validation

function validateEmail(email) {
    let regexForEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    
    if(regexForEmail.test(email)){
        return true;
    }else{
        return false;
    }
}

 console.log(validateEmail("hIaJY@example.com"));

function validatePhoneNumber(phoneNumber) {
    let regexForPhone = /(\+\d{1,3}[- ]?)?\d{9}$/;

    if(regexForPhone.test(phoneNumber)){
        return true;
    }else{
        return false;
    }

}

console.log(validatePhoneNumber("+256-752454885"));

let errorCollector=[];

function employeeDetails(input) {
    

    for(let index = 0; index < input.length; index++) {

        if(validateEmail(input[index].Email)==false){
            errorCollector.push(`the email you have sent ${input[index].Email} is invalid`);

        }

        if(validatePhoneNumber(input[index].phoneNumber)==false){
            errorCollector.push(`${input[index].name } the phone number ${input[index].phoneNumber}  you have sent ${input[index].phoneNumber} is invalid`);
    }

}

}

function birthDayMessage(daysLeft) {
   let age = daysLeft/365;
   console.log(`you have ${age} years left to celebrate your birthday`);

}



let person = [

employee1 = {
    name: "Caleb",
    birthdate: "1990-08-31",
    Email : "hIaJY@example.com",
    phoneNumber : "+256-752454885",
}
,
employee2 = {
    name: "Peter",
    birthdate: "2000-05-15",
    Email : "Peter@example.com",
    phoneNumber : "081 871 333",
}

]

employeeDetails(person);
console.log(errorCollector);