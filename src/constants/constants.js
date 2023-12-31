import {
  backend,
  braslimp,
  carrent,
  css,
  devsquad,
  docker,
  git,
  html,
  javascript,
  jobit,
  laravel,
  mobile,
  mongodb,
  mysql,
  nodejs,
  planner,
  reactjs,
  tailwind,
  threejs,
  tripguide,
  typescript, vue,
  web
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'React Native Developer',
    icon: mobile
  },
  {
    title: 'Backend Developer',
    icon: backend
  }
]

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Vue JS',
    icon: vue
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'Laravel',
    icon: laravel
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'MySql',
    icon: mysql
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'docker',
    icon: docker
  }
]

const experiences = [
  {
    title: 'FULLSTACK DEVELOPER',
    company_name: 'DevSquad',
    icon: devsquad,
    iconBg: '#383E56',
    date: 'July 2021 - Present',
    points: [
      'Developed 3 projects from scratch, increasing efficiency by 20%.',
      'Successfully launched 5 solutions that resulted in a 30% increase in revenue and a 20% increase in customer satisfaction.',
      'Developed REST Api for 5 projects with different sizes for high performance.'
    ]
  },
  {
    title: 'WEB DEVELOPER',
    company_name: 'Planner Sistemas ·',
    icon: planner,
    iconBg: '#E6DEDD',
    date: 'April 2020 - July 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'BUSINESS INTELLIGENCE ANALYST.',
    company_name: 'Braslimp Transportes',
    icon: braslimp,
    iconBg: '#E6DEDD',
    date: 'November 2018 - April 2020',
    points: [
      'Developed Financial Dashboard to improve cost efficiency by 25% on an annual basis.',
      'Developed SQL Queries for different teams to ensure the visibility of financial metrics across all stakeholders.'
    ]
  }
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
]

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: carrent,
    source_code_link: 'https://github.com/abimaelst'
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'restapi',
        color: 'green-text-gradient'
      },
      {
        name: 'scss',
        color: 'pink-text-gradient'
      }
    ],
    image: jobit,
    source_code_link: 'https://github.com/abimaelst'
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'supabase',
        color: 'green-text-gradient'
      },
      {
        name: 'css',
        color: 'pink-text-gradient'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/abimaelst'
  }
]

export { services, technologies, experiences, testimonials, projects }
