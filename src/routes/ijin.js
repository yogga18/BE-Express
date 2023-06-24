const express = require('express');

const ijinController = require('../controller/ijin.js');

const router = express.Router();

router.get('/', ijinController.getAllSuratIjin);
router.get('/dropdown-ijin', ijinController.ijinDropDown);
router.get('/:id', ijinController.getIjinById);

module.exports = router;
