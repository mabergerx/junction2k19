import React, { useState } from "react";
import styled from "styled-components";
import Map from "../Map/Map";
import Slider from "../Slider/Slider";
import nuuksioTrails from "../../assets/data/nuuksio.json";
import Hike from "../Icons/Hike";
import Bike from "../Icons/Bike";
import POI from "../Icons/POI";
import {
  SmallCard,
  CardWrapper,
  Container,
  Button,
  FlatButton,
  ToDoList,
  ToDoListItem
} from "../Dashboard/DashboardComponents";

const hikingTrails = nuuksioTrails.filter(item =>
  item.categories.includes("hike")
);

const PlanWrapper = styled.div`
  .map {
    height: 250px;
  }

  .plus_button {
    margin-left: auto;
    z-index: 3393393992393;
    .plus {
      border: none;
      background-color: white;
      color: #f77064;
      font-weight: bold;
      font-size: 40px;
      height: 45px;
      width: 45px;
      border-radius: 50%;
      outline: none;
      box-shadow: none;
    }
  }
`;

export default ({ onClick, hasSuggestions, ...restProps }) => {
  const [state, setState] = useState({
    hike: false,
    bike: false,
    difficulty: {
      easy: false,
      moderate: false,
      challenging: false
    },
    relax: false,
    adventure: false
  });
  const [list, setList] = useState([]);
  console.log("hikingTrails", nuuksioTrails);
  console.log(list);
  return (
    <PlanWrapper {...restProps}>
      {!hasSuggestions ? (
        <>
          <Map className="map" />
          <Slider header={"Recommended activities"}>
            {hikingTrails.map((trail, key) => (
              <CardWrapper key={key}>
                <SmallCard image={trail.image}>
                  <div className="card__image">
                    <div className="card__content">
                      <h1>{trail.trail_name}</h1>
                      <button
                      //onClick={() => setState({ card: trail, open: true })}
                      >
                        Read more
                      </button>
                      <button
                      //onClick={() => setState({ card: trail, open: true })}
                      >
                        Show on map
                      </button>
                    </div>
                    <div className="card__tags">
                      <Hike width={20} height={20} />
                      {trail.trail_name === "takala" && (
                        <Bike width={20} height={20} />
                      )}
                    </div>
                    <div className="plus_button">
                      <button
                        onClick={() => setList([...list, trail])}
                        className="plus"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </SmallCard>
              </CardWrapper>
            ))}
          </Slider>
          <ToDoList>
            <header>To-do list</header>
            <article>
              {list.map((elem, key) => (
                <ToDoListItem key={key} element={elem} image={elem.image}>
                  {elem.trail ? <Hike /> : <POI />}
                </ToDoListItem>
              ))}
              <ToDoListItem>+</ToDoListItem>
            </article>
          </ToDoList>
        </>
      ) : (
        <Container>
          <header>
            <h1>Plan your visit</h1>
            <h2>
              Make the most out of your visit! Enter your preferences to receive
              some personalised recommendations.
            </h2>
          </header>
          <section style={{ flexDirection: "column" }}>
            <h2>What are you looking for?</h2>
            <ul>
              <FlatButton
                onClick={() =>
                  setState({
                    ...state,
                    relax: !state.relax
                  })
                }
                selected={state.relax}
              >
                Relax
              </FlatButton>
              <FlatButton
                onClick={() =>
                  setState({
                    ...state,
                    adventure: !state.adventure
                  })
                }
                selected={state.adventure}
              >
                Adventure
              </FlatButton>
            </ul>
          </section>
          <section style={{ flexDirection: "column" }}>
            <h2>Are you interested in hiking and/or cycling?</h2>
            <ul>
              <Button
                selected={state.hike}
                onClick={() => setState({ ...state, hike: !state.hike })}
              >
                <Hike color={state.hike ? "#f77064" : "#fff"} />
              </Button>
              <Button
                selected={state.bike}
                onClick={() => setState({ ...state, bike: !state.bike })}
              >
                <Bike color={state.bike ? "#f77064" : "#fff"} />
              </Button>
            </ul>
          </section>
          {(state.bike || state.hike) && (
            <>
              <h2>Track difficulty:</h2>
              <ul>
                <FlatButton
                  onClick={() =>
                    setState({
                      ...state,
                      difficulty: {
                        ...state.difficulty,
                        easy: !state.difficulty.easy
                      }
                    })
                  }
                  selected={state.difficulty.easy}
                >
                  Easy
                </FlatButton>
                <FlatButton
                  onClick={() =>
                    setState({
                      ...state,
                      difficulty: {
                        ...state.difficulty,
                        moderate: !state.difficulty.moderate
                      }
                    })
                  }
                  selected={state.difficulty.moderate}
                >
                  Moderate
                </FlatButton>
                <FlatButton
                  onClick={() =>
                    setState({
                      ...state,
                      difficulty: {
                        ...state.difficulty,
                        challenging: !state.difficulty.challenging
                      }
                    })
                  }
                  selected={state.difficulty.challenging}
                >
                  Challenging
                </FlatButton>
              </ul>
            </>
          )}
          <footer>
            <button>Submit</button>
          </footer>
        </Container>
      )}
    </PlanWrapper>
  );
};
