/*
  Warnings:

  - You are about to drop the column `animallSlug` on the `Animal` table. All the data in the column will be lost.
  - Added the required column `animalSlug` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "animallSlug",
ADD COLUMN     "animalSlug" TEXT NOT NULL;
