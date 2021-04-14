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
  editID?: number;
}

const FormCard: React.FC<Modal> = ({ setOpen, setCards, cards, editID }) => {
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

  const editCard = () => {
    let cardToEdit = cards.filter((card) => card.id === editID);

    let updateCards = cards.map((card) => card);

    let index = updateCards.findIndex((card) => card.id === cardToEdit[0].id);

    cardToEdit[0].title = title;
    cardToEdit[0].description = text;

    updateCards.splice(index, 1, cardToEdit[0]);

    setCards(updateCards);

    setOpen(false);
  };

  return (
    <Container>
      <Input placeholder="Title" onChange={handleTitle}></Input>
      <TextArea placeholder="description" onChange={handleDesc} />
      <Button onClick={editID ? editCard : createCard} type="submit">
        Create
      </Button>
      <Button onClick={closeModal}>Cancel</Button>
    </Container>
  );
};

export default FormCard;
