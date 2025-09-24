# Lab 2

> Weightage: 2.5<br>
> Deadline: 11:59 PM tonight (Sept 18)<br>

### Overview:

In this lab, you will create a simple RESTful API to manage products. You will work on creating different types of routes.

### Lab Instructions:

> Files provided to you:
>
> - utils.js: contains functions to read and write data from "products.json"
>   <br>`→ readProductsFile() → reads the JSON file and returns array of products` > <br>`→ writeIntoProductsFile(updatedProductsArray) → writes array back to JSON file`
> - products.json: this is your data file where all products are stored
> - server.js: this is the file where you will work and implement all routes

> **IMPORTANT:**
>
> - <small>Do NOT write your own functions to read/write from "products.json" instead use the functions from utils.js module.</small>
> - <small>Do NOT download the ZIP file from the repository to start working<br>You must clone the GitHub repository using the following command:</small><br>`git clone <repository-url>`

#### STEP 1: Import required modules

- Import the `"express"` module
- Import the `"utils.js"` module

#### STEP 2: Create an Express server

- Use `express()` to initialize your server

#### STEP 3: Define a simple GET route (5%)

- Route: METHOD - `GET`, PATH - `"/"`
- Send back a simple message like "Hello I am <your_name>" using `res.send()`
- Sample Output:
  ![EXPECTED OUPTUT](outputs/1.png)

#### STEP 4: Fetch all products (10%)

- Route: METHOD - `GET`, PATH - `"/products"`
- Use `utils.readProductsFile()` to read all the products data
- If no products exist, return an empty array
- Otherwise return all products
- Sample Output:
  ![EXPECTED OUPTUT](outputs/2.png)

#### STEP 5: Fetch a single product by ID (20%)

- Route: METHOD - `GET`, PATH `"/products/:id"`
- Extract product ID from `req.params`
- Use `utils.readProductsFile()` to read all the products data
- Search in the products data for a product with the given ID
- If found, return it using `res.send()`
- If not found, return a message saying product does not exist using `res.send()`
- Sample Output:
  ![EXPECTED OUPTUT](outputs/3.png)

#### STEP 6: Add a new product (30%)

- Route: METHOD - `POST, PATH - `"/products"`
- Create a new product object (for now, hardcode some values)
- Use `utils.readProductsFile()` to read all the products data
- Assign a new "id" (length of all products + 1) to the new product object
- Push the new product object into the products array
- Write the updated array back into products.json using `utils.writeIntoProductsFile()`
- Return the newly added product using `res.send()`
- Sample Output:
  ![EXPECTED OUPTUT](outputs/4.png)

#### STEP 7: Update an existing product by ID (30%)

- Route: METHOD - `PUT`, PATH - `"/products/:id"`
- Extract product ID from `req.params`
- Create a new product object (hardcode values for now)
- Use `utils.readProductsFile()` to read all the products data
- Replace the old product with the updated one in the array
- If product not found, return a message using `res.send()`
- Else:
- Save the updated array back to products.json using `utils.writeIntoProductsFile()`
- Return the updated product using `res.send()`
- Sample Output:
  ![EXPECTED OUPTUT](outputs/5.png)

#### STEP 8: Delete a product by ID (20%)

- Route: METHOD - `DELETE`, PATH - `"/products/:id"`
- Extract product ID from `req.params`
- Use `utils.readProductsFile()` to read all the products data
- Remove the product from the array
- If not found, return a message using `res.send()`
- Else:
- Save the updated array into products.json using `utils.writeIntoProductsFile()`
- Return the deleted product using `res.send()`
- Sample Output:
  ![EXPECTED OUPTUT](outputs/6.png)

#### STEP 9: Start the server

- Use server.listen() to run the app on port 3000
- Log a message to confirm the server is running
