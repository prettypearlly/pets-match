import { Module } from '@nestjs/common';
import { UsersServiceController } from './users-service.controller';
import { UsersServiceService } from './users-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: 'password',
    database: 'users_service',
    entities: [],
    synchronize: true,
  })],
  controllers: [UsersServiceController],
  providers: [UsersServiceService],
})
export class UsersServiceModule { }
