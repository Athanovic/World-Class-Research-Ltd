import React, { useState } from 'react';
import { MapPin, Globe, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { companyData } from '../data/content';

const Coverage = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const colors = ['#0ea5e9', '#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899'];

  return (
    <section id="coverage" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mb-6">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Global Coverage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Successfully conducting diverse research studies across 18 African countries
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {companyData.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Chart */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Projects by Country
            </h3>
            <p className="text-gray-600">
              Click on any country to see detailed information
            </p>
          </div>

          <ResponsiveContainer width="100%" height={400}>
            <BarChart 
              data={companyData.africaCoverage}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="country" 
                angle={-45}
                textAnchor="end"
                height={100}
                tick={{ fill: '#6b7280', fontSize: 12 }}
              />
              <YAxis tick={{ fill: '#6b7280' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white'
                }}
                cursor={{ fill: 'rgba(14, 165, 233, 0.1)' }}
              />
              <Bar 
                dataKey="projects" 
                radius={[8, 8, 0, 0]}
                onClick={(data) => setSelectedCountry(data)}
                cursor="pointer"
              >
                {companyData.africaCoverage.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={selectedCountry?.country === entry.country ? '#f59e0b' : colors[index % colors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          {selectedCountry && (
            <motion.div
              className="mt-6 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary-600" />
                <h4 className="text-xl font-bold text-gray-900">
                  {selectedCountry.country}
                </h4>
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">{selectedCountry.projects}</span> completed projects
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Key Markets */}
        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {['Kenya', 'Uganda', 'Tanzania'].map((country, index) => (
            <motion.div
              key={country}
              className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-6 text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <MapPin className="w-8 h-8 mb-3 text-accent-400" />
              <h4 className="text-xl font-bold mb-2">{country}</h4>
              <p className="text-primary-100">Primary research market with extensive project portfolio</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Coverage;
