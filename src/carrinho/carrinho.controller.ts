import { Controller, Post, Body, Delete, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CarrinhoService } from './carrinho.service';
import { AdicionarProdutoDto } from './dto/adicionar-produto.dto';

@ApiTags('carrinho')
@Controller('carrinho')
export class CarrinhoController {
  constructor(private readonly carrinhoService: CarrinhoService) {}

  @Post('adicionar')
  @ApiOperation({ summary: 'Adicionar produto ao carrinho' })
  @ApiResponse({ status: 200, description: 'Produto adicionado ao carrinho com sucesso.' })
  async adicionarProduto(@Body() produto: AdicionarProdutoDto) {
    return this.carrinhoService.adicionarProduto(produto);
  }

  @Delete('remover/:id')
  @ApiOperation({ summary: 'Remover produto do carrinho' })
  @ApiResponse({ status: 200, description: 'Produto removido do carrinho com sucesso.' })
  async removerProduto(@Param('id') id: number) {
    return this.carrinhoService.removerProduto(id);
  }
}
