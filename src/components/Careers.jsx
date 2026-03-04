import React from 'react';
import { Users, Briefcase, Target, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Careers = () => {
  const opportunities = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Research Participants",
      description: "Join our panel and share your opinions. Participate in surveys and focus groups to influence products and services.",
      cta: "Join Our Panel",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Field Interviewers",
      description: "Become part of our field team. We're looking for trained interviewers across multiple African countries.",
      cta: "Apply Now",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Career Opportunities",
      description: "Explore full-time positions in research, data analysis, operations, and more. Grow your career with us.",
      cta: "View Openings",
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "Competitive compensation",
    "Professional development",
    "Flexible working arrangements",
    "Collaborative environment",
    "Impactful work",
    "Growth opportunities"
  ];

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Opportunities at WCRL
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team and make an impact through quality research
          </p>
        </motion.div>

        {/* Opportunity Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${opportunity.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                {opportunity.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {opportunity.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {opportunity.description}
              </p>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all group-hover:text-primary-700"
              >
                {opportunity.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Why Join Us Section */}
        <motion.div
          className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Why Work With Us?
              </h3>
              <p className="text-primary-100 text-lg mb-8">
                At World-Class Research Limited, we're committed to creating an environment where talented individuals can thrive and make meaningful contributions to research excellence across Africa.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-2 text-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-6">
                Application Process
              </h4>
              <div className="space-y-4">
                {[
                  { step: "1", text: "Submit your application" },
                  { step: "2", text: "Initial screening" },
                  { step: "3", text: "Interview & assessment" },
                  { step: "4", text: "Onboarding & training" }
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <span className="text-white">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Careers;
