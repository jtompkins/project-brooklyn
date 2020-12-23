-- CreateTable
CREATE TABLE "User" (
"id" SERIAL,
    "auth0Id" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "website" TEXT,
    "instagram" TEXT,
    "applySwapCredit" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Postcards" (
"id" SERIAL,
    "userId" INTEGER NOT NULL,
    "s3Url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.auth0Id_unique" ON "User"("auth0Id");

-- AddForeignKey
ALTER TABLE "Postcards" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
