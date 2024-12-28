/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the `EspeciesCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HabitatCategoryEspecies` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CategoriaEspecies" AS ENUM ('MAMIFERO', 'AVE', 'REPTIL', 'ANFIBIO', 'INSECTO', 'ARACNIDO', 'PEZDULCE', 'PEZSALADO', 'MOLUSCO', 'CRUSTACEO', 'ANEMONA', 'MEDUSA', 'INVERTEBRADO');

-- DropForeignKey
ALTER TABLE "Animal" DROP CONSTRAINT "Animal_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "HabitatCategoryEspecies" DROP CONSTRAINT "HabitatCategoryEspecies_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "HabitatCategoryEspecies" DROP CONSTRAINT "HabitatCategoryEspecies_habitatId_fkey";

-- DropIndex
DROP INDEX "Animal_categoryId_key";

-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "categoryId",
ADD COLUMN     "category" "CategoriaEspecies" NOT NULL;

-- AlterTable
ALTER TABLE "Habitat" ADD COLUMN     "categories" "CategoriaEspecies"[];

-- DropTable
DROP TABLE "EspeciesCategory";

-- DropTable
DROP TABLE "HabitatCategoryEspecies";
