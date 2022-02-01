import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { Form, Button } from "react-bootstrap";
import Navbar0 from "../../components/Navbar0";

const SignIn = () => {
  return (
    <section>
      <Navbar0 />
      <Form className="sign-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember my password" />
        </Form.Group>
        <div className="submit-button">
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default SignIn;
