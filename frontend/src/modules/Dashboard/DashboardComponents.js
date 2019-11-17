import styled from "styled-components";

export const DashboardWrapper = styled.section`
  padding: 70px 0px 70px;
  min-height: calc(100vh - 160px);
  background: rgb(242, 132, 65);
  background: ${props =>
    props.selected === "Account"
      ? "linear-gradient(rgba(251,159,98,1) 0%, rgba(247,112,100,1) 100%)"
      : props.selected === "Explore"
      ? "linear-gradient(rgba(242, 132, 65, 1) 0%,rgba(236, 93, 134, 1) 100%)"
      : "linear-gradient(rgba(247,112,100,1) 0%, rgba(236,93,134,1) 100%)"};
  @media screen and (min-width: 1000px) {
    padding-top: 50px;
  }
`;

export const Card = styled.article`
  background-color: white;
  position: relative;
  width: 240px;
  .card {
    &__image {
      height: 220px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: ${props => `url(images/${props.image})`};
      display: flex;
      align-items: flex-end;
      padding: 10px;
      position: relative;
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
      display: flex;
      flex-direction: column;
      text-align: center;

      button {
        border: 2px solid white;
        color: white;
        background-color: transparent;
        box-shadow: none;
        font-family: avenirblack, "Helvetica Neue", Helvetica, Arial, sans-serif;
        padding: 10px;
        font-weight: bold;
        margin: auto;
        font-size: 12px;
        white-space: nowrap;
        text-transform: uppercase;
      }
    }
    &__tags {
      position: absolute;

      svg {
        margin-right: 10px;
      }
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
  display: flex;
  background: white;
`;

export const Navigation = styled.ul`
  display: flex;
  color: #49ccfd;
  max-width: 1000px;
  margin: auto;
  flex: 1 0 auto;
  font-weight: bold;
  font-family: avenirblack, "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding-inline-start: 0px;
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

export const Item = styled.li`
  color: ${props => (props.selected ? props.color : "#999")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    margin-top: 5px;
  }
`;

export const ItemWrapper = styled.div`
  flex: 1 0 33%;
`;

export const SliderItem = styled.div`
  background-color: white;
  margin-right: 10px;
`;

export const CardWrapper = styled.div`
  margin: 0px 10px;
`;

export const InfoPage = styled(Card)`
  width: 100%;
  position: absolute;
  top: 70px;
  left: 0px;
  min-height: calc(100vh - 140px);
  max-height: calc(100vh - 140px);
  z-index: 111111;
  background-color: white;
  overflow: auto;

  .card__content {
    top: 130px;
  }

  .card__image {
    &:before {
      height: 240px;
    }
  }

  section {
    top: 10px;
    right: 10px;
    z-index: 1;
    position: absolute;
  }

  article {
    padding: 20px;
    display: flex;
    flex-direction: column;

    button {
      background-color: #f77064;
      border: none;
      padding: 12px;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      font-family: avenirblack, "Helvetica Neue", Helvetica, Arial, sans-serif;
      margin: auto;
      margin-top: 20px;
    }

    span,
    p {
      line-height: 20px;
      color: #666;
    }
    div {
      margin: 10px 0px;

      p {
        font-weight: bold;
        display: inline;
      }
    }
  }
`;

export const SmallCard = styled(Card)`
  .card {
    &__image {
      height: 190px;
    }
    &__tags {
      flex-direction: column;
      display: flex;
    }
    &__content {
      button {
        margin-bottom: 10px;
      }
    }
  }
`;

export const Container = styled.div`
  background-color: white;
  margin: 20px;
  border-radius: 15px;
  padding: 20px;

  h1 {
    font-size: 20px;
    font-family: avenirblack, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  h2 {
    font-size: 16px;
    font-weight: normal;
  }
  section {
    display: flex;
  }

  ul {
    display: flex;
    padding-inline-start: 0px;
    margin-block-start: 0px;
  }

  footer {
    display: flex;
    button {
      background-color: #f77064;
      border: none;
      padding: 12px;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      font-family: avenirblack, "Helvetica Neue", Helvetica, Arial, sans-serif;
      margin: auto;
      margin-top: 20px;
    }
  }
`;

export const Button = styled.button`
  border: ${props => (props.selected ? "2px solid #f77064" : "none")};
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  background-color: "#999";
  margin-right: 5px;
  outline: none;
`;

export const FlatButton = styled.button`
  border: ${props => (props.selected ? "2px solid #f77064" : "none")};
  height: 50px;
  display: flex;
  background-color: "#fff";
  margin-right: 5px;
  outline: none;
  color: ${props => (props.selected ? "#f77064" : "white")};
  border-radius: 10px;
  font-weight: bold;
`;

export const ToDoList = styled.div`
  header {
    color: white;
    font-weight: bold;
    font-family: avenirblack, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 20px;
    text-align: center;
    margin: 20px 0px;
  }
  article {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: space-around;
  }
`;

export const ToDoListItem = styled.div`
  width: 75px;
  height: 75px;
  margin: 5px;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${props => `url(images/${props.image})`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  color: white;
  &:last-of-type {
    border: 2px dotted white;
  }
`;
