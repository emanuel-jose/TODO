import { Container, Content, HeaderCard } from "./styles";
import React, { useState } from "react";
import Button from "../Button";
import DeleteModal from "../DeleteModal";

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
  const [taskState, setTask] = useState<Task>();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const changeTask = (newTask: Task) => {
    setTask(newTask);
  };

  const confirm = (): void => {
    setOpenModal(true);
  };

  const deleteCard = () => {
    let cardID = task.id;
    let updateCards = cards.filter((card) => card.id !== cardID);
    setCards(updateCards);
  };

  return (
    <Container>
      <HeaderCard>
        <Button>Edit</Button>
        <Button onClick={confirm}>Delete</Button>
      </HeaderCard>
      <Content>
        <div>{task.completed ? "Completado" : "Not"}</div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
      </Content>

      {openModal && (
        <DeleteModal setOpenModal={setOpenModal} deleteCard={deleteCard} />
      )}
    </Container>
  );
};

export default Card;
