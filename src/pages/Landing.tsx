import { useState } from "react";
import { Header } from "../components/Header";
import { RevealHero } from "../components/RevealHero";
import { PortfolioWidget } from "../components/PortfolioWidget";
import { LoadingScreen } from "../components/LoadingScreen";
import { AnimatePresence } from "framer-motion";

export const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Header />
      <RevealHero
        topImage="/images/Henrry_bg.png"
        bottomImage="/images/Henrry_casco_bg.png"
        alt="Henrry Murana"
      />
      <PortfolioWidget />
    </main>
  );
};
