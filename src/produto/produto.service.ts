import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}

  async listarProdutos() {
    return this.prisma.produto.findMany();
  }
}
