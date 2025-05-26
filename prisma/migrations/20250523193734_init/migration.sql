-- CreateTable
CREATE TABLE "Empresa" (
    "id" SERIAL NOT NULL,
    "ruc" TEXT NOT NULL,
    "razonSocial" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "codUbigeo" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "apePaterno" TEXT NOT NULL,
    "apeMaterno" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "codPostal" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "imagenUrl" TEXT,
    "estado" TEXT NOT NULL,
    "categoriaPadreId" INTEGER,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "unidadVenta" TEXT NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "contenidoUnidad" TEXT NOT NULL,
    "infoAdicional" TEXT,
    "fotoUrl" TEXT,
    "moneda" TEXT NOT NULL,
    "tasaImpuesto" DOUBLE PRECISION NOT NULL,
    "precioVenta" DOUBLE PRECISION NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stock" (
    "id" SERIAL NOT NULL,
    "productoId" INTEGER NOT NULL,
    "stockFisico" INTEGER NOT NULL,
    "stockComprometido" INTEGER NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovimientoInventario" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "signo" TEXT NOT NULL,
    "productoId" INTEGER NOT NULL,
    "unidadVenta" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "MovimientoInventario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PedidoCab" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "direccionEntrega" TEXT NOT NULL,

    CONSTRAINT "PedidoCab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PedidoDet" (
    "id" SERIAL NOT NULL,
    "pedidoId" INTEGER NOT NULL,
    "productoId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "valorUnitario" DOUBLE PRECISION NOT NULL,
    "tasaImpuesto" DOUBLE PRECISION NOT NULL,
    "precioUnitario" DOUBLE PRECISION NOT NULL,
    "precioTotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PedidoDet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Categoria" ADD CONSTRAINT "Categoria_categoriaPadreId_fkey" FOREIGN KEY ("categoriaPadreId") REFERENCES "Categoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovimientoInventario" ADD CONSTRAINT "MovimientoInventario_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidoCab" ADD CONSTRAINT "PedidoCab_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidoDet" ADD CONSTRAINT "PedidoDet_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "PedidoCab"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidoDet" ADD CONSTRAINT "PedidoDet_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
