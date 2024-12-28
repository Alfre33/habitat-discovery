/*
  Warnings:

  - Added the required column `slug` to the `Habitat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Habitat" ADD COLUMN     "slug" TEXT NOT NULL;
