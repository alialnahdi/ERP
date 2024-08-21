const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const ProductController = require('../Controllers/ProductController');

// Mock the ProductService
const ProductService = require('../Services/ProductService');
jest.mock('../Services/ProductService');

const app = express();
app.use(bodyParser.json());

// Setup routes for the Product controller
app.get('/', ProductController.getAllProducts);
app.get('/:id', ProductController.getProductById);
app.post('/', ProductController.createProduct);
app.put('/:id', ProductController.updateProduct);
app.delete('/:id', ProductController.deleteProduct);

describe('ProductController', () => {
  beforeAll(() => {
    // Mock the Product service methods
    ProductService.getAllProducts = jest.fn().mockResolvedValue([]);
    ProductService.getProductById = jest.fn().mockResolvedValue({});
    ProductService.createProduct = jest.fn().mockResolvedValue({});
    ProductService.updateProduct = jest.fn().mockResolvedValue({});
    ProductService.deleteProduct = jest.fn().mockResolvedValue({ id: 1, name: 'Test Product' });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get all products', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should get a product by ID', async () => {
    const response = await request(app).get('/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('should create a new product', async () => {
    const response = await request(app)
      .post('/')
      .send({ name: 'New Product' });
    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('should update an existing product', async () => {
    const response = await request(app)
      .put('/1')
      .send({ name: 'Updated Product' });
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('should delete a product', async () => {
    const response = await request(app).delete('/1');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(`The product 'Test Product' has been successfully deleted`);
  });

  it('should return 404 when product is not found', async () => {
    ProductService.getProductById.mockResolvedValue(null); // Simulate no result found

    const response = await request(app).get('/999'); // Assuming 999 doesn't exist
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Product not found.');
  });
});
