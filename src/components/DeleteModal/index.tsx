import React from "react";
import Button from "../Button";
import { Container } from "./styles";

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteCard: Function;
}

const DeleteModal: React.FC<Props> = ({ setOpenModal, deleteCard }) => {
  const handleConfirm = () => {
    setOpenModal(false);
    deleteCard();
  };

  const handleCancel = () => {
    setOpenModal(false);
  };
  return (
    <Container>
      <h1>Tem certeza !</h1>
      <Button onClick={handleConfirm}>Confirm</Button>
      <Button onClick={handleCancel}>Cancel</Button>
    </Container>
  );
};

export default DeleteModal;
