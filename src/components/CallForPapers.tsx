import React from 'react';
import { FileText, ClipboardList, Info, BookCheck } from 'lucide-react';

const CallForPapers = () => {
  const tracks = {
    track1: {
      title: "Track-1: Sustainable Development",
      topics: [
        "Sustainable Development Goals (SDGs)",
        "Technology for waste management and recycling",
        "Regenerative agriculture and soil health",
        "Sustainable manufacturing & innovative materials",
        "Computational Models & AI techniques for Sustainable Development",
        "Sustainable cities and communities",
        "Disaster resilience and climate-adaptive infrastructure",
        "Bio engineering for sustainable development",
        "Sustainable practices in current scenario",
        "Global sustainability practices in supply chain",
        "Sustainable practices in Food & agriculture"
      ]
    },
    track2: {
      title: "Track-2: Environment",
      topics: [
        "Pollution Control through AI",
        "Waste management and minimization",
        "Carbon Economy & trading",
        "Renewable Energy optimization",
        "Resource management and Environment",
        "Climate change Mitigation and adaptation",
        "Bio-energy, Biomass and Bio-fuels",
        "Circular economy & waste valorization",
        "Environment Monitoring by remote sensing & GIS",
        "Environmental Risk assessment & management"
      ]
    },
    track3: {
      title: "Track-3: Emerging Green Technologies",
      topics: [
        "Green Nanotechnology",
        "Green Power Systems and Smart Grids",
        "Green Technologies in Information",
        "Green building Urbanization and rural development",
        "Green supply chain and logistics",
        "Green Energy Trade for Economic Development",
        "Green Energy Policies and Programmes",
        "Sustainable Cities, Architecture and Green Buildings",
        "Green Design, Products and Manufacturing Processes",
        "Industry 6.0 and allied green technologies",
        "Energy Efficient Designs and Standards",
        "Sustainable transportation (EVs, hydrogen fuel, public transit)",
        "Industry innovation & Infrastructure"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-8">
            CALL FOR PAPERS
          </h2>
          
          <div className="prose prose-lg mx-auto text-gray-600 text-justify mb-12">
            <p className="mb-6">
              ICRAE 2025 invites different research articles from researchers from various institutions
              across the world. The conference shall be conducted for three parallel tracks.
            </p>
            <p className="mb-6">
              All the papers should be prepared in accordance with the author's guidelines. Before
              submitting, the manuscript written should be thoroughly checked for grammatical or
              typographical errors.
            </p>
            <p className="mb-6">
              The manuscript should not exceed eight pages and must conform to the IEEE dual-
              column format.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {Object.values(tracks).map((track) => (
              <div key={track.title} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-blue-900 mb-8 text-center flex items-center justify-center border-b border-blue-100 pb-4">
                  <FileText className="mr-3 h-6 w-6 text-blue-600" />
                  {track.title}
                </h3>
                <ul className="space-y-4">
                  {track.topics.map((topic, index) => (
                    <li key={index} className="flex items-start group">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700 text-justify leading-relaxed group-hover:text-blue-900 transition-colors duration-200">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto mb-12">
            <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">
              Paper Submission
            </h3>
            <div className="flex justify-center">
              <a
                href="https://easychair.org/conferences/?conf=icrae2025"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors duration-300"
              >
                Submit Your Paper
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-6 text-center flex items-center justify-center">
              <ClipboardList className="mr-3 h-6 w-6 text-blue-600" />
              Author Instructions
            </h3>
            <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
              <Info className="mr-3 h-5 w-5 text-blue-600" />
              Full Paper Submission Guidelines
            </h4>
            <ul className="space-y-4 text-gray-700 text-justify">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>The manuscript should be written in English with a maximum paper length of eight pages including tables / diagrams / figures / illustrations/ equations and etc.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>After submission of paper in CMT, you will receive an ID that will have to be used for all further communications.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>All the papers are eligible for the contests. They can participate in the contests. Hence, authors are required to register immediately by paying the registration fees. Without payment of registration fees, submission will not be processed.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Accepted papers for conference and are not participating in the contests will be notified if the paper is accepted for publication. They will have to submit publication charges once it is accepted. Papers for contests are will be notified for further in associated journals.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>All the papers will be processed further. Initial screening will be done by the Technical Program Committee of TECHNOVATION 2024, which includes the scope the conference, plagiarism, organization of the manuscripts, quality of tables / diagrams / figures / illustrations/ equations and etc. Authors will be required to submit camera-ready paper, copy right form before presentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Paper accepted for journals shall be required to pay additional publication charges as well as will be required to submit the final manuscript as per journal requirements.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Schedule of presentation of papers in conference and the contests shall be communicated in advance.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>All the papers will be published in the TECHNOVATION- 2024 proceedings except those accepted for journal publication.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Certificate of Participation will be issued to all the participants who register and present the paper.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
            <div className="prose prose-lg mx-auto text-gray-600 text-justify mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-6 flex items-center">
                <BookCheck className="mr-3 h-6 w-6 text-blue-600" />
                Additional Instructions
              </h3>
              <p className="mb-4">
                Authors submitting paper for conference are required to participate in the contests and pay the registration fees for the contests immediately after submissions. Without payment of registration fees, submission will not be processed.
              </p>
              <p>
                Publication Fees must be paid only after receiving the acceptance for publication in Journal/book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;