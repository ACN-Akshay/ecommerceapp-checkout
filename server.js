const express = require('express');
const { addToCart, removeFromCart } = require('./cart');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let cart = [];

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/', (req, res) => {
  res.json({
    service: 'EcommerceApp Checkout Cart API',
    version: '1.0.0',
    endpoints: ['POST /cart/add', 'POST /cart/remove', 'GET /cart', 'GET /health']
  });
});

app.post('/cart/add', (req, res) => {
  const { id, name, price } = req.body;
  if (!id || !name || price === undefined) {
    return res.status(400).json({ error: 'id, name, and price are required' });
  }
  cart = addToCart(cart, { id, name, price });
  res.json({ message: `Added "${name}"`, cart });
});

app.post('/cart/remove', (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ error: 'id is required' });
  }
  cart = removeFromCart(cart, id);
  res.json({ message: `Removed item id "${id}"`, cart });
});

app.get('/cart', (req, res) => {
  res.json({ cart });
});

app.listen(PORT, () => {
  console.log(`✅ Cart API running at http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/health`);
});

module.exports = app;