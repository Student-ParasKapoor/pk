import React from 'react';
import { BookOpen, Award, CheckCircle } from 'lucide-react';

const PublishingPartners = () => {
  const publisher = {
    name: "STM",
    description: "Leading publisher in scientific, technical, and medical research",
    logo: "public/images/stm logo.png", // Example logo URL
    journals: [
      "Journal of Advanced Research",
      "Scientific Reports"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-12">
          Publishing Partner
        </h2>

        <div className="grid md:grid-cols-1 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">{publisher.name}</h3>
              <p className="text-gray-600 mb-4">{publisher.description}</p>
              <h4 className="font-semibold mb-2">Associated Journals:</h4>
              <ul className="space-y-2">
                {publisher.journals.map((journal) => (
                  <li key={journal} className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {journal}
                  </li>
                ))}
              </ul>
            </div>
            <img src={publisher.logo} alt={`${publisher.name} Logo`} className="h-20 w-20 ml-6" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Award className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Publication Benefits</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700">Publication in SCOPUS/Web of Science indexed journals</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700">Fast-track review process for conference papers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700">Special issue publications for selected papers</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700">High visibility and impact factor journals</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700">Professional editing and formatting support</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700">Digital Object Identifier (DOI) for all papers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishingPartners;