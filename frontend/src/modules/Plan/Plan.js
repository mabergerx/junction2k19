import React, { useState, useEffect } from "react";
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
import InfoPage from "../InfoPage/InfoPage";

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
      font-size: 30px;
      height: 35px;
      width: 35px;
      border-radius: 50%;
      outline: none;
      box-shadow: none;
    }
  }
`;

export default ({
  onClick,
  hasSuggestions,
  callbackFromParent,
  prevList,
  setFirstSearch,
  firstSearch,
  filterOpen,
  setFilterOpen,
  ...restProps
}) => {
  const [state, setState] = useState({
    hike: false,
    bike: false,
    difficulty: {
      easy: false,
      moderate: false,
      challenging: false
    },
    food: false,
    lodging: false,
    health_fitness: false,
    waterside: false,
    natural_landmark: false,
    animals: false,
    meadow: false,
    outdoor_activity: false
  });
  const [nuuksio, setNuuksio] = useState(nuuksioTrails);
  const [list, setList] = useState(
    prevList && prevList.length > 0 ? prevList : []
  );
  const [open, setOpen] = useState({
    open: false,
    card: {}
  });

  const enabledFilters = () => {
    const filters = [];
    if (state.hike) {
      filters.push("hike");
    }
    if (state.bike) {
      filters.push("bike");
    }
    if (state.food) {
      filters.push("food");
    }
    if (state.lodging) {
      filters.push("lodging");
    }
    if (state.health_fitness) {
      filters.push("health_fitness");
    }
    if (state.waterside) {
      filters.push("waterside");
    }
    if (state.natural_landmark) {
      filters.push("natural_landmark");
    }
    if (state.animals) {
      filters.push("animals");
    }
    if (state.meadow) {
      filters.push("meadow");
    }
    if (state.outdoor_activity) {
      filters.push("outdoor_activity");
    }
    return filters;
  };

  const filterByCategories = entry => {
    const filters = enabledFilters();
    const result = filters.some(filter => entry.categories.includes(filter));
    return result;
  };

  const doRecommmendations = () => {
    let filteredNuuksio = null;

    if (
      state.hike ||
      state.bike ||
      state.food ||
      state.lodging ||
      state.health_fitness ||
      state.waterside ||
      state.natural_landmark ||
      state.animals ||
      state.meadow ||
      state.outdoor_activity
    ) {
      filteredNuuksio = nuuksio.filter(filterByCategories);
    } else {
      filteredNuuksio = nuuksio;
    }

    setNuuksio(filteredNuuksio);
    setFilterOpen(false);
    setFirstSearch(true);
  };

  useEffect(() => {
    callbackFromParent(list);
  });

  const handleListUpdate = trail => {
    setList([...list, trail]);
    callbackFromParent(list);
  };

  return (
    <div style={{ maxHeight: "calc(100vh - 140px)", overflow: "auto" }}>
      <PlanWrapper {...restProps}>
        {!filterOpen && firstSearch ? (
          <>
            <Map className="map" />
            <Slider header={"Recommended activities"}>
              {nuuksio.map((trail, key) => (
                <CardWrapper key={key}>
                  <SmallCard
                    image={
                      trail.image
                        ? `images/${trail.image}`
                        : trail.flickr_picture_urls[0]
                    }
                  >
                    <div className="card__image">
                      <div className="card__content">
                        <h1>{trail.trail_name || trail.name}</h1>
                        <button
                          onClick={() => setState({ card: trail, open: true })}
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
                        {trail.trail_name && <Hike width={20} height={20} />}
                        {trail.trail_name === "takala" && (
                          <Bike width={20} height={20} />
                        )}
                      </div>
                      <div className="plus_button">
                        <button
                          onClick={() => handleListUpdate(trail)}
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
                {list.length > 0 &&
                  list.map((elem, key) => (
                    <ToDoListItem
                      key={key}
                      element={elem}
                      image={
                        elem.image
                          ? `images/${elem.image}`
                          : elem.flickr_picture_urls[0]
                      }
                    >
                      {elem.image ? <Hike /> : <POI />}
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
                Make the most out of your visit! Enter your preferences to
                receive some personalised recommendations.
              </h2>
            </header>
            <section style={{ flexDirection: "column" }}>
              <h2>What are you looking for?</h2>
              <ul>
                <FlatButton
                  onClick={() =>
                    setState({
                      ...state,
                      food: !state.food
                    })
                  }
                  selected={state.food}
                >
                  Food
                </FlatButton>
                <FlatButton
                  onClick={() =>
                    setState({
                      ...state,
                      lodging: !state.lodging
                    })
                  }
                  selected={state.lodging}
                >
                  Lodging
                </FlatButton>
                <FlatButton
                  onClick={() =>
                    setState({
                      ...state,
                      waterside: !state.waterside
                    })
                  }
                  selected={state.waterside}
                >
                  Waterside
                </FlatButton>
                <FlatButton
                  onClick={() =>
                    setState({
                      ...state,
                      natural_landmark: !state.natural_landmark
                    })
                  }
                  selected={state.natural_landmark}
                >
                  Natural landmark
                </FlatButton>
                <FlatButton
                  onClick={() =>
                    setState({
                      ...state,
                      health_fitness: !state.health_fitness
                    })
                  }
                  selected={state.health_fitness}
                >
                  Health/Fitness
                </FlatButton>
                <FlatButton
                  onClick={() =>
                    setState({
                      ...state,
                      animals: !state.animals
                    })
                  }
                  selected={state.animals}
                >
                  Animals
                </FlatButton>
                <FlatButton
                  onClick={() =>
                    setState({
                      ...state,
                      meadow: !state.meadow
                    })
                  }
                  selected={state.meadow}
                >
                  Meadow
                </FlatButton>
                <FlatButton
                  onClick={() =>
                    setState({
                      ...state,
                      outdoor_activity: !state.outdoor_activity
                    })
                  }
                  selected={state.outdoor_activity}
                >
                  Outdoor activities
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
              <button onClick={doRecommmendations}>Submit</button>
            </footer>
          </Container>
        )}
      </PlanWrapper>
      {state.open && (
        <InfoPage
          handleOnClick={() => setList([...list, state.card])}
          card={state.card}
          onClick={() => setState({ card: {}, open: false })}
        />
      )}
    </div>
  );
};
