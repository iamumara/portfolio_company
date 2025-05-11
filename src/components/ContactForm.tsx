import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import Button from './Button';
// import emailjs from '@emailjs/browser';

const   ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    
    try {
      // Replace these with your actual EmailJS service, template, and user IDs
      await emailjs.send(
        'service_oqin57z', 
        'template_xmm2snt',
        {
          email: formData.email,
          name: formData.name,
          message: formData.message,
          // to_email: 'abubakar.er.jmi@gmail.com'
        },
        'Ye-JDoVR0k3AcOA28'
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6 md:p-8 max-w-lg mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-5">
        <label htmlFor="name" className="block text-dark-700 dark:text-dark-300 font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-dark-300 dark:border-dark-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-700 dark:text-white"
          placeholder="Your name"
        />
      </div>
      
      <div className="mb-5">
        <label htmlFor="email" className="block text-dark-700 dark:text-dark-300 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-dark-300 dark:border-dark-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-700 dark:text-white"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-dark-700 dark:text-dark-300 font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-dark-300 dark:border-dark-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-700 dark:text-white resize-none"
          placeholder="Your message here..."
        ></textarea>
      </div>
      
      {status === 'success' && (
        <motion.div 
          className="mb-6 p-3 bg-success-100 text-success-600 rounded-md flex items-center"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <CheckCircle size={18} className="mr-2" />
          <span>Message sent successfully! I'll get back to you soon.</span>
        </motion.div>
      )}
      
      {status === 'error' && (
        <motion.div 
          className="mb-6 p-3 bg-error-100 text-error-600 rounded-md flex items-center"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <AlertCircle size={18} className="mr-2" />
          <span>Failed to send message. Please try again or email me directly.</span>
        </motion.div>
      )}
      
      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="min-w-[120px] flex items-center justify-center"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              Sending...
            </span>
          ) : (
            <span className="flex items-center">
              Send Message
              <Send size={16} className="ml-2" />
            </span>
          )}
        </Button>
      </div>
    </motion.form>
  );
};

export default ContactForm;