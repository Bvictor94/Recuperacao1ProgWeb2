import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AdicionarProdutoDto } from './dto/adicionar-produto.dto';

@Injectable()
export class CarrinhoService {
  constructor(private prisma: PrismaService) {}

  async adicionarProduto(adicionarProdutoDto: AdicionarProdutoDto) {
    const { produtoId, quantidade } = adicionarProdutoDto;

    let carrinho = await this.prisma.carrinho.findUnique({
      where: { id: 1 }, // usando ID 1 pois haverá apenas 1 carrinho neste projeto
    });

    if (!carrinho) {
      carrinho = await this.prisma.carrinho.create({
        data: {
          id: 1,
          produtos: {
            connect: { id: produtoId },
          },
          totalPreco: 0,
        },
      });
    } else {
      await this.prisma.carrinho.update({
        where: { id: carrinho.id },
        data: {
          produtos: {
            connect: { id: produtoId },
          },
        },
      });
    }

    const produto = await this.prisma.produto.findUnique({
      where: { id: produtoId },
    });

    if (produto) {
      const novoPrecoTotal = carrinho.totalPreco + (produto.preco * quantidade);
      await this.prisma.carrinho.update({
        where: { id: carrinho.id },
        data: {
          totalPreco: novoPrecoTotal,
        },
      });
    }

    return carrinho;
  }

  async removerProduto(id: number) {
    const carrinho = await this.prisma.carrinho.findUnique({
      where: { id: 1 },
      include: { produtos: true },
    });

    if (!carrinho) {
      throw new Error('Carrinho não encontrado');
    }

    const produtoNoCarrinho = carrinho.produtos.find(produto => produto.id === id);

    if (!produtoNoCarrinho) {
      throw new Error('Produto não encontrado no carrinho');
    }

    await this.prisma.carrinho.update({
      where: { id: carrinho.id },
      data: {
        produtos: {
          disconnect: { id: id },
        },
      },
    });

    const produto = await this.prisma.produto.findUnique({
      where: { id: id },
    });

    if (produto) {
      const novoPrecoTotal = carrinho.totalPreco - produto.preco;
      await this.prisma.carrinho.update({
        where: { id: carrinho.id },
        data: {
          totalPreco: novoPrecoTotal,
        },
      });
    }

    return carrinho;
  }
}
