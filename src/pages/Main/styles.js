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

const buttonHoverAnimation = keyframes`
  0% {
    background: linear-gradient(-90deg, #2b55d5 99%, #be24fc 100%);
  }
  10% {
    background: linear-gradient(-90deg, #2b55d5 80%, #be24fc 100%);
  }
  25% {
    background: linear-gradient(-90deg, #2b55d5 60%, #be24fc 100%);
  }
  60% {
    background: linear-gradient(-90deg, #2b55d5 40%, #be24fc 100%);
  }
  80% {
    background: linear-gradient(-90deg, #2b55d5 20%, #be24fc 100%);
  }
  100% {
    background: linear-gradient(-90deg, #2b55d5 0%, #be24fc 100%);
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
        font-size: 1.5em;

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
  padding-bottom: 40px;
  align-items: center;
  .projectContent {
    margin: 0 auto;
    max-width: 1200px;
  }
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
    background: linear-gradient(-90deg, #2b55d5, #be24fc);
  }

  main {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin: 30px;
    width: fit-content;
    max-width: 1200px;
    section {
      align-self: stretch;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      color: #fff;
      width: 100%;
      min-width: 40vw;
      padding-right: 30px;
      h2 {
        color: #ff595e;
        font-size: 2.8em;
      }

      strong {
        font-size: 1.2em;
        font-weight: 400;
      }

      p {
        white-space: pre-line;
        opacity: 0.6;
      }

      .links {
        margin-top: auto;
        justify-self: flex-end;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        list-style: none;
        li {
          margin-top: 20px;
          & + li {
            margin-left: 20px;
          }
          a {
            display: flex;
            flex-direction: row;
            align-items: center;
            background: #2b55d5;
            border-radius: 4px;
            padding: 12px 20px;

            &:hover {
              cursor: pointer;
              animation: ${buttonHoverAnimation} 0.1s ease-in forwards;
            }
            transition: background 1s;
            &:active {
              animation: 0;
              background: #be24fc;
            }

            span {
              color: #fff;
              font-size: 2em;
            }
            svg {
              margin-left: 10px;
            }
          }
        }
      }
    }
    aside {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      button {
        background: rgba(0, 0, 0, 0.8);
        border: 0;
        img {
          object-fit: contain;

          /* height: 100%; */
          width: 100%;
          max-height: 450px;
        }

        .seeMore {
          height: 10%;
          width: 100%;
          background: rgba(0, 0, 0, 0.8);

          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          p {
            color: #bbb;
            font-size: 1em;
          }
        }
      }
      .techs {
        list-style: none;
        align-self: center;
        flex: 1;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        margin: 10px -10px 0;
        li {
          text-align: center;
          color: #aab8ff;
          opacity: 0.7;
          padding: 2px 4px;
          border-radius: 4px;
          margin: 0 5px 5px;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    main {
      flex-direction: column;
      align-items: center;
      section {
        padding: 0;
        h2 {
          font-size: 2.5em;
        }
        p {
          margin-bottom: 20px;
        }

        .links {
          margin: 0 auto;
          flex-wrap: wrap;
          justify-content: center;
          li {
            margin: 0 10px 20px;
            & + li {
              margin-left: 10px;
            }
          }
          a {
            padding: 6px 14px;
            span {
              font-size: 1.5em;
            }
            svg {
              width: 30px;
            }
          }
        }
      }
    }
    aside {
      width: 100%;
      button {
        width: 100%;
        img {
          max-width: 80vw;
          width: 80vw;
          max-height: 400px;
        }
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
    background: #000;

    color: #fff;
    font-size: 2em;
  }

  > div {
    padding: 10vh;
  }

  .imageWrapper {
    height: 40vw;
    max-height: 80vh;

    img {
      object-fit: contain;
      max-height: 90%;
      max-width: 99%;
      margin: auto;
    }
  }
  .slick-dots li button:before {
    color: #ddd;
  }
`;
