var express = require("express");
var router = express.Router();

/* GET home page. */
const venuesController = require("../controllers/venuesController");

// add venue data
router.post("/", venuesController.addVenue);
router.get("/", venuesController.showVenue);
router.get("/:id", venuesController.showVenueById);
router.put("/:id", venuesController.updateVenue);
router.delete("/:id", venuesController.deleteVenue);

module.exports = router;
