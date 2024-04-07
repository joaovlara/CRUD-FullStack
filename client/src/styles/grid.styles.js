import styled from "styled-components";
import { FaTrash, FaEdit, FaRegSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";


export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const StyledEditIcon = styled(FaEdit)`
  cursor: pointer;
  &:hover {
      color: blue;
      transform: scale(1.2);
    }
`;

export const StyledTrashIcon = styled(FaTrash)`
  cursor: pointer;  
    &:hover {
      color: red;
      transform: scale(1.2);
    }
`;

export const BtnCancel = styled(MdOutlineCancel)`
  width: 5vw;
  cursor: pointer;  
    &:hover {
      transform: scale(1.2);
    }

`;

export const BtnSave = styled(FaRegSave)`
  width: 5vw;
  cursor: pointer;  
    &:hover {
      transform: scale(1.2);
    }

`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;