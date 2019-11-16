import React, { useState } from "react";
import {
  DashboardWrapper,
  Card,
  Tag,
  Navigation,
  NavigationWrapper,
  Item,
  ItemWrapper,
  AccountWrapper
} from "./DashboardComponents";
import Image from "../../assets/sample.jpeg";
import Header from "../Header/Header";
import Map from "../Icons/Map";
import Explore from "../Icons/Explore";
import Account from "../Icons/Account";

export default ({ onClick }) => {
  const [selected, setSelected] = useState("Plan");

  return (
    <div>
      <Header />
      <DashboardWrapper selected={selected}>
        {selected === "Explore" ? (
          <>
            <Card onClick={onClick} image={Image}>
              <div className="card__image">
                <div className="card__content">
                  <h1>Trail name</h1>
                </div>
                <div className="card__tags">
                  <Tag>Sample</Tag>
                  <Tag new>New</Tag>
                </div>
              </div>
            </Card>
            <Card onClick={onClick} image={Image}>
              <div className="card__image">
                <div className="card__content">
                  <h1>Trail name</h1>
                </div>
                <div className="card__tags">
                  <Tag>Sample</Tag>
                  <Tag new>New</Tag>
                </div>
              </div>
            </Card>
          </>
        ) : selected === "Plan" ? (
          <div>Plan</div>
        ) : (
          <AccountWrapper>Account</AccountWrapper>
        )}
      </DashboardWrapper>
      <NavigationWrapper>
        <Navigation>
          <ItemWrapper>
            <Item
              selected={selected === "Plan"}
              color={"#ec5d86"}
              onClick={() => setSelected("Plan")}
            >
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
