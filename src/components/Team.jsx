import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { companyData } from '../data/content';

const Team = () => {
  // Generate gradient backgrounds for team member avatars
  const gradients = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500',
    'from-green-500 to-emerald-500'
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate professionals dedicated to delivering excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyData.team.map((member, index) => (
            <motion.div
              key={member.name}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                {/* Avatar */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center`}>
                    <span className="text-white text-6xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a 
                      href={`mailto:${companyData.contact.email}`}
                      className="bg-white text-primary-600 p-3 rounded-full hover:bg-primary-50 transition-colors"
                      aria-label="Send email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a 
                      href="#"
                      className="bg-white text-primary-600 p-3 rounded-full hover:bg-primary-50 transition-colors"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl text-gray-600 mb-6">
            Want to join our talented team?
          </p>
          <a
            href="#careers"
            className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Open Positions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
