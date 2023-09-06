const FavouriteCity = require('../../models/favouriteCity');

module.exports = {
    create,
    index,
}
 
async function create(req, res) {
    try {
      // Add the FavouriteCity to the db
      console.log("Favourite City Create function");
      console.log(req.body);

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

  async function index(req, res) {
    try {
      const favouriteCities = await FavouriteCity.find({ user: req.user._id });
      res.json(favouriteCities);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  
  
  
  
  
  
