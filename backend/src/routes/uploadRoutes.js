const express = require("express");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
  destination: "src/uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post("/", upload.single("image"), (req, res) => {
  res.json({ message: "Upload thành công", file: req.file.filename });
});

module.exports = router;