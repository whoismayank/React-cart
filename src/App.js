import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
// import {About} from './Pages/About';
import Navigation from './components/Navigation';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
const App = () =>{
    return ( 
        <>
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    {/* <Route path="/about" component={About}></Route> */}
                    <Route path="/products" component={Products}></Route>
                    <Route path="/cart" component={Cart}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;