// Pagina inicial donde se muestran los formularios de registro e inicio de sesion

import React, { useState } from 'react';
import { Register } from '../components/Register';
import { Login } from '../components/Login';

export const LoginPage = () => {
    const [isActive, setIsActive] = useState(false);

    // Funcion que ayuda a cambiar entre el formulario de registro y el login
    const handleButtonClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='bodyLogin'>
            <div className={`${isActive ? 'container active' : 'container'}`} id="container">

                {/* Formulario de registro */}
                <Register />

                {/* Formulario de inicio de sesion */}
                <Login />

                {/* Seccion informativa  - Cambio de formulario*/}
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white-900">
                                ¡Bienvenido de nuevo!
                            </h1>
                            <p>Ingrese sus datos personales para utilizar todas las funciones del sitio</p>
                            <button className="hiddenButton" id="login" onClick={handleButtonClick}>Ingresar</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white-900">
                                Hola, Amigo!
                            </h1>
                            <p>Regístrese con sus datos personales para utilizar todas las funciones del sitio</p>
                            <button className="hiddenButton" id="register" onClick={handleButtonClick}>Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
