const db = require("../config/db");

exports.getFoods = (req, res) => {
  db.query("SELECT * FROM foods", (e, r) => res.json(r));
};

exports.createFood = (req, res) => {
  const { name, price, image } = req.body;

  db.query(
    "INSERT INTO foods (name,price,image) VALUES (?,?,?)",
    [name, price, image],
    () => res.json({ message: "Thêm món thành công" })
  );
};

exports.updateFood = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  db.query(
    "UPDATE foods SET name=?,price=? WHERE id=?",
    [name, price, id],
    () => res.json({ message: "Cập nhật thành công" })
  );
};

exports.deleteFood = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM foods WHERE id=?", [id], () =>
    res.json({ message: "Xóa thành công" })
  );
};