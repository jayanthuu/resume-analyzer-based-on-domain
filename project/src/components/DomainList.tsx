import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { Domain } from '../types';

interface DomainListProps {
  domains: Domain[];
}

export const DomainList: React.FC<DomainListProps> = ({ domains }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredDomains = domains.filter(domain => 
    domain.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    domain.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Professional Domains</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore different professional domains to learn about required skills, job responsibilities, and career paths.
        </p>
      </div>
      
      <div className="mb-8 max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search domains..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDomains.map((domain) => (
          <div 
            key={domain.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div 
              className="h-4 w-full"
              style={{ backgroundColor: domain.color }}
            ></div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{domain.title}</h2>
              <p className="text-gray-600 mb-4">{domain.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {domain.keySkills.slice(0, 3).map((skill, index) => (
                  <span 
                    key={index} 
                    className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-800"
                  >
                    {skill}
                  </span>
                ))}
                {domain.keySkills.length > 3 && (
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800">
                    +{domain.keySkills.length - 3} more
                  </span>
                )}
              </div>
              <Link 
                to={`/domains/${domain.id}`}
                className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {filteredDomains.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No domains found matching your search.</p>
        </div>
      )}
    </div>
  );
};