const express = require('express');
const router = express.Router();
const favCitiesCtrl = require('../../controllers/api/favouriteCities');

// POST /api/favouriteCities
router.post('/', favCitiesCtrl.create);

// GET /api/favouriteCities
router.get('/', favCitiesCtrl.getAllFavoriteCities);

// DELETE /api/favouriteCities/:id (Delete)
router.delete('/:id', favCitiesCtrl.delete);

module.exports = router;