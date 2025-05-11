import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import { experiences } from '../data/portfolio-data';

const ExperienceSection = () => {
  const workExperiences = experiences.filter(exp => exp.type === 'work');
  const educationExperiences = experiences.filter(exp => exp.type === 'education');
  
  return (
    <section id="experience" className="md:py-20 py-6">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">My Experience</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-6 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3">
                <span className="text-primary-600 dark:text-primary-400 font-bold">W</span>
              </span>
              Work Experience
            </motion.h3>
            
            <Timeline experiences={workExperiences} />
          </div>
          
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-6 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-8 h-8 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center mr-3 ">
                <span className="text-secondary-600 dark:text-secondary-400 font-bold">E</span>
              </span>
              Education
            </motion.h3>
            
            <Timeline experiences={educationExperiences} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;