import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
  ) {}

  findAll(): Promise<Employee[]> {
    return this.employeeRepo.find({ order: { id: 'ASC' } });
  }

  create(data: { name: string; age: number }): Promise<Employee> {
    const emp = this.employeeRepo.create(data);
    return this.employeeRepo.save(emp);
  }

  async updateAge(id: number, age: number): Promise<Employee> {
    const emp = await this.employeeRepo.findOneBy({ id });
    if (!emp) throw new Error(`Employee with id ${id} not found`);
    emp.age = age;
    return this.employeeRepo.save(emp);
  }
}