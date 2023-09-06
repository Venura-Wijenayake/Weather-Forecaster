const express = require('express');
const router = express.Router();
const favCitiesCtrl = require('../../controllers/api/favouriteCities');

// POST /api/favouriteCities
router.post('/', favCitiesCtrl.create);

module.exports = router;