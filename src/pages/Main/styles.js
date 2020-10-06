import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 10px 15px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background-color: #7159c1;
  border: 0;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  max-width: 700px;
  background-color: #fff;
  border-radius: 4px;
  padding: 15px;
  margin: 80px auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  list-style: none;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    transform: scale(1.01);
  }

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 2px solid #eee;
    }

    a {
      font-weight: lighter;
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
