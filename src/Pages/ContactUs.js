import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from 'styled-components';

const ContactUs = () => {
  return (
    <Contact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <h1>Our Contact</h1>
    </Contact>
  );
};

const Contact = styled (motion.div)`

`


export default ContactUs;
