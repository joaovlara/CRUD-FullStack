import React, { useState } from "react";
import axios from "axios";
import { Th, Tr, Td, Thead, Table, Tbody, StyledEditIcon, StyledTrashIcon, BtnSave, BtnCancel } from "../styles/grid.styles"
import { toast } from "react-toastify";

const Grid = ({ users, setUsers }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedValues, setEditedValues] = useState({});

  const handleEdit = (id, values) => {
    setEditingId(id);
    setEditedValues(values);
  };

  const handleEditChange = (field, value) => {
    setEditedValues({
      ...editedValues,
      [field]: value
    });
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8800/${editingId}`, editedValues);
      toast.success("Usuário editado com sucesso.");
      updateUserList();
    } catch (error) {
      toast.error("Erro ao editar o usuário.");
    }
    resetEditingState();
  };

  const handleCancel = () => {
    resetEditingState();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/${id}`);
      const newArray = users.filter((user) => user.id !== id);
      setUsers(newArray);
      toast.success("Usuário excluído com sucesso.");
    } catch (error) {
      toast.error("Erro ao excluir o usuário.");
    }
    resetEditingState();
  };

  const updateUserList = async () => {
    setUsers((prevUsers) => {
      const index = prevUsers.findIndex(user => user.id === editingId);
      if (index !== -1) {
        const updatedUser = {
          ...prevUsers[index],
          ...editedValues
        };
        prevUsers.splice(index, 1, updatedUser);
      }
      return [...prevUsers];
    });
  };

  const resetEditingState = () => {
    setEditingId(null);
    setEditedValues({});
  };

  const renderCell = (item, field) => {
    if (editingId === item.id) {
      return (
        <input
          type="text"
          value={editedValues[field] || item[field]}
          onChange={(e) => handleEditChange(field, e.target.value)}
        />
      );
    }
    return item[field];
  };

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
        {users.map((item) => (
          <Tr key={item.id}>
            <Td width="30%">{renderCell(item, "nome")}</Td>
            <Td width="30%">{renderCell(item, "email")}</Td>
            <Td width="20%" onlyWeb>{item.fone}</Td>
            <Td width="5%">
              {editingId === item.id ? (
                <>
                  <BtnSave onClick={handleSave} />
                  <BtnCancel onClick={handleCancel} />
                </>
              ) : (
                <StyledEditIcon onClick={() => handleEdit(item.id, { nome: item.nome, email: item.email })} />
              )}
            </Td>
            <Td alignCenter width="5%">
              <StyledTrashIcon onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
