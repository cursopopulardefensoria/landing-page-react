import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import logo from './img/logo.png';
import {
    Row,
    Col
} from 'reactstrap';
import Social from './social';

export default (props) => {
  return (
    <div>
      <Jumbotron>
        <Row>
            <Col md="6">
                <img className="img-fluid" src={logo} />
            </Col>
            <Col md="6" className="align-self-center">
                <Row>
                    <Col md="6">
                        <Social
                            url="https://www.youtube.com/channel/UCW8LLCnZrmVxwSIno-7AI4A"
                            name="cursopopulardefensoria"
                        />
                    </Col>
                    <Col md="6">
                        <Social
                            url="https://www.instagram.com/cursopopulardefensoria/"
                            name="@cursopopulardefensoria"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Social
                            url="https://www.facebook.com/cursopopulardefensoria/"
                            name="/cursopopulardefensoria"
                        />
                    </Col>
                    <Col md="6">
                        <Social
                            url="https://twitter.com/cursopopulardef"
                            name="@cursopopulardef"
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
