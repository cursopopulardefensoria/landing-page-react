import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default (props) => (
    <div className="text-center">
        <SocialIcon url={props.url} />
        <p><a href={props.url}>{props.name}</a></p>
    </div>
);
