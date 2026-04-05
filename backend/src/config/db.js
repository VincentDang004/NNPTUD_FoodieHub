const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "foodapp"
});

db.connect(err => {
  if (err) {
    console.log("Lỗi DB:", err);
  } else {
    console.log("MySQL connected");
  }
});

module.exports = db;