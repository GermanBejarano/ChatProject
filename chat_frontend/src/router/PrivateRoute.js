import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// Función que controla las rutas privadas del chat a partir de un parametro 
// de autenticacion que llega por props del componente padre AppRouter.js

export const PrivateRoute = ({
   isAuthenticated,
   component: Component,
   ...rest
}) => {
    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? <Component { ...props } />
                    : <Redirect to="/auth" />
            )} 
        />
    )
}



