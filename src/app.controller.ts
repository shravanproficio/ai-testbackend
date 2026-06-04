import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';

import axios from 'axios';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('chat')
  async chat(
    @Body() body: { message: string },
  ) {
    const response = await axios.post(
      'https://commute-ai-demo-1.onrender.com',
      {
        message: body.message,
      },
    );

    return response.data;
  }
}