const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/pay', (req, res) => {
  const { orderId, amount } = req.body;
  if (!orderId || amount === undefined) {
    return res.status(400).json({ error: 'orderId and amount are required' });
  }

  if (amount <= 0) {
    return res.status(400).json({ error: 'Amount must be greater than zero', status: 'failed' });
  }

  // Simulate payment processing
  return res.json({ 
    message: 'Payment processed successfully', 
    status: 'approved',
    transactionId: `tx_${Math.floor(Math.random() * 1000000)}`,
    orderId,
    amount 
  });
});

module.exports = app;
