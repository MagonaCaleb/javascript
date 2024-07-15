function fetchPatientData(patientId, callback) {
            const patient = {
            id: patientId,
            name: 'Magona Caleb',
            birthdate: '08/31/2002',
        };
        callback(patient);  
}

function processPatientData(patient) {
    const age = calculateAge(patient.birthdate);
    console.log(`Patient id ${patient.id} ${patient.name} is ${age} years old.`);
}

function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function main() {
    fetchPatientData(123, processPatientData);
}

main();