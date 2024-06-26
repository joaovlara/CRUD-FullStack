import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: white;
  display: flex;
  align-items: flex-end;
  justify-content:center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

export const Label = styled.label``;

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
  &:hover {
    background-color: darkblue;
    transform: scale(1.05);

    }
`;
