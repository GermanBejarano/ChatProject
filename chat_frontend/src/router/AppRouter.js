import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

import { AuthRouter } from './AuthRouter';
import { ChatRouter } from './ChatRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';


// Función padre que controla las rutas publicas y privadas del chat en base al  
// parametro de autenticacion que se maneja por un token

export const AppRouter = () => {

    const { auth, verificaToken } = useContext(AuthContext);

    useEffect(() => {
        verificaToken();
    }, [verificaToken])


    if (auth.checking)
        return <h1>Espere por favor</h1>

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={auth.logged} path="/auth" component={AuthRouter} />
                    <PrivateRoute isAuthenticated={auth.logged} path="/" component={ChatRouter} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
