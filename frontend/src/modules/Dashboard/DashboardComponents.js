import styled from "styled-components";

export const DashboardWrapper = styled.section`
  max-width: 1000px;
  padding: 20px;
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
  .card {
    &__image {
      height: 140px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: ${props => `url(${props.image})`};
    }
    &__content {
      padding: 20px;
      color: black;
    }
  }
`;

export const Tag = styled.div`
  border: 1px solid blue;
  display: inline-block;
  padding: 0 5px;
  margin-right: 5px;
  background-color: purple;
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
