'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiFileText, FiCheck, FiAlertCircle } from 'react-icons/fi'

interface ProcessingStep {
  id: string
  name: string
  status: 'pending' | 'processing' | 'completed' | 'error'
  description: string
}

export default function DocumentProcessor() {
  const [file, setFile] = useState<File | null>(null)
  const [processingSteps, setProcessingSteps] = useState<ProcessingStep[]>([
    {
      id: '1',
      name: 'Document Upload',
      status: 'pending',
      description: 'Upload your document for processing'
    },
    {
      id: '2',
      name: 'Text Extraction',
      status: 'pending',
      description: 'Extracting text and structure from document'
    },
    {
      id: '3',
      name: 'AI Analysis',
      status: 'pending',
      description: 'Analyzing content with GPT-4'
    },
    {
      id: '4',
      name: 'Workflow Generation',
      status: 'pending',
      description: 'Creating structured workflow'
    }
  ])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      // Simulate processing steps
      simulateProcessing()
    }
  }

  const simulateProcessing = () => {
    setProcessingSteps(steps => 
      steps.map(step => ({ ...step, status: 'pending' }))
    )

    // Simulate processing steps with delays
    processingSteps.forEach((step, index) => {
      setTimeout(() => {
        setProcessingSteps(steps => 
          steps.map(s => 
            s.id === step.id 
              ? { ...s, status: 'processing' }
              : s
          )
        )

        setTimeout(() => {
          setProcessingSteps(steps => 
            steps.map(s => 
              s.id === step.id 
                ? { ...s, status: 'completed' }
                : s
            )
          )
        }, 2000)
      }, index * 2500)
    })
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Document Processing</h2>
      
      {/* File Upload */}
      <div className="mb-8">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <FiFileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-sm text-gray-600 mb-4">
            {file ? file.name : 'Drag and drop your document here, or'}
          </p>
          <label className="cursor-pointer">
            <span className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors inline-block">
              {file ? 'Process Document' : 'Select File'}
            </span>
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt"
            />
          </label>
          <p className="mt-2 text-xs text-gray-500">
            Supported formats: PDF, DOC, DOCX, TXT
          </p>
        </div>
      </div>

      {/* Processing Steps */}
      <div className="space-y-4">
        {processingSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-4 rounded-lg border ${
              step.status === 'completed'
                ? 'border-green-200 bg-green-50'
                : step.status === 'processing'
                ? 'border-primary-200 bg-primary-50'
                : step.status === 'error'
                ? 'border-red-200 bg-red-50'
                : 'border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {step.status === 'completed' ? (
                  <FiCheck className="text-green-500 mr-3" />
                ) : step.status === 'error' ? (
                  <FiAlertCircle className="text-red-500 mr-3" />
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-primary-500 mr-3 flex items-center justify-center">
                    {step.status === 'processing' && (
                      <motion.div
                        className="w-2 h-2 bg-primary-500 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </div>
                )}
                <div>
                  <h3 className="font-medium">{step.name}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500 capitalize">
                {step.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI Insights Preview */}
      {processingSteps.some(step => step.status === 'completed') && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-4 bg-gray-50 rounded-lg"
        >
          <h3 className="font-medium mb-4">AI-Generated Insights</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium">Key Tasks Identified</p>
              <ul className="mt-2 space-y-2">
                <li className="text-sm text-gray-600">• Review and approve budget proposal</li>
                <li className="text-sm text-gray-600">• Schedule team meeting for Q2 planning</li>
                <li className="text-sm text-gray-600">• Update project timeline</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium">Suggested Workflow</p>
              <div className="mt-2 flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <div className="h-0.5 flex-1 bg-primary-500"></div>
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <div className="h-0.5 flex-1 bg-primary-500"></div>
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
} 