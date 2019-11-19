import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav class="uk-navbar">
            <span class="uk-navbar-brand">Situal</span>
            <ul class="uk-navbar-nav">
                <li class="uk-active">
                    <Link to="/order">order</Link>
                </li>
                <li>
                    <Link to="/kitchen">kitchen</Link>
                </li>
                <li>
                    <Link to="/tables">tables</Link>
                </li>
            </ul>
            <div class="uk-navbar-center">
                <h2 class="uk-text-primary">
                    {props.title}
                </h2>
            </div>
        </nav>
    );
}