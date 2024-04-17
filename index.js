const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World after nodemon");
});


app.get("/api/products", async (req, res) => {
  
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }


});

app.get("/api/product/:id", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



app.put("/api/product/:id", async (req, res) => {
    try {
        const {id} = req.params;
      const product = await Product.findByIdAndUpdate(id,req.body);
      if(!product) {
        res.status(404).json({ message: "Product not found" });
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

app.delete("/api/product/:id", async (req, res) => {
    try {
        const {id} = req.params;
      const product = await Product.findByIdAndDelete(id);
      if(!product) {
        res.status(404).json({ message: "Product not found" }); 
      }
     
      res.status(200).json( {message:"product deleted successfully"});
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});
mongoose.connect(
    "mongodb+srv://modohoda2468:XIgq74HIrOpMaJ5Q@backenddb.4l7os1a.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Database Connected!");

    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  })
  .catch(() => console.log("connection to database failed"));
