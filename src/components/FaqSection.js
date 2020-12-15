import React from "react";
import styled from "styled-components";
import { About } from "../Styles";
//Component
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
//Import Animation
import { fade } from "../animation";
//Import useScroll
import { useScroll } from "./useScroll";
const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq ref={element} variants={fade} initial="hidden" animate={controls}>
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              eius.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              eius.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              eius.
            </p>
          </div>
        </Toggle>
        <Toggle title="What products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              eius.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  h2 {
    display: block;
    padding-bottom: 0.5em;
    font-weight: lighter;
    span {
      display: block;
    }
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 1em 0;
    width: 100%;
  }
  .question {
    padding: 2em 0;
    cursor: pointer;
  }
  .answer {
    padding: 1em 0;
    p {
      padding: 0.5em 0;
    }
  }
`;

export default FaqSection;
