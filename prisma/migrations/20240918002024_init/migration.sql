/*
  Warnings:

  - You are about to drop the `_carrinhoprodutos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_carrinhoprodutos` DROP FOREIGN KEY `_CarrinhoProdutos_A_fkey`;

-- DropForeignKey
ALTER TABLE `_carrinhoprodutos` DROP FOREIGN KEY `_CarrinhoProdutos_B_fkey`;

-- DropTable
DROP TABLE `_carrinhoprodutos`;

-- CreateTable
CREATE TABLE `_carrinho_produto` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_carrinho_produto_AB_unique`(`A`, `B`),
    INDEX `_carrinho_produto_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_carrinho_produto` ADD CONSTRAINT `_carrinho_produto_A_fkey` FOREIGN KEY (`A`) REFERENCES `Carrinho`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_carrinho_produto` ADD CONSTRAINT `_carrinho_produto_B_fkey` FOREIGN KEY (`B`) REFERENCES `Produto`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
