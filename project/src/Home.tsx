import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, Upload, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-100">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:py-20">
        <div className="text-center mb-12">
          <HeartHandshake className="mx-auto h-16 w-16 text-pink-500 mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-4">Resume Analyzer Pro</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Analyze your resume against various professional domains and get personalized feedback to boost your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 mb-4">
              <Upload className="h-6 w-6 text-pink-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Analyze Your Resume</h2>
            <p className="text-gray-600 mb-6">
              Upload your resume, select a domain, and get instant feedback on how well your profile matches the requirements.
            </p>
            <a 
  href="http://localhost:5000" 
  className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700"
  target="_self"
  rel="noopener noreferrer"
>
  Go to Resume Analyzer
  <ArrowRight className="ml-2 h-4 w-4" />
</a>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 mb-4">
              <HeartHandshake className="h-6 w-6 text-pink-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore Domains</h2>
            <p className="text-gray-600 mb-6">
              Learn about different professional domains, required skills, career paths, and how to prepare yourself.
            </p>
            <Link 
              to="/domains" 
              className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700"
            >
              Explore Domains
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Use Resume Analyzer Pro?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Expert Analysis</h3>
              <p className="text-gray-600">
                Get insights from AI-powered analysis of your resume against industry standards.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Detailed Feedback</h3>
              <p className="text-gray-600">
                Receive specific feedback on areas of improvement to enhance your profile.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Domain Knowledge</h3>
              <p className="text-gray-600">
                Access comprehensive information about different professional domains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};