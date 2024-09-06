/*
  Warnings:

  - You are about to drop the column `points` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `referralCode` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `referredBy` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `User_referralCode_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `points`,
    DROP COLUMN `referralCode`,
    DROP COLUMN `referredBy`;
