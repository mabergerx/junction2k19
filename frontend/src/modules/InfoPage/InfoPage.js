import { InfoPage } from "../Dashboard/DashboardComponents";
import Close from "../Icons/Close";
import Hike from "../Icons/Hike";
import Bike from "../Icons/Bike";
import React from "react";

export default ({
  onClick,
  card,
  handleOnClick,
  fromExplore,
  sendNotification
}) => {
  const handleOnClickAndClose = () => {
    handleOnClick();
    fromExplore && sendNotification();
    onClick();
  };

  return (
    <InfoPage image={card.image}>
      <section onClick={onClick}>
        <Close color={"#FFF"} />
      </section>
      <div className="card__image">
        <div className="card__content">
          <h1>{card.trail_name}</h1>
        </div>
        <div className="card__tags">
          <Hike />
          {card.trail_name === "takala" && <Bike />}
        </div>
      </div>
      <article>
        <span>{card.description}</span>
        <div>
          <p>Length: </p>
          <span>{card.trail_length_km}km</span>
        </div>
        <div>
          <p>Type: </p>
          <span>{card.type}</span>
        </div>
        <div>
          <p>Difficulty: </p>
          <span>{card.difficulty}</span>
        </div>
        <div>
          <p>Route marking: </p>
          <span>{card.route_marking}</span>
        </div>
        <button onClick={() => handleOnClickAndClose()}>
          Add to my to-do list
        </button>
      </article>
    </InfoPage>
  );
};
