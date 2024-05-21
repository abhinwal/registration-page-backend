const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    registrationType: {
        type: String,
        required: false,
        enum: ['Full Registration', 'One Day Registration']
    },
    registrationCategory: {
        type: String,
        required: false
    },
    membershipNo: String,
    nameOfOrganisation: {
        type: String,
        required: true
    },
    addressLine1: String,
    addressLine2: String,
    addressLine3: String,
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    stdCode: String,
    phone: {
        type: String,
        required: false
    },
    gstNo: String,
    panNo: String,
    legalNameOfBusiness: {
        type: String,
        required: true
    },
    emailIdForCommunication: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function(email) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    hotelAccommodation: {
        type: String,
        required: false,
        enum: ['Required', 'Not Required']
    },
    pickUpAndDrop: {
        type: String,
        required: false,
        enum: ['Required', 'Not Required']
    },
    title: 
    { type: String, required: true },
    name: 
    { type: String, required: true },
    designation: 
    { type: String, required: true },
    mobile: 
    { type: String, required: true },
    age: 
    { type: Number, required: true },
    gender: 
    { type: String, required: false }, 
    relation: 
    { type: String, required: true }
});

module.exports = mongoose.model('student', studentSchema);
