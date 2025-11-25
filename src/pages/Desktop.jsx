import React, { useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { motion, AnimatePresence } from "framer-motion";

import { Dock, Home, Navbar, Welcome } from "#components";
import {
  Finder,
  Resume,
  Safari,
  Terminal,
  Text,
  Image,
  Contact,
  Photos,
} from "#windows";
import { LoadingScreen } from "../components/LoadingScreen";

gsap.registerPlugin(Draggable);

const Desktop = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <motion.div
        layoutId="portfolio-expand"
        className="fixed inset-0 z-[100] bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ pointerEvents: "none" }}
      />
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />

      <Home />
    </main>
  );
};
export default Desktop;
