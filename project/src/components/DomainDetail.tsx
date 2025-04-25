import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, BookOpen, Award, TrendingUp, Check } from 'lucide-react';
import { Domain } from '../types';

interface DomainDetailProps {
  domains: Domain[];
}

export const DomainDetail: React.FC<DomainDetailProps> = ({ domains }) => {
  const { domainId } = useParams<{ domainId: string }>();
  const domain = domains.find(d => d.id === domainId);

  if (!domain) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Domain Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          The domain you're looking for doesn't exist or has been removed.
        </p>
        <Link 
          to="/domains"
          className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Domains
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Link 
        to="/domains"
        className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Domains
      </Link>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
        <div 
          className="h-4 w-full"
          style={{ backgroundColor: domain.color }}
        ></div>
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{domain.title}</h1>
          <p className="text-lg text-gray-600 mb-8">{domain.description}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="flex items-center text-xl font-bold text-gray-800 mb-4">
                <Briefcase className="mr-2 h-5 w-5 text-pink-600" />
                Key Responsibilities
              </h2>
              <ul className="space-y-3 text-gray-600">
                {domain.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="flex items-center text-xl font-bold text-gray-800 mb-4">
                <BookOpen className="mr-2 h-5 w-5 text-pink-600" />
                Key Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {domain.skillLevels.map((skill, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-pink-600 h-2 rounded-full"
                        style={{width: `${(skill.level / 5) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="flex items-center text-xl font-bold text-gray-800 mb-4">
            <TrendingUp className="mr-2 h-5 w-5 text-pink-600" />
            Career Path
          </h2>
          <div className="space-y-8">
            {domain.careerPath.map((stage, index) => (
              <div key={index} className="relative">
                {index < domain.careerPath.length - 1 && (
                  <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-pink-200"></div>
                )}
                <div className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">{stage.title}</h3>
                    <p className="text-gray-600 mt-1">{stage.description}</p>
                    {stage.yearsExperience && (
                      <p className="text-sm text-gray-500 mt-2">
                        Typical Experience: {stage.yearsExperience}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="flex items-center text-xl font-bold text-gray-800 mb-4">
            <Award className="mr-2 h-5 w-5 text-pink-600" />
            Recommended Certifications
          </h2>
          <div className="space-y-6">
            {domain.certifications.map((cert, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <h3 className="text-lg font-semibold text-gray-800">{cert.name}</h3>
                <p className="text-gray-600 mt-1">{cert.description}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm text-gray-500">
                    Level: {cert.difficulty}
                  </span>
                  {cert.url && (
                    <a 
                      href={cert.url}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-700 text-sm font-medium"
                    >
                      Learn more
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-8 mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Job Market Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Average Salary Range</h3>
            <p className="text-2xl font-bold text-pink-600">{domain.salary}</p>
            <p className="text-sm text-gray-500 mt-1">Varies by location and experience</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Market Demand</h3>
            <p className="text-2xl font-bold text-pink-600">{domain.marketDemand}</p>
            <p className="text-sm text-gray-500 mt-1">Based on current industry trends</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Common Industries</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {domain.industries.map((industry, index) => (
                <span 
                  key={index}
                  className="inline-block px-3 py-1 text-sm rounded-full bg-pink-100 text-pink-800"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Resume Tips</h2>
        <div className="space-y-6">
          {domain.resumeTips.map((tip, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">{tip.title}</h3>
                <p className="text-gray-600 mt-1">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};