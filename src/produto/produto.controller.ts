import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProdutoService } from './produto.service';

@ApiTags('produtos')
@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os produtos' })
  @ApiResponse({ status: 200, description: 'Produtos encontrados com sucesso.' })
  async listarProdutos() {
    return this.produtoService.listarProdutos();
  }
}
