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

  The front-end is built with Reactjs and uses @Rocketseat/unform for form validation and styled components styling.

  The mobile app is built with React Native with styled components styling aswell, it uses different navigation types and accessbility on forms.`,
  links: {
    githubURL: 'https://github.com/dantxal/meetapp.git',
  },

  images: [
    {
      src: '/projects/meetapp/signIn.png',
      caption: 'Web: Sign in screen',
    },
    {
      src: '/projects/meetapp/dashboard.png',
      caption: 'Web: Dashboard with various meetups',
    },
    {
      src: '/projects/meetapp/new.png',
      caption: 'Web: New screen',
    },
    {
      src: '/projects/meetapp/new-responsive.png',
      caption: 'Web: New responsive',
    },
    {
      src: '/projects/meetapp/edit.png',
      caption: 'Web: Edit screen',
    },
    {
      src: '/projects/meetapp/details-responsive.png',
      caption: 'Web: Details screen responsive',
    },
    {
      src: '/projects/meetapp/dashboard-responsive.png',
      caption: 'Web: Dashboard responsive',
    },
    {
      src: '/projects/meetapp/mobile/dashboard.jpeg',
      caption: 'Mobile: Dashboard',
    },
    {
      src: '/projects/meetapp/mobile/dashboard-multiple.jpeg',
      caption: 'Mobile: Dashboard multiple meetups',
    },
    {
      src: '/projects/meetapp/mobile/blankDay.jpeg',
      caption: 'Mobile: Dashboard blank day',
    },
    {
      src: '/projects/meetapp/mobile/profile.jpeg',
      caption: 'Mobile: Profile screen',
    },
    {
      src: '/projects/meetapp/mobile/subscriptions.jpeg',
      caption: 'Mobile: Subscriptions',
    },
    {
      src: '/projects/meetapp/mobile/subscription-success.jpeg',
      caption: 'Mobile: Successful subscription',
    },
  ],
};

const gobarber = {
  name: 'GOBARBER',
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
    'Design Patterns',
  ],
  description: `
  App for barbers and clients to set-up appointments. Features date and time selectors, auto-mailing system, notifications bar.

  The web app (front-end) is an office for barbers to manage their appointments and profiles, while the mobile app will be used by customers for setting appointments with those providers.

  The back-end is built in NodeJS with Postgres, Redis and MongoDB databases. It has a mailing system that uses Redis and BeeQueue for a super-fast and scalable api.
  It has a cache system on requests to reduce volume of queries to the database.

  The front-end is built with Reactjs and uses @Rocketseat/unform for form validation and styled components for css styling.

  The mobile app is built with React Native with styled components styling aswell, it uses different navigation types and accessbility on forms.`,
  links: {
    githubURL: 'https://github.com/dantxal/gobarber.git',
  },

  images: [
    {
      src: '/projects/gobarber/signin.png',
      caption: 'Web: Sign in screen',
    },
    {
      src: '/projects/gobarber/dashboard with avatar.png',
      caption: 'Web: Dashboard',
    },
    {
      src: '/projects/gobarber/notifications read.png',
      caption: 'Web: Notifications bar',
    },
    {
      src: '/projects/gobarber/profile.png',
      caption: 'Web: Profile',
    },
    {
      src: '/projects/gobarber/mobile/signIn.png',
      caption: 'Mobile: Sign in',
    },
    {
      src: '/projects/gobarber/mobile/profile.png',
      caption: 'Mobile: Profile',
    },
    {
      src: '/projects/gobarber/mobile/select-provider.png',
      caption: 'Mobile: creating an appointment 1/4',
    },
    {
      src: '/projects/gobarber/mobile/select-date.png',
      caption: 'Mobile: creating an appointment 2/4',
    },
    {
      src: '/projects/gobarber/mobile/select-time.png',
      caption: 'Mobile: creating an appointment 3/4',
    },
    {
      src: '/projects/gobarber/mobile/confirm-appointment.png',
      caption: 'Mobile: creating an appointment 4/4',
    },
    {
      src: '/projects/gobarber/mobile/appointments-cancelable.png',
      caption: 'Mobile: Appointments cancelable',
    },
    {
      src: '/projects/gobarber/mobile/appointments-past.png',
      caption: 'Mobile: Appointments past',
    },
    {
      src: '/projects/gobarber/mobile/provider-sign-in-error.png',
      caption: 'Mobile: Providers are redirected to the web app',
    },
  ],
};

const rocketshoes = {
  name: 'ROCKETSHOES',
  scope: `FRONT-END`,
  techs: ['Reactjs', 'Redux', 'Styled-components', 'Reactotron', 'Axios'],
  description: `
  Simple cart implementation using Redux and Redux Saga.

  Whenever a customer adds a new product to the cart, it checks if that quantity is available in stock to avoid letting an user buy more products than we have in stock.

  If the quantity is not available the user gets notified via a toasty message.
  `,
  links: {
    githubURL: 'https://github.com/dantxal/rocketshoes-redux.git',
  },

  images: [
    {
      src: '/projects/rocketshoes-web/dashboard.png',
      caption: 'Dashboard',
    },
    {
      src: '/projects/rocketshoes-web/cart.png',
      caption: 'Cart',
    },
  ],
};

const rocketshoesMobile = {
  name: 'ROCKETSHOES MOBILE',
  scope: `MOBILE`,
  techs: ['Reactjs', 'Redux', 'Styled-components', 'Reactotron', 'Axios'],
  description: `
  This project is a port of the Rocketshoes web app to mobile.

  It has all the features of the web app, with the advantage of a native app.

  Whenever a customer adds a new product to the cart, it checks if that quantity is available in stock to avoid letting an user buy more products than we have in stock.

  If the quantity is not available the user gets notified via a toasty message.
  `,
  links: {
    githubURL: 'https://github.com/dantxal/rocketshoes.git',
  },

  images: [
    {
      src: '/projects/rocketshoes-mobile/dashboard.png',
      caption: 'Dashboard',
    },
    {
      src: '/projects/rocketshoes-mobile/cart-scrollable.png',
      caption: 'Cart with an scrollview wrapper',
    },
  ],
};

const giv = {
  name: 'GIT-ISSUES VIEWER',
  scope: 'FRONT-END',
  techs: ['Reactjs', 'Redux', 'Styled-components', 'Reactotron', 'Axios'],
  description: `
  This is a study app for consuming third party apis, built during Rocketseat's Bootcamp 8.0.

  It consumes github's api and allows you to keep track of your favorite git repositories with a simplified UI.

  You can explore the repos you like and find some issues to solve, and feel great doing it.

  This app is being hosted on netlify, if you want to try it click the 'Website' button below.
  `,
  links: {
    githubURL: 'https://github.com/dantxal/meetapp.git',
    website: 'https://giv.netlify.com/',
  },
  images: [
    {
      src: '/projects/giv/main desktop.png',
      caption: 'Main page',
    },
    {
      src: '/projects/giv/main-mobile.jpeg',
      caption: 'Main page - on mobile screen',
    },
    {
      src: '/projects/giv/main desktop.png',
      caption:
        "If the user types in a repo that doesn't exist, the input gets red borders",
    },
    {
      src: '/projects/giv/repo-fb-react-desktop.png',
      caption: 'The facebook/react repo issues',
    },
    {
      src: '/projects/giv/repo-fb-react-mobile.jpeg',
      caption: 'facebook/react - on mobile screen',
    },
    {
      src: '/projects/giv/repo-wix-rn-navigation.png',
      caption: 'react-native-navigation repo',
    },
  ],
};

const projects = [meetapp, gobarber, rocketshoes, rocketshoesMobile, giv];

export default projects;
