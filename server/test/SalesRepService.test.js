const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const SalesRepController = require('../Controllers/SalesRepController');

// Mock the SalesRepService
const SalesRepService = require('../Services/SalesRepService');
jest.mock('../Services/SalesRepService');

const app = express();
app.use(bodyParser.json());

// Setup routes for the SalesRep controller
app.get('/', SalesRepController.getAllSalesReps);
app.get('/:id', SalesRepController.getSalesRepById);
app.post('/', SalesRepController.createSalesRep);
app.put('/:id', SalesRepController.updateSalesRep);
app.delete('/:id', SalesRepController.deleteSalesRep);

describe('SalesRepController', () => {
  beforeAll(() => {
    // Mock the SalesRep service methods
    SalesRepService.getAllSalesReps = jest.fn().mockResolvedValue([]);
    SalesRepService.getSalesRepById = jest.fn().mockResolvedValue({});
    SalesRepService.createSalesRep = jest.fn().mockResolvedValue({});
    SalesRepService.updateSalesRep = jest.fn().mockResolvedValue({});
    SalesRepService.deleteSalesRep = jest.fn().mockResolvedValue({ id: 1, name: 'Test SalesRep' });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get all sales reps', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should get a sales rep by ID', async () => {
    const response = await request(app).get('/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('should create a new sales rep', async () => {
    const response = await request(app)
      .post('/')
      .send({ name: 'New SalesRep' });
    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('should update an existing sales rep', async () => {
    const response = await request(app)
      .put('/1')
      .send({ name: 'Updated SalesRep' });
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('should delete a sales rep', async () => {
    const response = await request(app).delete('/1');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(`The sales rep 'Test SalesRep' has been successfully deleted`);
  });

  it('should return 404 when sales rep is not found', async () => {
    SalesRepService.getSalesRepById.mockResolvedValue(null); // Simulate no result found

    const response = await request(app).get('/999'); // Assuming 999 doesn't exist
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Sales Rep not found.');
  });
});
