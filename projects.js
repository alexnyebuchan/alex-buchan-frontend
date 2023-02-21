const projects = [
  {
    id: 1,
    title: '92 Groove Music Player (live summer 2023)',
    description:
      "New music platform where fans can listen to radio mixes and buy cassettes from myself and a friend. To improve upon my last project's SEO I chose to use a Next.js front-end. The audio player utilises useContext and useReducer hooks for state management, as well as the  CSS module system for the UI. New mixes can be added using the Strapi backend, which uploads audio and images to cloudinary. Currently I'm using dummy data from previous radio shows but looking to go live in Spring 2023.",
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

  ,
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
];

export default projects;
