const app = require('./app');
const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Payment service running on port ${PORT}`);
});
