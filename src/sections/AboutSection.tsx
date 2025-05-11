import { motion } from 'framer-motion';
import aboutImg from '../../public/aboutImg.jpeg'

const AboutSection = () => {
  return (
    <section id="about" className="md:py-20 py-6  bg-gray-50 dark:bg-dark-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div 
            className="md:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-dark-800 shadow-lg">
                <img 
                  // src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  src={aboutImg}
                  alt="Abu Bakar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-600 dark:bg-primary-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                <span>5+ Exp</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Full Stack Developer</h3>
            <p className="text-dark-600 dark:text-dark-300 mb-6">
              I'm a passionate Full Stack Developer with experience in building responsive and 
              user-friendly web applications. I specialize in frontend technologies like React.js
              and backend solutions with Node.js.
            </p>
            <p className="text-dark-600 dark:text-dark-300 mb-6">
              My journey in tech began with a Diploma in Electronics and Communication from Jamia Millia Islamia,
              and I'm currently pursuing a B.Tech in Computer Science Engineering from Peoples University.
              I've worked with various companies to create elegant solutions to complex problems.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold mb-3">Skills</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    Frontend Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    Backend Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    Responsive Web Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    Database Management
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Technologies</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                    React.js, Next.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                    Node.js, Express
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                    MongoDB, SQL
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                    Tailwind CSS, SASS
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">React</span>
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">JavaScript</span>
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">TypeScript</span>
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">Node.js</span>
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">Tailwind</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;