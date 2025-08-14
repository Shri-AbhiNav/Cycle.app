import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, MessageSquare, Send, Tag, Users, LayoutGrid } from "lucide-react";

// WebM assets
import video1 from "@/assets/helicopter.webm";
import video2 from "@/assets/orange-bucket.webm";
import video3 from "@/assets/green-beanie.webm";
import video4 from "@/assets/red-cap.webm";

import heroImage from "@/assets/img.png";

const logos = [
  { name: "Brex" },
  { name: "Alan" },
  { name: "Qonto" },
  { name: "Customer.io" },
  { name: "Gorgias" },
  { name: "Akeneo" },
  { name: "Alma" },
  { name: "Shortcut" },
  { name: "Swan" },
  { name: "Strapi" },
];

const HeroSection = () => {
  return (
    <div>
      <section className="relative min-h-[78vh] flex flex-col items-center justify-center bg-white overflow-hidden">
      {}
      {}
      <motion.div
        className="pointer-events-none select-none absolute left-30 md:left-52 top-32 w-32 md:w-48"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <video autoPlay muted loop playsInline className="w-full h-full object-contain">
          <source src={video1} type="video/webm" />
        </video>
      </motion.div>

      {}
      <motion.div
        className="pointer-events-none select-none absolute left-28 md:left-44 bottom-32 w-24 md:w-32"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <video autoPlay muted loop playsInline className="w-full h-full object-contain">
          <source src={video2} type="video/webm" />
        </video>
      </motion.div>

      {}
      <motion.div
        className="pointer-events-none select-none absolute right-32 md:right-48 top-32 w-24 md:w-32"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
      >
        <video autoPlay muted loop playsInline className="w-full h-full object-contain">
          <source src={video3} type="video/webm" />
        </video>
      </motion.div>

      {}
      <motion.div
        className="pointer-events-none select-none absolute right-40 md:right-64 bottom-32 w-32 md:w-48"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <video autoPlay muted loop playsInline className="w-full h-full object-contain">
          <source src={video4} type="video/webm" />
        </video>
      </motion.div>

      {}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl mt-44 md:text-6xl font-bold text-gray-900 tracking-tight"
        >
          Together we ship alone
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-base md:text-lg text-gray-600"
        >
          Organize your feedback. Understand your customers. Close the loop.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            variant="outline"
            className="rounded-full px-6 py-2 text-sm md:text-base font-medium"
          >
            Watch video
          </Button>
          <Button className="bg-black text-white hover:bg-gray-900 rounded-full px-6 py-2 text-sm md:text-base font-medium">
            Book a demo
          </Button>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 w-full max-w-4xl mx-auto"
        >
          {}
          <div className="flex justify-center items-center gap-8 mb-4">
            {logos.slice(0, 5).map((logo) => (
              <div key={logo.name} className="text-gray-500">
                <span className="text-sm font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
          
          {}
          <div className="flex justify-center items-center gap-8">
            {logos.slice(5).map((logo) => (
              <div key={logo.name} className="text-gray-500">
                <span className="text-sm font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <div className="w-full flex justify-center px-4 pt-24 pb-24">
      <div className="w-full max-w-5xl rounded-2xl overflow-hidden relative">
        <div className="absolute inset-0 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] z-10 pointer-events-none"></div>
        <div className="absolute inset-0 rounded-2xl shadow-[inset_0_25px_50px_-12px_rgba(0,0,0,0.25)] z-10 pointer-events-none"></div>
        <img 
          src={heroImage} 
          alt="Hero" 
          className="w-full h-auto rounded-2xl relative z-0"
        />
      </div>
    </div>

    {}
    <div className="w-full bg-white pt-0 pb-2 -mt-16">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
        <div className="flex flex-nowrap gap-8 justify-center items-center py-2">
          {[
            { title: "Ask Cycle", icon: <MessageCircle className="h-5 w-5 text-blue-600" /> },
            { title: "Feedback", icon: <MessageSquare className="h-5 w-5 text-green-600" /> },
            { title: "Requests", icon: <Send className="h-5 w-5 text-purple-600" /> },
            { title: "Releases", icon: <Tag className="h-5 w-5 text-yellow-600" /> },
            { title: "Customers", icon: <Users className="h-5 w-5 text-red-600" /> },
            { title: "Product areas", icon: <LayoutGrid className="h-5 w-5 text-indigo-600" /> },
          ].map((feature, index) => (
            <div key={feature.title} className="flex-shrink-0 flex items-center space-x-2">
              <div className="p-1.5 rounded-md bg-gray-50">
                {feature.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
