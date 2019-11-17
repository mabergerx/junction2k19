import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  Button,
  FlatButton
} from "../Dashboard/DashboardComponents";
import Arrow from "../Icons/Arrow";
import image from "../../assets/teemu.jpg";
import SavedPlans from "../Icons/SavedPlans";
import Achievements from "../Icons/Achievements";
import Preferences from "../Icons/Preferences";

const ContStyled = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;

  section {
    font-weight: bold;
    font-family: avenirblack, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    color: #f77064;
    border-bottom: 2px solid #f77064;
    padding: 10px 0px;

    div {
      svg {
        margin-right: 5px;
      }
    }

    & > svg {
      transform: rotate(-90deg);
      margin-left: auto;
    }
  }
`;

const ProfileImage = styled.div`
  height: 220px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${props => `url(${props.image})`};
  display: flex;
  border-radius: 50%;
  width: 200px;
`;

export default ({ onClick, ...restProps }) => {
  return (
    <ContStyled>
      <header>
        <ProfileImage image={image} />
        <h1>Teemu Puuri</h1>
      </header>

      <Links>
        <section>
          <div>
            <Preferences />
            My preferences
          </div>
          <Arrow color={"#f77064"} width={16} height={16} />
        </section>
        <section>
          <div>
            <SavedPlans />
            My saved plans{" "}
          </div>
          <Arrow color={"#f77064"} width={16} height={16} />
        </section>
        <section>
          <div>
            <Achievements />
            My achievements{" "}
          </div>
          <Arrow color={"#f77064"} width={16} height={16} />
        </section>
      </Links>
    </ContStyled>
  );
};
