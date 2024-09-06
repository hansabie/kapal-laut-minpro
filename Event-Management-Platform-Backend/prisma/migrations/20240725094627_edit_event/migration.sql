/*
  Warnings:

  - You are about to drop the `promotion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `promotion` DROP FOREIGN KEY `Promotion_eventId_fkey`;

-- DropTable
DROP TABLE `promotion`;
