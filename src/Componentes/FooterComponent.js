import React, { Component } from 'react';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";

const FooterComponent = () => {
    return (
        
    <Box>
    <Container>
      <Row>
        <Column>
          <Heading>Get in touch with us</Heading>
          <FooterLink href="#">email</FooterLink>
          <FooterLink href="#"><button className='button'>enter your email</button></FooterLink>
          <FooterLink href="#">Subscribe</FooterLink>
        </Column>
        <Column>
          <Heading>Services</Heading>
          <FooterLink href="#">software development</FooterLink>
          <FooterLink href="#">mobile application development</FooterLink>
          <FooterLink href="#">ERP solution</FooterLink>
          <FooterLink href="#">digital marketing & SEO optimazation</FooterLink>
        </Column>
        <Column>
          <Heading>Technologies used</Heading>
          <FooterLink href="#">HTML5</FooterLink>
          <FooterLink href="#">CSS3</FooterLink>
          <FooterLink href="#">React Js</FooterLink>
          <FooterLink href="#">Javascripte</FooterLink>
        </Column>
        <Column>
          <Heading>Contact Me By</Heading>
          <FooterLink href="#">
          <i class="fa fa-facebook">
              <span style={{ marginLeft: "10px" }}>
                Facebook
              </span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fa fa-telegram">
              <span style={{ marginLeft: "10px" }}>
                Telegram
              </span>
            </i>
          </FooterLink>
          <FooterLink href="#">
          <i class="fa fa-linkedin">
              <span style={{ marginLeft: "10px" }}>
              linkedin
              </span>
            </i>
          </FooterLink>
        </Column>
      </Row>
    </Container>
  </Box>
    
    );
}

export default FooterComponent;