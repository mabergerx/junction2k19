import styled from "styled-components";

export const DashboardWrapper = styled.section`
  max-width: 1000px;
  padding: 20px;
  height: calc(100vh - 70px);
  background: rgb(242, 132, 65);
  background: linear-gradient(
    rgba(242, 132, 65, 1) 0%,
    rgba(236, 93, 134, 1) 100%
  );
  @media screen and (min-width: 1000px) {
    padding-top: 50px;
  }
`;

export const Card = styled.article`
  margin-bottom: 25px;
  background-color: white;
  position: relative;
  .card {
    &__image {
      height: 220px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: ${props => `url(${props.image})`};
      display: flex;
      align-items: flex-end;
      padding: 20px;
      &:before {
        content: "";
        background: rgba(0, 0, 0, 0.15);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
    &__content {
      padding: 20px;
      color: white;
      text-transform: uppercase;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &__tags {
      position: absolute;
    }
  }
`;

export const Tag = styled.div`
  border: 1px solid white;
  display: inline-block;
  padding: 5px;
  margin-right: 10px;
  background-color: transparent;
  color: white;
`;

export const Dashboard = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
  min-height: 100vh;
  background-color: pink;
`;

export const ContentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: green;
  max-width: 1000px;

  @media screen and (min-width: 1000px) {
    margin: 40px auto;
    padding: 0 100px;
    min-width: 1000px;
  }
`;

export const NavigationWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 70px;
  z-index: 11;
  display: flex;
  background: white;
`;

export const Navigation = styled.ul`
  display: flex;
  color: #49ccfd;
  max-width: 1000px;
  margin: auto;
  flex: 1 0 auto;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    svg {
      margin-top: -20px;
    }
    span {
      position: absolute;
      bottom: 13px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }
`;

export const Circle = styled.article`
  position: absolute;
  top: -15px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${props => props.theme.primary.main};
  z-index: 111;
  font-size: 12px;
`;

export const IconWrapper = styled.div`
  position: relative;
`;

export const Item = styled.li``;

export const ItemWrapper = styled.div``;
