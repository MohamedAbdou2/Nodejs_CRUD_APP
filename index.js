const express = require("express");
const mongoose = require("mongoose");

const productRoute = require("./routes/product.route.js");  

const app = express();
const port = 3000;

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products",productRoute);



mongoose.connect(
    "mongodb+srv://modohoda2468:XIgq74HIrOpMaJ5Q@backenddb.4l7os1a.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Database Connected!");

    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  })
  .catch((error) => console.log("connection to database failed", error));

