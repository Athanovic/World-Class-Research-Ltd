import React from 'react';
import { Target, Eye, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { companyData } from '../data/content';

const About = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Who We Are?",
      content: companyData.about.whoWeAre,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      content: companyData.about.vision,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Our Mission",
      content: companyData.about.mission,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Our Pride",
      content: companyData.about.pride,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600">
            Learn more about our story and values
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scope Section */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-center">Our Scope</h3>
          <p className="text-xl text-center mb-8 text-primary-100">
            We firmly believe that local knowledge and expertise can add true value.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {companyData.scope.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-2" />
                <p className="text-primary-50">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
