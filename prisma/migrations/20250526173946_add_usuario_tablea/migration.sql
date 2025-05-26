/*
  Warnings:

  - You are about to drop the `Stock` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Stock" DROP CONSTRAINT "Stock_productoId_fkey";

-- AlterTable
ALTER TABLE "PedidoCab" ADD COLUMN     "estado" TEXT NOT NULL DEFAULT 'A';

-- AlterTable
ALTER TABLE "PedidoDet" ADD COLUMN     "estado" TEXT NOT NULL DEFAULT 'A';

-- DropTable
DROP TABLE "Stock";

-- CreateTable
CREATE TABLE "Stocks" (
    "id" SERIAL NOT NULL,
    "productoId" INTEGER NOT NULL,
    "stockFisico" INTEGER NOT NULL,
    "stockComprometido" INTEGER NOT NULL,

    CONSTRAINT "Stocks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stocks_productoId_key" ON "Stocks"("productoId");

-- AddForeignKey
ALTER TABLE "Stocks" ADD CONSTRAINT "Stocks_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
