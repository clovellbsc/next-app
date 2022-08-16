import styled from "styled-components";

export const Style = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: black;
  color: white;
  width: 100vw;
  z-index: 1;
  padding: 5px;
`;

export const NavBarItems = styled.div`
  &:hover {
    background-color: white;
    color: black;
  }
`;
