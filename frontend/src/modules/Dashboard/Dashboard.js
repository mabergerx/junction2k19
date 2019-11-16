import React from "react";
import { DashboardWrapper, Card, Tag } from "./DashboardComponents";
import Image from "../../assets/sample.jpeg";
import Header from "../Header/Header";

export default ({ journey, onClick }) => {
  return (
    <div>
      <Header />
      <DashboardWrapper>
        <Card onClick={onClick} image={Image}>
          <div className="card__image" />
          <div className="card__content">
            <Tag>Sample</Tag>
            <Tag new>New</Tag>
            <h1>Trail name</h1>
          </div>
        </Card>
      </DashboardWrapper>
    </div>
  );
};
