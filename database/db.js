const mongoose = require("mongoose");
const db = mongoose.connection;
mongoose.connect("mongodb://localhost/portfolio", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

module.exports = db;
