import { useContext, useState } from "react";
import { AuthContext } from "../../../context/authContecxt";
import { Link } from "react-router-dom";

function Dashboard() {
  const { logout } = useContext(AuthContext);
  const [products, setProducts] = useState([
    "Smartphone X1",
    "Wireless Headphones Pro",
    "Laptop UltraBook 15",
    "Smartwatch FitTrack",
    "Tablet AirPad",
  ]);

  const logOut = () => {
    logout();
  };

  const handleDeleteProduct = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };

  const handleAddDemoProduct = () => {
    const newProductName = `New Product #${products.length + 1}`;
    setProducts([...products, newProductName]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f1a] to-[#0f172a] text-white p-6">
      <div className="max-w-3xl mx-auto bg-[#101826] p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-700 transition-all duration-300">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 pb-4 border-b border-gray-700">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Admin Dashboard
          </h1>
          <button
            onClick={logOut}
            className="group relative overflow-hidden px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <span className="relative z-10">Logout</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </button>
        </div>

        {/* Add Product Button Only */}
        <div className="mb-8">
          <Link
            to="addproducts"
            className="px-4 py-3 w-full sm:w-auto rounded-md bg-green-500 hover:bg-green-600 text-white font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none"
          >
            Add Product
          </Link>
        </div>

        {/* Products List */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-200">
            Products List
          </h2>
          {products.length === 0 ? (
            <div className="bg-[#1a2332] rounded-lg p-6 text-center">
              <p className="text-gray-400">No products added yet.</p>
              <p className="text-sm text-gray-500 mt-2">
                Start by adding a product above!
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li
                  key={index}
                  className="bg-[#1f2937] px-4 py-3 rounded-md flex justify-between items-center shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <span className="font-medium">{product}</span>
                  <button
                    onClick={() => handleDeleteProduct(index)}
                    className="group relative px-3 py-1 rounded-md text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-all duration-200"
                  >
                    <span>Delete</span>
                    <span className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 rounded-md transition-opacity duration-200"></span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
