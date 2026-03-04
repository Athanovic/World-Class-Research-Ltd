import React, { useState } from 'react';
import { Briefcase, TrendingUp, Users, Globe, Award, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      title: "National Health Survey - Kenya",
      category: "social",
      client: "Ministry of Health",
      description: "Comprehensive baseline survey covering health access and outcomes across 47 counties.",
      impact: "15,000+ respondents, informed national health policy",
      color: "from-blue-500 to-cyan-500",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Mobile Money Usage Study",
      category: "market",
      client: "Major Telcom Provider",
      description: "Multi-country assessment of mobile money adoption and usage patterns across East Africa.",
      impact: "Covered 5 countries, 8,000+ interviews",
      color: "from-green-500 to-emerald-500",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Agricultural Input Research",
      category: "market",
      client: "International NGO",
      description: "Understanding farmer preferences and purchasing behavior for seeds and fertilizers.",
      impact: "Led to improved product distribution strategies",
      color: "from-orange-500 to-red-500",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Education Access Evaluation",
      category: "social",
      client: "Development Partner",
      description: "Midline and endline evaluation of girls education program across rural communities.",
      impact: "3-year study, 50+ schools, policy recommendations",
      color: "from-purple-500 to-pink-500",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Consumer Brand Tracking",
      category: "market",
      client: "FMCG Company",
      description: "Quarterly brand health monitoring for leading consumer goods brand across urban markets.",
      impact: "Ongoing since 2019, 2,000+ interviews per wave",
      color: "from-indigo-500 to-blue-500",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Community Needs Assessment",
      category: "social",
      client: "Local Government",
      description: "Participatory assessment of infrastructure and service delivery needs in marginalized areas.",
      impact: "Informed county development planning",
      color: "from-pink-500 to-rose-500",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'market', name: 'Market Research' },
    { id: 'social', name: 'Social Research' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="our-work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mb-6">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering impactful research across diverse sectors and geographies
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            const buttonClass = isActive
              ? 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 bg-primary-600 text-white border-primary-600 shadow-lg'
              : 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 bg-white text-gray-700 border-gray-300 hover:border-primary-600 hover:text-primary-600 hover:shadow-md';
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={buttonClass}
              >
                {category.name}
              </button>
            );
          })}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const colorClass = 'bg-gradient-to-r ' + project.color;
            return (
              <motion.div
                key={project.title}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-primary-500 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={'inline-flex p-3 rounded-lg text-white mb-4 group-hover:scale-110 transition-transform duration-300 ' + colorClass}>
                  {project.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-primary-600 font-semibold mb-3">
                  {project.client}
                </p>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Impact:</p>
                  <p className="text-sm text-gray-600">{project.impact}</p>
                </div>

                <div className="mt-4 flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-primary-700 to-primary-900 rounded-2xl p-8 md:p-12 border-2 border-primary-600 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Our Track Record
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "187+", label: "Projects Completed" },
              { number: "113", label: "Satisfied Clients" },
              { number: "18", label: "Countries Covered" },
              { number: "100K+", label: "Interviews Conducted" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center hover:scale-110 transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl text-gray-600 mb-6">
            Ready to start your research project?
          </p>
          
            href="#contact"
            className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-primary-400"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OurWork;