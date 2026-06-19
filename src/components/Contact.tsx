import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from './SectionHeading';
import { contactDetails, socialLinks, contactFields } from '../data/content';

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
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_subject', `New Contact Form Message from ${formData.name}`);

      const response = await fetch('https://formspree.io/f/xpwnqkqk', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        await handleFallbackSubmission();
      }
    } catch (error) {
      console.error('Failed to send message via Formspree:', error);
      console.log('Attempting fallback method...');
      try {
        await handleFallbackSubmission();
      } catch (fallbackError) {
        console.error('Fallback also failed:', fallbackError);
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFallbackSubmission = async () => {
    // Fallback method: try alternative form service or show manual contact info
    try {
      // Try using a different form service as backup
      const response = await fetch('https://formspree.io/f/xpwnqkqk', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Contact Form Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Fallback submission failed:', error);
      setSubmitStatus('error');
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
        <SectionHeading icon="fa-solid fa-envelope" titleKey="contact.title" />

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-details">
              {contactDetails.map((detail) => (
                <p key={detail.href}>
                  <i className={detail.icon}></i>
                  <a href={detail.href}>{detail.text}</a>
                </p>
              ))}
            </div>

            <div className="social-links">
              {socialLinks.map((link) => (
                <a key={link.href} href={link.href} className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              {contactFields.map((field) => (
                <div className="form-group" key={field.name}>
                  <i className={field.icon}></i>
                  {field.multiline ? (
                    <textarea
                      name={field.name}
                      placeholder={t(field.placeholderKey)}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={t(field.placeholderKey)}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                    />
                  )}
                </div>
              ))}

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
