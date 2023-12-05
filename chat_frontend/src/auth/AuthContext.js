import React, { createContext, useCallback, useState } from 'react';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';

export const AuthContext = createContext();

const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null,
};

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(initialState);

    // Funcion que controla el login del usuario, el cual recibe 2 parametros (email y password),
    // estos son enviados en una peticion al backend, el cual hace el proceso de verificacion y 
    // envia la respuesta correspondiente 

    const login = async (email, password) => {
        const resp = await fetchSinToken('login', { email, password }, 'POST');
        if (resp.ok) {
            localStorage.setItem('token', resp.token);
            const { usuario } = resp;

            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email,
            });

        }
        return resp.ok;
    }


    // Funcion que controla el registro del usuario, el cual recibe 3 parametros (nombre, email y password),
    // estos son enviados en una peticion al backend, el cual hace el proceso de creación y 
    // envia la respuesta correspondiente 

    const register = async (nombre, email, password) => {
        const resp = await fetchSinToken('login/new', { nombre, email, password }, 'POST');

        if (resp.ok) {
            localStorage.setItem('token', resp.token);
            const { usuario } = resp;

            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email,
            });

            return true;
        }
        return resp.msg;
    }


    // Funcion que valida el token almacenado en localStorage, si esta hace una peticion al backend
    // para renovarlo de lo contrario indicara que esta fuera de sesion y se actualizara el contenido 
    // de la variable auth que controla la sesion para redirigir al usuario al login.

    const verificaToken = useCallback(async () => {

        const token = localStorage.getItem('token');
        // Si token no existe
        if (!token) {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
            })

            return false;
        }

        const resp = await fetchConToken('login/renew');
        if (resp.ok) {
            localStorage.setItem('token', resp.token);
            const { usuario } = resp;

            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email,
            });

            return true;
        } else {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
            });

            return false;
        }

    }, [])


    // Funcion que remueve el token almacenado y sirve para cerrar la sesion del usuario
    
    const logout = () => {
        localStorage.removeItem('token');
        setAuth({
            checking: false,
            logged: false,
        });
    }


    return (
        <AuthContext.Provider value={{
            auth,
            login,
            register,
            verificaToken,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

