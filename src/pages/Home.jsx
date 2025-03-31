import React, { useState } from "react";
import GigList from "../components/GigList";
import { motion } from "framer-motion";

const Home = () => {
  const [savedGigs, setSavedGigs] = useState(
    JSON.parse(localStorage.getItem("savedGigs")) || []
  );

  const saveGig = (gig) => {
    const updatedGigs = [...savedGigs, gig];
    setSavedGigs(updatedGigs);
    localStorage.setItem("savedGigs", JSON.stringify(updatedGigs));
  };

  return (
    <motion.div
      className="p-10"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 1 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-primary">Available Gigs</h1>
      <GigList saveGig={saveGig} />
    </motion.div>
  );
};

export default Home;
