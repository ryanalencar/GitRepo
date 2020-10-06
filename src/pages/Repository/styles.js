import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

const leftAnimation = keyframes`
  from {
    left: 682px;
  }

  to {
    left: 678px;
  }
`;

export const Loading = styled.div.attrs((props) => ({
  loading: props.loading,
}))`
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 2px;
    color: #7159c1;
    transition: all 3s ease-in-out;

    svg {
      position: absolute;
      left: 682px;
    }

    &:hover {
      svg {
        animation: ${leftAnimation} 0.6s normal;
      }
    }
  }
`;
