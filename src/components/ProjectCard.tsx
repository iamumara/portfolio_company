import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../data/portfolio-data';
import { ExternalLink, X } from 'lucide-react';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="bg-white dark:bg-dark-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
        whileHover={{ y: -5 }}
        onClick={() => setIsModalOpen(true)}
        layout
      >
        <div className="h-48 overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-dark-600 dark:text-dark-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 text-xs rounded">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <motion.div
              className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="relative">
                <div className="h-64 sm:h-72 md:h-80 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.button
                  className="absolute top-4 right-4 p-2 bg-dark-900/60 text-white rounded-full"
                  onClick={() => setIsModalOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p className="text-dark-600 dark:text-dark-300 mb-5">{project.longDescription}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button
                    variant="primary"
                    onClick={() => window.open(project.websiteUrl, '_blank')}
                  >
                    <span className="flex items-center">
                      Visit Website
                      <ExternalLink size={16} className="ml-2" />
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;