import { Col, Container, Row, Stack } from "react-bootstrap";
import "./built-styles/main.css";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="hero-section">
          <Navbar text={"dolfy"}/>
          <img src="/temp-photos/hero_bg.jpg" className="hero-bg"></img>
          <Container className="hero">
            <Row>
              <Col className="hero-left-col d-lg-block" lg={5} xl={5}>
                <img className="hero-top-img" src="/temp-photos/IMG_1695.jpg" />
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
        </div>
        <Container className="about-me">
          <h1>About Me</h1>
          <Row>
            <Col className="about-me-left" lg={12} xl={7}>
              <Stack>
                <div>
                  <h2>About Me</h2>
                  <p>
                    24yr, Bipolar, Slightly Autistic I like History of Wehrmacht
                    & Luftwaffe (NO i don’t support the NSDAP - Nazi Party) So
                    you might see me running around in an Uniform from time to
                    time.
                    <br />
                    I'm a Photographer so you can ask me for photos. (Based in
                    Ostrava, Czechia)
                    <br />
                    <br />
                    Don’t take me seriously, life is short so don’t take your
                    time to complain, but rather adapt to behaviors of others.
                  </p>
                </div>
                <div>
                  <h2>Social Media</h2>
                  <div>
                    <a
                      href="https://www.instagram.com/dolfythefolf/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://t.me/DOLFYWASTAKEN"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Telegram
                    </a>
                  </div>
                </div>
                <div>
                  <h2>Get In Touch</h2>
                  <div>
                    <a
                      href="mailto:info@dolfythe.dev"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Email
                    </a>
                    <a
                      href="https://t.me/DOLFYWASTAKEN"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Telegram
                    </a>
                  </div>
                </div>
              </Stack>
            </Col>
            <Col className="about-me-right" lg={12} xl={5}>
            <div className="gallery-preview">
              <div className="gallery-preview-bg"></div>
              <div className="gallery-button-container">
                <div>
                  <button>open gallery</button>
                </div>
              </div>
              <Stack gap={3}>
                <Stack direction="horizontal" gap={3}>
                  <img src="/temp-photos/IMG_0153.jpg" />
                  <img src="/temp-photos/IMG_0153.jpg" />
                  <img src="/temp-photos/IMG_0153.jpg" />
                </Stack>
                <Stack direction="horizontal" gap={3}>
                  <img src="/temp-photos/IMG_0153.jpg" />
                  <img src="/temp-photos/IMG_0153.jpg" />
                  <img src="/temp-photos/IMG_0153.jpg" />
                </Stack>
                <Stack direction="horizontal" gap={3}>
                  <img src="/temp-photos/IMG_0153.jpg" />
                  <img src="/temp-photos/IMG_0153.jpg" />
                  <img src="/temp-photos/IMG_0153.jpg" />
                </Stack>
              </Stack>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
