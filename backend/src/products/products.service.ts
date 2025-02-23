import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

//Adding sample data to the database
  async seedData() {
    const products = [
      { name: 'Product 1', description: 'Description 1', price: 10 },
      { name: 'Product 2', description: 'Description 2', price: 20 },
      { name: 'Product 3', description: 'Description 3', price: 30 },
      { name: 'Product 4', description: 'Description 4', price: 40 },
      { name: 'Product 5', description: 'Description 5', price: 50 },
    ];
    await this.productRepository.save(products);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Product | null> {
    return this.productRepository.findOneBy({ id });
  }

  create(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  async update(id: number, product: Product): Promise<Product | null> {
    await this.productRepository.update(id, product);
    return this.productRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
  
}