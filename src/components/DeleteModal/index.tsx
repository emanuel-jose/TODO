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
      <h1>Are you sure you will delete this ?</h1>
      <div className="Buttons">
        <Button className="confirm" onClick={handleConfirm}>
          Confirm
        </Button>
        <Button className="cancel" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </Container>
  );
};

export default DeleteModal;
