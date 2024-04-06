import React from "react";
import { Th, Tr, Td, Thead, Table, Tbody } from "../styles/grid.styles";
import { FaTrash, FaEdit } from "react-icons/fa";

const Grid = () => {

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th onlyWeb>Fone</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td width="30%"></Td>
          <Td width="30%"></Td>
          <Td width="20%" onlyWeb>
          </Td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default Grid;
