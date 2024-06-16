import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto mt-5"
    >
      <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      {/* Add more content as needed */}
    </motion.div>
  );
};

export default Home;
