import { CardContainer, Content, HeaderCard } from "./styles";
import React, { useState } from "react";
import Button from "../Button";
import DeleteModal from "../DeleteModal";
import FormEdit from "../FormCard";
import Input from "../Input";

import { Cards } from "../../interfaces/cards";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface Props {
  task: Task;
  cards: Cards[];
  setCards: React.Dispatch<React.SetStateAction<Cards[]>>;
}

const Card: React.FC<Props> = ({ task, cards, setCards }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const changeTask = () => {
    setOpenEdit(true);
  };

  const confirm = (): void => {
    setOpenModal(true);
  };

  const deleteCard = () => {
    let cardID = task.id;
    let updateCards = cards.filter((card) => card.id !== cardID);
    setCards(updateCards);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);

    let cardChange = cards.filter((card) => card.id === task.id);
    cardChange[0].completed = e.target.checked;

    let updateCards = cards.map((card) => card);

    let index = updateCards.findIndex((card) => card.id === cardChange[0].id);

    updateCards.splice(index, 1, cardChange[0]);

    setCards(updateCards);
  };

  return (
    <CardContainer>
      <HeaderCard>
        <Button onClick={changeTask}>Edit</Button>
        <Button onClick={confirm}>Delete</Button>
      </HeaderCard>
      <Content>
        <Input type="checkbox" onChange={handleChange} />
        <div className="infos">
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      </Content>

      {openModal && (
        <DeleteModal setOpenModal={setOpenModal} deleteCard={deleteCard} />
      )}

      {openEdit && (
        <FormEdit
          setOpen={setOpenEdit}
          setCards={setCards}
          cards={cards}
          editID={task.id}
        />
      )}
    </CardContainer>
  );
};

export default Card;
