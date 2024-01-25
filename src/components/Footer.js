import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (<>
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
            <MailchimpForm />
         <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/manisankar001/"><img src={navIcon1} alt="https://www.linkedin.com/in/manisankar001/" /></a>
                <a href="https://github.com/Mindslayer001"><img src={navIcon2} alt="https://github.com/Mindslayer001" /> </a>
                <a href="https://www.instagram.com/mindslayer001_?igsh=MXBoaTB4bzlwbmN6ZA=="><img src={navIcon3} alt="https://www.instagram.com/mindslayer001_?igsh=MXBoaTB4bzlwbmN6ZA==" /> </a>
              </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  )
}
