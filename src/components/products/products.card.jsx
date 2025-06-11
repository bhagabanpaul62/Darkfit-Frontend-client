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
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm hover:shadow-lg transition duration-300">
      {/* Image */}
      <div className="relative h-48 w-full">
        <img src={image} alt={name} className="object-cover w-full h-full" />
        {isNew && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            NEW
          </span>
        )}
        {isOnSale && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-gray-500">{category}</p>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mt-1">{description}</p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-lg font-bold text-black">₹{price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{originalPrice}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm mt-2">
          <span>⭐ {rating}</span>
          <span className="text-gray-400">({reviews})</span>
        </div>

        {/* Color dots */}
        {colors?.length > 0 && (
          <div className="flex items-center gap-2 mt-3">
            {colors.map((color, i) => (
              <span
                key={i}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
        )}

        {/* Buy Now Button */}
        <a
          href="https://www.amazon.in/stores/DARKFIT/page/EB50DA84-FC79-466A-977E-C3332F8D8C36?lp_asin=B0DBZTWPYN&ref_=ast_bln&store_ref=bl_ast_dp_brandLogo_sto"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-5 text-center bg-black text-white text-sm py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
