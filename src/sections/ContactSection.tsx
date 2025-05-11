import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { contactInfo } from "../data/portfolio-data";
import SocialLinks from "../components/SocialLinks";

const ContactSection = () => {
  const contactItems = [
    {
      icon: <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />,
      label: "Email",
      value: contactInfo.email,
      link: `mailto:${contactInfo.email}`,
    },
    {
      icon: (
        <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
      ),
      label: "Phone",
      value: contactInfo.phone,
      link: `tel:${contactInfo.phone}`,
    },
    {
      icon: (
        <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
      ),
      label: "Location",
      value: contactInfo.location,
    },
  ];

  return (
    <section id="contact" className="md:py-20 py-6">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-dark-600 dark:text-dark-300">
            Feel free to reach out to me for collaborations or opportunities.
            I'll be glad to talk with you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <motion.div
              className="bg-white dark:bg-dark-800 shadow-md rounded-lg p-6 md:p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6 mb-8">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm text-dark-500 dark:text-dark-400">
                        {item.label}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div>
                <h4 className="text-sm text-dark-500 dark:text-dark-400 mb-3">
                  Follow me on
                </h4>
                <SocialLinks />
              </div>
            </motion.div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
