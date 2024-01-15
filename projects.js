const projects = [
  {
    id: 1,
    title: 'Transport Planning Society',
    description:
      'Freelance Project. Developed a full stack application for TPS which allows clients to upload information through various sources.  Selected the most suitable technologies to fit the customer’s needs, in this case Next and Django. Used Git for managing the repository, increasing efficiency and reducing errors. Developed test plan based on acceptance criteria with business team to ensure application is robust. Utilised microservices design pattern with Heroku and Vercel for CI/CD. Used Postgres SQL for storing and managing data.',
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
    title: 'Atlas Project',
    description:
      "Simple React app that gives the client the option of either a map or list of countries, which when selected shows capitol and languages of the selected. Great way to illustrate the use of state, context, reducers, params, search, Typescript, DRY coding and SASS. Map component uses React-simple-maps. Was originally made for a coding challenge.",
    github: 'https://github.com/alexnyebuchan/agate-test',
    url: 'https://agate-test.vercel.app',
    tech: [
      {
        url: '/images/icons/react.svg',
        title: 'React',
      },
      {
        url: '/images/icons/typescript.svg',
        title: 'TypeScript',
      },
      {
        url: '/images/icons/vite.svg',
        title: 'Vite',
      },
      {
        url: '/images/icons/sass-1.svg',
        title: 'SASS',
      },
    ],
    image: '/images/project/atlas-main.png',
    popupImage: '/images/project/atlas.png',
  },
  {
    id: 3,
    title: 'Al Zanders Current Website',
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
    title: 'Guardian Clone',
    description:
      'A clone of the Guardian news website (Technology Section) to demonstrate ability to translate user designs into a functional website. Utilises the Guardian news REST Api to provide real time news information. Translated designs from the real website into Next.js code. Designed with SEO best practices in mind.',
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
    id: 5,
    title: 'Web Dev Fundamentals',
    description:
      'This simple web application takes a key web development term such as ‘URL’ or ‘DOM’ from a list of terms and returns one at random, with a title and definition. The list is in JSON and updated regularly, the app is configured with Vite, Typescript and React. Currently undergoing Jest integration on a seperate Git Branch. Download from here or use online.',
    github: 'https://github.com/alexnyebuchan/web-dev-fundamentals',
    url: 'https://web-dev-fundamentals-eight.vercel.app/',
    tech: [
      {
        url: '/images/icons/sass-1.svg',
        title: 'Sass',
      },
      {
        url: '/images/icons/typescript.svg',
        title: 'TypeScript',
      },
      {
        url: '/images/icons/react.svg',
        title: 'React',
      },
      {
        url: '/images/icons/vite.svg',
        title: 'Vite',
      },
    ],
    image: '/images/project/webdevfund.jpg',
    popupImage: '/images/project/webdevfund-main.jpg',
  },
  
  {
    id: 6,
    title: 'CS50: Recipe Maker',
    description:
      "CS50 Final Project which I passed. The Recipe Maker is a full-stack web application that takes as input the user’s perishable and non-perishable kitchen ingredients before making a fetch request to the Chat-GPT API to get some suggested recipes. The frontend is a simple mixture of HTML, CSS, and vanilla JavaScript. The backend utilizes Flask, a database, and SQL to store a user's larder so they don’t have to retype it every time they log in.",
    github: 'https://github.com/alexnyebuchan/cs50-project',
    url: 'https://youtu.be/FCnVLECip_Q',
    tech: [
      {
        url: '/images/icons/javascript.svg',
        title: 'Javascript',
      },
      {
        url: '/images/icons/ChatGPT.svg',
        title: 'Chat GPT API',
      },
      {
        url: '/images/icons/python-5.svg',
        title: 'Python (Flask)',
      },
      {
        url: '/images/icons/sql.svg',
        title: 'SQL',
      },
    ],
    image: '/images/project/cs50.jpg',
    popupImage: '/images/project/cs50-main.jpg',
  },
  {
    id: 7,
    title: '92 Groove',
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
    id: 8,
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
