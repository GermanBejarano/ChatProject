import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ChatPage } from '../pages/ChatPage';
import { RegisterPage } from '../pages/RegisterPage';

// Función que gestiona todas las rutas privadas del chat

export const ChatRouter = () => {
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-t-50 p-b-90">
                    <Switch>
                        <Route exact path="/" component={ChatPage} />
                        <Route exact path="/register" component={RegisterPage} />
                        {/* <Redirect to="/" /> */}
                    </Switch>
                </div>
            </div>
        </div>
    )
}
