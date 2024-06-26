

let studentGrades = {

}
let addGrade=(studentName, grades)=>{
    try {
        studentGrades[studentName] = grades;
      } catch (error) {
        console.log(error.message)
      }
}
addGrade("Magona Caleb", [80, 70, 50, 45])
addGrade("Elisha Bantana", [82, 72, 51, 95])
addGrade("Masaba Rahman", [20, 30, 60, 55])


let calculateAverageGrade=(studentName)=>{
    try {
        let sum = 0;
        for (let i = 0; i < studentGrades[studentName].length; i++) {
            sum += studentGrades[studentName][i];
        }
        let average = sum / studentGrades[studentName].length;
        console.log(`Average Grade for ${studentName}: ${average}`);
      } catch (error) {
        console.log(error.message)
      }
}

calculateAverageGrade("Masaba Rahman")

let findStudentGrades = (studentName) => { 
    try {
        console.log(`Grades for ${studentName}: ${studentGrades[studentName]}`);
      } catch (error) {
        console.log(error.message)
      }
}

findStudentGrades("Masaba Rahman")

//arrow functions
let listAllStudents = () =>{
    try {
        for (const student in studentGrades) {
            console.log(`${student}: ${studentGrades[student]}`);
          }
      } catch (error) {
        console.log(error.message)
      }
}

listAllStudents()

let findOverallBestStudent=()=>{
    try {
        let bestStudent = "";
        let bestGrade = 0;
        for (const student in studentGrades) {
          let totalGrade = 0;
          for (let i = 0; i < studentGrades[student].length; i++) {
            totalGrade += studentGrades[student][i];
          }
          if (totalGrade > bestGrade) {
            bestGrade = totalGrade;
            bestStudent = student;
          }
        }
        console.log(`Overall Best Student: ${bestStudent}`);
      } catch (error) {
        console.log(error.message)
      }
}


findOverallBestStudent()

//arrow functions

