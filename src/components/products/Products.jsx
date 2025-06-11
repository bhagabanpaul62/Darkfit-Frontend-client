import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./products.card";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
const items = [
  {
    id: "1",
    name: "Fast Charging Cable",
    price: 299,
    originalPrice: 499,
    image:
      img1,
    category: "Cables",
    rating: 4.6,
    reviews: 128,
    description: "Durable braided USB-C cable with fast charging support.",
    isNew: true,
    isOnSale: true,
    discount: 40,
    colors: ["#000000", "#FF0000"],
  },
  {
    id: "2",
    name: "Magnetic Car Mount",
    price: 499,
    originalPrice: 699,
    image:
      img2,
    category: "Mounts",
    rating: 4.4,
    reviews: 89,
    description: "Securely hold your phone while driving with magnetic grip.",
    isNew: false,
    isOnSale: true,
    discount: 28,
    colors: ["#333333", "#666666"],
  },
  {
    id: "3",
    name: "Wireless Earbuds",
    price: 1499,
    originalPrice: 1999,
    image:
      img3,
    category: "Audio",
    rating: 4.8,
    reviews: 345,
    description:
      "Crystal-clear sound with long battery life and noise isolation.",
    isNew: true,
    isOnSale: true,
    discount: 25,
    colors: ["#FFFFFF", "#000000"],
  },
  {
    id: "4",
    name: "Portable Power Bank",
    price: 1099,
    originalPrice: 1599,
    image:
      img4,
    category: "Chargers",
    rating: 4.5,
    reviews: 190,
    description: "10,000mAh power bank with dual USB output and LED display.",
    isNew: false,
    isOnSale: false,
    discount: 0,
    colors: ["#007BFF", "#333333"],
  },
  {
    id: "5",
    name: "Mobile Ring Holder",
    price: 199,
    originalPrice: 299,
    image:
      img3,
    category: "Accessories",
    rating: 4.3,
    reviews: 74,
    description: "Compact and stylish ring holder for better phone grip.",
    isNew: false,
    isOnSale: true,
    discount: 33,
    colors: ["#FFD700", "#C0C0C0"],
  },
];





function Products() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.7, delay: 0.1 }}
        className="pt-24 pb-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Products
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collection of premium mobile
            accessories designed to elevate your device.
          </p>
        </div>
      </motion.div>

      {/* Content Area */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Featured Categories */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {/* Add featured category buttons if needed */}
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          >
            {/* Example ProductCard Placeholder */}
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className=" text-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
              >
                <ProductCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  originalPrice={item.originalPrice}
                  image={item.image}
                  category={item.category}
                  rating={item.rating}
                  reviews={item.reviews}
                  description={item.description}
                  isNew={item.isNew}
                  isOnSale={item.isOnSale}
                  discount={item.discount}
                  colors={item.colors}
                  onAddToCart={(item) => console.log("Add:", item)}
                  onQuickView={(item) => console.log("Quick View:", item)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Products;
