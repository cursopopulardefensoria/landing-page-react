import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import logo from './img/logo.png';
import {
    Row,
    Col
} from 'reactstrap';
import Social from './social';
import links from './links';

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
                            url={links.youtube}
                            name="cursopopulardefensoria"
                        />
                    </Col>
                    <Col md="6">
                        <Social
                            url={links.instagram}
                            name="@cursopopulardefensoria"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Social
                            url={links.facebook}
                            name="/cursopopulardefensoria"
                        />
                    </Col>
                    <Col md="6">
                        <Social
                            url={links.twitter}
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
