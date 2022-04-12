import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 20px;
  padding: 20px;
  gap: 20px;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 1.3rem;
  max-width: 400px;
  background-color: rgb(129, 4, 129);

  ul {
    display: flex;
    flex-direction: row;
    justify-self: center;
    gap: 10px;
    padding: 0;
    list-style: none;
  }

  li {
    list-style: none;
    margin: 20px 20px 0 20px;
    padding: 10px;
    background-color: coral;
    border-radius: 5px;
    font-size: 1.1rem;
  }
`;
