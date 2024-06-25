
const patients = [
    {
        id: 1,
        person: {
            names: [
                { givenName: "John", middleName: "Doe", familyName: "Smith", preferred: true, uuid: "uuid-of-name-uuid" }
            ],
            gender: "M",
            birthdate: "1980-01-15",
            birthdateEstimated: false,
            dead: false,
            deathDate: null,
            attributes: [
                { attributeType: "uuid-of-attribute-type", value: "Some value" }
            ]
        },
        identifiers: [
            { identifier: "12345", identifierType: "uuid-of-identifier-type", location: "uuid-of-location", preferred: true, voided: false }
        ],
        addresses: [
            {
                address1: "123 Main St",
                address2: "Apt 2B",
                cityVillage: "Springfield",
                stateProvince: "IL",
                country: "USA",
                postalCode: "12345",
                preferred: true,
                voided: false
            }
        ],
        attributes: [
            { attributeType: "uuid-of-attribute-type", value: "Some attribute value" }
        ],
        relationships: [
            { relationshipType: "uuid-of-relationship-type", personB: "uuid-of-personB" }
        ]
    },
    {
        id: 2,
        person: {
            names: [
                { givenName: "Jane", middleName: "Marie", familyName: "Johnson", preferred: true, uuid: "uuid-of-name-uuid" }
            ],
            gender: "F",
            birthdate: "1985-03-20",
            birthdateEstimated: false,
            dead: false,
            deathDate: null,
            attributes: [
                { attributeType: "uuid-of-attribute-type", value: "Some value" }
            ]
        },
        identifiers: [
            { identifier: "67890", identifierType: "uuid-of-identifier-type", location: "uuid-of-location", preferred: true, voided: false }
        ],
        addresses: [
            {
                address1: "456 Oak Ave",
                address2: "Suite 5",
                cityVillage: "New York",
                stateProvince: "NY",
                country: "USA",
                postalCode: "54321",
                preferred: true,
                voided: false
            }
        ],
        attributes: [
            { attributeType: "uuid-of-attribute-type", value: "Some attribute value" }
        ],
        relationships: []
    },
    {
        id: 3,
        person: {
            names: [
                { givenName: "Michael", middleName: "David", familyName: "Brown", preferred: true, uuid: "uuid-of-name-uuid" }
            ],
            gender: "M",
            birthdate: "1975-08-10",
            birthdateEstimated: false,
            dead: true,
            deathDate: "2022-05-15",
            attributes: [
                { attributeType: "uuid-of-attribute-type", value: "Some value" }
            ]
        },
        identifiers: [
            { identifier: "54321", identifierType: "uuid-of-identifier-type", location: "uuid-of-location", preferred: true, voided: false }
        ],
        addresses: [
            {
                address1: "789 Elm St",
                address2: "",
                cityVillage: "Los Angeles",
                stateProvince: "CA",
                country: "USA",
                postalCode: "98765",
                preferred: true,
                voided: false
            }
        ],
        attributes: [
            { attributeType: "uuid-of-attribute-type", value: "Some attribute value" }
        ],
        relationships: [
            { relationshipType: "uuid-of-relationship-type", personB: "uuid-of-personB" }
        ]
    }

];
//adding patient to the array of patients

let newPatient = {
    id: 4,
    person: {
        names: [
            { givenName: "Caleb", middleName: "Magona", familyName: "Magona", preferred: true, uuid: "uuid-of-name-uuid" }
        ],
        gender: "M",
        birthdate: "2002-01-31",
        birthdateEstimated: false,
        dead: false,
        deathDate: null,
        attributes: [
            { attributeType: "uuid-of-attribute-type", value: "Some value" }
        ]
    },
    identifiers: [
        { identifier: "12345", identifierType: "uuid-of-identifier-type", location: "uuid-of-location", preferred: true, voided: false }
    ],
    addresses: [
        {
            address1: "Kampala",
            address2: "nansana",
            cityVillage: "Kampala",
            stateProvince: "Kampala",
            country: "Uganda",
            postalCode: "12345",
            preferred: true,
            voided: false
        }
    ]
}

// let addPatient = patients.push(newPatient)

function addNewPatient(patient) {
    patients.push(patient)
}

addNewPatient(newPatient)

//validate all required fields .name .birthdate and .gender
let regex = /^[a-zA-Z ]{2,15}$/;

function validateName(name) {
    if (regex.test(name)) {
        return true
    } else {
        return false
    }

}
console.log("am validating this name", validateName(patients[3].person.names[0].givenName))


// Add a new patient and validate all required fields (addNewPatient(patient))

//validate gender
function validateGender(patients) {
    if (patients.person.gender == "M" || patients.person.gender == "F") {
        return true
    } else {
        return false
    }
}

console.log(validateGender(patients[3]))

//validate birthdate

let regex1 = /^\d{4}-\d{2}-\d{2}$/;
function validateBirthdate(date) {
    if (regex1.test(date)) {
        return true
    } else {
        return false
    }
}

console.log("validating the birthdate", validateBirthdate("2022-05-15"))







// Check if a patient is deceased (isPatientDeceased(patient)).
function isPatientDeceased(patient) {
    if (patient.person.dead == true) {
        return true
    } else {
        return false
    }
}

console.log(`The patient ${patients[3].person.names[0].givenName} ${patients[3].person.names[0].familyName} is alive`)
console.log(isPatientDeceased(patients[2]))

// Display the patient's birthdate (displayPatientBirthdate(patient)).
function displayPatientBirthdate(patient) {
    return patient.person.birthdate
}

console.log(displayPatientBirthdate(patients[3]))

// Count the number of male and female patients (countMaleAndFemalePatients(patients)).
function countMaleAndFemalePatients(patients) {
    let malePatients = 0
    let femalePatients = 0
    for (let i = 0; i < patients.length; i++) {
        if (patients[i].person.gender == "M") {
            malePatients++
        } else if (patients[i].person.gender == "F") {
            femalePatients++
        }
    }
    return `There are ${malePatients} male patients and ${femalePatients} female patients`
}

console.log(countMaleAndFemalePatients(patients))

// Update patient information (updatePatient(patient)).
function updatePatient(patient) {
    patient.person.names[0].givenName = "Musa"
    patient.person.names[0].familyName = "john"
    patient.person.names[0].middleName = "Bosco"
    patient.person.names[0].preferred = true
}

updatePatient(patients[0])
console.log(patients[0])

// Delete a patient from the records (deletePatient(patientId)).

// function deletePatient(patientId) {
//     patients.splice(patientId, 1)
// }

// deletePatient(0)

//console.log(patients[0])

//regex for numbers between 1 and 12

