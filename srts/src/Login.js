import React from "react";
import "./Login.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from "./assets/images/Logo.png";

function Login() {
  return (
    <div>
      <div className="background-image"></div>
      <Container className="login-container">
        <Row className="justify-content-center">
          <Col md={8} className="mt-5">
            <div className="d-flex flex-column align-items-center white-container ">
              <img src={logo} alt="Logo" className="logo-image" />

              <h3 className="text-center">Welcome Back!</h3>
              <Form>
                <Form.Group controlId="formBasicUsername">
                  <Form.Control type="Username" placeholder="Username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="btn-block">
                  Login
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
