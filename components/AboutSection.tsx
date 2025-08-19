import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    role: 'Founder & CEO',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Johnson',
    role: 'Chief Product Officer',
    image: '/images/liam.jpg',
  },
  {
    name: 'Olivia Brown',
    role: 'Head of Marketing',
    image: '/images/olivia.jpg',
  }
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white p-10">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-orange-600 mb-6">Our Story</h2>
        <p className="text-lg text-gray-700 mb-8">
          At GlamCS, we believe that beauty is an art that everyone can master. Founded in 2023, GlamCS emerged from a passion for high-quality cosmetics that empower individuals to express their unique style. Our products are crafted with the finest ingredients, ensuring a luxurious experience that is both safe and effective.
        </p>
        
        <h2 className="text-4xl font-bold text-orange-600 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-8">
          Our mission at GlamCS is to revolutionize the cosmetics industry by offering innovative products that enhance beauty while promoting self-confidence. We are committed to sustainability and ethical practices, ensuring that every GlamCS product not only looks good but also feels good to use.
        </p>

        <h2 className="text-4xl font-bold text-orange-600 mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-orange-100 rounded-lg p-5 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img src={member.image} alt={member.name} className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-orange-600">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <h2 className="text-4xl font-bold text-orange-600 mt-10 mb-6">Our Values</h2>
        <p className="text-lg text-gray-700 mb-8">
          At GlamCS, we value innovation, inclusivity, and integrity. Our achievements reflect our commitment to excellence in every aspect of our business, from product development to customer service. Join us on our journey to redefine beauty in the modern world.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;