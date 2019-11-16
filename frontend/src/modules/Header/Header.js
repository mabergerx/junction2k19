import React, { useState } from "react";
import styled from "styled-components";
import Image from "../../assets/sample.jpeg";
import logo from "../../assets/sample.jpeg";
import Park from "../Icons/Park";
import Arrow from "../Icons/Arrow";
import Close from "../Icons/Close";
import nationalParks from "../../assets/data/nationalpark_images.json";

const Header = styled.div`
  display: flex;
  background-color: white;
  z-index: 1;
  min-height: 70px;
  position: fixed;
  width: 100%;
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
    margin-bottom: 11px;
    margin-right: 5px;
    margin-left: -3px;
    border-bottom: 3px solid;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 70px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background: white;
  height: 100vh;
  z-index: 111;
  padding: 20px;

  section {
    overflow: auto;
    height: calc(100% - 170px);
  }

  h1 {
    color: #999;
    font-weight: bold;
    font-family: avenirblack, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 18px;
  }
`;

const ListItem = styled.div`
  background-position: center;
  height: 90px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${props => `url(images/${props.image})`};
  display: flex;
  align-items: flex-end;
  padding: 20px;
  position: relative;
  margin-bottom: 10px;
  &:before {
    content: "";
    background: rgba(0, 0, 0, 0.15);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    white-space: nowrap;
  }
`;

export default ({ history }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <Header>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ParkIcon onClick={() => setDropdownVisible(!dropdownVisible)}>
        <Park />
        <h1>Nuuksio</h1>
        {dropdownVisible ? <Close /> : <Arrow />}
      </ParkIcon>
      {dropdownVisible && (
        <Dropdown>
          <h1>Choose your park</h1>
          <section>
            {nationalParks.map((park, key) => (
              <ListItem key={key} image={park.image}>
                <span>{park.name}</span>
              </ListItem>
            ))}
          </section>
        </Dropdown>
      )}
    </Header>
  );
};
