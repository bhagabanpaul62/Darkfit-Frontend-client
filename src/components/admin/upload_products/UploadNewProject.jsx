import React, { useState } from "react";

function UploadNewProject() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    original_price: "",
    image: "",
    category: "",
    rating: "",
    reviews: "",
    description: "",
    is_new: false,
    is_on_sale: false,
    discount: "",
    colors: "", // comma-separated string to convert to array
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert colors string to array
    const colorsArray = formData.colors
      .split(",")
      .map((c) => c.trim())
      .filter((c) => c !== "");

    const payload = {
      ...formData,
      colors: colorsArray,
      price: parseFloat(formData.price),
      original_price: parseFloat(formData.original_price),
      discount: parseFloat(formData.discount),
      rating: parseFloat(formData.rating),
      reviews: parseInt(formData.reviews),
    };

    console.log("Submitting product:", payload);

    // TODO: call Supabase insert here
  };

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white p-6">
      <div className="max-w-3xl mx-auto bg-[#101826] p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Upload New Product</h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <input
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-700 p-3 rounded-md text-white"
            required
          />

          {/* Price */}
          <input
            name="price"
            type="number"
            step="0.01"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="bg-gray-700 p-3 rounded-md text-white"
            required
          />

          {/* Original Price */}
          <input
            name="original_price"
            type="number"
            step="0.01"
            placeholder="Original Price"
            value={formData.original_price}
            onChange={handleChange}
            className="bg-gray-700 p-3 rounded-md text-white"
          />

          {/* Discount */}
          <input
            name="discount"
            type="number"
            step="0.01"
            placeholder="Discount (%)"
            value={formData.discount}
            onChange={handleChange}
            className="bg-gray-700 p-3 rounded-md text-white"
          />

          {/* Category */}
          <input
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="bg-gray-700 p-3 rounded-md text-white"
          />

          {/* Image URL */}
          <input
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="bg-gray-700 p-3 rounded-md text-white"
          />

          {/* Rating */}
          <input
            name="rating"
            type="number"
            step="0.1"
            placeholder="Rating (out of 5)"
            value={formData.rating}
            onChange={handleChange}
            className="bg-gray-700 p-3 rounded-md text-white"
          />

          {/* Reviews */}
          <input
            name="reviews"
            type="number"
            placeholder="Reviews"
            value={formData.reviews}
            onChange={handleChange}
            className="bg-gray-700 p-3 rounded-md text-white"
          />

          {/* Colors */}
          <input
            name="colors"
            placeholder="Colors (comma separated)"
            value={formData.colors}
            onChange={handleChange}
            className="bg-gray-700 p-3 rounded-md text-white col-span-2"
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="bg-gray-700 p-3 rounded-md text-white col-span-2"
          ></textarea>

          {/* Toggles */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="is_new"
              checked={formData.is_new}
              onChange={handleChange}
              className="form-checkbox text-blue-500"
            />
            <label htmlFor="is_new">Is New?</label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="is_on_sale"
              checked={formData.is_on_sale}
              onChange={handleChange}
              className="form-checkbox text-blue-500"
            />
            <label htmlFor="is_on_sale">Is On Sale?</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="col-span-2 bg-green-500 hover:bg-green-200 hover:text-black py-3 rounded-md font-medium transition"
          >
            Submit Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadNewProject;
