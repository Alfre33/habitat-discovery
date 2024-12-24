/*
  Warnings:

  - You are about to drop the column `imgs` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `imgInstallations` on the `Habitat` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Habitat` table. All the data in the column will be lost.
  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[habitatId]` on the table `Animal` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Habitat` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Rating` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[habitatId]` on the table `Rating` will be added. If there are existing duplicate values, this will fail.
  - Made the column `habitatId` on table `Animal` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_userId_fkey";

-- DropForeignKey
ALTER TABLE "Animal" DROP CONSTRAINT "Animal_habitatId_fkey";

-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "imgs",
ALTER COLUMN "habitatId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Habitat" DROP COLUMN "imgInstallations",
DROP COLUMN "location",
ADD COLUMN     "logo" TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'USER';

-- DropTable
DROP TABLE "Address";

-- CreateTable
CREATE TABLE "AddressUser" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "AddressUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageInstalaciones" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "habitatId" TEXT NOT NULL,

    CONSTRAINT "ImageInstalaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AddressHabitat" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "PostalCode" TEXT NOT NULL,
    "habitatId" TEXT NOT NULL,

    CONSTRAINT "AddressHabitat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnimalImage" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "animalId" TEXT NOT NULL,

    CONSTRAINT "AnimalImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AddressUser_userId_key" ON "AddressUser"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AddressHabitat_habitatId_key" ON "AddressHabitat"("habitatId");

-- CreateIndex
CREATE UNIQUE INDEX "Animal_habitatId_key" ON "Animal"("habitatId");

-- CreateIndex
CREATE UNIQUE INDEX "Habitat_userId_key" ON "Habitat"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Rating_userId_key" ON "Rating"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Rating_habitatId_key" ON "Rating"("habitatId");

-- AddForeignKey
ALTER TABLE "AddressUser" ADD CONSTRAINT "AddressUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImageInstalaciones" ADD CONSTRAINT "ImageInstalaciones_habitatId_fkey" FOREIGN KEY ("habitatId") REFERENCES "Habitat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AddressHabitat" ADD CONSTRAINT "AddressHabitat_habitatId_fkey" FOREIGN KEY ("habitatId") REFERENCES "Habitat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_habitatId_fkey" FOREIGN KEY ("habitatId") REFERENCES "Habitat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimalImage" ADD CONSTRAINT "AnimalImage_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
