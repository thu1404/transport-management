import { Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { FaBicycle } from "react-icons/fa";

const SearchForm = () => {
  return (
    <div>
      <Row className="g-2">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="License plate">
            <Form.Control type="text" placeholder="License plate" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Max-load">
            <Form.Control type="text" placeholder="playload" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="Works with selects"
          >
            <Form.Select aria-label="Floating label select example">
              <option>Choose Vehicles type</option>
              <option value="1"> Bicycle</option>
              <option value="2">Motobike</option>
              <option value="3">Car</option>
              <option value="4">Truck</option>
              <option value="5">Train</option>
              <option value="6">Ship</option>
              <option value="7">Plane</option>
              <option value="8git">All</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
    </div>
  );
};

export default SearchForm;
