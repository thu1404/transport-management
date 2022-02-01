import Navbar0 from "../../components/Navbar0";
import { Form, Button } from "react-bootstrap";
import "./index.css";

const ContactUs = () => {
  return (
    <section>
      <Navbar0 />
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.640944302602!2d105.840947314883!3d21.00702528601013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76ccab6dd7%3A0x55e92a5b07a97d03!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1621327746381!5m2!1svi!2s"
          width="960"
          height="450"
          allowfullscreen=""
          loading="lazy"
          title="map"
        ></iframe>
      </div>

      <Form className="sign-form">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="Text" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Your Message</Form.Label>
          <Form.Control type="Text" placeholder="Message" />
        </Form.Group>

        <div className="submit-button">
          <Button variant="primary" type="submit">
            Send
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default ContactUs;
