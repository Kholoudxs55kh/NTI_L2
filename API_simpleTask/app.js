const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // Parse JSON request bodies

let products = [
{ id: 1, name: 'A', price: 15 },
{ id: 2, name: 'B', price: 25 },
{ id: 3, name: 'C', price: 35 },
{ id: 4, name: 'D', price: 45.5 }
];


app.get('/product', (req, res) => {
res.json(products);
});

app.get('/product/:id/:price?', (req, res) => {
const id_ = parseInt(req.params.id);
const price_ = parseFloat(req.params.price);

if (isNaN(id_)) {
    res.status(500).send("Invalid product ID");
    return;
}

if (req.params.price && isNaN(price_)) {
    res.status(500).send("Invalid price");
    return;
}

let desiredProduct;

if (req.params.price) {
    desiredProduct = products.find((ele) => ele.id === id_ && ele.price === price_);
} else {
    desiredProduct = products.find((ele) => ele.id === id_);
}

if (!desiredProduct) {
    res.status(500).send("Product not found");
    return;
}
else res.json(desiredProduct);
});


// Add a new product
/**
{
    "id": 5,
    "name": "E",
    "price": 50
}
 */

app.post('/product', (req, res) => {
    const newProduct = req.body;
    if (!newProduct.id) {
        newProduct.id = products.length + 1;
    }
    if (!newProduct.name || !newProduct.price) {
        res.status(500).send("You Have To Provides Us with right product details");
        return;
    }
    products.push(newProduct);
    console.log(products);
    res.json(newProduct);
});

// update a product
app.put('/product/:id', (req, res) => {
    const id_ = parseInt(req.params.id);
    if (isNaN(id_)) {
        res.status(500).send("Invalid product ID");
        return;
    }
    const idx = products.findIndex((ele) => ele.id === id_);
    if (idx === -1) {
        res.status(500).send("Product not found");
        return;
    }
    const updatedProduct = req.body;
    if (!updatedProduct.name || !updatedProduct.price) {
        res.status(500).send("You Have To Provides Us with right product details");
        return;
    }
    products[idx] = updatedProduct;
    console.log(products);
    res.json(updatedProduct);
});


// delete a product
app.delete('/product/:id', (req, res) => {
    const id_ = parseInt(req.params.id);
    if (isNaN(id_)) {
        res.status(500).send("Invalid product ID");
        return;
    }
    const idx = products.findIndex((ele) => ele.id === id_);
    if (idx === -1) {
        res.status(500).send("Product not found");
        return;
    }
    products.splice(idx, 1);
    console.log(products);
    res.json(products);
});

app.listen(3000, () => {
console.log('Server is listening on port 3000');
});