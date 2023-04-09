import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductSchema } from 'src/schemas/product.schema';

@Module({
  imports : [MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}])],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
