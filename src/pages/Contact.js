import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";

const Contact = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#ffffff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in Touch.</motion.h2>
        </Hide>
      </Title>
      <Hide>
        <Social variants={titleAnim}>
          <Circle></Circle>
          <motion.h2>Send an Email</motion.h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <Circle></Circle>
          <motion.h2>Send Us a Message</motion.h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <Circle></Circle>
          <motion.h2>Follow us on Social Media</motion.h2>
        </Social>
      </Hide>
      <ScrollTop />
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 3em 7em;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1040px) {
    padding: 2em 2em;
  }
`;
const Title = styled.div`
  margin-bottom: 2em;
  color: #000;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 0.2em;
    @media (max-width: 1040px) {
      font-size: 3rem;
    }
  }
`;

export default Contact;
