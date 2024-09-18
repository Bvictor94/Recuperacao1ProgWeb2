import { IsInt, IsNumber } from 'class-validator';

export class AdicionarProdutoDto {
  @IsInt()
  produtoId: number;

  @IsNumber()
  quantidade: number;
}
