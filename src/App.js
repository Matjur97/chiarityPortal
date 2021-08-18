import React from 'react';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

import './styles/main.scss';

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Login" component={Login} />
                <Route path="/Register" component={Register} />
                <Route path="/Logout" component={Logout} />
            </Switch>
        </HashRouter>
    )
}

export default App;
