const projects = [
  {
    id: 1,
    title: '92 Groove Music App',
    description:
      "New music platform where fans can listen to radio mixes and buy cassettes from myself and a friend. To improve upon my last project's SEO I chose to use Next.js front-end with a Strapi back-end for this project. The audio player utilises useContext and useReducer hooks for state management, as well as the  CSS module system for the UI. Currently we're using dummy data from previous radio shows but we're looking to go live in Spring 2023.",
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
    image: '/images/project/92groove-main.jpg',
    popupImage: '/images/project/popup.jpg',
  },

  ,
  {
    id: 2,
    title: 'Al Zanders Official Website',
    description:
      'My first live React project, which is a simple portfolio site for my music as Al Zanders. Utilises React basics such as Components, Props and the Router. For the styling I chose React-Bootstrap, including a carousel on the Hero component, Pagination, Dropdown menus and more. The website is fully dynamic using a Django backend and the Django Rest Framework for the API. News items and releases can be added online using the Django admin area.',
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
    image: '/images/project/alzanders-main.jpg',
    popupImage: '/images/project/popup.jpg',
  },
];

export default projects;
