const studentModel = require('./studentModel');
const key = '123456789trytryrtyr';
const encryptor = require('simple-encryptor')(key);

module.exports.createStudentDBService = (studentDetails) => {
    return new Promise((resolve, reject) => {
        // No longer including firstname, lastname, and password fields
        const studentModelData = new studentModel({
            registrationType: studentDetails.registrationType,
            registrationCategory: studentDetails.registrationCategory,
            membershipNo: studentDetails.membershipNo,
            nameOfOrganisation: studentDetails.nameOfOrganisation,
            addressLine1: studentDetails.addressLine1,
            addressLine2: studentDetails.addressLine2,
            addressLine3: studentDetails.addressLine3,
            city: studentDetails.city,
            pincode: studentDetails.pincode,
            state: studentDetails.state,
            stdCode: studentDetails.stdCode,
            phone: studentDetails.phone,
            gstNo: studentDetails.gstNo,
            panNo: studentDetails.panNo,
            legalNameOfBusiness: studentDetails.legalNameOfBusiness,
            emailIdForCommunication: studentDetails.emailIdForCommunication,
            hotelAccommodation: studentDetails.hotelAccommodation,
            pickUpAndDrop: studentDetails.pickUpAndDrop,
            title: studentDetails.title,
            name: studentDetails.name,
            designation: studentDetails.designation,
            mobile: studentDetails.mobile,
            age: studentDetails.age,
            gender: studentDetails.gender,
            relation: studentDetails.relation
        });

        studentModelData.save()
            .then(() => resolve({ status: true, message: "Registration done successfully" }))
            .catch(err => reject({ status: false, message: "Error creating user", error: err }));
    });
};

module.exports.loginuserDBService = (studentDetails) => {
    return new Promise((resolve, reject) => {
        // Simplify the authentication process without password
        studentModel.findOne({ emailIdForCommunication: studentDetails.emailIdForCommunication })
            .then(result => {
                if (result) {
                    resolve({ status: true, message: "Student Validated Successfully" });
                } else {
                    reject({ status: false, message: "Authentication failed" });
                }
            })
            .catch(error => reject({ status: false, message: "Error retrieving user", error }));
    });
};
