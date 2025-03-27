import React from 'react';
import { Star, Award, Globe } from 'lucide-react';

const KeynoteSpeakers = () => {
  const speakers = [
    {
      name: "Dr. Naveen B.P.",
      title: "Professor, Department of Civil Engineering",
      institution: "NITTTR, Kolkata",
      // expertise: "Artificial Intelligence and Robotics",
      image: "public/naveen.jpg"
    },
    {
      name: "Professor Ir. Dr. U. Johnson Alengaram",
      title: "Professor & Director",
      institution: "University of Malaya, Kuala Lumpur, Malaysia",
      // expertise: "Quantum Computing and Machine Learning",
      image: "public/Jhonson.jpg"
    },
    {
      name: "Raj Kapoor",
      title: "Founder, Chairman",
      institution: "India Blockchain Alliance, The Global Alliance for Artificial Intelligence and Innovation",
      // expertise: "Sustainable Energy Systems",
      image: "public/raj.jpg"
    },
    {
      name: "Dr. James Wilson",
      title: "Chief Technology Officer",
      institution: "IBM Research, UK",
      expertise: "Cybersecurity and Blockchain",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
            Keynote Speakers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Distinguished experts from around the world sharing cutting-edge research and insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{speaker.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{speaker.title}</p>
                <p className="text-gray-600 text-sm mb-3">{speaker.institution}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  {/* <Star className="h-4 w-4 mr-2" />
                  <span>{speaker.expertise}</span> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Expert Insights</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700">Latest developments in engineering and technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700">Future trends and emerging technologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700">Industry-academia collaboration opportunities</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Globe className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Global Perspective</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700">International research collaboration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700">Cross-cultural innovation exchange</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700">Global engineering challenges and solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeynoteSpeakers;