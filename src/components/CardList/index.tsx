import Button from "../Button";
import Card from "../Card";
import FormCard from "../FormCard";
import { Container, CardContainer } from "./styles";
import React, { useState } from "react";
import { Cards } from "../../interfaces/cards";

const CardList: React.FC = () => {
  const [cards, setCards] = useState<Cards[]>([]);
  const [open, setOpen] = useState(false);
  // state contento a lista de cards
  // função open modal, ela vai criar um card com as infos passadas e add no state do cardlist

  const openModal = (): void => {
    setOpen(true);
  };

  console.log(cards);

  return (
    <Container>
      {/* button add que chama uma função que abre o modal */}
      <Button onClick={openModal}>Add</Button>
      {open && <FormCard setOpen={setOpen} setCards={setCards} cards={cards} />}
      {/* container que lista todos os cards */}

      <CardContainer>
        {cards?.map((card) => (
          <Card
            key={card.id}
            task={{
              id: card.id,
              title: card.title,
              description: card.description,
              completed: card.completed,
            }}
            cards={cards}
            setCards={setCards}
          ></Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default CardList;
