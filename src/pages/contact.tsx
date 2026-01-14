import React, { useState } from 'react';
import { IMAGES } from '../assets/image';

/**
 * Contact Component
 * Features: Mock validation, responsive layout, and success feedback.
 */
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in required fields.");
      return;
    }
    
    setStatus('submitting');
    // Mock API Call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="contact-page">
      <section className="container grid-2">
        <div className="contact-info">
          <h1>Get In Touch</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder text for brand communication.</p>
          <img src={IMAGES.contact} alt="Contact Office" className="responsive-img" />
        </div>

        <div className="form-wrapper">
          {status === 'success' ? (
            <div className="success-msg">
              <h3>Message Sent!</h3>
              <p>We will get back to you shortly.</p>
              <button onClick={() => setStatus('idle')} className="btn-secondary">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="brand-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  id="name"
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  id="email"
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;