export interface Experience {
  id: number;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  type: "education" | "work";
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  websiteUrl: string;
  technologies: string[];
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  iconName: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "B.Tech (CSE)",
    company: "Peoples University",
    location: "Bhopal",
    startDate: "2023",
    endDate: "Present",
    description:
      "Pursuing Bachelor of Technology in Computer Science Engineering.",
    type: "education",
  },
  {
    id: 2,
    title: "Diploma (EC)",
    company: "Jamia Millia Islamia",
    location: "New Delhi",
    startDate: "2020",
    endDate: "2023",
    description: "Completed diploma in Electronics and Communication.",
    type: "education",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Sydam Web Solutions",
    companyUrl: "https://sydamwebsolutions.com/",
    location: "Remote",
    startDate: "Nov 2024",
    endDate: "Present",
    description:
      "Working as a full stack developer, building and maintaining web applications.",
    type: "work",
  },
  {
    id: 4,
    title: "WIX Developer",
    company: "AI Memoneet",
    companyUrl: "https://www.memoneet.com/",
    location: "Remote",
    startDate: "Jun 2024",
    endDate: "Nov 2024",
    description: "Developed and maintained websites using Wix platform.",
    type: "work",
  },
  {
    id: 5,
    title: "Desktop Support",
    company: "IIPM (IndianOil Institute of Petroleum Management)",
    companyUrl:
      "https://iocl.com/indianoil-institute-of-petroleum-management--(iipm)",
    location: "Gurgaon",
    startDate: "2023",
    endDate: "2024",
    description:
      "Provided desktop support, troubleshooting, and IT assistance.",
    type: "work",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Computing Home",
    description: "A static website for computing services.",
    longDescription:
      "Computing Home is a static website designed to provide information about computing services and products. The website features a clean and modern design with responsive layouts for optimal viewing on different devices.",
    imageUrl:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    websiteUrl: "https://www.computinghome.com/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Assetstow",
    description: "A finance website for asset management.",
    longDescription:
      "Assetstow is a comprehensive finance website designed for asset management and investment tracking. The platform provides tools for users to monitor and manage their financial portfolio, track investments, and make informed financial decisions.",
    imageUrl:
      "https://img.freepik.com/free-photo/closeup-economist-using-calculator-while-going-through-bills-taxes-office_637285-3156.jpg?t=st=1746956899~exp=1746960499~hmac=9eaa63faa926e3acce4b6e68fb1c276e73cd51f4c5af5ff74c9d1b458bec8a55&w=1380",
    websiteUrl: "https://assetstow.com/",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    id: 3,
    title: "PathLab",
    description: "A tool for efficient pathology lab reporting and management.",
    longDescription:
      "PathLab is a comprehensive web-based solution designed to streamline pathology lab operations. From test bookings and report generation to patient management, PathLab provides a seamless experience for labs and their clients. Its user-friendly interface and automation features help reduce manual workload and improve accuracy in diagnostic reporting.",
    imageUrl:
      "https://img.freepik.com/free-photo/hands-unrecognizable-female-doctor-looking-human-skull-x-ray-tablet_1098-20369.jpg?t=st=1746954790~exp=1746958390~hmac=9007095904b25ea82778efd7c917c1022c3eda9380e7ece2448dc9f796bd69ae&w=1380",
    websiteUrl: "https://crm-labs.vercel.app/",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next .js"],
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/abubakar47",
    iconName: "Linkedin",
  },
  {
    id: 2,
    platform: "Twitter",
    url: "https://x.com/abu__bakar47",
    iconName: "Twitter",
  },
  {
    id: 3,
    platform: "GitHub",
    url: "https://github.com/Naquee?tab=repositories",
    iconName: "Github",
  },
];

export const contactInfo = {
  email: "abubakar.er.jmi@gmail.com",
  phone: "+91 6203097826",
  location: "Okhla, New Delhi - 110025",
};
