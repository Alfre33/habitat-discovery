-- CreateTable
CREATE TABLE "EspeciesCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "commonAnimals" TEXT[],
    "colorHex" TEXT NOT NULL,

    CONSTRAINT "EspeciesCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EspeciesCategory_name_key" ON "EspeciesCategory"("name");
