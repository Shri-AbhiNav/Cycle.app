import { motion } from "framer-motion";
import feedbackMockup from "@/assets/feedback.png"; 
import { Button } from "./ui/button";
import { ChatBubbleLeftRightIcon, TagIcon } from '@heroicons/react/24/outline';

const FeedbackSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Column */}
          <div className="lg:w-1/2">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl text-gray-500 mb-2">
                Thanks for your feedback
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Feedback, captured from everywhere
              </h3>
            </motion.div>

            {/* Feedback Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <img
                src={feedbackMockup}
                alt="Feedback Example"
                className="rounded-3xl shadow-lg w-full h-auto object-cover"
                style={{ maxHeight: '500px' }}
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 flex flex-col justify-center h-full lg:py-12">
            {/* Feature Cards */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-all"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    All-in-One Feedback
                  </h3>
                </div>
                <p className="text-gray-600 text-lg">
                Capture feedback from any source – Slack, Zendesk, Gong, Intercom, surveys, support calls, and more.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-all"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <TagIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Smart Auto-Tagging
                  </h3>
                </div>
                <p className="text-gray-600 text-lg">
                Every input is auto-tagged by product area, topic, and role – so it reaches the right team instantly.
                </p>
              </motion.div>
            </div>

            {}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4 rounded-xl">
                See how it works
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
