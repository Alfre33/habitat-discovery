-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'GUEST');

-- CreateEnum
CREATE TYPE "HabitatType" AS ENUM ('ZOO', 'ACUARIO', 'NONE');

-- CreateEnum
CREATE TYPE "ZooCategory" AS ENUM ('MAMMAL', 'REPTILE', 'BIRD', 'INSECT', 'AMPHIBIAN', 'FISH');

-- CreateEnum
CREATE TYPE "AquariumCategory" AS ENUM ('FISH', 'MAMMAL', 'REPTILE', 'INVERTEBRATE', 'AMPHIBIAN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "cp" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Habitat" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "HabitatType" NOT NULL,
    "location" TEXT NOT NULL,
    "imgInstallations" TEXT[],
    "userId" TEXT NOT NULL,

    CONSTRAINT "Habitat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animal" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imgs" TEXT[],
    "habitatType" "HabitatType" NOT NULL,
    "habitatId" TEXT,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "stars" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "habitatId" TEXT NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BoletosStyle" (
    "id" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "imageLogo" TEXT NOT NULL,
    "imageHero" TEXT NOT NULL,
    "habitatId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "types" TEXT[],

    CONSTRAINT "BoletosStyle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "isPaid" BOOLEAN NOT NULL,
    "payDate" TIMESTAMP(3),
    "userId" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "boletoStyleId" TEXT NOT NULL,
    "habitatId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "coupon" TEXT,
    "isPaid" BOOLEAN NOT NULL,
    "orderId" TEXT NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Address_userId_key" ON "Address"("userId");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habitat" ADD CONSTRAINT "Habitat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_habitatId_fkey" FOREIGN KEY ("habitatId") REFERENCES "Habitat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_habitatId_fkey" FOREIGN KEY ("habitatId") REFERENCES "Habitat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoletosStyle" ADD CONSTRAINT "BoletosStyle_habitatId_fkey" FOREIGN KEY ("habitatId") REFERENCES "Habitat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_boletoStyleId_fkey" FOREIGN KEY ("boletoStyleId") REFERENCES "BoletosStyle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_habitatId_fkey" FOREIGN KEY ("habitatId") REFERENCES "Habitat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
