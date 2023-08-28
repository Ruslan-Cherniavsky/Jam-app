const express = require("express");
const app = express();

const morgan = require("morgan");
const cors = require("cors");
const verifyToken = require("./API/middlewares/checkAuth");

app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@ruslan-test.odepovq.mongodb.net/Jam-app?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conected to data base Woohoo!");
  })
  .catch(() => {
    console.log("Conection failed! T___T");
  });

const checkUserAutchData = require("../.SERVER/API/middlewares/checkUserAuthData");

// app.use('/', (req, res, next) => {
//     return res.status(200).json({ message: 'Server works!' })
// })

const usersRoutes = require("./API/routes/users");
const musicalGanersRoutes = require("./API/routes/musicalGeners");
const musicalInstrumentsRoutes = require("./API/routes/musicalInstruments");

//app.use('/uploads', express.static('uploads'))

app.use("/users", usersRoutes);

app.use("/musicalgeners", musicalGanersRoutes);

app.use("/musicalInstruments", musicalInstrumentsRoutes);

app.use(verifyToken);

app.get("/usercheck", checkUserAutchData);

// app.use('/articles', articlesRoutes)

app.use((req, res, next) => {
  const error = new Error("Not Found!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
