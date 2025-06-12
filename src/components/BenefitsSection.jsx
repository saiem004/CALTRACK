import React from 'react';
import { Target, BarChart3, Utensils, Trophy, Calculator, Clock, TrendingUp, Bell } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: "Set and achieve personalized health goals",
    color: "text-pink-500"
  },
  {
    icon: BarChart3,
    title: "Track calories, macros, and exercise effortlessly",
    color: "text-purple-500"
  },
  {
    icon: Trophy,
    title: "Stay motivated with streaks and achievement badges",
    color: "text-orange-500"
  },
  {
    icon: Clock,
    title: "Never forget to log with smart daily reminders",
    color: "text-red-500"
  },
  {
    icon: TrendingUp,
    title: "Monitor your progress with detailed analytics",
    color: "text-blue-500"
  },
  {
    icon: Bell,
    title: "Keep your data secure and private",
    color: "text-yellow-500"
  }
];

const features = [
  {
    icon: "🔥",
    title: "Daily Streaks",
    desc: "Build consistency",
    bgColor: "bg-orange-50"
  },
  {
    icon: "🏆",
    title: "Achievement Badges",
    desc: "Celebrate milestones",
    bgColor: "bg-yellow-50"
  },
  {
    icon: "📱",
    title: "Easy Logging",
    desc: "Quick manual entry",
    bgColor: "bg-blue-50"
  },
  {
    icon: "🎯",
    title: "Smart Goals",
    desc: "Personalized targets",
    bgColor: "bg-pink-50"
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    desc: "Visual analytics",
    bgColor: "bg-green-50"
  },
  {
    icon: "⏰",
    title: "Smart Reminders",
    desc: "Never miss a log",
    bgColor: "bg-purple-50"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Why Choose CalTrack?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of users who have transformed their health with our comprehensive tracking system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Main Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`${benefit.color} bg-white p-3 rounded-full shadow-md flex-shrink-0`}>
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 leading-relaxed">
                      {benefit.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Feature Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`${feature.bgColor} p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white/50`}
              >
                <div className="text-4xl mb-4 text-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-br from-green-400 via-green-500 to-blue-500 px-8 py-3 text-white rounded-full text-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Health Journey
          </button>
        </div>
      </div>
    </section>
  );
}