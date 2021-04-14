import styled from "styled-components";

export const Container = styled.div`
  background-color: #ff2211;
  width: 25rem;
  height: 20rem;

  border-radius: 10px;

  text-align: center;
  padding: 1rem;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;

  .Buttons {
    display: flex;
    justify-content: space-around;
    margin: 2rem;

    .confirm {
      background-color: #008922;

      :hover {
        background-color: #008900;
      }
      transition: background 0.3s;
    }

    .cancel {
      background-color: #005aff;

      :hover {
        background-color: #002aff;
      }
      transition: background 0.3s;
    }
  }
`;
