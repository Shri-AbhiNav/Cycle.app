import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import voiceHunter from "@/assets/yellow.png";
import pathFinder from "@/assets/voilet.png";
import loopCloser from "@/assets/goggels.png";
import { Button } from "@/components/ui/button";

const agents = [
  {
    image: voiceHunter,
    subtitle: "Understanding Customers",
    title: "@VoiceHunter",
    bg: "bg-purple-100",
  },
  {
    image: pathFinder,
    subtitle: "Shaping the Product",
    title: "@Pathfinder",
    bg: "bg-sky-100",
  },
  {
    image: loopCloser,
    subtitle: "Closing the Loop",
    title: "@LoopCloser",
    bg: "bg-amber-100",
  },
];

const revealLines = [
  {
    text: "You don't need more feedback.",
    highlight: "",
    size: "text-3xl md:text-4xl lg:text-5xl font-semibold"
  },
  {
    text: "You need a ",
    highlight: "feedback loop. ⟲",
    highlightColor: "text-blue-600 font-bold",
    size: "text-3xl md:text-4xl lg:text-5xl font-semibold"
  },
  {
    text: "Because without the loop, feedback is ",
    highlight: "noise.",
    highlightColor: "text-red-500 font-bold",
    size: "text-2xl md:text-3xl lg:text-4xl"
  },
  {
    text: "With it, it becomes ",
    highlight: "alignment, clarity, and trust.✧˖°",
    highlightColor: "text-green-600 font-bold",
    size: "text-2xl md:text-3xl lg:text-4xl"
  }
];

const AgentsSection = () => {
  const sectionRef = useRef(null);

  return (
    <div>
      {/* Product Agents Section */}
      <section className="py-44 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          {/* Heading */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center leading-tight">
              Meet your product agents – built to bring the voice-of-customer
              into every release.
            </h3>
          </div>

          {/* Cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <div
                key={index}
                className={`rounded-3xl p-0 flex flex-col items-center ${agent.bg} h-[400px]`}
              >
                <motion.div
                  whileHover={{ y: -60 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-60 h-60 mb-4 flex items-center justify-center"
                >
                  <img
                    src={agent.image}
                    alt={agent.title}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <p className="text-gray-700 font-medium">{agent.subtitle}</p>
                <h3 className="text-2xl font-bold mt-1">{agent.title}</h3>
              </div>
            ))}
          </div>

          {/* Bottom buttons */}
          <div className="mt-12 flex justify-center gap-4">
            <Button variant="outline">Explore product agents</Button>
            <Button className="bg-black text-white hover:bg-gray-800">
              Book a demo
            </Button>
          </div>
        </div>
      </section>

      {/* Scroll-Snap Text Section */}
      <section className="min-h-screen bg-white py-1">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative min-h-screen flex flex-col justify-center">
            {revealLines.map((item, idx) => {
              const lineRef = useRef<HTMLDivElement>(null);
              const isInView = useInView(lineRef, { margin: "-20% 0px -20% 0px" });
              const isActive = isInView;

              return (
                <motion.div
                  key={idx}
                  ref={lineRef}
                  className={`${item.size} font-bold leading-tight mb-12 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-30'}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: isActive ? 0 : 20,
                    opacity: isActive ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {item.text}
                  {item.highlight && (
                    <span className={item.highlightColor}>
                      {item.highlight}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentsSection;
