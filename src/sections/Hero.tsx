import { Col, Container, Row } from "react-bootstrap";

function Hero() {
  return (
    <>
      <img src="/hero_bg.jpg" alt="hero bg" className="hero-bg"></img>
      <Container className="hero">
        <Row>
          <Col className="hero-left-col d-lg-block" lg={5} xl={5}>
            <img className="hero-top-img" alt="hero top" src="/hero_top.jpg" />
          </Col>
          <Col
            className="hero-center-col d-none d-lg-none d-xxl-block"
            xl={1}
          />
          <Col className="hero-right-col" lg={7} xxl={6}>
            <div className="hero-card">
              <h2>
                hey there, I'm <span className="pink-color">dolfy</span>
              </h2>
              <p>
                "Not Your Typical Furry"
                <br />
                Fursuiter & Photographer
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Hero;
