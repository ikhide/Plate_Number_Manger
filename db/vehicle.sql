-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 20, 2019 at 01:12 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vehicle`
--

-- --------------------------------------------------------

--
-- Table structure for table `plate_num`
--

CREATE TABLE `plate_num` (
  `id` int(11) NOT NULL,
  `myName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `addr` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sex` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `plate_no` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `state` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `plate_num`
--

INSERT INTO `plate_num` (`id`, `myName`, `addr`, `sex`, `plate_no`, `state`, `date`, `created_by`, `updated_by`) VALUES
(12, 'femi', 'asd', 'Male', 'FW339-ABC', 'Abuja', '2019-09-18 13:24:01', NULL, NULL),
(13, 'femi', '20, EGBIKI AVENUE EVBUOTUBU QUARTERS, BENIN CITY.', 'Male', 'FW123-ABC', 'Abuja', '2019-09-18 13:30:04', NULL, NULL),
(14, 'femi', '20, EGBIKI AVENUE EVBUOTUBU QUARTERS, BENIN CITY.', 'Male', 'FW645-ABC', 'Abuja', '2019-09-18 13:31:02', NULL, NULL),
(15, 'femi', '20, EGBIKI AVENUE EVBUOTUBU QUARTERS, BENIN CITY.', 'Male', 'FW223-ABC', 'Abuja', '2019-09-18 13:31:38', NULL, NULL),
(16, 'femi', '20, EGBIKI AVENUE EVBUOTUBU QUARTERS, BENIN CITY.', 'Male', 'FW704-ABC', 'Abuja', '2019-09-18 13:31:45', NULL, NULL),
(17, 'femi', '20, EGBIKI AVENUE EVBUOTUBU QUARTERS, BENIN CITY.', 'Male', 'FW191LSZ', 'Abuja', '2019-09-18 13:32:29', NULL, NULL),
(18, 'femi', '20, EGBIKI AVENUE EVBUOTUBU QUARTERS, BENIN CITY.', 'Male', 'FW959-TAE', 'Abuja', '2019-09-18 13:32:46', NULL, NULL),
(19, 'femi', '20, EGBIKI AVENUE EVBUOTUBU QUARTERS, BENIN CITY.', 'Male', 'KG308-CKP', 'Kogi', '2019-09-18 13:32:57', NULL, NULL),
(20, 'festus', 'ninja', 'Female', 'KG635-GSH', 'Kogi', '2019-09-20 01:15:16', '3', NULL),
(21, 'festus', 'ninja', 'Female', 'KG211-EPI', 'Kogi', '2019-09-20 11:00:23', '3', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pass` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `pass`) VALUES
(1, 'isah', 'isah'),
(3, 'a', 'a');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `plate_num`
--
ALTER TABLE `plate_num`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `plate_num`
--
ALTER TABLE `plate_num`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
