'use client'

import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiFileText, FiMessageSquare, FiZap, FiShield, FiTrendingUp } from 'react-icons/fi'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold text-primary-600 mb-6"
          >
            Revia
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Transform your team's communication with AI-powered automation and insights
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/dashboard"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <FiZap className="text-primary-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-4">AI-Powered Automation</h3>
              <p className="text-gray-600">
                Automatically convert documents into structured workflows, assign tasks, and track progress with our advanced AI algorithms.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <FiShield className="text-primary-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-4">Secure Communication</h3>
              <p className="text-gray-600">
                End-to-end encrypted communications with advanced security features and compliance measures.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <FiTrendingUp className="text-primary-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-4">Smart Analytics</h3>
              <p className="text-gray-600">
                Get actionable insights from your team's communication patterns and workflow efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">AI Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-2xl font-semibold mb-4">Natural Language Processing</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Real-time call transcription with OpenAI Whisper
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Document analysis and workflow extraction
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Smart task prioritization and assignment
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-2xl font-semibold mb-4">Machine Learning</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Pattern recognition in team communication
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Automated workflow optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Predictive analytics for task completion
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Team's Communication?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Join the future of team collaboration with Revia's AI-powered platform.
          </p>
          <Link 
            href="/dashboard"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </main>
  )
} 