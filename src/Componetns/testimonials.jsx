'use client';

import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Photography Club Member",
    feedback:
      "ClubSphere made it incredibly easy to find events that match my passion. The community is welcoming and super active!",
    rating: 5,
  },
  {
    name: "Tanvir Hasan",
    role: "Tech Community Organizer",
    feedback:
      "Managing events and communicating with members has never been this smooth. ClubSphere saved us so much time.",
    rating: 4,
  },
  {
    name: "Nusrat Jahan",
    role: "Yoga & Wellness Enthusiast",
    feedback:
      "I love how simple and clean the platform is. I can join events and track schedules without any confusion.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-white my-10">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0092b8] to-orange-600">Members Say</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-14 text-gray-600"
        >
          Hear from our community members who are growing, connecting, and thriving with ClubSphere.
        </motion.p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gray-50 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 text-left flex flex-col justify-between"
            >
              {/* Quote */}
              <FaQuoteLeft className="text-[#0092b8] text-2xl mb-4" />

              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {item.feedback}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="text-orange-500 text-sm" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
