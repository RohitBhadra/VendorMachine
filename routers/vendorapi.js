const router = require('express').Router();

// Vendor controller

const vendorController = require('../controllers/vendorController');

// Vendor list apis

router.post('/createVendor', vendorController.createVendor);