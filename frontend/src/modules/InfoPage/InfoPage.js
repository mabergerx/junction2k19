import { InfoPage, Tag } from "../Dashboard/DashboardComponents";
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
    <InfoPage
      image={card.image ? `images/${card.image}` : card.flickr_picture_urls[0]}
    >
      {card.trail_name ? (
        <>
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
        </>
      ) : (
        <>
          <section onClick={onClick}>
            <Close color={"#FFF"} />
          </section>
          <div className="card__image">
            <div className="card__content">
              <h1>{card.name}</h1>
            </div>
            <div className="card__tags">
              <Tag>{card.google_types[0]}</Tag>
              <Tag>{card.google_types[1]}</Tag>
              <Tag>{card.google_types[2]}</Tag>
            </div>
          </div>
          <article>
            <span style={{ fontWeight: "bold", marginBottom: 10 }}>
              Place details
            </span>
            <div>
              <p>Website: </p>
              <span>
                {card.place_details.website || `wwww.nationalparks.fi`}
              </span>
            </div>
            <div>
              <p>Rating: </p>
              <span>{card.rating || 8}</span>
            </div>
            <button onClick={() => handleOnClickAndClose()}>
              Add to my to-do list
            </button>
          </article>
        </>
      )}
    </InfoPage>
  );
};
