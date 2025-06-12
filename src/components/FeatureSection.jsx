import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../constants/animation";

const features = [
  {
    title: "Smart calorie tracking",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="28" fill="#4F46E5" fillOpacity="0.1"/>
        <path d="M32 12c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20z" fill="#4F46E5"/>
        <path d="M32 16c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" fill="#6366F1"/>
        <circle cx="32" cy="32" r="8" fill="white"/>
        <text x="32" y="37" textAnchor="middle" className="text-xs font-bold fill-indigo-600">CAL</text>
      </svg>
    )
  },
  {
    title: "Custom diet goals",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="28" fill="#10B981" fillOpacity="0.1"/>
        <path d="M20 28h24v20c0 2.21-1.79 4-4 4H24c-2.21 0-4-1.79-4-4V28z" fill="#10B981"/>
        <path d="M26 28V24c0-3.31 2.69-6 6-6s6 2.69 6 6v4" stroke="#059669" strokeWidth="2" fill="none"/>
        <circle cx="32" cy="38" r="2" fill="white"/>
        <path d="M28 42h8M30 46h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Barcode scanner",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="28" fill="#F59E0B" fillOpacity="0.1"/>
        <rect x="16" y="20" width="32" height="24" rx="2" fill="#F59E0B"/>
        <rect x="20" y="26" width="2" height="12" fill="white"/>
        <rect x="24" y="26" width="1" height="12" fill="white"/>
        <rect x="27" y="26" width="2" height="12" fill="white"/>
        <rect x="31" y="26" width="1" height="12" fill="white"/>
        <rect x="34" y="26" width="3" height="12" fill="white"/>
        <rect x="39" y="26" width="1" height="12" fill="white"/>
        <rect x="42" y="26" width="2" height="12" fill="white"/>
        <path d="M18 18h4v4M42 18h4v4M18 42h4v4M42 42h4v4" stroke="#D97706" strokeWidth="2" fill="none"/>
      </svg>
    )
  },
  {
    title: "Progress tracking",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="28" fill="#8B5CF6" fillOpacity="0.1"/>
        <path d="M20 40l6-6 4 4 10-10" stroke="#8B5CF6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="26" cy="34" r="2" fill="#8B5CF6"/>
        <circle cx="30" cy="38" r="2" fill="#8B5CF6"/>
        <circle cx="40" cy="28" r="2" fill="#8B5CF6"/>
        <path d="M44 24l-4 4v-8h8l-4 4z" fill="#A855F7"/>
        <rect x="18" y="46" width="28" height="1" fill="#E5E7EB"/>
        <rect x="18" y="42" width="1" height="5" fill="#E5E7EB"/>
      </svg>
    )
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        {...staggerContainer}
      >
        <motion.h2 
          {...fadeInUp} 
          className="text-5xl font-bold text-gray-900 mb-6"
        >
          Powerful Features
        </motion.h2>
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-16"
        >
          Everything you need to stay on track with your health goals, 
          designed with simplicity and power in mind.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              
              {/* Subtle hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        </div>
      </motion.div>
    </section>
  );
}