import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../constants/animation";

const testimonials = [
  {
    name: "Sarah Johnson",
    achievement: "Lost 25 lbs",
    quote: "The streak system kept me motivated every day. I've never been more consistent with tracking my calories!",
    avatar: "SJ",
    rating: 5
  },
  {
    name: "Mike Chen",
    achievement: "Gained 15 lbs muscle",
    quote: "CalTrack made it so easy to hit my calorie and protein goals. The reminders are a game-changer!",
    avatar: "MC",
    rating: 5
  },
  {
    name: "Emily Davis",
    achievement: "Maintained weight for 1 year",
    quote: "Simple, effective, and motivating. The badge system makes healthy eating feel like a fun game!",
    avatar: "ED",
    rating: 5
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <motion.div className="max-w-6xl mx-auto text-center" {...staggerContainer}>
        <motion.h2 {...fadeInUp} className="text-4xl font-bold text-gray-900 mb-4">
          What Our Users Say
        </motion.h2>
        <motion.p {...fadeInUp} className="text-gray-600 text-lg mb-12">
          Real stories from people who achieved their goals
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Avatar and Name */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-green-600 font-medium text-sm">{testimonial.achievement}</p>
                </div>
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 italic text-left mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Star Rating */}
              <div className="flex justify-start">
                <StarRating rating={testimonial.rating} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}