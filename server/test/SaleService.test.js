const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const SaleController = require('../Controllers/SaleController');

// Mock the SaleService
const SaleService = require('../Services/SaleService');
jest.mock('../Services/SaleService');

const app = express();
app.use(bodyParser.json());

// Setup routes for the Sale controller
app.get('/', SaleController.getAllSales);
app.get('/:id', SaleController.getSaleById);
app.post('/', SaleController.createSale);
app.put('/:id', SaleController.updateSale);
app.delete('/:id', SaleController.deleteSale);

describe('SaleController', () => {
  beforeAll(() => {
    // Mock the Sale service methods
    SaleService.getAllSales = jest.fn().mockResolvedValue([]);
    SaleService.getSaleById = jest.fn().mockResolvedValue({});
    SaleService.createSale = jest.fn().mockResolvedValue({});
    SaleService.updateSale = jest.fn().mockResolvedValue({});
    SaleService.deleteSale = jest.fn().mockResolvedValue({ id: 1, totalPrice: 100 });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get all sales', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should get a sale by ID', async () => {
    const response = await request(app).get('/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('should create a new sale', async () => {
    const response = await request(app)
      .post('/')
      .send({ productId: 1, salesRepId: 1, quanity: 2 });
    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('should update an existing sale', async () => {
    const response = await request(app)
      .put('/1')
      .send({ quanity: 3 });
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('should delete a sale', async () => {
    const response = await request(app).delete('/1');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(`The sale with ID '1' has been successfully deleted`);
  });

  it('should return 404 when sale is not found', async () => {
    SaleService.getSaleById.mockResolvedValue(null); // Simulate no result found

    const response = await request(app).get('/999'); // Assuming 999 doesn't exist
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Sale not found.');
  });
});
