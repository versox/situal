import React from 'react';
import { Link } from 'react-router-relative-link';

export default function Card(props) {
  return (
    <div class="uk-width-1-2">
        <Link to={'./' + props.link} class="uk-panel uk-panel-box uk-panel-hover">
            <img src={props.img} alt="" />
            <p class="uk-text-large uk-text-center">
                {props.title}
            </p>
        </Link>
    </div>
  );
}
