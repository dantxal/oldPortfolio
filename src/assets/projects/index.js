import meetappEdit from '~/assets/projects/meetapp/meetappEdit.png';
import meetappSignIn from '~/assets/projects/meetapp/meetappSignIn.png';
import meetappDashboardMobile from '~/assets/projects/meetapp/meetappDashboardMobile.png';
import meetappSignInMobile from '~/assets/projects/meetapp/meetappSignInMobile.png';

import grivReactRepo from '~/assets/projects/griv/grivReactRepo.png';

const meetapp = {
  name: 'MEETAPP',
  scope: `BACK-END,
  FRONT-END,
  MOBILE`,
  techs: [
    'Reactjs',
    'React-Native',
    'Redux',
    'Styled-components',
    'Reactotron',
    'Axios',
    'NodeJS',
    'Express',
    'Sequelize',
  ],
  description: `
  App for scheduling meetups with authentication, date and time selectors, responsive design, auto-mailing system notifications.

  The back-end is built in Nodejs with a Postgres and a Redis databases. It has a mailing system that uses Redis and BeeQueue for a super-fast and scalable api.

  The front-end is built with Reactjs and uses @Rocketseat/unform forform validation and styled components styling.

  The mobile app is built with React Native with styled components styling aswell, it uses different navigation types and accessbility on forms.`,
  links: {
    githubURL: 'https://github.com/dantxal/meetapp.git',
  },

  images: [
    meetappSignIn,
    meetappEdit,
    meetappDashboardMobile,
    meetappSignInMobile,
  ],
};

const griv = {
  name: 'GIT-ISSUES VIEWER',
  scope: 'FRONT-END',
  techs: ['Reactjs', 'Redux', 'Styled-components', 'Reactotron', 'Axios'],
  description: `
  This is a non-commercial app, built by dantxal during Rocketseat's Bootcamp 8.0.


It consumes github's api and allows you to keep track of your favorite git repositories with a simplified UI. Explore the repos you like and find some issues to solve, and feel great doing it.`,
  links: {
    githubURL: 'https://github.com/dantxal/meetapp.git',
    website: 'https://griv.netlify.com/',
  },
  images: [grivReactRepo],
};

const projects = [meetapp, griv];

export default projects;
