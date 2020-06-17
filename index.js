const express = require("express");
const PORT = process.env.PORT || 4000;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

require('dotenv').config();

const mongoose = require("mongoose");
const config = require("./config/db");

const app = express();

//configure database and mongoose
mongoose.set("useCreateIndex", true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

mongoose
  .connect(config.database, { useNewUrlParser: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log({ database_error: err });
  });
// db configuaration ends here
//registering cors



// app.use(cors());
var corsOptions = {
  origin: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}



// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(cors(corsOptions));

//configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//configure body-parser ends here

app.use(morgan("dev")); // configire morgan

// define first route
app.get("/", (req, res) => {

  res.send(JSON.stringify({ Hello: 'medddaeeen solider'}));
  // res.send(JSON.stringify(cors()));
  console.log("Hello MEVN Soldier your update");
  console.log(cors());
});

const userRoutes = require("./api/user/route/user"); //bring in our user routes
app.use("/user", userRoutes);


const productRoutes = require("./api/product/route/product"); //bring in our product routes
app.use("/product", productRoutes);




app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});


console.log(process.env)