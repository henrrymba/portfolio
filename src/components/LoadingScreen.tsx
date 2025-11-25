import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

const TextDecode = ({
  text,
  trigger,
  delay = 0,
  onComplete,
}: {
  text: string;
  trigger: boolean;
  delay?: number;
  onComplete?: () => void;
}) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!trigger) return;

    let interval: ReturnType<typeof setInterval>;

    const startDelay = setTimeout(() => {
      let iteration = 0;
      interval = setInterval(() => {
        setDisplayText(() =>
          text
            .split("")
            .map((_, index) => {
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          if (onComplete) onComplete();
        }

        iteration += 1 / 3;
      }, 30);
    }, delay);

    return () => {
      clearTimeout(startDelay);
      if (interval) clearInterval(interval);
    };
  }, [text, trigger, delay, onComplete]);

  return <span>{displayText}</span>;
};

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);
  const [bottomText, setBottomText] = useState("FRONTEND DEVELOPER");

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 500);

    const t2 = setTimeout(() => setStep(2), 1500);

    const t3 = setTimeout(() => {
      setBottomText("APPLE FANBOY");
      setStep(3);
    }, 4500);

    const t4 = setTimeout(() => {
      setStep(4);
    }, 7000);

    const t5 = setTimeout(() => {
      onComplete();
    }, 8000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative w-full h-1/2 bg-white flex items-end justify-center pb-2 overflow-hidden"
        initial={{ y: 0 }}
        animate={step === 4 ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
          <TextDecode text="HENRRY" trigger={step >= 1} />
        </div>
      </motion.div>

      <motion.div
        className="w-full h-px bg-gray-200"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: step >= 1 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="relative w-full h-1/2 bg-white flex items-start justify-center pt-2 overflow-hidden"
        initial={{ y: 0 }}
        animate={step === 4 ? { y: "100%" } : { y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="text-xl md:text-2xl font-bold tracking-widest uppercase text-gray-800">
          <TextDecode
            key={bottomText}
            text={bottomText}
            trigger={step >= 2}
            delay={step === 3 ? 0 : 500}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
