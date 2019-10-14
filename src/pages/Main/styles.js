import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

const chevronAnimation = keyframes`
  0% {
    transform: translate(0);
  }
  50% {
    transform: translate(0, 20px);
  }
  100% {
    transform: translate(0, 0);
  }

`;

export const About = styled.div`
  height: 100vh;
  background: linear-gradient(#000, #123);
  color: #aab8ff;

  padding: 40px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div {
    text-align: center;
    margin: 0 auto;

    h1 {
      font-size: 3.5rem;
      color: #226aff;
    }

    h2 {
      font-size: 2rem;
    }
  }

  strong {
    text-align: center;
    font-size: 1.3rem;
    line-height: 1.7;
  }

  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 600px;
    justify-content: center;
    > button {
      min-width: 250px;
      height: 42px;
      margin: 1% 2%;
      background: 0;
      border: 0;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      span {
        align-self: auto;
        color: #aab8ff;
        font-size: 1.5rem;
        padding: 2% 0;
      }

      svg {
        margin-left: 10px;
      }
    }
  }

  > button {
    color: #aab8ff;
    font-size: 2rem;
    font-weight: normal;

    background: 0;
    border: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-top: 10px;
      animation: ${chevronAnimation} 2s ease-in-out infinite;
      width: 50px;
    }
  }

  @media (max-width: 720px) {
    div {
      padding: 0;
      margin: 0;
      h1 {
        font-size: 2.4rem;
      }
      h2 {
        margin-top: 10px;
        font-size: 1.4rem;
      }
    }

    nav {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin: 0 auto;

      > button {
        margin: 0;
        font-size: 1.5rem;

        span {
          text-align: left;
          flex: 1;
        }

        img {
          grid-column: 2 3;
          margin: 0;
        }

        & + button {
          margin-top: 7px;
        }
      }
    }
  }
`;

export const Project = styled.div`
  background: #012;
  width: 100%;
  padding-bottom: 30px;

  &::before {
    content: '';
    display: block;
    width: 100%;
    z-index: 10;
    position: relative;
    top: -8px;
    right: 0;
    left: 0;
    height: 16px;
    background: linear-gradient(90deg, #2b55d5, #be24fc);
  }

  main {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 20px 30px;
    section {
      color: #fff;
      h2 {
        color: #d64a63;
        font-size: 2.8rem;
      }

      strong {
        font-size: 1.2rem;
        font-weight: 400;
      }

      p {
        white-space: pre-line;
        opacity: 0.6;
      }
    }
    button {
      margin-left: 20px;
      background: none;
      border: 0;

      img {
        max-height: 150px;
        border: 1px solid #222;
        margin-right: 10px;
      }
    }
  }

  footer {
    width: 100%;
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    button {
      background: #2b55d5;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;

      display: flex;
      flex-direction: row;
      align-items: center;

      span {
        color: #fff;
        font-size: 2rem;
      }
      svg {
        margin-left: 10px;
      }
    }
  }

  @media (max-width: 720px) {
    main {
      flex-direction: column;
      section {
        width: 100%;
        flex-direction: column;
        h2 {
          font-size: 2.5rem;
        }
        p {
          margin-bottom: 20px;
        }
      }
      button {
        img {
          max-width: 40%;
        }
      }
    }
    footer {
      button {
        padding: 6px 10px;
        & + button {
        }
        span {
          font-size: 1.5em;
        }
        svg {
          width: 30px;
        }
      }
    }
  }
`;
