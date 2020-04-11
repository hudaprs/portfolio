const express = require("express");
const app = express();
const path = require("path");
const db = require("./database/db");
const bodyParser = require("body-parser");

/**
 * Body Parser Middleware
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Check Connection To Mongoose
 */
db.on("error", (err) => console.log(err));
db.once("open", () => console.log(`Connection to MongodDB`));

/**
 * Static Folder
 */
app.use(express.static(path.join(__dirname, "public")));

/**
 * EJS Template Engine
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/**
 * Routes
 */
const auth = require("./routes/auth");
const server = require("./routes/server");
const client = require("./routes/client");
app.use(auth);
app.use("/server/", server);
app.use(client);

/**
 * Handle 404 Page
 */
app.use((req, res) => {
  res.status(404).json({
    message: "Page not found",
  });
});

/**
 * Run The Server
 */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
