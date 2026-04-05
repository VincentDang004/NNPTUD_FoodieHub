const r = require("express").Router();
const c = require("../controllers/foodController");
const { verify } = require("../middleware/authMiddleware");

r.get("/", c.getFoods);
r.post("/", verify, c.createFood);
r.put("/:id", verify, c.updateFood);
r.delete("/:id", verify, c.deleteFood);

module.exports = r;