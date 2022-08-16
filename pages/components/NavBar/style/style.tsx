import styled from "styled-components";

export const Style = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: black;
  color: white;
  width: 100vw;
  z-index: 1;
  overflow: hidden;
  padding: 14px 16px;
`;

export const NavBarItems = styled.div`
  outline-color: white;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }
`;
