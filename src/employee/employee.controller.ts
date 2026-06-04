import { Controller, Get, Post, Patch, Body, Param, ParseIntPipe } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Post()
  create(@Body() body: { name: string; age: number }) {
    return this.employeeService.create(body);
  }

  @Patch(':id/age')
  updateAge(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { age: number },
  ) {
    return this.employeeService.updateAge(id, body.age);
  }
}