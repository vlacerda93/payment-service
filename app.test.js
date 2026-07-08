const request = require('supertest');
const app = require('./app');

describe('Payment Service', () => {
  it('should process payment successfully', async () => {
    const res = await request(app)
      .post('/pay')
      .send({ orderId: 101, amount: 50.0 });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'approved');
    expect(res.body).toHaveProperty('transactionId');
  });

  it('should reject payment with negative or zero amount', async () => {
    const res = await request(app)
      .post('/pay')
      .send({ orderId: 101, amount: 0 });
    
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('status', 'failed');
  });
  
  it('should require orderId and amount', async () => {
    const res = await request(app)
      .post('/pay')
      .send({ orderId: 101 });
    
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });
});
