import styled from "styled-components";

export const Style = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  color: white;
  width: 100vw;
  z-index: 1;
  overflow: hidden;
  padding: 14px 16px;
`;

export const NavBarItems = styled.div`
  min-width: 160px;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }
`;

interface Props {
  display: boolean;
}

export const ModalNavBar = styled.div<Props>`
  display?: ${(props) => (props.display ? "none" : "block")};
  min-width: 160px;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }
`;
