import { Module } from '@nestjs/common';
import { ProdutoController } from './produto/produto.controller';
import { ProdutoService } from './produto/produto.service';
import { CarrinhoController } from './carrinho/carrinho.controller';
import { CarrinhoService } from './carrinho/carrinho.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ProdutoController, CarrinhoController],
  providers: [ProdutoService, CarrinhoService, PrismaService],
})
export class AppModule {}
