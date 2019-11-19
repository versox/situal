import 'uikit/dist/css/uikit.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import SelectMenu from './order/menu';
import SelectRestaurant from './order/restaurant';
import OrderFood from './order/food';
import Kitchen from './order/kitchen';

ReactDOM.render(
    <div>
        <Router>
            <Switch>
                <Route path="/order/:restId/:menuId" component={OrderFood} />
                <Route path="/order/:restId" component={SelectMenu} />
                <Route path="/order" component={SelectRestaurant} />
                <Route path="/kitchen" component={Kitchen} />
                <Route path="/">
                    <Redirect to="/order"/>
                </Route>
            </Switch>
        </Router>
    </div>
  , document.getElementById('root'));