import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import Header from '../header/header';
const App = () => {

    return (
        <div className="container">
            <Header items={3} total={60}/>

        <Switch>
            <Route path='/' component={HomePage} exact/>
            <Route path='/cart' component={CartPage}/>
        </Switch>
        </div>
    );
};

export default App;