import { Linkedin, Twitter, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/portfolio-data';

interface SocialLinksProps {
  className?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  'Linkedin': <Linkedin />,
  'Twitter': <Twitter />,
  'Github': <Github />
};

const SocialLinks = ({ className = '' }: SocialLinksProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };
  
  return (
    <motion.div 
      className={`flex space-x-4 ${className}`}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          variants={item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={link.platform}
        >
          {iconMap[link.iconName]}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;