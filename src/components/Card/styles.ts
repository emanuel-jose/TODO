import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: tomato;
  color: #fff;
  width: 15rem;
  height: 15rem;
`;

export const HeaderCard = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  button {
    height: 3rem;
    width: 3rem;

    margin: 0.5rem 0.5rem 0;
  }
`;

export const Content = styled.div`
  input {
    width: initial;
    margin: 0;
    margin: 1rem 1rem 0;

    cursor: pointer;
  }

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
  }

  p {
    font-size: 0.9rem;
    text-align: center;
    padding: 0.5rem;
  }
`;
