const express = require("express");
const PORT = process.env.PORT || 4000;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const btoa = require('btoa');
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

app.use(cors({
  origin: 'http://nadimama.com/'
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev")); // configire morgan

app.get("/", (req, res) => {

  res.send(JSON.stringify({ Hello: 'medddaeeen solider'}));


});

const userRoutes = require("./api/user/route/user"); //bring in our user routes
app.use("/user", userRoutes);

const productRoutes = require("./api/product/route/product"); //bring in our product routes
app.use("/product", productRoutes);

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
// let getProducts = async function () {
// console.log(12345)
//   const response = await fetch(
//     'https://app.snipcart.com/api/products', {
//     method: 'GET',
//     headers: {
//       'Authorization': 'Bearer S_OTY0NzY5YjEtYjAxNy00YWNiLTkzMDAtNWMxYjQ3YjQ5YmY0NjM3MjgxMTUxMjMyMDY3ODE2',
//       // 'Authorization': 'ZWMzNjdjM2MtOTQyNi00MjU2LTgwZjMtMzlhNmFiZDMwNDBlNjM3MjYyOTQ3OTQ3OTcxNTA1',
//       // 'Authorization': 'Bearer ST_ZTBmZWRlMjAtMjBlOC00OGU5LWJlMTItZmIwMTNiZDc2Mzc0NjM3MjczNDc1MDcxNTcyODk5',
//       'Accept': 'application/json'
//     }
//   });
// console.log(response)
//   if (response.ok) {
//     const body = await response.json();
// console.log(body)
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ ok: true, returnUrl: body.returnUrl })
//     };
//   }
// }


