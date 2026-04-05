const r = require("express").Router();
const c = require("../controllers/restaurantController");

r.get("/restaurants", c.getRestaurants);
r.get("/categories", c.getCategories);

module.exports = r;
