import React, { useState } from "react";
import { Container } from "./styles";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";

import { Cards } from "../../interfaces/cards";

interface Modal {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCards: React.Dispatch<React.SetStateAction<Cards[]>>;
  cards: Cards[];
}

const FormCard: React.FC<Modal> = ({ setOpen, setCards, cards }) => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const closeModal = (): void => {
    setOpen(false);
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const createCard = () => {
    let task: Cards = {
      id: cards.length > 0 ? cards[cards.length - 1].id + 1 : 1,
      title,
      description: text,
      completed: false,
    };

    let newCards = [...cards, task];

    setCards(newCards);
  };

  return (
    <Container>
      {/* input title */}
      <Input placeholder="Title" onChange={handleTitle}></Input>
      {/* input text area description */}
      <TextArea placeholder="description" onChange={handleDesc} />
      {/* criar */}
      <Button onClick={createCard} type="submit">
        Create
      </Button>
      {/* cancelar */}
      <Button onClick={closeModal}>Cancel</Button>
    </Container>
  );
};

export default FormCard;
