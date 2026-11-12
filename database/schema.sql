CREATE DATABASE IF NOT EXISTS stayhub CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE stayhub;
CREATE TABLE IF NOT EXISTS users (
 id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 full_name VARCHAR(150) NOT NULL,
 email VARCHAR(190) NOT NULL UNIQUE,
 phone VARCHAR(20) NULL,
 password_hash VARCHAR(255) NOT NULL,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
-- Các bảng khu trọ, phòng, người thuê, hợp đồng, hóa đơn, điện nước sẽ bổ sung sau khi chốt ERD.
