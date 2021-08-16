require("dotenv").config();

const app = require("./app");
const path = require("path");

const exphbs = require("express-handlebars");

// Sequelize
const sequelize = require("./config/connection");

// Load Handlebars

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//START SERVER
const port = process.env.PORT || 4000;

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`App running on port ${port}...`));
});
