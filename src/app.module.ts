import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './employee/entities/employee.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Employee],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    EmployeeModule,
  ],
})
export class AppModule {}