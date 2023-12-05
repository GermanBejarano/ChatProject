import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// Función que gestiona las rutas publicas del chat a partir de un parametro 
// de autenticacion que llega por props del componente padre AppRouter.js

export const PublicRoute = ({
   isAuthenticated,
   component: Component,
   ...rest
}) => {
    return (
        <Route { ...rest }
            component={ (props) => (
                ( !isAuthenticated )
                    ? <Component { ...props } />
                    : <Redirect to="/" />
            )} 
        />
    )
}



