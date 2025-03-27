import React from 'react';
import { CreditCard, Calendar, FileText, Mail, Building } from 'lucide-react';

const ProgramRegistration = () => {
  const registrationFees = [
    {
      category: "Category A",
      description: "For SCOPUS Indexed Journals & ESCI Journal (JOPC) (WoS)",
      early: {
        indian: "10000",
        foreign: "200"
      },
      late: {
        indian: "11000",
        foreign: "250"
      }
    },
    {
      category: "Category B",
      description: "For Book series and Special issues in journals",
      early: {
        indian: "8000",
        foreign: "150"
      },
      late: {
        indian: "9000",
        foreign: "180"
      }
    }
  ];

  const bankDetails = {
    accountName: "POORNIMA COLLEGE PART TWO",
    accountNo: "50200067803774",
    bankName: "HDFC BANK LTD",
    branch: "F129, RIICO INDUSTRIAL AREA, SITAPURA, SANGANER, JAIPUR 302022, RAJASTHAN, INDIA",
    ifsc: "HDFC0003873",
    swift: "HDFCINBBXXX",
    micr: "302240028",
    bankCode: "3873",
    accountType: "CURRENT ACCOUNT"
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
            Conference Registration and Publication Fee Details
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Registration and publication fees for ICRAE 2025
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-4">
              Authors submitting paper for conference are required to participate in the contests and pay the registration fees for the contests immediately after submissions. Without payment of registration fees, submission will not be processed.
            </p>
            <p>
              Publication Fees must be paid only after receiving the acceptance for publication in Journal/book.
            </p>
          </div>
        </div>

        {/* Registration Fee Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="px-6 py-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <CreditCard className="h-6 w-6 text-blue-600 mr-2" />
              Publication Charges for ICRAE 2025
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan={2}>
                      Early Registration<br/>(Before 30 August, 2024)
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan={2}>
                      Late Registration<br/>(After 30 August, 2024)
                    </th>
                  </tr>
                  <tr>
                    <th className="px-6 py-3" colSpan={2}></th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Indian (₹)</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Foreign ($)</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Indian (₹)</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Foreign ($)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {registrationFees.map((fee) => (
                    <tr key={fee.category}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{fee.category}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{fee.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{fee.early.indian}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{fee.early.foreign}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{fee.late.indian}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{fee.late.foreign}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Category Descriptions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Category A</h4>
            <p className="text-gray-600">
              Publication in special issues of SCOPUS / ESCI (WoS) Indexed Journals (Confirmed Publication for all accepted and registered papers)
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Category B</h4>
            <p className="text-gray-600">
              Book Series/ Proceedings (To be submitted to SCOPUS and Web of Science by the publishers after publication, Indexing subject to SCOPUS/ WoS) (Confirmed Publication for all accepted and registered papers)
            </p>
          </div>
        </div>

        {/* Registration Process */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <FileText className="h-6 w-6 text-blue-600 mr-2" />
            Registration Process
          </h3>
          <p className="text-gray-600 mb-4">
            After the Payment, Download the Registration form, fill it and send it to respective track wise mail ids mentioned below depending upon the paper under which it is submitted.
          </p>
          <div className="flex items-center text-blue-600">
            <Mail className="h-5 w-5 mr-2" />
            <p>For any further query, write to: <a href="mailto:technovation2023@poornima.org" className="underline">technovation2023@poornima.org</a></p>
          </div>
        </div>

        {/* Bank Details */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Building className="h-6 w-6 text-blue-600 mr-2" />
            Account Details
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Account Name</dt>
                  <dd className="text-base text-gray-900">{bankDetails.accountName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Account Number</dt>
                  <dd className="text-base text-gray-900">{bankDetails.accountNo}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Bank Name</dt>
                  <dd className="text-base text-gray-900">{bankDetails.bankName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Branch Address</dt>
                  <dd className="text-base text-gray-900">{bankDetails.branch}</dd>
                </div>
              </dl>
            </div>
            <div>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">IFSC Code</dt>
                  <dd className="text-base text-gray-900">{bankDetails.ifsc}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Swift Code</dt>
                  <dd className="text-base text-gray-900">{bankDetails.swift}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">MICR Code</dt>
                  <dd className="text-base text-gray-900">{bankDetails.micr}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Bank Code</dt>
                  <dd className="text-base text-gray-900">{bankDetails.bankCode}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Account Type</dt>
                  <dd className="text-base text-gray-900">{bankDetails.accountType}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramRegistration;