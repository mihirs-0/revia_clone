'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FiMail, 
  FiPhone, 
  FiFileText, 
  FiMessageSquare,
  FiActivity,
  FiPieChart,
  FiSettings
} from 'react-icons/fi'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <FiSettings className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {['overview', 'communications', 'workflows', 'analytics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Section */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Communication Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Communication</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FiMail className="text-primary-600 mr-2" />
                    <span>Emails</span>
                  </div>
                  <span className="font-semibold">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FiPhone className="text-primary-600 mr-2" />
                    <span>Calls</span>
                  </div>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FiMessageSquare className="text-primary-600 mr-2" />
                    <span>Messages</span>
                  </div>
                  <span className="font-semibold">48</span>
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">AI Insights</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FiActivity className="text-primary-600 mr-2" />
                    <span>Tasks Generated</span>
                  </div>
                  <span className="font-semibold">15</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FiPieChart className="text-primary-600 mr-2" />
                    <span>Workflows Created</span>
                  </div>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FiFileText className="text-primary-600 mr-2" />
                    <span>Documents Processed</span>
                  </div>
                  <span className="font-semibold">32</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="text-sm">
                  <p className="font-medium">New workflow created</p>
                  <p className="text-gray-500">2 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Document processed</p>
                  <p className="text-gray-500">4 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Task completed</p>
                  <p className="text-gray-500">6 hours ago</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* AI Assistant Chat */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">AI Assistant</h2>
          <div className="border rounded-lg p-4">
            <div className="h-64 overflow-y-auto mb-4 space-y-4">
              <div className="flex justify-end">
                <div className="bg-primary-100 rounded-lg p-3 max-w-[70%]">
                  <p className="text-sm">How can I help you today?</p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[70%]">
                  <p className="text-sm">Can you summarize my recent communications?</p>
                </div>
              </div>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Ask the AI assistant..."
                className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-600 text-white px-4 py-2 rounded-r-lg hover:bg-primary-700 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 