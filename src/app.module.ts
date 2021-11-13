import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

const MONGODB_ATLAS_CONNECT = process.env.MONGODB_ATLAS_CONNECT;

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://root:2nq9z9WWxu84EdTM@cluster0.p7yjb.mongodb.net/nestjs-demo?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
