import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import foto1 from './img/foto1.jpg';
import foto2 from './img/foto2.jpg';

const items = [
  {
    src: foto1,
  },
  {
    src: foto2,
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
