import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  mushroomStore,
  presentConnection,
  codeAcademy,
  bigBank,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Student',
    company_name: 'Code Academy',
    icon: codeAcademy,
    iconBg: '#000000',
    date: 'May 2022 - Oct 2022',
    points: [
      'Front-end programming using HTML / CSS / Bootstrap',
      'JavaScript / TypeScript programming language',
      'Programming environment and development process management and version control',
      'React framework usage and useful features',
      'Material UI React component library',
      'Node.js server as REST full api',
    ],
  },
  {
    title: 'Student',
    company_name: 'Present Connection',
    icon: presentConnection,
    iconBg: '#ffffff',
    date: 'Dec 2022 - Feb 2023',
    points: ['React framework usage and useful features', 'C# server as REST full api'],
  },
  {
    title: 'Intern',
    company_name: 'BigBank',
    icon: bigBank,
    iconBg: '#ffffff',
    date: 'Jun 2023 - Aug 2023',
    points: [
      'Basics of customer service',
      'principles of information security',
      "Live and remote IT support to the company's employees in Lithuania and in other countries",
      'Involved in the work of the international IT Support team in daily and long-term tasks',
      'Basic knowledge for working with Active Directory, Jira, Manage Engine Desktop Central.',
      'Installation of MAC OS and Windows OS environments',
      'preparation of workplaces for new and existing ones employees.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Mushroom Store',
    description:
      'Web application that allows users to search, buy, and read about mushrooms, providing a convenient and efficient solution for buying goods.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'asp.net',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: mushroomStore,
    source_code_link: 'https://github.com/raudzius/mushrooms',
    website_link: 'https://mushrooms.fly.dev/',
  },
];

export {
  services, technologies, experiences, testimonials, projects,
};
