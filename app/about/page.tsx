import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    position: 'Founder & CEO',
    imageUrl: '/images/sophia.jpg',
    bio: 'With over a decade of experience in the cosmetics industry, Sophia brings her passion for beauty and innovation to GlamCS.',
  },
  {
    name: 'James Lee',
    position: 'Chief Marketing Officer',
    imageUrl: '/images/james.jpg',
    bio: 'An expert in digital marketing, James ensures that GlamCS reaches beauty enthusiasts everywhere.',
  },
  {
    name: 'Ava Thompson',
    position: 'Product Development Manager',
    imageUrl: '/images/ava.jpg',
    bio: 'Ava’s creative vision drives the development of our luxurious and effective cosmetic products.',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.header 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">About GlamCS</h1>
        <p className="mt-4 text-lg">Elevating beauty through luxury and innovation.</p>
      </motion.header>

      <motion.section 
        className="mb-12"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Our History</h2>
        <p className="text-md">
          Founded in 2023, GlamCS was born out of a desire to provide high-quality, luxurious cosmetics that empower individuals to express their beauty. From our innovative formulations to our elegant packaging, every aspect of GlamCS reflects our commitment to excellence.
        </p>
      </motion.section>

      <motion.section 
        className="mb-12"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-5 text-md">
          <li>Luxury: We believe in providing a high-end experience in every product.</li>
          <li>Innovation: Continually evolving our products to meet beauty trends.</li>
          <li>Sustainability: Committed to eco-friendly practices and responsible sourcing.</li>
        </ul>
      </motion.section>

      <motion.section 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="col-span-full text-3xl font-semibold mb-4 text-center">Meet Our Team</h2>
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-orange-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={member.imageUrl} alt={member.name} className="rounded-full w-32 h-32 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-center">{member.name}</h3>
            <p className="text-md text-center text-gray-600">{member.position}</p>
            <p className="text-md text-center mt-2">{member.bio}</p>
          </div>
        ))}
      </motion.section>
    </div>
  );
};

export default AboutPage;