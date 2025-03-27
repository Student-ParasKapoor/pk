import React from 'react';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const PublicationEthics = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-12">
          Publication Ethics
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Publication Ethics Statement</h3>
          </div>
          <p className="text-gray-700 mb-6">
            ICRAE 2025 is committed to maintaining the highest standards of publication ethics and quality. 
            All submitted papers will undergo rigorous peer review and plagiarism check to ensure originality 
            and scientific merit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <AlertTriangle className="text-red-500 mr-2" />
              Unethical Practices
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-3">•</span>
                <span className="text-gray-700">Plagiarism in any form</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">•</span>
                <span className="text-gray-700">Duplicate submission of papers</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">•</span>
                <span className="text-gray-700">Data fabrication or falsification</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">•</span>
                <span className="text-gray-700">Improper author attribution</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <CheckCircle className="text-green-500 mr-2" />
              Author Responsibilities
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span className="text-gray-700">Submit original research work</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span className="text-gray-700">Properly cite all references</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span className="text-gray-700">Declare any conflicts of interest</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span className="text-gray-700">Follow submission guidelines</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-6">Review Process</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold mb-2">Initial Screening</h4>
              <p className="text-gray-600">Plagiarism check and basic quality assessment</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h4 className="font-semibold mb-2">Peer Review</h4>
              <p className="text-gray-600">Double-blind review by expert reviewers</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h4 className="font-semibold mb-2">Final Decision</h4>
              <p className="text-gray-600">Editorial board review and decision</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationEthics;

// import React from 'react';
// import { Shield, AlertTriangle, CheckCircle, Edit, UserCheck, FileText } from 'lucide-react';

// const PublicationEthics = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-12">
//           Publication Ethics
//         </h2>

//         <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
//           <div className="flex items-center mb-6">
//             <Shield className="h-8 w-8 text-blue-600 mr-3" />
//             <h3 className="text-xl font-semibold">Publication Ethics Statement</h3>
//           </div>
//           <p className="text-gray-700 mb-6">
//             ICRAE 2025 is committed to maintaining the highest standards of publication ethics and quality.
//             All submitted papers will undergo rigorous peer review and plagiarism check to ensure originality
//             and scientific merit.
//           </p>


//           <div className="mt-10">
//             <h3 className="text-2xl font-semibold mb-4 flex items-center">
//               <FileText className="mr-2 h-6 w-6 text-blue-600" />
//               For Authors
//             </h3>
//             <ul className="list-disc pl-5 space-y-2 text-gray-700">
//               <li>
//                 <strong>Plagiarism / Self Plagiarism:</strong> Copying the idea/work or sentences from someone else
//                 without giving credit is considered plagiarism. Similarly, using one of your own previously
//                 published works without proper citation is considered self-plagiarism and will not be
//                 accepted.
//               </li>
//               <li>
//                 <strong>Multiple Submissions:</strong> Authors must avoid multiple submissions and declare that the
//                 work is original and has not been submitted elsewhere.
//               </li>
//               <li>
//                 <strong>Data Fabrication:</strong> Data fabrication is not allowed. Authors must not present fake or
//                 manipulated data.
//               </li>
//               <li>
//                 <strong>Redundant Publications:</strong> Publishing similar manuscripts in more than one place based
//                 on the same experiment should be avoided.
//               </li>
//               <li>
//                 <strong>Author Contribution:</strong> All listed authors must have made a significant scientific
//                 contribution to the research in the manuscript.
//               </li>
//               <li>
//                 <strong>Funding Statement:</strong> Authors should declare the funding agencies, if any.
//               </li>
//               <li>
//                 <strong>Copyright Agreement:</strong> The copyright agreement must be signed by the corresponding
//                 author.
//               </li>
//               <li>
//                 <strong>Conflict of Interest:</strong> Conflicts of interest must be declared.
//               </li>
//               <li>
//                 <strong>Proper Communication with Editors:</strong> It is the authors' responsibility to inform editors if
//                 they find any errors in their work during or before proofreading.
//               </li>
//             </ul>
//           </div>

//           <div className="mt-10">
//             <h3 className="text-2xl font-semibold mb-4 flex items-center">
//               <Edit className="mr-2 h-6 w-6 text-blue-600" />
//               Editors’ Responsibilities
//             </h3>
//             <ul className="list-disc pl-5 space-y-2 text-gray-700">
//               <li>
//                 <strong>Proper Evaluation:</strong> The editor has complete responsibility and authority to accept or
//                 reject a submitted paper. They may confer with associate editors or reviewers to assist
//                 in the decision.
//               </li>
//               <li>
//                 <strong>Unbiased Decision:</strong> Editors should provide prompt and unbiased consideration of all
//                 manuscripts based on their merits, regardless of the authors' race, gender, religion,
//                 ethnicity, nationality, or political views.
//               </li>
//               <li>
//                 <strong>Confidentiality:</strong> Editors and editorial staff must not disclose any information about a
//                 manuscript under consideration to anyone other than reviewers and potential reviewers.
//               </li>
//             </ul>
//           </div>

//           <div className="mt-10">
//             <h3 className="text-2xl font-semibold mb-4 flex items-center">
//               <UserCheck className="mr-2 h-6 w-6 text-blue-600" />
//               Reviewers’ Responsibilities
//             </h3>
//              <ul className="list-disc pl-5 space-y-2 text-gray-700">
//                 <li>
//                   <strong>Accept Papers of Own Area:</strong> Reviewers must accept only papers that are relevant to
//                   their area of expertise.
//                 </li>
//                 <li>
//                   <strong>Confidentiality:</strong> Reviewers should not use or disclose unpublished information or
//                   arguments contained in the manuscript without the author's consent.
//                 </li>
//                 <li>
//                   <strong>Fair Decision:</strong> Reviewers should objectively judge the quality of the research and
//                   respect the intellectual independence of the authors. Personal criticism is not
//                   appropriate.
//                 </li>
//                 <li>
//                   <strong>Prompt Review:</strong> Reviewers must provide a prompt review within the specified time limit.
//                 </li>
//               </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PublicationEthics;