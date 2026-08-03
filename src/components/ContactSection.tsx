import React, { useState } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Quote, Sparkles } from 'lucide-react';

interface Props {
  lang: Language;
}

export const ContactSection: React.FC<Props> = ({ lang }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#F5F5F3] text-zinc-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page 20 Closing Statement & Sketch Photo */}
        <div className="bg-white p-8 sm:p-12 border border-gray-200 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Sketch Photo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden border border-gray-200 bg-[#F5F5F3]">
                <img
                  src={PERSONAL_INFO.closingQuoteImage}
                  alt="Sneha Patil Sketch Hand Postcard"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Architectural Statement Quote */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-zinc-900">
                <Quote className="w-5 h-5 text-zinc-900" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">
                  ARCHITECTURAL PHILOSOPHY (PAGE 20)
                </span>
              </div>

              <blockquote className="text-base sm:text-lg text-zinc-800 font-serif italic leading-relaxed">
                “{lang === 'de' ? PERSONAL_INFO.statementDE : PERSONAL_INFO.statementEN}”
              </blockquote>

              <div className="pt-2">
                <h4 className="font-serif italic font-bold text-lg text-zinc-900">
                  Sneha Patil
                </h4>
                <p className="text-xs text-gray-500 font-mono">
                  snehahpatil18@gmail.com | +49 15510292595
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form & Information Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 block">
                GET IN TOUCH
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif italic text-zinc-900">
                {lang === 'de' ? 'Kontaktieren Sie Sneha Patil' : 'Contact Sneha Patil'}
              </h3>
              <p className="text-xs text-zinc-500 font-sans leading-relaxed">
                {lang === 'de' 
                  ? 'Verfügbar für Anfragen, Architekturprojekte, Master-Kollaborationen und berufliche Gelegenheiten.' 
                  : 'Available for architectural inquiries, research collaborations, master projects, and career opportunities.'}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200">
                <div className="p-3 bg-[#F5F5F3] text-zinc-900 border border-gray-200">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-gray-400 uppercase font-mono font-bold block tracking-widest">E-Mail Address</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs font-semibold text-zinc-900 hover:text-gray-600 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200">
                <div className="p-3 bg-[#F5F5F3] text-zinc-900 border border-gray-200">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-gray-400 uppercase font-mono font-bold block tracking-widest">Phone / WhatsApp</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs font-semibold text-zinc-900 hover:text-gray-600 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200">
                <div className="p-3 bg-[#F5F5F3] text-zinc-900 border border-gray-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-gray-400 uppercase font-mono font-bold block tracking-widest">Location</span>
                  <span className="text-xs font-semibold text-zinc-900">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-gray-200 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 bg-zinc-900 text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-serif italic font-bold text-zinc-900">
                  {lang === 'de' ? 'Vielen Dank für Ihre Nachricht!' : 'Thank You for Your Inquiry!'}
                </h4>
                <p className="text-xs text-zinc-500 max-w-md mx-auto">
                  {lang === 'de' 
                    ? 'Ihre Nachricht wurde simuliert übermittelt. Sneha Patil wird sich in Kürze unter der angegebenen E-Mail melden.' 
                    : 'Your message has been sent. Sneha Patil will review your inquiry and get back to you promptly.'}
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', subject: '', message: '' }); }}
                  className="px-4 py-2 bg-zinc-900 text-xs font-bold uppercase tracking-widest text-white hover:bg-black transition-colors"
                >
                  {lang === 'de' ? 'Weitere Nachricht senden' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-base font-serif italic font-bold text-zinc-900 mb-2">
                  {lang === 'de' ? 'Nachricht Senden' : 'Send a Direct Message'}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest block mb-1">
                      {lang === 'de' ? 'Ihr Name' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#F5F5F3] border border-gray-200 px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-zinc-900"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest block mb-1">
                      {lang === 'de' ? 'E-Mail Adresse' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[#F5F5F3] border border-gray-200 px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-zinc-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest block mb-1">
                    {lang === 'de' ? 'Betreff' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    placeholder="Architectural Inquiry / Collaboration"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-[#F5F5F3] border border-gray-200 px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-zinc-900"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest block mb-1">
                    {lang === 'de' ? 'Ihre Nachricht' : 'Your Message'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hello Sneha, I looked through your architecture portfolio..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#F5F5F3] border border-gray-200 px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-zinc-900 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-zinc-900 hover:bg-black text-white font-bold text-xs uppercase tracking-widest py-3.5 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'de' ? 'Nachricht Absenden' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
