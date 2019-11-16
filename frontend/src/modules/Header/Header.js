import React from "react";
import styled from "styled-components";
import Image from "../../assets/sample.jpeg";
import logo from "../../assets/sample.jpeg";

const Header = styled.div`
  display: flex;
  background-color: white;
  z-index: 1;
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

export default ({ history }) => {
  return (
    <Header>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Profile
        className="Dashboard__Profile"
        image={Image}
        onClick={() => history.push("/profile")}
      />
    </Header>
  );
};
