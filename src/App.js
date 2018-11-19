import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import MyNav from './nav';
import MyJumbo from './jumbo';
import Content from './content';
import {
    Container
} from 'reactstrap';

class App extends Component {
  render() {
    return (
        <Container>
            <MyNav />
            <MyJumbo />
            <Content />
        </Container>
    );
  }
}

export default App;
