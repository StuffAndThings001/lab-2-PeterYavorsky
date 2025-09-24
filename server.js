// server.js

// STEP 1: imports
const express = require("express");
const utils = require("./utils");

// STEP 2: create server
const app = express();
app.use(express.json());

// Helper: always return an array
async function getAllProducts() {
  const data = await utils.readProductsFile();
  return Array.isArray(data) ? data : [];
}

// STEP 3: GET "/"
app.get("/", (req, res) => {
  res.send("Hello I am Peter Yavorsky");
});

// STEP 4: GET "/products"
app.get("/products", async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (e) {
    res.status(500).json({ error: "Failed to read products." });
  }
});

// STEP 5: GET "/products/:id"
app.get("/products/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const products = await getAllProducts();
    const product = products.find(p => p.id === id);

    if (product) return res.json(product);
    res.json({ message: `Product with id ${id} does not exist` });
  } catch (e) {
    res.status(500).json({ error: "Failed to read products." });
  }
});

// STEP 6: POST "/products" 
app.post("/products", async (req, res) => {
  try {
    const products = await getAllProducts();

    const newProduct = {
      id: products.length + 1, 
      product_name: "New Product Name",
      category: "Clothing",
      price: 44.99,
      description: "This is new Product description",
    };

    products.push(newProduct);
    await utils.writeIntoProductsFile(products);
    res.json(newProduct);
  } catch (e) {
    res.status(500).json({ error: "Failed to add product." });
  }
});

// STEP 7: PUT "/products/:id" 
app.put("/products/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const products = await getAllProducts();
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
      return res.json({ message: `Product with id ${id} does not exist` });
    }

    const updated = {
      id,
      product_name: "Updated Product Name",
      category: "Food",
      price: 50.99,
      description: "This is updated Product description",
    };

    products[index] = updated;
    await utils.writeIntoProductsFile(products);
    res.json(updated);
  } catch (e) {
    res.status(500).json({ error: "Failed to update product." });
  }
});

// STEP 8: DELETE "/products/:id"
app.delete("/products/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const products = await getAllProducts();
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
      return res.json({ message: `Product with id ${id} does not exist` });
    }

    const [deleted] = products.splice(index, 1);
    await utils.writeIntoProductsFile(products);
    res.json(deleted);
  } catch (e) {
    res.status(500).json({ error: "Failed to delete product." });
  }
});

// STEP 9: start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
