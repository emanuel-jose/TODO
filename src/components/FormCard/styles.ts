import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffffbb;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
  width: 25rem;
  height: 30rem;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 60%;

  margin-top: 2rem;

  display: flex;
  justify-content: space-between;
`;
