import React from "react";
import styled from "styled-components";
import Image from "../../assets/sample.jpeg";
import logo from "../../assets/sample.jpeg";
import Park from "../Icons/Park";
import Arrow from "../Icons/Arrow";

const Header = styled.div`
  display: flex;
  background-color: white;
  z-index: 1;
  min-height: 70px;
`;

const Profile = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: 10px;
  background-color: purple;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  cursor: pointer;
`;

const LogoContainer = styled.div`
  flex: 1 0 auto;
  padding: 10px;
`;

const Logo = styled.div`
  background-image: ${props => `url(${logo})`};
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: white;
`;

const ParkIcon = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;

  h1 {
    color: #999;
    font-weight: bold;
    font-family: avenirblack, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    align-self: flex-end;
    margin-bottom: 12px;
    margin-right: 5px;
    margin-left: -3px;
    border-bottom: 3px solid;
  }
`;

export default ({ history }) => {
  return (
    <Header>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ParkIcon>
        <Park />
        <h1>Nuuksio</h1>
        <Arrow />
      </ParkIcon>
    </Header>
  );
};
