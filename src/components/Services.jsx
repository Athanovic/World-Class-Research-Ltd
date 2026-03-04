import React from 'react';
import { ShoppingCart, Users, BarChart3, Phone, Tv, Database, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { companyData } from '../data/content';

const Services = () => {
  const serviceCategories = [
    {
      title: "Market Research",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-blue-600 to-cyan-600",
      services: companyData.services.marketResearch
    },
    {
      title: "Social Research",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-600 to-pink-600",
      services: companyData.services.socialResearch
    },
    {
      title: "Additional Services",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-600 to-red-600",
      services: companyData.services.additionalServices
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive research solutions tailored to your needs
          </p>
        </motion.div>

        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.title}
                    className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-primary-300 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
