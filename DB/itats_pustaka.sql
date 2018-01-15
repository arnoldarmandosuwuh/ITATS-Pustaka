-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2018 at 07:37 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `itats_pustaka`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_pustaka`
--

CREATE TABLE `tbl_pustaka` (
  `isbn` varchar(255) NOT NULL,
  `judul_buku` varchar(255) DEFAULT NULL,
  `penerbit` varchar(255) DEFAULT NULL,
  `pengarang` varchar(255) DEFAULT NULL,
  `tahun_terbit` int(255) DEFAULT NULL,
  `sinopsis` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_pustaka`
--

INSERT INTO `tbl_pustaka` (`isbn`, `judul_buku`, `penerbit`, `pengarang`, `tahun_terbit`, `sinopsis`) VALUES
('978-602-318-227-5', 'Riset Operasi Edisi 2', 'Mitra Wacana Media', 'Sri Mulyano, S.E, M.Sc', 2017, 'Riset Operasi adalah suatu metode pengambilan keputusan yang dikembangkan dari studi-studi operasi-operasi militer selama perang dunia ke II. Keberhasilan-keberhasilan dari kelompok-kelompok studi militer ini telah menarik kalangan industriawan untuk memberikan berbagai solusi terhadap masalah-masalah manajerial yang rumit. Dewasa ini riset operasi mendapatkan pengakuan sebagai mata ajaran yang penting di tingkat perguruan tinggi, sesuai dengan perkjembangan kurikulum pendidikan tinggi maka teknik-teknik pendekatan dalam mengidentifikasi masalah dan mengambil keputusan menjadi suatu kebutuhan penting bagi para peserta didik. Selain itu kalangan profesional manajer, akademisi dapat memanfaatkan metode-metode riset operasi yang disajikan dalam buku ini.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_pustaka`
--
ALTER TABLE `tbl_pustaka`
  ADD PRIMARY KEY (`isbn`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
