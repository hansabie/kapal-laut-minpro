/*
  Warnings:

  - You are about to drop the column `isPaid` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `ticketType` on the `event` table. All the data in the column will be lost.
  - Added the required column `category` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event` DROP COLUMN `isPaid`,
    DROP COLUMN `ticketType`,
    ADD COLUMN `category` VARCHAR(191) NOT NULL;
