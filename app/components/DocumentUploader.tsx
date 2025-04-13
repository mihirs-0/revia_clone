import React, { useCallback, useState } from 'react'
import { FiUpload, FiFileText } from 'react-icons/fi'

interface DocumentUploaderProps {
  onUpload: (file: File) => Promise<void>
}

export default function DocumentUploader({ onUpload }: DocumentUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const file = e.dataTransfer.files[0]
    if (file) {
      await handleFileUpload(file)
    }
  }, [onUpload])

  const handleFileInput = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      await handleFileUpload(file)
    }
  }, [onUpload])

  const handleFileUpload = async (file: File) => {
    try {
      setIsUploading(true)
      await onUpload(file)
    } catch (error) {
      console.error('Upload failed:', error)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
        isDragging ? 'border-primary-600 bg-primary-50' : 'border-gray-300'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <FiFileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
      <p className="text-sm text-gray-600 mb-4">
        Drag and drop your document here, or
      </p>
      <label className="cursor-pointer">
        <span className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 inline-block">
          {isUploading ? 'Uploading...' : 'Select File'}
        </span>
        <input
          type="file"
          className="hidden"
          onChange={handleFileInput}
          accept=".pdf,.doc,.docx,.txt"
        />
      </label>
      <p className="mt-2 text-xs text-gray-500">
        Supported formats: PDF, DOC, DOCX, TXT
      </p>
    </div>
  )
} 