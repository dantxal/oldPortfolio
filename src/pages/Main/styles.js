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
    margin: 5% auto 0;

    h1 {
      font-size: 3.5em;
      color: #226aff;
    }

    h2 {
      font-size: 2em;
    }

    strong {
      text-align: center;
      font-size: 1.3em;
      line-height: 1.7;
      opacity: 0.7;
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 600px;
    > a {
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
        font-size: 1.5em;
        padding: 2% 0;
      }

      svg {
        margin-left: 10px;
      }
    }
  }

  > button {
    color: #aab8ff;
    font-size: 2em;
    font-weight: normal;
    margin-bottom: 20px;

    background: 0;
    border: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-top: 20px;
      animation: ${chevronAnimation} 2s ease-in-out infinite;
      width: 50px;
    }
  }

  @media (max-width: 720px) {
    div {
      padding: 0;
      margin: 5% 0 0;
      h1 {
        font-size: 2.4em;
      }
      h2 {
        font-size: 1.4em;
      }
    }

    nav {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin: 0 auto;

      > button {
        margin: 0;
        min-width: 200px;

        span {
          font-size: 1.3em;
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

  @media (max-height: 500px) {
    padding: 5vh;
    > div {
      margin: 0;
      > strong {
        display: none;
      }
    }

    nav {
      display: flex;
      flex-direction: row;
      max-width: 80vw;
      flex-wrap: wrap;
      justify-content: center;
      button {
        margin: 20px;
        span {
          text-align: right;
        }
      }
    }

    > button {
      font-size: 1.4em;
      font-weight: normal;

      img {
        margin-top: 10px;
        animation: ${chevronAnimation} 2s ease-in-out infinite;
        width: 30px;
      }
    }
  }
`;

export const CarouselOverlay = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);

  > button {
    z-index: 21;
    position: absolute;
    right: 10px;
    top: 10px;

    width: 10vh;
    height: 10vh;
    border-radius: 50%;
    border: 0;
    background: #012;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #081828;
    }
  }

  > div {
    padding: 10vh;
  }

  .imageWrapper {
    height: 40vw;
    height: 80vh;

    img {
      object-fit: contain;
      max-height: 90%;
      max-width: 99%;
      margin: auto;
    }

    .caption {
      color: #aaa;
      margin: 1.5em auto;
      text-align: center;
    }
  }
  .slick-dots li button:before {
    color: #ddd;
  }
`;
