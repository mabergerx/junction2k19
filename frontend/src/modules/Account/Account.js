import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  Button,
  FlatButton
} from "../Dashboard/DashboardComponents";

export default ({ onClick, ...restProps }) => {
  return (
    <Container>
      <header>
        <div />
        <h1>Teemu Puuri</h1>
        <ul>
          <li>My preferences</li>
          <li>My saved plans</li>
          <li>My achievements</li>
        </ul>
      </header>
    </Container>
  );
};
