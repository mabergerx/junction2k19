import React, { useState } from "react";
import styled from "styled-components";
import Map from "../Map/Map";
import Slider from "../Slider/Slider";
import hikingTrails from "../../assets/data/hiking_trails.json";
import Hike from "../Icons/Hike";
import Bike from "../Icons/Bike";
import {
  SmallCard,
  CardWrapper,
  Container,
  Button,
  FlatButton
} from "../Dashboard/DashboardComponents";

const PlanWrapper = styled.div`
  .map {
    height: 250px;
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

  return (
    <PlanWrapper {...restProps}>
      {hasSuggestions ? (
        <>
          <Map className="map" />
          <Slider header={"Recommended activities"}>
            {hikingTrails.map((trail, key) => (
              <CardWrapper
                key={key}
                // onClick={() => setState({ card: trail, open: true })}
              >
                <SmallCard image={trail.image}>
                  <div className="card__image">
                    <div className="card__content">
                      <h1>{trail.trail_name}</h1>
                      <button
                      //onClick={() => setState({ card: trail, open: true })}
                      >
                        Read more
                      </button>
                    </div>
                    <div className="card__tags">
                      <Hike width={20} height={20} />
                      {trail.trail_name === "takala" && (
                        <Bike width={20} height={20} />
                      )}
                      <div>{/* 4<Star /> */}</div>
                    </div>
                  </div>
                </SmallCard>
              </CardWrapper>
            ))}
          </Slider>
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
