import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Calendar } from "lucide-react";
import { experiences } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current || !lineRef.current) return;

      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center+=100",
            end: "bottom center",
            scrub: 0.5,
          },
        }
      );

      const items = gsap.utils.toArray(".experience-item");

      items.forEach((item) => {
        const icon = item.querySelector(".experience-icon");
        const content = item.querySelector(".experience-content");
        const iconInner = item.querySelector(".experience-icon-inner");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top center+=50",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        });

        tl.to(icon, {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
        })
          .to(
            iconInner,
            {
              backgroundColor: (index, target) => target.dataset.color,
              boxShadow: (index, target) => `0 0 20px ${target.dataset.color}`,
              color: "#fff",
              duration: 0.3,
            },
            "<"
          )
          .fromTo(
            content,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
            "-=0.2"
          );
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative max-w-4xl mx-auto py-20 px-4 md:px-0"
    >
      <div className="absolute left-[28px] md:left-12 top-0 bottom-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[2px] h-full bg-neutral-200 rounded-full" />

        <div
          ref={lineRef}
          className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-violet-500 via-rose-500 to-cyan-500 shadow-[0_0_15px_rgba(139,92,246,0.5)] rounded-full"
          style={{ height: "0%" }}
        />
      </div>

      <div className="space-y-24">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="experience-item relative grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] gap-6 md:gap-10"
          >
            <div className="relative flex flex-col items-center justify-start pt-2">
              <div className="experience-icon opacity-0 scale-50 z-10 p-2 rounded-full bg-white border-4 border-neutral-100 shadow-xl">
                <div
                  className="experience-icon-inner w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-neutral-50 text-neutral-400 transition-colors"
                  data-color={exp.color}
                >
                  <exp.Icon size={24} />
                </div>
              </div>
            </div>

            <div className="experience-content opacity-0">
              <h3 className="text-3xl font-bold text-neutral-900 mb-2 tracking-tight">
                {exp.role}
              </h3>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className="text-lg font-semibold"
                  style={{ color: exp.color }}
                >
                  {exp.company}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                <div className="flex items-center gap-1.5 text-neutral-500 text-sm font-medium">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                  Responsibilities
                </h4>
                <ul className="space-y-3">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-300 group-hover:scale-125"
                        style={{ backgroundColor: exp.color }}
                      />
                      <p className="text-neutral-600 leading-relaxed text-base md:text-lg font-medium">
                        {desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
