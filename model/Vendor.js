const mongoose = require('mongoose');

const VendorSchema = mongoose.Schema({
    vendorId: String,
    date: Date,
    currency: String,
    paidAmount: Number,
    userId: String,
    approved: Boolean,
    orderStatus: String, //placed/ cancelled/ processing 
    paymentStatus: String, //paid/ notPaid/ notPayble
    paymentResponce: Object, //responce send by stripe
});

module.exports = mongoose.model('VendorMachine', VendorSchema);