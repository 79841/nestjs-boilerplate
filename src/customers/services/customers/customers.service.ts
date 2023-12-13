import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: '79841@naver.com',
      name: 'testuser1',
    },
    {
      id: 2,
      email: 'skj974600@gmail.com',
      name: 'testuser2',
    },
    {
      id: 3,
      email: 'test@test.com',
      name: 'testuser3',
    },
  ];
  findCustomerById(id: number) {
    return this.customers.find((cutomer) => cutomer.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }

  getCustomers() {
    return this.customers;
  }
}
