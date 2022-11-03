import fetch from "node-fetch";
import express from "express";
const Products = require("./products.json");
const app = express();
const port = 7002;
const cors = require("cors");

const cartData = [];

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello from express-server");
});

app.get("/products", (req, res) => {
  res.send(Products);
});

app.get("/get-cart", (req, res) => {
  // const {productId, quantity} = req.body;
  // const data = Products.find(
  //   (product: any) => product.id === Number(productId)
  // );
  // if(!data) {
  //   throw new Error("Product Not Found");
  // }
  // try{
  // const z = fetch("https://dummyjson.com/products");
  // console.log(z)
  // }
  // catch(err) {
  //   console.log("errorrr::::::::::::::::::::")
  //    console.log(err)
  // }
  // cartData.push(...cartData, {
  // })
});

app.post("/add-cart", async (req, res) => {
  console.log("---4-4-4--4-44");
  try {
    const z = await fetch("https://dummyjson.com/products");
    console.log("weihbfjgusgf jbhlfhvufj buvufvj,k dvudjxvuszdjyivbjm uyj");
    console.log(z);
  } catch (err) {
    console.log("errorrr::::::::::::::::::::");
    console.log(err);
  }

  console.log("---5252525255252");
  const { productId, quantity } = req.body;
  const data = Products.find(
    (product: any) => product.id === Number(productId)
  );
  if (!data) {
    throw new Error("Product Not Found");
  }
  try {
    const z = await fetch("https://dummyjson.com/products");
    console.log(z);
  } catch (err) {
    console.log("errorrr::::::::::::::::::::");
    console.log(err);
  }
  res.send({});
  // cartData.push(...cartData, {

  // })
});

app.put("/update-cart", (req, res) => {});

app.get("/product/:id", (req, res) => {
  const data = Products.find(
    (product: any) => product.id === Number(req.params.id)
  );
  res.send(data);
});

app.listen(port, () => {
  console.log(`express-server listening at http://localhost:${port}`);
});
