const fs = require("fs");

async function readProductsFile() {
  try {
    const file = fs.readFileSync("./products.json", "utf-8");
    return JSON.parse(file);
  } catch (error) {
    throw new Error("Couldn't read file products.json");
  }
}

async function writeIntoProductsFile(updatedProductsArray) {
  try {
    const data = JSON.stringify(updatedProductsArray);
    fs.writeFileSync("./products.json", data, "utf-8");
  } catch (error) {
    throw new Error("Couldn't write into file products.json");
  }
}

module.exports = {
  readProductsFile,
  writeIntoProductsFile,
};