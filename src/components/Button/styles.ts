import styled from "styled-components";

export const Button = styled.button`
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 40%;

  padding: 0.8rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #00000050;
  color: white;
  cursor: pointer;

  :hover {
    background-color: #00000080;
  }
`;
