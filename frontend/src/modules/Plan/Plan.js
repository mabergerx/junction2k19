import React from "react";
import styled from "styled-components";
import Map from "../Map/Map";

const PlanWrapper = styled.div`
  .map {
    height: 512px;
  }
`;

const Plan = ({ ...restProps }) => {
  return (
    <PlanWrapper {...restProps}>
      <Map className="map" />
    </PlanWrapper>
  );
};

export default Plan;
