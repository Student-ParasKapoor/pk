import React from 'react';
import { MapPin, Phone, Mail, Clock, Building } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+91 141 2345678",
        "+91 141 2345679"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "icrae2025@poornima.org",
        "conference@poornima.org"
      ]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM"
      ]
    },
    {
      icon: Building,
      title: "Address",
      details: [
        "Poornima College of Engineering",
        "Plot No. IS-2027-2031, Ramchandrapura",
        "P.O. Vidhani Vatika, Sitapura Extension",
        "Jaipur - 302022, Rajasthan, India"
      ]
    }
  ];

  const faqs = [
    {
      question: "How can I submit my paper?",
      answer: "Papers can be submitted through the conference submission portal. Please ensure you follow the submission guidelines and paper template."
    },
    {
      question: "What are the important dates?",
      answer: "Paper submission deadline is October 15, 2025. Acceptance notification will be sent by November 1, 2025. Final registration deadline is November 15, 2025."
    },
    {
      question: "Is virtual presentation allowed?",
      answer: "Yes, the conference will be conducted in hybrid mode. Authors can choose to present their papers either physically or virtually."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any queries about the conference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start">
                  <div className="flex-shrink-0">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">{item.title}</h4>
                    {item.details.map((detail, index) => (
                      <p key={index} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray- 200 pb-6 last:border-0">
              <div className="mb-4">
                <h4 className="text-lg font-medium text-gray-900">{faq.question}</h4>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.227507533296!2d75.84843731504726!3d26.7850792831973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc917387c392f%3A0x4c2c5414b2a35f44!2sPoornima%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1645524557447!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;