import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Building2, CheckCircle2, Phone, Mail, MapPin, Menu, X } from 'lucide-react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
const API = BACKEND_URL + '/api';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
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
      setFormStatus({ type: 'success', message: "Submitted successfully!" });
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Failed to submit.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = ['Welds Management', 'NDT Management', 'Erection Management', 'Support Management', 'Paint Management', 'Insulation Management', 'Tracing Management', 'Spool Management', 'Billing Management', 'Work Planning', 'MTO Management', 'Store Management', 'Progress Management', 'Loop Management', 'System Management', 'Punch Management'];
  const benefits = ['Piping Construction Rules based', 'Multi User System', 'Ensure Consistency in Data', 'Minimum Inputs Required', 'Easy to use Interface', 'One Input and Multiple outputs', 'Daily progress reports', 'Automatic Reports and Bills', 'Complete Data Management', 'No duplication in Data', 'No special infrastructure required', 'Software/Data provided'];

  return (
    <div className="min-h-screen bg-white pt-16">
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Building2 className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">EDA</h1>
              <p className="text-xs text-gray-600">Engineering Design Automation</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600">About</button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600">Features</button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Contact Us</button>
          </div>
        </div>
      </nav>

      <section id="home" className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-32 text-center">
        <h2 className="text-4xl sm:text-6xl font-extrabold mb-4 px-4">Integrated Piping Construction Management</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90 px-4">Streamline your piping construction projects with PCMS.</p>
        <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-lg">Request a Demo</button>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About PCMS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b, idx) => (
              <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Core Management Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f, idx) => (
              <div key={idx} className="bg-blue-50 border border-blue-100 p-6 rounded-lg text-center font-semibold text-blue-900">{f}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Request a Demo</h2>
            <p className="text-blue-100 mb-6">Get in touch with our engineering team to set up a personalized walkthrough.</p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3"><Phone className="h-5 w-5 text-blue-400" /><span>+91 XXXXXXXXXX</span></div>
              <div className="flex items-center space-x-3"><Mail className="h-5 w-5 text-blue-400" /><span>support@eda-pcms.com</span></div>
            </div>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg outline-none" />
              <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg outline-none" />
              <textarea name="message" placeholder="Message" rows="3" required value={formData.message} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg outline-none"></textarea>
              <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-2 rounded-lg">{isSubmitting ? 'Sending...' : 'Send Inquiry'}</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;