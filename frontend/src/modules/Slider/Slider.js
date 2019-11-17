import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Arrow from "../Icons/Arrow";

const StyledSlider = styled(Slider)`
  margin-bottom: 30px;

  .slick-slide {
    &:not(.slick-active) {
      opacity: 0.5;
    }
  }

  .slick-list {
    margin: 0px;
  }

  .slick-track {
    display: flex;
    align-items: flex-end;
    margin-left: 0px;
    margin-right: 0px;
  }

  .slick-arrow {
    &.slick-disabled {
      display: none !important;
    }
  }

  .slick-prev {
    left: 25px;
    transform: translate(0, -50%) rotate(90deg);

    svg {
      fill: white;
    }

    &:before {
      content: "";
    }
  }

  .slick-next {
    right: 25px;
    transform: translate(0, -50%) rotate(-90deg);

    svg {
      fill: white;
    }

    &:before {
      content: "";
    }
  }

  .slick-dots {
    bottom: 15px;

    li {
      margin: 0px;

      &.slick-active {
        button {
          &:before {
            color: white;
            opacity: 1;
          }
        }
      }
      button {
        &:before {
          color: white;
          opacity: 0.5;
        }
      }
    }
  }
`;

const StyledHeader = styled.header`
  color: white;
  font-weight: bold;
  font-family: avenirblack, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  text-align: center;
  margin: 20px 0px;
  display: ${props => (props.open ? "none" : "block")};
  transition: 0.2 ease-in-out linear;
`;

const ArrowContainer = styled.section``;

function SimpleSlider({ modules, header, isModule, children }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    swipe: true,
    variableWidth: true,

    prevArrow: (
      <ArrowContainer>
        <Arrow />
      </ArrowContainer>
    ),
    nextArrow: (
      <ArrowContainer>
        <Arrow />
      </ArrowContainer>
    )
  };

  return (
    <>
      <StyledHeader>{header}</StyledHeader>
      <StyledSlider {...settings}>{children}</StyledSlider>
    </>
  );
}

export default React.memo(SimpleSlider);
