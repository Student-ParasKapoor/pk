import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CallForPapers from './components/CallForPapers';
import ProgramRegistration from './components/ProgramRegistration';
import PublishingPartners from './components/PublishingPartners';
import PublicationEthics from './components/PublicationEthics';
import KeynoteSpeakers from './components/KeynoteSpeakers';
import Downloads from './components/Downloads';
import Gallery from './components/Gallery';
import History from './components/History';
import Contact from './components/Contact';

// Placeholder subcomponents for Organization
const AdvisoryCommittee: React.FC = () => <div>Advisory Committee Content</div>;
const TechnicalCommittee: React.FC = () => <div>Technical Committee Content</div>;
const OrganizingCommittee: React.FC = () => <div>Organizing Committee Content</div>;

// AboutPCE Component
const AboutPCE: React.FC = () => {
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
              alt="Poornima College of Engineering Campus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// AboutJaipur Component
const AboutJaipur: React.FC = () => {
  const images: string[] = [
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
              One of the most beautiful cities of Rajasthan known as Pink City Jaipur was the stronghold of a clan of rulers whose three hill forts and a series of palaces in the city are important attractions. It is known as the Pink City because of the color of the stones specifically used in the walled city, and Jaipur's bazaars sell embroidered leather shoes, blue pottery, tie-dye scarves, and other exotic goods.
            </p>
            <p className="mb-4">
              The western part of Rajasthan itself forms a convenient track in the heart of the Thar Desert, shaping its history, lifestyle, and architecture. It was founded on November 18, 1727, by the ruler of Amber, Maharaja Sawai Jai Singh II, the city named after him, the capital of Rajasthan with wide avenues and spacious gardens.
            </p>
          </div>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              Here, the past comes to life in magnificent fortresses and palaces that are pink and once lived in maharajahs. Jaipur's bustling bazaar, famous for its Rajasthan jewelry fabrics and shoes, boasts timeless quality and is undoubtedly a treasure trove for shoppers.
            </p>
            <p>
              This charming city, with its romantic charm, takes you into the era of royalty and tradition.
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
const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: 'Hello! How can I assist you today? Ask me about the conference!' }
  ]);
  const [input, setInput] = useState<string>('');

  const qaDatabase: { [key: string]: string } = {
    "when is the conference": "The International Conference on Engineering & Technology is scheduled for March 25-27, 2025.",
    "conference dates?": "The International Conference on Engineering & Technology is scheduled for March 25-27, 2025.",
    "when does the conference happen": "The International Conference on Engineering & Technology is scheduled for March 25-27, 2025.",
    "what is the submission deadline": "The submission deadline for papers is January 15, 2025.",
    "deadline for submission?": "The submission deadline for papers is January 15, 2025.",
    "when do i submit papers": "The submission deadline for papers is January 15, 2025.",
    "where is the conference held": "The conference will be held at Poornima College of Engineering in Jaipur, Rajasthan, India.",
    "conference location?": "The conference will be held at Poornima College of Engineering in Jaipur, Rajasthan, India.",
    "where is it happening": "The conference will be held at Poornima College of Engineering in Jaipur, Rajasthan, India.",
    "how do i register": "You can register by clicking the 'Register Now' button on the homepage or visiting the /registration page.",
    "how to register?": "You can register by clicking the 'Register Now' button on the homepage or visiting the /registration page.",
    "registration process?": "You can register by clicking the 'Register Now' button on the homepage or visiting the /registration page.",
    "what is the conference about": "The conference focuses on advancing innovations in engineering and technology for a sustainable future.",
    "what’s the conference theme": "The conference focuses on advancing innovations in engineering and technology for a sustainable future.",
    "conference purpose?": "The conference focuses on advancing innovations in engineering and technology for a sustainable future.",
    "who can submit papers": "Researchers, students, and professionals in engineering and technology fields are welcome to submit papers.",
    "who is eligible to submit": "Researchers, students, and professionals in engineering and technology fields are welcome to submit papers.",
    "can students submit papers": "Yes, students, along with researchers and professionals in engineering and technology fields, are welcome to submit papers.",
    "what is pce": "Poornima College of Engineering (PCE) is a leading engineering college in Rajasthan, established in 2000, known for its NAAC A+ accreditation and strong research culture.",
    "tell me about pce": "Poornima College of Engineering (PCE) is a leading engineering college in Rajasthan, established in 2000, known for its NAAC A+ accreditation and strong research culture.",
    "what does pce stand for": "Poornima College of Engineering (PCE) is a leading engineering college in Rajasthan, established in 2000, known for its NAAC A+ accreditation and strong research culture.",
    "tell me about jaipur": "Jaipur, known as the Pink City, is the capital of Rajasthan, famous for its historic forts, palaces, and vibrant bazaars.",
    "what’s jaipur like": "Jaipur, known as the Pink City, is the capital of Rajasthan, famous for its historic forts, palaces, and vibrant bazaars.",
    "info about jaipur": "Jaipur, known as the Pink City, is the capital of Rajasthan, famous for its historic forts, palaces, and vibrant bazaars.",
    "what are the key dates": "Key dates are: Submission Deadline - January 15, 2025, and Conference Dates - March 25-27, 2025.",
    "important dates": "Key dates are: Submission Deadline - January 15, 2025, and Conference Dates - March 25-27, 2025.",
    "key conference dates": "Key dates are: Submission Deadline - January 15, 2025, and Conference Dates - March 25-27, 2025.",
    "who are the keynote speakers": "The list of keynote speakers will be announced soon. Check the /keynote-speakers page for updates!",
    "keynote speakers": "The list of keynote speakers will be announced soon. Check the /keynote-speakers page for updates!",
    "how much is registration": "Registration fees vary by category (e.g., students, professionals). Visit the /registration page for detailed pricing."
  };

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = input.toLowerCase().trim();
      setMessages([...messages, { sender: 'user', text: input }]);
      const response = qaDatabase[userMessage] ?? 
        "I'm not sure about that. Try asking about the conference dates, submission deadline, or registration process!";
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: 'bot', text: response }]);
      }, 500);
      setInput('');
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-[#1a2a5e] text-white p-3 rounded-full shadow-lg hover:bg-[#2b3d7b] transition duration-300 z-50"
        aria-label="Open chatbot"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 bg-white rounded-lg shadow-xl z-50">
          <div className="bg-[#1a2a5e] text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="text-lg font-semibold">AI Chatbot</h3>
            <button onClick={() => setIsOpen(false)} className="text-white" aria-label="Close chatbot">
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
              placeholder="Ask me anything..."
              aria-label="Chatbot input"
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

// Navbar Component
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState<boolean>(false);

  const navItems: { name: string; path: string; subItems?: { name: string; path: string }[] }[] = [
    { name: 'Home', path: '/' },
    { name: 'Call for Papers', path: '/call-for-papers' },
    { name: 'Registration', path: '/registration' },
    { name: 'Publishing Partners', path: '/publishing-partners' },
    { name: 'Publication Ethics', path: '/publication-ethics' },
    { name: 'Keynote Speakers', path: '/keynote-speakers' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Gallery', path: '/gallery' },
    {
      name: 'Organization',
      path: '/organization',
      subItems: [
        { name: 'Advisory Committee', path: '/organization/advisory' },
        { name: 'Technical Committee', path: '/organization/technical' },
        { name: 'Organizing Committee', path: '/organization/organizing' },
      ],
    },
    { name: 'History', path: '/history' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#1a2a5e] py-2 px-4 text-white text-sm text-center">
        <p>Conference Dates: March 25-27, 2025 | Submission Deadline: January 15, 2025</p>
      </div>
      <div className="bg-white py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-6">
            <img src="/pcelogo.jpg" alt="Poornima College of Engineering Logo" className="h-16 w-auto object-contain" />
            <div className="hidden md:block h-12 w-px bg-gray-300" />
            <img src="/naaclogo.jpg" alt="NAAC Logo" className="h-14 w-auto" />
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <h1 className="text-xl font-bold text-[#1a2a5e]">International Conference 2025</h1>
            <p className="text-sm text-gray-600">Advancing Innovations in Engineering & Technology</p>
          </div>
        </div>
      </div>
      <nav className="bg-[#1a2a5e] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.subItems && setIsOrgDropdownOpen(true)}
                  onMouseLeave={() => item.subItems && setIsOrgDropdownOpen(false)}
                >
                  <Link
                    to={item.path}
                    className="px-4 py-2 text-sm font-medium hover:bg-[#2b3d7b] rounded-md transition duration-300"
                  >
                    {item.name}
                  </Link>
                  {item.subItems && isOrgDropdownOpen && (
                    <div className="absolute left-0 mt-0 w-48 bg-white text-gray-800 rounded-md shadow-lg z-10">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 transition duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white focus:outline-none" aria-label="Toggle menu">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-[#1a2a5e] px-2 pt-2 pb-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-white hover:bg-[#2b3d7b] rounded-md text-base font-medium transition duration-200"
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <div className="pl-4">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-white hover:bg-[#2b3d7b] rounded-md text-sm transition duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

// HomePage Component with Video Background
const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <section className="relative text-white py-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="public\videos\background.mp4" // Replace with your video path
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center z-20">
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
      <AboutPCE />
      <AboutJaipur />
    </div>
  );
};

// Footer Component
const Footer: React.FC = () => {
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
};

// Organization Component
const OrganizationComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Organization Overview</div>} />
      <Route path="advisory" element={<AdvisoryCommittee />} />
      <Route path="technical" element={<TechnicalCommittee />} />
      <Route path="organizing" element={<OrganizingCommittee />} />
    </Routes>
  );
};

// App Component
const App: React.FC = () => {
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
            <Route path="/organization/*" element={<OrganizationComponent />} />
            <Route path="/history" element={<History />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;