import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Developer } from './entities/developer.entity';
import { DeveloperService } from './service/developer/developer.service';
import { DevelopersController } from './controller/developers/developers.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'db_name',
      username: 'root',
      password: 'db_password',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Developer])
  ],
  controllers: [AppController, DevelopersController],
  providers: [AppService, DeveloperService],
})
export class AppModule {}
