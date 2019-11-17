import React, { useState } from "react";
import {
  DashboardWrapper,
  Card,
  Navigation,
  NavigationWrapper,
  Item,
  Tag,
  ItemWrapper,
  CardWrapper
} from "./DashboardComponents";
import Image from "../../assets/sample.jpeg";
import Header from "../Header/Header";
import Map from "../Icons/Map";
import Explore from "../Icons/Explore";
import Account from "../Icons/Account";
import Hike from "../Icons/Hike";
import Bike from "../Icons/Bike";
import Close from "../Icons/Close";
import nuuksioTrails from "../../assets/data/nuuksio.json";
import Slider from "../Slider/Slider";
import { SliderItem } from "./DashboardComponents";
import Plan from "../Plan/Plan";
import InfoPage from "../InfoPage/InfoPage";
import AccountPage from "../Account/Account";
import { Circle } from "./DashboardComponents";

const hikingTrails = nuuksioTrails.filter(item =>
  item.categories.includes("hike")
);

const pointsofInterest = nuuksioTrails.filter(
  item => !item.categories.includes("hike")
);

export default ({ onClick }) => {
  const [selected, setSelected] = useState("Plan");
  const [state, setState] = useState({
    card: {},
    open: false
  });
  const [notification, setNotification] = useState(false);
  const [list, setList] = useState([]);
  const [firstSearch, setFirstSearch] = useState(false);
  const [filterOpen, setFilterOpen] = useState(true);

  const myCallback = dataFromChild => {
    setList(dataFromChild);
  };

  const searchCallback = dataFromChild => {
    setFirstSearch(dataFromChild);
  };

  const filterCallback = dataFromChild => {
    setFilterOpen(dataFromChild);
  };

  const handleOnClickPlan = () => {
    setNotification(false);
    setSelected("Plan");
  };

  return (
    <div>
      <Header />
      <DashboardWrapper selected={selected}>
        {selected === "Explore" ? (
          <>
            <Slider header={"Trails"}>
              {hikingTrails.map((trail, key) => (
                <CardWrapper key={key}>
                  <Card
                    image={
                      trail.image
                        ? `images/${trail.image}`
                        : trail.flickr_picture_urls[0]
                    }
                  >
                    <div className="card__image">
                      <div className="card__content">
                        <h1>{trail.trail_name}</h1>
                        <button
                          onClick={() => setState({ card: trail, open: true })}
                        >
                          Read more
                        </button>
                      </div>
                      <div className="card__tags">
                        <Hike />
                        {trail.trail_name === "takala" && <Bike />}
                      </div>
                    </div>
                  </Card>
                </CardWrapper>
              ))}
            </Slider>
            <Slider header={"Points of interest"}>
              {pointsofInterest.map((trail, key) => (
                <CardWrapper key={key}>
                  <Card image={trail.flickr_picture_urls[0]}>
                    <div className="card__image">
                      <div className="card__content">
                        <h1>{trail.name}</h1>
                        <button
                          onClick={() => setState({ card: trail, open: true })}
                        >
                          Read more
                        </button>
                      </div>
                      <div className="card__tags">
                        <Tag>{trail.google_types[0]}</Tag>
                      </div>
                    </div>
                  </Card>
                </CardWrapper>
              ))}
            </Slider>
          </>
        ) : selected === "Plan" ? (
          <Plan
            prevList={list}
            firstSearch={firstSearch}
            setFirstSearch={searchCallback}
            filterOpen={filterOpen}
            setFilterOpen={filterCallback}
            callbackFromParent={myCallback}
            selectedInterestIDs={
              [
                /* TODO: Add interests somewhere. */
              ]
            }
          />
        ) : (
          <AccountPage />
        )}
        {state.open && (
          <InfoPage
            fromExplore
            card={state.card}
            handleOnClick={() => setList([...list, state.card])}
            onClick={() => setState({ card: {}, open: false })}
            sendNotification={() => setNotification(true)}
          />
        )}
      </DashboardWrapper>
      <NavigationWrapper>
        <Navigation>
          <ItemWrapper>
            <Item
              selected={selected === "Plan"}
              color={"#ec5d86"}
              onClick={() => handleOnClickPlan()}
            >
              {notification && selected !== "Plan" && <Circle>1</Circle>}
              <Map color={selected === "Plan" ? "#ec5d86" : "#999"} />
              <span>Plan</span>
            </Item>
          </ItemWrapper>
          <ItemWrapper>
            <Item
              selected={selected === "Explore"}
              color={"#F77064"}
              onClick={() => setSelected("Explore")}
            >
              <Explore color={selected === "Explore" ? "#F77064" : "#999"} />
              <span>Explore</span>
            </Item>
          </ItemWrapper>
          <ItemWrapper>
            <Item
              selected={selected === "Account"}
              color={"#FA874D"}
              onClick={() => setSelected("Account")}
            >
              <Account color={selected === "Account" ? "#FA874D" : "#999"} />
              <span>Account</span>
            </Item>
          </ItemWrapper>
        </Navigation>
      </NavigationWrapper>
    </div>
  );
};
