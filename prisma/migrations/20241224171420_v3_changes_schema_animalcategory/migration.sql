/*
  Warnings:

  - The values [NONE] on the enum `HabitatType` will be removed. If these variants are still used in the database, this will fail.
  - The values [ADMIN,GUEST] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `category` on the `Animal` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[categoryId]` on the table `Animal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoryId` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "HabitatType_new" AS ENUM ('ZOO', 'ACUARIO');
ALTER TABLE "Habitat" ALTER COLUMN "type" TYPE "HabitatType_new" USING ("type"::text::"HabitatType_new");
ALTER TABLE "Animal" ALTER COLUMN "habitatType" TYPE "HabitatType_new" USING ("habitatType"::text::"HabitatType_new");
ALTER TYPE "HabitatType" RENAME TO "HabitatType_old";
ALTER TYPE "HabitatType_new" RENAME TO "HabitatType";
DROP TYPE "HabitatType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('ADMINAPP', 'ADMINBASIC', 'ADMINADVANCED', 'USER');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'USER';
COMMIT;

-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "category",
ADD COLUMN     "categoryId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "EspeciesCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "EspeciesCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HabitatCategoryEspecies" (
    "id" TEXT NOT NULL,
    "habitatId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "HabitatCategoryEspecies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EspeciesCategory_name_key" ON "EspeciesCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Animal_categoryId_key" ON "Animal"("categoryId");

-- AddForeignKey
ALTER TABLE "HabitatCategoryEspecies" ADD CONSTRAINT "HabitatCategoryEspecies_habitatId_fkey" FOREIGN KEY ("habitatId") REFERENCES "Habitat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HabitatCategoryEspecies" ADD CONSTRAINT "HabitatCategoryEspecies_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "EspeciesCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "EspeciesCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
