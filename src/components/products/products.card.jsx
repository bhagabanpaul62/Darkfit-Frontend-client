import React from "react";

function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  rating,
  reviews,
  description,
  isNew,
  isOnSale,
  discount,
  colors,
  onAddToCart,
  onQuickView,
}) {
  return (
    <div className="bg-white w-[20vw] rounded-2xl shadow-md overflow-hidden group transition-transform duration-300 hover:scale-105">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            New
          </span>
        )}
        {isOnSale && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            -{discount}%
          </span>
        )}
      </div>

      {/* Details */}
      <div className="p-4 space-y-2">
        <p className="text-sm text-gray-400">{category}</p>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-black">₹{price}</span>
          {originalPrice && (
            <span className="text-sm line-through text-gray-400">
              ₹{originalPrice}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          <span>⭐ {rating}</span>
          <span className="text-gray-400">({reviews})</span>
        </div>

        {/* Color options */}
        <div className="flex items-center gap-2 mt-2">
          {colors?.map((color) => (
            <span
              key={color}
              className={`w-4 h-4 rounded-full border border-gray-300`}
              style={{ backgroundColor: color.toLowerCase() }}
            ></span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => onAddToCart({ id, name })}
            className="px-4 py-1 bg-black text-white text-sm rounded hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
          <button
            onClick={() => onQuickView({ id, name })}
            className="text-sm text-blue-600 hover:underline"
          >
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
