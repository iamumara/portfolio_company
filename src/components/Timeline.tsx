import { motion } from 'framer-motion';
import { Experience } from '../data/portfolio-data';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

interface TimelineProps {
  experiences: Experience[];
}

const Timeline = ({ experiences }: TimelineProps) => {
  // Sort experiences by startDate descending (newest first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateB - dateA;
  });

  return (
    <div className="py-8">
      {sortedExperiences.map((experience, index) => (
        <motion.div 
          key={experience.id}
          className="timeline-item relative pl-10 pb-10 relative"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Timeline connector */}
          <div className="timeline-connector absolute left-4 top-8 w-0.5 h-[calc(100%-32px)] bg-primary-200 dark:bg-primary-800/30" />
          
          {/* Icon */}
          <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 border-2 border-primary-500 dark:border-primary-700 z-10">
            {experience.type === 'work' ? (
              <Briefcase size={16} className="text-primary-600 dark:text-primary-400" />
            ) : (
              <GraduationCap size={16} className="text-primary-600 dark:text-primary-400" />
            )}
          </div>
          
          {/* Content */}
          <div className="bg-white dark:bg-dark-800 rounded-lg shadow-sm hover:shadow-md p-5 transition-shadow">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
              <h3 className="text-lg font-semibold">{experience.title}</h3>
              <div className="flex items-center text-sm text-dark-500 dark:text-dark-400">
                <Calendar size={14} className="mr-1" />
                <span>{experience.startDate} – {experience.endDate}</span>
              </div>
            </div>
            
            <div className="flex flex-col mb-3">
              <div className="flex items-center mb-2">
                <span className="font-medium text-primary-600 dark:text-primary-400">
                  {experience.company}
                </span>
                {experience.companyUrl && (
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm"
                  >
                    (Website)
                  </a>
                )}
              </div>
              <span className="text-sm text-dark-500 dark:text-dark-400">
                {experience.location}
              </span>
            </div>
            
            <p className="text-dark-600 dark:text-dark-300">
              {experience.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;