import styled, { keyframes } from 'styled-components';

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

export const Project = styled.div`
  /* height: 90vh; */
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
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      color: #fff;
      width: 100%;

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
        width: 80%;
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
