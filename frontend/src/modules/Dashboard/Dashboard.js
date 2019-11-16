import React, { useState } from "react";
import {
  DashboardWrapper,
  Card,
  Tag,
  Navigation,
  NavigationWrapper
} from "./DashboardComponents";
import Image from "../../assets/sample.jpeg";
import Header from "../Header/Header";

export default ({ onClick }) => {
  const [selected, setSelected] = useState("Plan");

  return (
    <div>
      <Header />
      <DashboardWrapper>
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
        ) : (
          <div></div>
        )}
      </DashboardWrapper>
      <NavigationWrapper>
        <Navigation>
          <li onClick={() => setSelected("Plan")}>
            {/* <Home color={this.isActive("/") ? "#fff" : "#5b5a5a"} /> */}
            <span>Plan</span>
          </li>
          <li onClick={() => setSelected("Explore")}>
            {/* <Learn color={this.isActive("/learn") ? "#fff" : "#5b5a5a"} /> */}
            <span>Explore</span>
          </li>
        </Navigation>
      </NavigationWrapper>
    </div>
  );
};
