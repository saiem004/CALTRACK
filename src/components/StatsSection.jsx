import { motion } from "framer-motion";
import { Users, Utensils, Star, Calculator } from "lucide-react";
import { fadeInUp } from "../constants/animation";

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "10K+",
      label: "Active Users",
      color: "text-purple-600"
    },
    {
      icon: Utensils,
      value: "500K+",
      label: "Meals Tracked",
      color: "text-purple-400"
    },
    {
      icon: Star,
      value: "95%",
      label: "User Satisfaction",
      color: "text-yellow-500"
    },
    {
      icon: Calculator,
      value: "4.8★",
      label: "App Rating",
      color: "text-blue-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <motion.div
        className="max-w-6xl mx-auto text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        {...fadeInUp}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className={`p-3 rounded-full bg-gray-50 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900 mb-1">
                {stat.value}
              </p>
              <p className="text-gray-600 text-sm font-medium">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}