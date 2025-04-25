import React, { useState, useRef } from 'react';
import { Upload, FileUp, Loader2 } from 'lucide-react';
import { Domain } from '../types';

interface ResumeAnalyzerProps {
  domains: Domain[];
}

interface AnalysisResult {
  result: string;
  chosenDomain: string;
}

export const ResumeAnalyzer: React.FC<ResumeAnalyzerProps> = ({ domains }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState(domains[0].title);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = async (file: File) => {
    if (!file.name.toLowerCase().endsWith('.pdf')) {
      alert('Please upload a PDF file');
      return;
    }

    const formData = new FormData();
    formData.append('resume', file);
    formData.append('domain', selectedDomain);

    setIsAnalyzing(true);
    setAnalysisResult(null);

    try {
      const response = await fetch('http://localhost:5000', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const data = await response.text();
      setAnalysisResult({
        result: data,
        chosenDomain: selectedDomain,
      });
    } catch (error) {
      console.error('Error analyzing resume:', error);
      alert('Failed to analyze resume. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setAnalysisResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Resume Analyzer Pro</h2>
          <p className="text-gray-600">
            Upload your resume and get personalized feedback based on your chosen domain
          </p>
        </div>

        {!analysisResult ? (
          <>
            <div
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                isDragging
                  ? 'border-pink-500 bg-pink-50'
                  : 'border-gray-300 hover:border-pink-400 hover:bg-pink-50'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-2">
                Drag & Drop your PDF resume here or click to upload
              </p>
              <p className="text-sm text-gray-500">PDF files only</p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
              />
            </div>

            <div className="mt-6">
              <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-2">
                Choose Domain
              </label>
              <select
                id="domain"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-pink-500 focus:ring-pink-500"
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
              >
                {domains.map((domain) => (
                  <option key={domain.id} value={domain.title}>
                    {domain.title}
                  </option>
                ))}
              </select>
            </div>

            {isAnalyzing && (
              <div className="mt-6 text-center">
                <Loader2 className="animate-spin h-8 w-8 text-pink-500 mx-auto mb-2" />
                <p className="text-gray-600">Analyzing your resume...</p>
              </div>
            )}
          </>
        ) : (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Analysis Result for{' '}
              <span className="text-pink-600">{analysisResult.chosenDomain}</span>
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6 whitespace-pre-wrap font-mono text-sm">
              {analysisResult.result}
            </div>
            <button
              onClick={handleReset}
              className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center"
            >
              <FileUp className="mr-2 h-5 w-5" />
              Analyze Another Resume
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
