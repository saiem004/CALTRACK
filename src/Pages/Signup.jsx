import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Flame, Award, BarChart3, Bell, Check, Shield, Zap } from 'lucide-react';

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    agreeToTerms: false
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
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const features = [
    {
      icon: <Flame className="w-5 h-5" />,
      title: "Build Streaks",
      description: "Stay consistent daily",
      color: "text-orange-500"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Earn Badges",
      description: "Celebrate achievements",
      color: "text-yellow-500"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Track Progress",
      description: "Monitor your goals",
      color: "text-pink-500"
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: "Smart Reminders",
      description: "Never miss a log",
      color: "text-red-500"
    }
  ];

  const benefits = [
    { icon: <Check className="w-4 h-4" />, text: "All Features" },
    { icon: <Shield className="w-4 h-4" />, text: "Secure & Private" },
    { icon: <Zap className="w-4 h-4" />, text: "Easy to Use" }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left side - Features */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-400 via-green-500 to-blue-500 p-12 text-white flex-col justify-center relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-600/20"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          {/* Logo */}
          <div className="flex items-center mb-16">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
              <Activity className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Main content */}
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-4">Start Your Journey!</h1>
            <p className="text-lg mb-12 text-white/90">
              Unlock all features and begin tracking your health goals
            </p>

            {/* Feature list */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                  <div className={`${feature.color} bg-white/20 p-2 rounded-lg`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-white/80 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 lg:px-16 bg-gray-50">
        <div className="mx-auto w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center justify-center mb-8">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-2">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">CalTrack</span>
          </div>

          {/* Form header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
            <p className="text-gray-600">Start your health journey today</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-green-600 hover:text-green-500 font-medium">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-green-600 hover:text-green-500 font-medium">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
            >
              Create Account
            </button>
          </form>

          {/* Sign in link */}
          <p className="text-center mt-6 text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="text-green-600 hover:text-green-500 font-semibold">
              Sign in
            </Link>
          </p>

          {/* Benefits */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600 mb-4">What you'll get for free:</p>
            <div className="flex justify-center space-x-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-1">
                  <div className="text-green-500">{benefit.icon}</div>
                  <span className="text-sm text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}