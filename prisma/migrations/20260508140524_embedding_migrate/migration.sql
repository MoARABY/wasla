-- AlterTable
CREATE EXTENSION IF NOT EXISTS vector;
ALTER TABLE "posts" ADD COLUMN     "embedding" vector(768),
ADD COLUMN     "interests_List" TEXT[];
