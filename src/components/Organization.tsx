// import React from 'react';
// import { Users, Award, Building } from 'lucide-react';

// const Organization = () => {
//   const organizationData = {
//     organizingCommittee: [
//       "Dr. Gautam Singh, Registrar, PCE",
//       "Mr. Manish Dubey, Department of Computer Engineering",
//       "Mr. Shirish Mohan Dubey, Department of Computer Engineering",
//       "Dr. Amit Pandey, Department of Computer Engineering",
//       "Dr. Kamlesh Gautam, Department of Advance Computing",
//       "Dr. Saurabh Shandilya, Department of Advance Computing",
//       "Dr. K. D. Gupta, Department of Advance Computing",
//       "Dr. Neha Mahala, Department of Computer Engineering",
//     ],
//     advisors: [
//       "Prof. G R Sinha, International Institute of Information Technology Bangalore (IIITB), India",
//       "Prof Armin ABERLE, CEO, SERIS, National College of Engineering of Singapore",
//       "Prof. Thomas Zimmer, IMS Laboratory, College of Engineering of Bordeaux, France",
//       "Dr. Shuliang Wang, Beijing Institute of Technology, China",
//       "Dr. George Tsaramirsis, MIEEE , UK",
//       "Dr. Nidaa A. Abbas, College of Engineering of Babylon, MIEEE, IRAQ",
//       "Dr. R. C. Bansal, Queensland College of Engineering, Australia",
//       "Dr. Raed-Abd-Alhameed, College of Engineering of Bradford, UK",
//       "Dr. Sattar B. Sadkhan, SMIEEE , Chairman, IRAQ",
//       "Dr. Sedat Akleylek, Ondokuz Mayis College of Engineering, Turkey",
//       "Dr. Sureswaran Ramadass, USM College of Engineering, Malaysia",
//       "Dr. William Puech, College of Engineering Montpellier, France",
//       "Dr. Youcef Soufi, Mail College of Engineering of Tabessa, Algeria",
//     ],
//     technicalCommittee: [
//       "Dr. Rituraj Singh Rathore, Department of Civil Engineering",
//       "Mr. Sonu Kumar, Department of Civil Engineering",
//       "Mr. Prateek Sharma, Department of Civil Engineering",
//       "Mr. Amol Saxena, Department of Information Technology",
//       "Ms. Shazia Haque, Department of Information Technology",
//       "Dr. Priyanka Lodha, Department of Humanities & Applied Sciences",
//       "Dr. Meena Tekriwal, Department of Humanities & Applied Sciences",
//       "Dr. Anurika Mehta, Department of Humanities & Applied Sciences",
//     ],
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
//             Conference Organization
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Meet the team behind ICRAE 2025
//           </p>
//         </div>

//         <div className="space-y-12">
//           {/* Organizing Committee */}
//           {organizationData.organizingCommittee.length > 0 && (
//             <div className="bg-white rounded-lg shadow-lg p-8">
//               <div className="flex items-center mb-6">
//                 <Users className="h-8 w-8 text-blue-600 mr-3" />
//                 <h3 className="text-xl font-semibold">Organizing Committee</h3>
//               </div>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {organizationData.organizingCommittee.map((member, index) => (
//                   <div key={index} className="bg-gray-50 rounded-lg p-4">
//                     <h4 className="font-semibold text-gray-900">{member}</h4>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Advisory Committee */}
//           {organizationData.advisors.length > 0 && (
//             <div className="bg-white rounded-lg shadow-lg p-8">
//               <div className="flex items-center mb-6">
//                 <Award className="h-8 w-8 text-blue-600 mr-3" />
//                 <h3 className="text-xl font-semibold">Advisory Committee</h3>
//               </div>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {organizationData.advisors.map((member, index) => (
//                   <div key={index} className="bg-gray-50 rounded-lg p-4">
//                     <h4 className="font-semibold text-gray-900">{member}</h4>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Technical Committee */}
//           {organizationData.technicalCommittee.length > 0 && (
//             <div className="bg-white rounded-lg shadow-lg p-8">
//               <div className="flex items-center mb-6">
//                 <Building className="h-8 w-8 text-blue-600 mr-3" />
//                 <h3 className="text-xl font-semibold">Technical Committee</h3>
//               </div>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {organizationData.technicalCommittee.map((member, index) => (
//                   <div key={index} className="bg-gray-50 rounded-lg p-4">
//                     <h4 className="font-semibold text-gray-900">{member}</h4>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Organization;

import React from 'react';
import { Users, Award, Building } from 'lucide-react';
import { Routes, Route, useLocation } from 'react-router-dom';

