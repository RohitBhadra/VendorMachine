const shortid = require('shortid');
const config = require('../config/config');
const VendorMachine = require('../model/Vendor');

exports.createVendor = async (req, res) => {
    const vendorData = req.body;
    try {
        let vendor = new VendorMachine({
            vendorId: shortid.generate(),
            ...vendorData
        });
        await vendor.save();
        res.status(200).send({ msg: "Vendot Added!!!" });
    } catch (e) {
        console.log(e);
        res.status(500).send({ msg: "DB Operation Failed" });
    }
};