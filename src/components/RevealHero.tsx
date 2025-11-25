import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { RevealProps } from "../types";

export const RevealHero: React.FC<RevealProps> = ({
  topImage,
  bottomImage,
  alt,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 0
  );
  const mouseY = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight / 2 : 0
  );

  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 200, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const maskImage = useMotionTemplate`radial-gradient(circle at ${smoothX}px ${smoothY}px, transparent 0px, transparent 120px, black 180px)`;
  const webkitMaskImage = maskImage;

  const maskImageBottom = useMotionTemplate`radial-gradient(circle at ${smoothX}px ${smoothY}px, black 0px, black 120px, transparent 180px)`;
  const webkitMaskImageBottom = maskImageBottom;

  const moveX = useTransform(smoothX, [0, window.innerWidth], [25, -25]);
  const moveY = useTransform(smoothY, [0, window.innerHeight], [25, -25]);

  const fgX = useTransform(smoothX, [0, window.innerWidth], [-5, 5]);
  const fgY = useTransform(smoothY, [0, window.innerHeight], [-5, 5]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-white flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
        style={{
          x: moveX,
          y: moveY,
          scale: 1.05,
          maskImage: maskImageBottom,
          WebkitMaskImage: webkitMaskImageBottom,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        <img
          src={bottomImage}
          alt="Revealed Helmet"
          className="h-[90%] w-auto object-contain max-w-none md:h-[95%]"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-10"
        style={{
          maskImage,
          WebkitMaskImage: webkitMaskImage,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          x: fgX,
          y: fgY,
          scale: 1.02,
        }}
      >
        <img
          src={topImage}
          alt={alt}
          className="h-[90%] w-auto object-contain max-w-none md:h-[95%]"
        />
      </motion.div>

      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-20 w-[360px] h-[360px] rounded-full border border-[#ccff00]/60 mix-blend-difference hidden md:block"
        style={{
          x: useTransform(smoothX, (x) => x - 180),
          y: useTransform(smoothY, (y) => y - 180),
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ opacity: { duration: 0.2 } }}
      />

      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 20 Q 50 -20 100 20"
            fill="transparent"
            stroke="black"
            strokeWidth="0.1"
          />
          <path
            d="M0 50 Q 50 100 100 50"
            fill="transparent"
            stroke="black"
            strokeWidth="0.1"
          />
          <circle
            cx="80"
            cy="20"
            r="10"
            stroke="black"
            strokeWidth="0.1"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};
