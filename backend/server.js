import express from "express";
import data from "./data.js";
const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product); // Return the found product instead of data.products
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`server is connected on the port ${port}`);
});
