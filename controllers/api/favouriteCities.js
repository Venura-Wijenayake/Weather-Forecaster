const FavouriteCity = require("../../models/favouriteCity");

module.exports = {
  create,
  getAllFavoriteCities,
  delete: deleteCity,
};

async function create(req, res) {
  try {

    const favouriteCity = new FavouriteCity();
    favouriteCity.user = req.user._id;
    favouriteCity.name = req.body[0];
    favouriteCity.temp = req.body[1];
    console.log(favouriteCity);
    await favouriteCity.save();
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getAllFavoriteCities(req, res) {
  try {
    const favoriteCities = await FavouriteCity.find({});
    res.json(favoriteCities);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteCity(req, res) {
  try {
      const deletedCity = await FavouriteCity.findByIdAndRemove(req.params.id);
      if (!deletedCity) {
          return res.status(404).json({ message: 'City not found' });
      }
      res.json({ message: 'City deleted successfully' });
  } catch (err) {
      res.status(500).json(err);
  }
}