-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2025 at 01:50 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nutriscoop`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id` int(11) NOT NULL,
  `company_name_title` text DEFAULT NULL,
  `company_name_description` text DEFAULT NULL,
  `business_name_title` text DEFAULT NULL,
  `business_name_description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `company_name_title`, `company_name_description`, `business_name_title`, `business_name_description`) VALUES
(1, 'NutriVal Company', 'NutriVal Company was established on February 7, 2025, a partnership formed by ten young adults who desire to be successful entrepreneurs. The "Nutri" was derived from a word 'Nutrition" which signifies the consumption and utilization of nutritious foods to support growth, energy production, and overall well being. Meanwhile "Val" comes to "Valenzuela city", the hometown of young entrepreneurs. We chose this company name because it signifies our commitment in providing nutritious and locally inspired products for the community.', 'NutriScoop', 'The name \'Nutriscoop\' signifies our dedication to plant-based goodness, blending nutrition and indulgence to deliver ice cream that is both healthy and satisfying. The word \'Scoop\' brings to mind the simple pleasure our treats bring. The fusion of \'Nutri\' and \'Scoop\' highlights our commitment to sustainability, reflecting our passion for eco-friendly practices and plant-based ingredients.');

-- --------------------------------------------------------

--
-- Table structure for table `contact_info`
--

CREATE TABLE `contact_info` (
  `id` int(11) NOT NULL,
  `email` text DEFAULT NULL,
  `address` text DEFAULT NULL,
  `facebook` text DEFAULT NULL,
  `instagram` text DEFAULT NULL,
  `opening_hours` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_info`
--

INSERT INTO `contact_info` (`id`, `email`, `address`, `facebook`, `instagram`, `opening_hours`) VALUES
(1, 'nutriscoop6@gmail.com', 'MXQG+RMR, Karuhatan Rd, Valenzuela, 1441 Metro Manila', 'NutriScoopPh', 'NutriScoop.Ph', 'Mon - Sun | 10 AM to 8 PM');

-- --------------------------------------------------------

--
-- Table structure for table `customer_reviews`
--

CREATE TABLE `customer_reviews` (
  `id_review` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `customer_name` text DEFAULT NULL,
  `review` text DEFAULT NULL,
  `rating` int(11) DEFAULT NULL CHECK (`rating` between 1 and 5),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mission_vision`
--

CREATE TABLE `mission_vision` (
  `id` int(11) NOT NULL,
  `mission` text DEFAULT NULL,
  `vision` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mission_vision`
--

INSERT INTO `mission_vision` (`id`, `mission`, `vision`) VALUES
(1, 'To value customers with an exciting and one of a kind ice cream experience, while promoting healthy and nutritious options that benefit our community.', 'To be the go-to brand for vegan ice cream, offering a variety of flavors that make it easy for people to make healthier, more sustainable choices. Our goal is to become one of the healthiest and affordable ice creams in the community. We want to bring joy to dessert lovers everywhere while making a positive impact on the world.');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id_product` int(11) NOT NULL,
  `name` text NOT NULL,
  `description` text DEFAULT NULL,
  `image` text DEFAULT NULL,
  `ingredients` text DEFAULT NULL,
  `health_benefits` text DEFAULT NULL,
  `nutrition_facts` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id_product`, `name`, `description`, `image`, `ingredients`, `health_benefits`, `nutrition_facts`) VALUES
(1, 'Carrot Flavor', 'A bitter-sweet flavor of our ice cream.', 'images/carrot.png', 'Carrots, Coconut Milk, Agave Syrup', 'Rich in beta-carotene, supports eye health and regulates sugar.', 'Calories: 120, Protein: 2g, Carbs: 22g, Fat: 3g'),
(2, 'Corn Flavor', 'A milky sweet flavor of our ice cream.', 'images/corn.png', 'Corn, Almond Milk, Stevia', 'Supports digestion and eye health.', 'Calories: 110, Protein: 1g, Carbs: 19g, Fat: 2.5g'),
(3, 'Cucumber Flavor', 'A mild lightly sweet flavor of our ice cream.', 'images/cucumber.png', 'Cucumber, Coconut Cream, Honey', 'Hydrating and helps with digestion.', 'Calories: 80, Protein: 0.5g, Carbs: 14g, Fat: 1g'),
(4, 'Sweet Potato Flavor', 'A naturally sweet flavor of our ice cream.', 'images/sweetpotato.png', 'Sweet Potato, Soy Milk, Maple Syrup', 'Boosts immunity and gut health.', 'Calories: 130, Protein: 2.5g, Carbs: 24g, Fat: 3.5g');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_info`
--
ALTER TABLE `contact_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_reviews`
--
ALTER TABLE `customer_reviews`
  ADD PRIMARY KEY (`id_review`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `mission_vision`
--
ALTER TABLE `mission_vision`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contact_info`
--
ALTER TABLE `contact_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `customer_reviews`
--
ALTER TABLE `customer_reviews`
  MODIFY `id_review` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mission_vision`
--
ALTER TABLE `mission_vision`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customer_reviews`
--
ALTER TABLE `customer_reviews`
  ADD CONSTRAINT `customer_reviews_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id_product`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
