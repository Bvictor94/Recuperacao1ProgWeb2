/*
  Warnings:

  - You are about to drop the `_carrinho_produto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_carrinho_produto` DROP FOREIGN KEY `_carrinho_produto_A_fkey`;

-- DropForeignKey
ALTER TABLE `_carrinho_produto` DROP FOREIGN KEY `_carrinho_produto_B_fkey`;

-- DropTable
DROP TABLE `_carrinho_produto`;

-- CreateTable
CREATE TABLE `_CarrinhoProdutos` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CarrinhoProdutos_AB_unique`(`A`, `B`),
    INDEX `_CarrinhoProdutos_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CarrinhoProdutos` ADD CONSTRAINT `_CarrinhoProdutos_A_fkey` FOREIGN KEY (`A`) REFERENCES `Carrinho`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CarrinhoProdutos` ADD CONSTRAINT `_CarrinhoProdutos_B_fkey` FOREIGN KEY (`B`) REFERENCES `Produto`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
