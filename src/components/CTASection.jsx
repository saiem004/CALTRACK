import { motion } from "framer-motion";
import { fadeInUp } from "../constants/animation";

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-green-500 to-blue-500 text-white text-center">
      <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">Ready to Take Control?</h2>
        <p className="mt-4 text-lg">
          Start tracking your calories and feel the difference.
        </p>
        <div className="mt-8">
          <a
            href="/signup"
            className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Get Started Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}
