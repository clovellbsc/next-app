import styled from "styled-components";

export const Style = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const DropDownControl = styled.div`
  min-width: 160px;
  text-align: center;
  outline-color: white;
  outline-style: solid;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    border-radius: 5px;
    outline-color: white;
    outline-style: solid;
  }
`;

export const DropDownItems = styled.div`
  outline-color: grey;
  outline-style: solid;
  min-width: 5vw;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    outline-color: black;
    outline-style: solid;
  }
`;

interface Props {
  display: boolean;
}

export const DropDownContainer = styled.div<Props>`
  display?: ${(props) => (props.display ? "flex" : "none")}
  flex-direction: column;
  margin-top: 50px;
  position: absolute;
  background-color: black;
  min-width: 160px;
  z-index: 1;
`;
