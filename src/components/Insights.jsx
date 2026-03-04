import React from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/content';

const Insights = () => {
  const categoryColors = {
    'Market Research': 'bg-blue-100 text-blue-700',
    'Technology': 'bg-purple-100 text-purple-700',
    'Social Research': 'bg-green-100 text-green-700'
  };

  return (
    <section id="insights" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mb-6">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Insights & Reports
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest research findings and industry insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-500 to-accent-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${categoryColors[post.category]}`}>
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Insights
          </a>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary-700 to-primary-900 rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest research insights and industry trends
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <button className="bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-700 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Insights;
