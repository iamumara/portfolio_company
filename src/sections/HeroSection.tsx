import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import { ArrowDown } from 'lucide-react';
import Button from '../components/Button';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="min-h-screen md:pt-20 pt-6 flex items-center">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="inline-block text-primary-600 dark:text-primary-400 font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hello, I'm
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Abu Bakar
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl lg:text-3xl text-dark-600 dark:text-dark-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Full Stack Developer
            </motion.h2>
            
            <motion.p 
              className="text-dark-600 dark:text-dark-300 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              I build responsive and user-friendly web applications with modern technologies.
              Passionate about creating elegant solutions to complex problems.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button onClick={scrollToContact}>
                Contact Me
              </Button>
              
              <Button variant="outline" onClick={() => window.open('https://github.com/Naquee?tab=repositories', '_blank')}>
                View GitHub
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <SocialLinks />
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hidden md:flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl" />
              <div className="absolute inset-0 bg-gradient-radial from-primary-400/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-7xl font-bold text-primary-600 dark:text-primary-400 opacity-20">AB</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="text-dark-500 dark:text-dark-400 text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="text-primary-600 dark:text-primary-400" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;