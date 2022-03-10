import React from "react";
import { BigCard, Card } from "./CardAndBigCard";
import { cardsSData, bigCardsData } from "./CardsData";

const Cards = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div className="d-flex gap-3">
          {cardsSData.map((item, id) => {
            return <Card key={id} icon={item.icon} title={item.title} />;
          })}
        </div>

        <div className="d-flex gap-5 mt-5">
          {bigCardsData.map((item, id) => {
            return (
              <BigCard
                key={id}
                img={item.img}
                text={item.text}
                bgColor={item.bgColor}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cards;