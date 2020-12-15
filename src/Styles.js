import styled from "styled-components";
import { motion } from "framer-motion";
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5em 7em;
  color: #ffffff;
  @media (max-width: 1040px) {
    display: block;
    padding: 2em 2em;
  }
`;

export const Description = styled.div`
  z-index: 2;
  flex: 1;
  padding-right: 5em;
  @media (max-width: 1040px) {
    padding: 0;
  }
  h2 {
    font-weight: lighter;
  }
  p {
    @media (max-width: 1040px) {
      padding: 1em 0;
    }
  }
  button {
    @media (max-width: 1040px) {
      margin-bottom: 2em;
    }
  }
`;

export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
    height: 80vh;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
