import React, { useContext, useRef } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { AuthContext } from "../../../context/authContecxt";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { login } = useContext(AuthContext);
  const email = useRef(null);
  const password = useRef(null);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const emailAuth = email.current.value;
    const passwordAuth = password.current.value;

    try {
      await login(emailAuth, passwordAuth);
      alert("login successful ");
    } catch (err) {
      console.error("login error :", err.message);
    }

    email.current.value = "";
    password.current.value = "";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f1a] p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <div className="bg-[#101826] rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-white mb-2"
            >
              Welcome Back
            </motion.h1>
            <p className="text-gray-400">Sign in to access your dashboard</p>
          </div>

          <form onSubmit={handelSubmit} className="space-y-6">
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" />
                <input
                  type="email"
                  className="w-full bg-[#1a2332] text-white rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                  required
                  ref={email}
                />
              </div>
            </div>

            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-[#1a2332] text-white rounded-lg pl-10 pr-12 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors"
                  placeholder="Enter your password"
                  required
                  ref={password}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400 hover:text-green-300 focus:outline-none"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-green-500 rounded focus:ring-green-500 border-gray-600 bg-[#1a2332]"
                />
                <span className="text-gray-300">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm text-green-400 hover:text-green-300 focus:outline-none"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg py-3 font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-[#101826] transition-all"
            >
              Sign In
            </button>
          </form>

          <div className="text-center text-gray-400 text-sm">
            <p>
              Don't have an account?{" "}
              <button className="text-green-400 hover:text-green-300 focus:outline-none">
                Contact Admin
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
