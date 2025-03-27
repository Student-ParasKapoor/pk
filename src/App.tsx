import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react'; // Added MessageCircle for chatbot icon
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CallForPapers from './components/CallForPapers';
import ProgramRegistration from './components/ProgramRegistration';
import PublishingPartners from './components/PublishingPartners';
import PublicationEthics from './components/PublicationEthics';
import KeynoteSpeakers from './components/KeynoteSpeakers';
import Downloads from './components/Downloads';
import Gallery from './components/Gallery';
import Organization from './components/Organization';
import HistoryComponent from './components/History';
import Contact from './components/Contact';

// AboutPCE Component
const AboutPCE = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-8">
          ABOUT POORNIMA COLLEGE OF ENGINEERING
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="prose prose-lg text-gray-600 text-justify">
            <p>
              Poornima College of Engineering (PCE) has been practicing superior education standards since its inception in 2000. The College has maintained its eminence as a leading Engineering college in Rajasthan, India. It is NAAC A+ Accredited and ranked second among all the technical colleges affiliated with Rajasthan Technical University, Kota, India. PCE is moving ahead successfully to attain its vision mission to transform students into high-quality engineers and managers who may also enrich society by adhering to ethical culture, human values, and a sense of service to society and the nation. PCE came into existence to promote quality in professional & technical education in Jaipur, Rajasthan, and has a very strong research orientation and culture.
            </p>
            <p>
              What sets apart Poornima College of Engineering from other colleges in Jaipur, is its commitment to high-quality and industry-recognized delivery of education, ensuring the cultural and social enrichment of its students. Poornima brand symbolizes excellence through innovations, reliability, transparency, and professionalism of the highest order and instills faith and confidence among all members concerned in India and abroad. With student strength of more than 2000 students studying in 9 specializations of engineering (CSE, AI & DS, CSE (AI), CSE (Cyber), ECE, EE, ME, Civil & IT), more than 3.5 Lac square feet of built-up area, highly qualified faculties, state of the art infrastructure, good placements and industry-led curriculum, PCE is spearheading its extraordinary voyage with the motto 'Success is not a destination, it's a journey.'
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="/Poornimaimage.png"
              alt="Poornima College of Engineering"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// AboutJaipur Component