const AdvisoryCommittee = () => {
  const advisors = [
    "Prof. G R Sinha, International Institute of Information Technology Bangalore (IIITB), India",
    "Prof Armin ABERLE, CEO, SERIS, National College of Engineering of Singapore",
    "Prof. Thomas Zimmer, IMS Laboratory, College of Engineering of Bordeaux, France",
    "Dr. Shuliang Wang, Beijing Institute of Technology, China",
    "Dr. George Tsaramirsis, MIEEE , UK",
    "Dr. Nidaa A. Abbas, College of Engineering of Babylon, MIEEE, IRAQ",
    "Dr. R. C. Bansal, Queensland College of Engineering, Australia",
    "Dr. Raed-Abd-Alhameed, College of Engineering of Bradford, UK",
    "Dr. Sattar B. Sadkhan, SMIEEE , Chairman, IRAQ",
    "Dr. Sedat Akleylek, Ondokuz Mayis College of Engineering, Turkey",
    "Dr. Sureswaran Ramadass, USM College of Engineering, Malaysia",
    "Dr. William Puech, College of Engineering Montpellier, France",
    "Dr. Youcef Soufi, Mail College of Engineering of Tabessa, Algeria",
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Award className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold">Advisory Committee</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advisors.map((member, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900">{member}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechnicalCommittee = () => {
  const technicalCommittee = [
    "Dr. Priyanka Lodha, Department of Humanities & Applied Sciences",
    "Dr. Mayank Gupta, Department of Civil Engineering",
    "Dr. Hemant Kaushik, Department of Electrical Engineering",
    "Mr. Bhagirath Singh Chauhan, Department of Computer Engineering",
    "Mr. Upendra Varshney, Department of Computer Engineering",
    "Mr. Gyanendra Kumar Hansh, Department of Computer Engineering",
    "Ms. Nikita Gautam, Department of Humanities & Applied Sciences",
    "Mr. Rajesh Kumar, Department of Humanities & Applied Sciences",
    "Ms. Monika Kumawat, Department of Humanities & Applied Sciences",
    "Mr. Amarjeet Bharti, Department of Humanities & Applied Sciences",
    "Ms. Anu Arora, Department of Humanities & Applied Sciences",
    "Mr. Kamlesh Kumar, Department of Humanities & Applied Sciences",
    "Mr. Bhavanesh Chandra Sharma, Department of Electrical Engineering",
    "Ms. Riddhi Shrivastava, Department of Humanities & Applied Sciences",
    "Mr. Dinesh Sharma, Department of Humanities & Applied Sciences",
    "Mr. Dhananjay Kumar, Department of Mechanical Engineering",
    "Mr. Garvit Juneja, Department of Computer Engineering",
    "Mr. Farhan Amin Khan, Department of Computer Engineering",
    "Mr. Anand Geet, Department of Computer Engineering",
  ];

  const publicationCommittee = [
    "Dr. Kuldeep Sharma, Department of Humanities & Applied Sciences",
    "Dr. Shikha Agarwal, Department of Humanities & Applied Sciences",
    "Dr. Sarveen Sachdeva, Department of Humanities & Applied Sciences",
    "Dr. Shalini Shah, Department of Humanities & Applied Sciences",
    "Ms. Tripti Verma, Department of Humanities & Applied Sciences",
  ];

  return (
    <div className="space-y-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Building className="h-8 w-8 text-blue-600 mr-3" />
          <h3 className="text-xl font-semibold">Technical Committee</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalCommittee.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">{member}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Building className="h-8 w-8 text-blue-600 mr-3" />
          <h3 className="text-xl font-semibold">Publication and Media Committee</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicationCommittee.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">{member}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const OrganizingCommittee = () => {
  const organizingCommittee = [
    { name: "Dr. Shilpi Jain", photo: "/shilpi-jain.jpg" },
    { name: "Dr. Manoj Sharma", photo: "/manoj-sharma.jpg" },
    { name: "Dr. Siddharth Choudhary", photo: "/siddharth-choudhary.jpg" },
    { name: "Dr. Meena Tekriwal", photo: "/meena-tekriwal.jpg" },
    { name: "Mr. Brahmadutt Bohra", photo: "/brahmadutt-bohra.jpg" },
    { name: "Mr. Sumit Sharma", photo: "/sumit-sharma.jpg" },
    { name: "Ms. Richa Choudhary", photo: "/richa-choudhary.jpg" },
    { name: "Mr. Javed Moazzam", photo: "/javed-moazzam.jpg" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Users className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold">Organizing Committee</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {organizingCommittee.map((member, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
            <img
              src={member.photo}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="font-semibold text-gray-900">{member.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

const Organization = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
            Conference Organization
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the team behind ICRAE 2025
          </p>
        </div>
        <Routes>
          <Route path="/" element={<AdvisoryCommittee />} />
          <Route path="/advisory" element={<AdvisoryCommittee />} />
          <Route path="/technical" element={<TechnicalCommittee />} />
          <Route path="/organizing" element={<OrganizingCommittee />} />
        </Routes>
      </div>
    </div>
  );
};

export default Organization;
