import { useState } from 'react';
import './App.css';
import axios from 'axios';
import {
  Building2,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from 'lucide-react';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
const API = BACKEND_URL + '/api';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Closes mobile menu automatically if open
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      await axios.post(`${API}/contact`, formData);
      setFormStatus({
        type: 'success',
        message:
          "Thank you! Your inquiry has been submitted successfully. We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        type: 'error',
        message:
          'Failed to submit inquiry. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    'Welds Management',
    'NDT Management',
    'Erection Management',
    'Support Management',
    'Paint Management',
    'Insulation Management',
    'Tracing Management',
    'Spool Management',
    'Billing Management',
    'Work Planning',
    'MTO Management',
    'Store Management',
    'Progress Management',
    'Loop Management',
    'System Management',
    'Punch Management',
  ];

  const benefits = [
    'Piping Construction Rules based',
    'Multi User System',
    'Ensure Consistency in Data, reports and Bills',
    'Minimum Inputs Required',
    'Easy to use Interface',
    'One Input and Multiple outputs',
    'Daily progress reports with validation',
    'Automatic Reports and Bills',
    'Complete Data Management',
    'No duplication in Data, reports and Bills',
    'No special infrastructure required',
    'Software/Data provided to PMC and Client',
  ];

  const clients = [
    'Indian Oil Corporation Limited (IOCL)',
    'Bharat Petroleum Corporation (BPCL)',
    'Hindustan Petroleum Corporation (HPCL)',
    'Reliance Industries LTD (RIL)',
    'HPCL-Mittal Energy LTD (HMEL)',
    'Larsen & Toubro Limited',
    'Megha Engineering & Infrastructures Limited',
    'Bridge and Roof Co. (India) Ltd',
    'Mangalore Refinery and Petrochemical Limited (MRPL)',
    'Chennai Petroleum Corporation Limited (CPCL)',
    'GAIL (India) Limited',
    'Numaligarh Refinery Limited',
  ];

  const projects = [
    { name: 'HRRL Refinery, Barmer', count: '8 Projects' },
    { name: 'Panipat Refinery', count: '9 Projects' },
    { name: 'Vadodara Refinery', count: '6 Projects' },
    { name: 'Barauni Refinery', count: '5 Projects' },
    { name: 'Mumbai Refinery', count: '5 Projects' },
    { name: 'Reliance Industries', count: '8 Projects' },
    { name: 'GAIL Alibag', count: '3 Projects' },
    { name: 'Other Major Sites', count: '15+ Projects' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">EDA</h1>
                <p className="text-xs text-gray-600">
                  Engineering Design Automation
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                classdName="text-gray-700 hover:text-blue-600 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('clients')}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Clients
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-left py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-left py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-left py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('clients')}
                  className="text-left py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Clients
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left py-2 bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 relative">
        <div className="relative h-[600px] bg-gradient-to-br from-blue-900 to-blue-700">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img
            src="https://images.unsplash.com/photo-1733069348827-bb538b2a6a1f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwcmVmaW5lcnl8ZW58MHx8fHwxNzg0MTE1MDM3fDA&ixlib=rb-4.1.0&q=85"
            alt="Industrial Refinery"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Integrated Piping Construction Management
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Streamline your piping construction projects with PCMS - The
                industry-leading software for Oil Refinery, Petrochemical,
                Fertilizer, and Power industries
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
              >
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About PCMS Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About PCMS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Piping Construction Management Software
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1650551182991-b07558247564?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxwaXBpbmclMjBjb25zdHJ1Y3Rpb258ZW58MHx8fHwxNzg0MTE1MDM4fDA&ixlib=rb-4.1.0&q=85"
                alt="Piping Construction"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What is PCMS?
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                PCMS is an integrated Piping Construction Management Software
                designed specifically for Oil Refinery, Petrochemical,
                Fertilizer, Power, and other process-based piping projects.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                It's a network-based multi-user system that takes inputs from 3D
                Plant Design Software used in the engineering stage to create
                the scope of work in terms of Inch Dia, Inch Meter, Number of
                Joints, Support, Instruments, and Bills of Material.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Developed at sites and fully driven by piping construction
                logics, PCMS is loaded with many piping standards including PMS,
                WPS, NDT, ISP, PSP, and PWTC to work intelligently as per
                industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              PCMS Main Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features to manage every aspect of piping
              construction
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg hover:shadow-lg transition border border-blue-200"
              >
                <CheckCircle2 className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PCMS Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose PCMS?</h2>
            <p className="text-xl text-blue-200">
              Industry-leading benefits that set us apart
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-blue-800 p-6 rounded-lg hover:bg-blue-700 transition"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-white">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Major Projects
            </h2>
            <p className="text-xl text-gray-600">
              Successfully deployed across 50+ major projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-l-4 border-blue-600"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-blue-600 font-semibold">{project.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted By Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Powering projects for top Oil & Gas companies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-blue-50 transition border border-gray-200"
              >
                <p className="font-medium text-gray-800">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Advanced Technology Stack
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                PCMS integrates seamlessly with leading 3D Plant Design Software
                including SP3D, E3DCAD, PDS, PDMS, and processes IDF data
                efficiently.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Compatible with spool generation tools like SpoolFAB, SpoolGen,
                AcornPipe, and Solinas, ensuring smooth workflow integration.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Site store data integration from SPMAT and SAP systems for
                comprehensive material management.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3ODQxMTUwMzh8MA&ixlib=rb-4.1.0&q=85"
                alt="Engineering Dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Let's discuss how PCMS can transform your piping construction
              management
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Registered Office
                    </h4>
                    <p className="text-gray-600">
                      B-28, Vikas Nagar, Phase-II,
                      <br />
                      Hastsal, New Delhi-110059
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 9810714955</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">edadelhi@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                {formStatus.message && (
                  <div
                    className={`p-4 rounded-lg ${
                      formStatus.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition"
                >
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="h-8 w-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">EDA</h3>
                  <p className="text-sm text-gray-400">
                    Engineering Design Automation
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Leading provider of Piping Construction Management Software for
                the Oil & Gas industry.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection('about')}
                  className="block text-gray-400 hover:text-white"
                >
                  About PCMS
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="block text-gray-400 hover:text-white"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="block text-gray-400 hover:text-white"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('clients')}
                  className="block text-gray-400 hover:text-white"
                >
                  Clients
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>B-28, Vikas Nagar, Phase-II</p>
                <p>Hastsal, New Delhi-110059</p>
                <p>Phone: +91 9810714955</p>
                <p>Email: edadelhi@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} EDA - Engineering Design
              Automation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
