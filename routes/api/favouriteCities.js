const express = require("express");
const router = express.Router();
const favouriteCitiesCtrl = require("../../controllers/api/favouriteCities");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// POST /api/favouriteCities
router.post("/", ensureLoggedIn, favouriteCitiesCtrl.create);

// GET /api/favouriteCities
router.get("/", ensureLoggedIn, favouriteCitiesCtrl.getAllFavoriteCities);

// DELETE /api/favouriteCities/:id
router.delete('/:id', favouriteCitiesCtrl.delete);
module.exports = router;
