import { Col, Container, Row, Stack } from "react-bootstrap";
import GalleryPreview from "../components/GalleryPreview";
import Links from "../components/Links";

const AboutMe = () => {
  const socialLinks = [
    {
      link: "https://www.instagram.com/dolfythefolf/",
      text: "Instagram",
    },
    {
      link: "https://t.me/DOLFYWASTAKEN",
      text: "Telegram",
    },
  ];

  const gitLinks = [
    {
      link: "mailto:info@dolfythe.dev",
      text: "Email",
    },
    {
      link: "https://t.me/DOLFYWASTAKEN",
      text: "Telegram",
    },
  ];

  return (
    <Container className="about-me">
      <h1>About Me</h1>
      <Row>
        <Col className="about-me-left" lg={12} xl={7}>
          <Stack>
            <div>
              <h2>About Me</h2>
              <p>
                24yr, Bipolar, Slightly Autistic I like History of Wehrmacht &
                Luftwaffe (NO i don’t support the NSDAP - Nazi Party) So you
                might see me running around in an Uniform from time to time.
                <br />
                I'm a Photographer so you can ask me for photos. (Based in
                Ostrava, Czechia)
                <br />
                <br />
                Don’t take me seriously, life is short so don’t take your time
                to complain, but rather adapt to behaviors of others.
              </p>
            </div>
            <div>
              <h2>Social Media</h2>
              <Links links={socialLinks} />
            </div>
            <div>
              <h2>Get In Touch</h2>
              <Links links={gitLinks} />
            </div>
          </Stack>
        </Col>
        <Col className="about-me-right" lg={12} xl={5}>
          <GalleryPreview />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
