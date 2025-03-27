import React from 'react';
import { FileText, Download, FileCheck, FileWarning } from 'lucide-react';

const Downloads = () => {
  const documents = [
    {
      category: "Templates",
      items: [
        { name: "Paper Template", format: "DOCX", size: "245 KB" },
        { name: "Presentation Template", format: "PPT", size: "1.2 MB" },
        { name: "Poster Template", format: "PDF", size: "850 KB" }
      ]
    },
    {
      category: "Guidelines",
      items: [
        { name: "Author Guidelines", format: "PDF", size: "420 KB" },
        { name: "Formatting Instructions", format: "PDF", size: "380 KB" },
        { name: "Publication Manual", format: "PDF", size: "1.5 MB" }
      ]
    },
    {
      category: "Forms",
      items: [
        { name: "Registration Form", format: "PDF", size: "125 KB" },
        { name: "Copyright Form", format: "PDF", size: "180 KB" },
        { name: "Travel Grant Application", format: "DOCX", size: "290 KB" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
            Downloads
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access all necessary documents, templates, and forms for the conference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {documents.map((category) => (
            <div key={category.category} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      {item.format === 'PDF' ? (
                        <FileCheck className="h-5 w-5 text-green-500 mr-3" />
                      ) : (
                        <FileWarning className="h-5 w-5 text-yellow-500 mr-3" />
                      )}
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.format} • {item.size}</p>
                      </div>
                    </div>
                    <button className="flex items-center text-blue-600 hover:text-blue-800">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-blue-900">Important Note</h3>
              <p className="mt-2 text-sm text-blue-700">
                Please ensure you download and carefully read all relevant documents before submission.
                All submissions must follow the provided templates and guidelines to be considered for review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
