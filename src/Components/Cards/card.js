import React from 'react';
import { Link } from 'react-router-relative-link';
import List from '../list';

export default function Card(props) {
  return (
    <div class="uk-width-1-2 uk-margin">
        <Link to={'./' + props.link} class="uk-panel uk-panel-box uk-panel-hover">
            <img src={props.img} alt="" />
            <p class="uk-text-large uk-text-center">
                {props.title}
            </p>
            {props.listItems ? <List items={props.listItems} />: ''}
        </Link>
    </div>
  );
}
