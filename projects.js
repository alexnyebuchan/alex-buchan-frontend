const projects = [
  {
    id: 1,
    title: 'Transport Planning Society (freelance)',
    description:
      'Developed a full stack application for TPS which allows clients to upload information through various sources.  Selected the most suitable technologies to fit the customer’s needs, in this case Next and Django. Used Git for managing the repository, increasing efficiency and reducing errors. Developed test plan based on acceptance criteria with business team to ensure application is robust. Utilised microservices design pattern with Heroku and Vercel for CI/CD. Used Postgres SQL for storing and managing data.',
    github: 'https://github.com/alexnyebuchan/tps_frontend',
    url: 'https://www.tps-skills.org/',
    tech: [
      {
        url: '/images/icons/nextjs-icon.svg',
        title: 'Next.js',
      },
      {
        url: '/images/icons/sass-1.svg',
        title: 'Sass',
      },
      {
        url: '/images/icons/django-icon.svg',
        title: 'Django',
      },
    ],
    image: '/images/project/tps.JPG',
    popupImage: '/images/project/tps-main.JPG',
  },
  {
    id: 2,
    title: 'Guardian Technology Clone',
    description:
      'A clone of the Guardian news website to demonstrate ability to translate user designs into a functional website. Utilises the Guardian news REST Api to provide real time news information. Translated designs from the real website into Next.js code. Designed with SEO best practices in mind.',
    github: 'https://github.com/alexnyebuchan/guardian-frontend',
    url: 'https://guardian-frontend.vercel.app/',
    tech: [
      {
        url: '/images/icons/nextjs-icon.svg',
        title: 'Next.js',
      },
      {
        url: '/images/icons/sass-1.svg',
        title: 'Sass',
      },
    ],
    image: '/images/project/guardian image.png',
    popupImage: '/images/project/guardianpopup.png',
  },

  {
    id: 3,
    title: 'Al Zanders Current Website ',
    description:
      'Full stack application displaying latest news and releases for side hustle music production and DJ business. Utilises a Django backend and React frontend. Integrated React-Bootstrap component library for consistent styles and fast development.',
    github: 'https://github.com/alexnyebuchan/alzandersone',
    url: 'https://www.alzanders.co.uk/',
    tech: [
      {
        url: '/images/icons/react.svg',
        title: 'React.js',
      },
      {
        url: '/images/icons/bootstrap.svg',
        title: 'Bootstrap',
      },
      {
        url: '/images/icons/django-icon.svg',
        title: 'Django',
      },
    ],
    image: '/images/project/alzanders.jpg',
    popupImage: '/images/project/alzanders-main.jpg',
  },
  {
    id: 4,
    title: '92 Groove Music Player (live summer 2023)',
    description:
      "New music platform with a bespoke, custom built music player. Uses a Next.js front-end for improved SEO. The audio player utilises useContext and useReducer hooks for state management, as well as the  CSS module system for the UI. New mixes can be added using the Strapi backend, which uploads audio and images to cloudinary. Currently I'm using dummy data from previous radio shows but looking to go live Summer 2024.",
    github: 'https://github.com/alexnyebuchan/92groove',
    url: 'https://www.92groove.uk/',
    tech: [
      {
        url: '/images/icons/nextjs-icon.svg',
        title: 'Next.js',
      },
      {
        url: '/images/icons/css-3.svg',
        title: 'CSS 3',
      },
      {
        url: '/images/icons/strapi-icon.svg',
        title: 'Strapi',
      },
    ],
    image: '/images/project/92-groove.jpg',
    popupImage: '/images/project/92groove-main.jpg',
  },
  {
    id: 5,
    title: 'This Portfolio',
    description:
      'This site uses Next.js and the CSS module system for styling. UseContext, UseReducer and UseEffect were used for the theme selection.',
    github: 'https://github.com/alexnyebuchan/alex-buchan-portfolio',
    url: 'https://www.alexbuchan.dev/',
    tech: [
      {
        url: '/images/icons/nextjs-icon.svg',
        title: 'Next.js',
      },
      {
        url: '/images/icons/css-3.svg',
        title: 'CSS 3',
      },
    ],
    image: '/images/project/abuchan.png',
    popupImage: '/images/project/abuchanpop.png',
  },
];

export default projects;
