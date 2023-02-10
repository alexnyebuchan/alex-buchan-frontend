const projects = [
  {
    id: 1,
    title: '92 Groove',
    description:
      "New music platform started with a friend, where fans can listen to mixes and buy cassettes. To improve upon the last website's performance and SEO I chose to use Next.js front-end and Strapi back-end for this project. \n Audio player utilises useContext and useReducer hooks for state management, as well as the  CSS module system for the UI. Currently we're using dummy data from previous radio shows but we're looking to go live in Spring 2023.",
    github: 'www.google.com',
    url: 'www.92groove.uk',
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
    title: 'Al Zanders',
    description:
      'ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ',
    github: 'www.google.com',
    url: 'www.yahoo.com',
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
