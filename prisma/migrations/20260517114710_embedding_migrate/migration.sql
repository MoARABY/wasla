/*
  Warnings:

  - You are about to drop the column `interests_List` on the `posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "interests_List";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "interests_List" TEXT[];
