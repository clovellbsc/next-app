import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalMain = styled.div`
  width: 50vw;
  height: 75vh;
  background-color: white;
  color: black;
  padding-bottom: 40px;
  border-radius: 20px;
  justify-content: fit-content;
`;

export const Input = styled.input`
  width: 75%;
  height: 3em;
  margin: 10px;
`;

export const Form = styled.form`
  align-content: center;
  align-items: center;
  text-align: center;
  max-height: 75%;
  margin-bottom: 20px;
`;
