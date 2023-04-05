const projects = [
  {
    id: 1,
    title: 'Guardian Technology Clone',
    description:
      "My clone of the Guardian UK's technology section. Consumes the Guardian API to load latest articles, using getServerSideProps(), fetch() and an API key. Local Storage was used to leave comments specific to each page on individual articles. Further, a search bar with a debounce function was added to make it easier to find articles in the database. All styling to copy to original site was done with Sass. Page is fully scalable for tablets and mobiles, give it a go!",
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
    id: 2,
    title: 'Al Zanders Current Website ',
    description:
      'My first live React project, which is a simple portfolio site for my music as Al Zanders. Utilises React basics such as Components, Props, Router and Fetch. For the styling I chose React-Bootstrap, including a carousel on the Hero component, Pagination, Dropdown menus and more. The website is fully dynamic using a Django backend and the Django Rest Framework for the API. News items and releases can be added online using the Django admin area.',
    github: 'https://github.com/alexnyebuchan/alzandersone',
    url: 'http://www.alzanders.co.uk/',
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
    id: 3,
    title: '92 Groove Music Player (live summer 2023)',
    description:
      "New music platform with a custom built music player. Uses a Next.js front-end for improved SEO. The audio player utilises useContext and useReducer hooks for state management, as well as the  CSS module system for the UI. New mixes can be added using the Strapi backend, which uploads audio and images to cloudinary. Currently I'm using dummy data from previous radio shows but looking to go live Summer 2023. Have a listen!",
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
    id: 4,
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
