const db = require("../config/db");

exports.getRestaurants = (req, res) => {
  db.query("SELECT * FROM restaurants", (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Lỗi DB" });
    }
    res.json(rows);
  });
};

exports.getCategories = (req, res) => {
  db.query("SELECT * FROM categories", (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Lỗi DB" });
    }
    res.json(rows);
  });
};