const AboutJaipur = () => {
  const images = [
    "/jaipur1.jpg",
    "/jaipur2.jpg",
    "/jaipur3.jpg",
    "/jaipur4.jpg"
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-8">
          ABOUT JAIPUR
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="prose prose-lg text-gray-600 text-justify">
            <p className="mb-4">
              One of the most beautiful cities of Rajasthan known as Pink City Jaipur was the
              stronghold of a clan of rulers whose three hill forts and a series of palaces in the city
              are important attractions. It is known as the Pink City because of the color of the stones
              specifically used in the walled city, and Jaipur's bazaars sell embroidered leather shoes,
              blue pottery, tie-dye scarves, and other exotic goods.
            </p>
            <p className="mb-4">
              The western part of Rajasthan itself forms a convenient track in the heart of the Thar Desert,
              shaping its history, lifestyle, and architecture. It was founded on November 18, 1727, by the ruler of
              Amber, Maharaja Sawai Jai Singh II, the city named after him, the capital of Rajasthan
              with wide avenues and spacious gardens.
            </p>
          </div>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              Here, the past comes to life in magnificent fortresses and palaces that are pink and once
              lived in maharajahs. Jaipur's bustling bazaar, famous for its Rajasthan jewelry fabrics
              and shoes, boasts timeless quality and is undoubtedly a treasure trove for shoppers.
              This charming city, with its romantic charm, takes you into the era of royalty and tradition.
            </p>
            <p>
              It was founded on November 18, 1727, by the ruler of Amber, Maharaja Sawai Jai
              Singh II, the city named after him, the capital of Rajasthan with wide avenues and
              spacious gardens. This charming city, with its romantic charm, takes you into
              the era of royalty and tradition.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-lg">
              <img
                src={image}
                alt={`Jaipur Scene ${index + 1}`}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Chatbot Component
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'bot', text: 'Hello! How can I assist you today?' }]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      // Simulate AI response (replace with actual API call in production)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: 'bot', text: `You asked: "${input}". How can I help further?` }
        ]);
      }, 500);
      setInput('');
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-[#1a2a5e] text-white p-3 rounded-full shadow-lg hover:bg-[#2b3d7b] transition duration-300 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 bg-white rounded-lg shadow-xl z-50">
          <div className="bg-[#1a2a5e] text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="text-lg font-semibold">AI Chatbot</h3>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="h-64 overflow-y-auto p-3 bg-gray-100">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${
                  msg.sender === 'user' ? 'bg-[#1a2a5e] text-white ml-auto' : 'bg-gray-300 text-gray-800'
                } max-w-[80%]`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-3 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2a5e]"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              className="mt-2 w-full bg-[#1a2a5e] text-white p-2 rounded-lg hover:bg-[#2b3d7b] transition duration-300"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Call for Papers', path: '/call-for-papers' },
    { name: 'Registration', path: '/registration' },
    { name: 'Publishing Partners', path: '/publishing-partners' },
    { name: 'Publication Ethics', path: '/publication-ethics' },
    { name: 'Keynote Speakers', path: '/keynote-speakers' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Organization', path: '/organization' },
    { name: 'History', path: '/history' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-[#1a2a5e] py-2 px-4 text-white text-sm text-center">
        <p>Conference Dates: March 25-27, 2025 | Submission Deadline: January 15, 2025</p>
      </div>

      {/* Logo Section */}
      <div className="bg-white py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-6">
            <img src="/pcelogo.jpg" alt="College Logo" className="h-16 w-auto object-contain" />
            <div className="hidden md:block h-12 w-px bg-gray-300" />
            <img src="/naaclogo.jpg" alt="NAAC Logo" className="h-14 w-auto" />
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <h1 className="text-xl font-bold text-[#1a2a5e]">International Conference 2025</h1>
            <p className="text-sm text-gray-600">Advancing Innovations in Engineering & Technology</p>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#1a2a5e] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-4 py-2 text-sm font-medium hover:bg-[#2b3d7b] rounded-md transition duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white focus:outline-none">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#1a2a5e] px-2 pt-2 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-white hover:bg-[#2b3d7b] rounded-md text-base font-medium transition duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1a2a5e] to-[#3b5998] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">International Conference on Engineering & Technology</h1>
          <p className="text-lg md:text-xl mb-6">March 25-27, 2025 | Exploring Innovations for a Sustainable Future</p>
          <div className="flex justify-center space-x-4">
            <a
              href="/registration"
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              Register Now
            </a>
            <a
              href="/call-for-papers"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Submit Paper
            </a>
          </div>
        </div>
      </section>

      {/* About PCE Section */}
      <AboutPCE />

      {/* About Jaipur Section */}
      <AboutJaipur />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1a2a5e] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Conference 2025</h3>
          <p className="text-sm">Organized by Poornima College of Engineering</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/registration" className="hover:underline">Registration</Link></li>
            <li><Link to="/call-for-papers" className="hover:underline">Call for Papers</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm">Email: info@conference2025.org<br />Phone: +91-123-456-7890</p>
        </div>
      </div>
      <div className="mt-6 text-center text-sm border-t border-gray-700 pt-4">
        <p>© 2025 International Conference on Engineering & Technology. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/call-for-papers" element={<CallForPapers />} />
            <Route path="/registration" element={<ProgramRegistration />} />
            <Route path="/publishing-partners" element={<PublishingPartners />} />
            <Route path="/publication-ethics" element={<PublicationEthics />} />
            <Route path="/keynote-speakers" element={<KeynoteSpeakers />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/history" element={<HistoryComponent />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot /> {/* Integrated Chatbot */}
      </div>
    </Router>
  );
}

export default App;