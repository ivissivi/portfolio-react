import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'slokaivars@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>
          <i className="fa-solid fa-envelope"></i>
          <span>{t('contact.title')}</span>
        </h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-details">
              <p>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:slokaivars@gmail.com">slokaivars@gmail.com</a>
              </p>
              <p>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+37128687728">+371 28687728</a>
              </p>
            </div>
            
            <div className="social-links">
              <a href="https://linkedin.com/in/ivars-sloka" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/ivissivi" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact.name')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <i className="fa-solid fa-comment"></i>
                <textarea
                  name="message"
                  placeholder={t('contact.message')}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <button type="submit" className="btn primary" disabled={isSubmitting}>
                {isSubmitting ? t('contact.sending') : t('contact.send')}
              </button>
              
              {submitStatus === 'success' && (
                <div className="form-status success">
                  <i className="fa-solid fa-check-circle"></i>
                  {t('contact.success')}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-status error">
                  <i className="fa-solid fa-exclamation-circle"></i>
                  {t('contact.error')}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
