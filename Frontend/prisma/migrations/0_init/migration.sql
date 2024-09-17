-- CreateTable
CREATE TABLE `VendorsList` (
    `macPrefix` VARCHAR(13) NOT NULL,
    `vendorName` VARCHAR(108) NULL,

    PRIMARY KEY (`macPrefix`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `time` DATETIME(0) NULL,
    `BSSID` BIGINT NULL,
    `ESSID` VARCHAR(32) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

