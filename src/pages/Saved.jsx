import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Saved = () => {
  const [savedGigs, setSavedGigs] = useState([]);

  useEffect(() => {
    const gigs = JSON.parse(localStorage.getItem("savedGigs")) || [];
    setSavedGigs(gigs);
  }, []);

  return (
    <motion.div
      className="p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-primary">Saved Gigs</h1>
      {savedGigs.length > 0 ? (
        savedGigs.map((gig, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-5 mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-xl font-bold">{gig.title}</h3>
            <p className="text-gray-600">{gig.company}</p>
            <p className="text-green-600">{gig.payment}</p>
          </motion.div>
        ))
      ) : (
        <p>No gigs saved.</p>
      )}
    </motion.div>
  );
};

export default Saved;
