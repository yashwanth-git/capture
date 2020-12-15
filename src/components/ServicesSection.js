import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//Import Styled
import styled from "styled-components";
//Import Styles
import { About, Description, Image } from "../Styles";
//Import Animation
import { fade } from "../animation";
//Import useScroll
import { useScroll } from "./useScroll";
const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services ref={element} variants={fade} initial="hidden" animate={controls}>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="Clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="Teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="Diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="Money" />
              <h3>Money</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="Home2" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 1em;
  }
  p {
    width: 80%;
    padding: 1em 0 2em 0;
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 14rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 0.8em;
      padding: 0.8em;
      background: #fff;
      color: #000;
    }
  }
`;
export default ServicesSection;
