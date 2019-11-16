import React from "react";
import { Card, Tag } from "./DashboardComponents";
import Image from "../assets/sample.jpeg";

export default ({ journey, onClick }) => {
  return (
    <Card onClick={onClick} image={Image}>
      <div className="card__image" />
      <div className="card__content">
        <Tag>Sample</Tag>
        <Tag new>New</Tag>
        <h1>Title</h1>
      </div>
    </Card>
  );
};
