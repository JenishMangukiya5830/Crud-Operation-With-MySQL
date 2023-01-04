const express = require('express');

const router = express.Router();

const controller = require('../Controllers/admincontroller');

router.get('/get',controller.get);
router.post('/insertData',controller.insert);

router.get('/view',controller.view);

router.get('/DeleteData/:id',controller.delete);

router.get('/UpdateData/:id',controller.edit);

router.post('/editData',controller.update)

module.exports = router;