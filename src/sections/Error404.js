import React from "react";
// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";
import { NavLink } from 'react-router-dom';

function NoMatch() {

  return (
    <>
      <div className="section">
        <Container>
          <Row>
          <Col md="7">
            <h2 className="pt-5">
              OOPS! You don't want to see this!<br />
              <span className="small">
              This is probably not what you were looking for. <br />
                            </span>
            </h2>
                <Button color="warning" variant="warning" href="/about"><i className="fas fa-undo-alt"></i> Go Back</Button>{' '}
         

            </Col>
          </Row>
          <Row>
          <Col md="12">
            <div className="error-page">
          <img
                          className="img-fluid"
                          alt="..."
                          src={require("../assets/images/error.svg").default}
                        />
            </div>
          </Col>
          </Row>
        </Container>
        </div>
    </>
  );
}

export default NoMatch;

