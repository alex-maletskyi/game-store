-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "genres" TEXT[],
ADD COLUMN     "isNewRelease" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "releaseDate" TEXT,
ADD COLUMN     "salePercentage" INTEGER,
ADD COLUMN     "screenshots" TEXT[];

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
