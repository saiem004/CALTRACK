import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, Activity, Trophy, BarChart3, Target } from 'lucide-react';
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  scaleIn, 
  staggerContainer, 
  hoverScale, 
  float 
} from "../constants/animation";

const CalTrackSignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in attempted with:', formData);
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Panel */}
      <motion.div 
        className="flex-1 bg-gradient-to-br from-green-400 via-green-500 to-blue-500 p-12 text-white flex-col justify-center relative overflow-hidden"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
          {...float}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl"
          animate={{
            y: [10, -10, 10],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />

        {/* Logo */}
        <motion.div 
          className="mb-8"
          {...scaleIn}
        >
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Activity className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        {/* Welcome Text */}
        <motion.div 
          className="text-center mb-12"
          {...fadeInLeft}
        >
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-xl text-white/90">Continue your health journey with CalTrack</p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div 
          className="grid grid-cols-2 gap-6 w-full max-w-md"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white/20 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center"
            variants={fadeInUp}
            {...hoverScale}
          >
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mb-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <h3 className="font-semibold mb-1">Track Streaks</h3>
          </motion.div>

          <motion.div 
            className="bg-white/20 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center"
            variants={fadeInUp}
            {...hoverScale}
          >
            <Trophy className="w-8 h-8 text-yellow-400 mb-3" />
            <h3 className="font-semibold mb-1">Earn Badges</h3>
          </motion.div>

          <motion.div 
            className="bg-white/20 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center"
            variants={fadeInUp}
            {...hoverScale}
          >
            <BarChart3 className="w-8 h-8 text-blue-300 mb-3" />
            <h3 className="font-semibold mb-1">View Progress</h3>
          </motion.div>

          <motion.div 
            className="bg-white/20 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center"
            variants={fadeInUp}
            {...hoverScale}
          >
            <Target className="w-8 h-8 text-pink-400 mb-3" />
            <h3 className="font-semibold mb-1">Reach Goals</h3>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Panel */}
      <motion.div 
        className="flex-1 flex flex-col justify-center items-center p-12 bg-white"
        {...fadeInRight}
      >
        <div className="w-full max-w-md">
          {/* Header */}
          <motion.div 
            className="text-right mb-8"
            {...fadeInUp}
          >
            <div className="flex items-center justify-end mb-4">
              <Activity className="w-6 h-6 text-teal-500 mr-2" />
              <span className="text-xl font-bold text-gray-800">CalTrack</span>
            </div>
          </motion.div>

          {/* Sign In Form */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Sign In</h2>
            <p className="text-gray-600">Welcome back to your health journey</p>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-teal-500 hover:text-teal-600 transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-teal-600 hover:to-blue-600 transition-all duration-200 shadow-lg"
              {...hoverScale}
            >
              Sign In
            </motion.button>
          </motion.form>

          {/* Sign Up Link */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-teal-500 hover:text-teal-600 font-semibold transition-colors">
                Sign up free
              </a>
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="text-center mt-12 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-gray-600">Join 10,000+ users tracking their health</p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                Secure
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                Easy to Use
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                4.8 Rating
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CalTrackSignIn;