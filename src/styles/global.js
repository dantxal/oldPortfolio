import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html,body,#root {
    height: 100vh;
    @media (max-width: 720px) {
      font-size: 14px;
    }
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

body, input, button {
  font-family: Roboto, Oxygen, Ubuntu, Cantarell,'Helvetica','Segoe UI',  'Open Sans', sans-serif;
  letter-spacing: 0.02rem;

}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}


`;
