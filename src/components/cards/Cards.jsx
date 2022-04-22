import React from "react";
import { BigCard, Card } from "./CardAndBigCard";
import { cardsData, bigCardsData } from "./CardsData";
import "./Cards.css";

const Cards = () => {
  return (
    <section className="py-4 cards-section mb-3 mb-md-0">
      <div className="container">
        <div className="d-flex gap-3">
          {cardsData.map((item, id) => {
            return <Card key={id} icon={item.icon} title={item.title} />;
          })}
        </div>

        <div>
          <div className="big-cards d-flex gap-3 gap-lg-4 mt-4 mt-sm-5">
            {bigCardsData.map((item, id) => (
              <BigCard
                key={id}
                img={item.img}
                text={item.text}
                bgColor={item.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
