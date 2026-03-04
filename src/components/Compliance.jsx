import React from 'react';
import { Shield, CheckCircle, FileText, Lock, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Compliance = () => {
  const complianceStandards = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Protection & Privacy",
      description: "We adhere to strict data protection regulations including GDPR and local data privacy laws across all African markets we operate in.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "ISO certified processes ensure consistent quality in data collection, analysis, and reporting across all our research projects.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Ethical Standards",
      description: "Member of ESOMAR and PAMRO, we follow international codes of conduct for market and social research practices.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Information Security",
      description: "Advanced encryption and secure data handling protocols protect client information and research participant data.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Participant Rights",
      description: "We ensure informed consent, voluntary participation, and confidentiality for all research participants.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Certifications",
      description: "Accredited by leading research associations and regularly audited for compliance and quality standards.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const certifications = [
    "ESOMAR Member",
    "PAMRO Certified",
    "ISO 9001:2015",
    "GDPR Compliant",
    "Data Protection Certified"
  ];

  return (
    <section id="compliance" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Compliance & Ethics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Committed to the highest standards of research integrity and data protection
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {complianceStandards.map((standard, index) => {
            const colorClass = 'bg-gradient-to-r ' + standard.color;
            return (
              <motion.div
                key={standard.title}
                className="group bg-white rounded-xl shadow-lg p-8 border-2 border-transparent hover:border-primary-500 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div