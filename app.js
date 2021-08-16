const express = require("express");
const routes = require("./routes/index");
const Sequelize = require("sequelize");
const session = require("express-session");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();

app.use(
  session({
    secret: "sign the cookie",
    store: new SequelizeStore({
      db: sequelize,
    }),
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    proxy: true, // if you do SSL outside of node.
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

// the object each session receives
const sess = {
  secret: "key that will sign cookie",
  cookie: { maxAge: 7200000 },
  // we do not want a nes session each browser visit
  resave: false,
  //   don't save reoccurring visitors unless the session request is modified
  saveUninitialized: false,
  //store session info in database
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// innitialized middleware
app.use(session(sess));
app.use(function (req, res, next) {
  res.locals.session = req.session;
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(routes);

module.exports = app;
