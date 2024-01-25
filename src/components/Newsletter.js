import { useState, useEffect } from "react";
import { Col, Row, Button } from "react-bootstrap";

export const Newsletter = () => {
const canvaLink = "https://www.canva.com/design/DAFwfbXbDC0/eOdxU0iClW5wPJEzLb9p5w/edit?utm_content=DAFwfbXbDC0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"; 


  return (

    <Col lg={12}>
  <div className="newsletter-bx wow slideInUp">
    <Row>
      <Col lg={12} md={12} xl={5}>
      <h3>Thank you for reviewing my portfolio</h3>
        <p className="resume-text mb-1"> I invite you to download my resume for a comprehensive overview of my skills and experience. Your consideration is highly appreciated.</p>
      </Col>
      <Col lg={12} md={12} xl={7} className="mt-3 mt-md-0">
      <a className="d-flex flex-column">
  <button
    type="submit"
    className="btn btn1 btn-primary"
    onClick={() => window.location.href = canvaLink}
  >
    Canva Link
  </button>
</a>
      </Col>
    </Row>
  </div>
</Col>
  );
}