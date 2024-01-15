const projects = [
  {
    id: 1,
    title: 'Transport Planning Society',
    description:
    "<p>Freelance Project. Developed a <b>full stack</b> application for TPS which allows clients to upload information through various sources.</p><p>Selected the most suitable technologies to fit the customer’s needs, deciding on Next.js with Django (python) backend <b>REST api</b>. Utilised microservices design pattern with Heroku and Vercel for CI/CD and <b>PostgreSQL</b> for storing and managing data.</p>",    
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
    tag: 'Freelance',
  },
  {
    id: 2,
    title: 'Atlas Project',
    description:
      "<p>Simple React app that gives the client the option of either a map or list of countries, which when selected shows capitol and languages of the selected.</p><p>Great way to illustrate the use of <b>state, context, reducers, params, search, Typescript, DRY code practices</b> and <b>SASS</b>. Map component uses React-simple-maps. Was originally made for a coding challenge.</p>",
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
    tag: 'Personal',
  },
  {
    id: 3,
    title: 'Al Zanders Current Website',
    description:
      "<p><b>Full stack</b> application displaying latest news and releases for side hustle music production and DJ business.</p><p>Utilises a <b>Django backend</b> and <b>React frontend</b>. Integrated <b>React-Bootstrap</b> component library for consistent styles and fast development.</p>",
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
    tag: 'Freelance',
  },
  {
    id: 4,
    title: 'Guardian Clone',
    description:
      "<p>A clone of the Guardian news website (Technology Section) to demonstrate ability to translate user designs into a functional website. </p><p>Utilises the <b>Guardian news REST API</b> to provide real time news information. Translated designs from the real website into <b>Next.js</b> code. Designed with <b>SEO</b> best practices in mind.</p>",
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
    tag: 'Clone',
  },
  {
    id: 5,
    title: 'Web Dev Fundamentals',
    description:
      "<p>This simple web application takes a <b>key web development term</b> such as ‘URL’ or ‘DOM’ from a list of terms and returns one at random, with a title and definition.</p><p> The list is in JSON and updated regularly, the app is configured with <b>Vite, Typescript and React</b>. Currently undergoing <b>Jest</b> integration on a seperate <b>Git Branch</b>. Download from here or use online.</p>",
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
    tag: 'Education',
  },
  
  {
    id: 6,
    title: 'CS50: Recipe Maker',
    description:
      "<p><b>CS50</b> Final Project which I passed. The Recipe Maker is a full-stack web application that takes as input the user’s perishable and non-perishable kitchen ingredients before making a fetch request to the <b>Chat-GPT API</b> to get some suggested recipes.</p><p>The frontend is a simple mixture of <b>HTML, CSS, and vanilla JavaScript</b>. The backend utilizes <b>Flask</b>, a database, and <b>SQL</b> to store a user's larder so they don’t have to retype it every time they log in.</p>",
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
    tag: 'Education',
  },
  {
    id: 7,
    title: '92 Groove',
    description:
      "<p>New music platform with a bespoke, custom built music player. Uses a <b>Next.js</b> front-end for improved <b>SEO</b>. </p><p>The audio player utilises <b>useContext/ useReducer</b> hooks for state management, as well as the  <b>CSS module system</b> for the UI. New mixes can be added using the <b>Strapi</b> backend, which uploads audio and images to cloudinary. Currently I'm using dummy data from previous radio shows but looking to go live Summer 2024.</p>",
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
    tag: 'Personal',
  },
  {
    id: 8,
    title: 'This Portfolio',
    description:
      "<p>This site uses Next.js and the CSS module system for styling. <b>UseContext, UseReducer</b> and <b>UseEffect</b> were used for the theme selection.</p>",
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
    tag: 'Personal',
  },
];

export default projects;
