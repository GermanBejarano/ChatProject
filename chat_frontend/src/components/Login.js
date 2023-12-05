import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import { string, object } from 'yup';

import { AuthContext } from '../auth/AuthContext';

// Esquema de validaciones
export const loginSchema = object().shape({
    email: string().required('El email es requerido'),
    password: string().required('La contraseña es requerida')
        .min(6, 'Tiene que tener minimo 6 caracteres'),
});

// Valores iniciales
export const initialValues = {
    email: '',
    password: '',
    rememberme: false
};

export const Login = () => {

    const { login } = useContext(AuthContext);

    const [form] = useState({
        email: 'test1@gmail.com',
        password: '123456',
        rememberme: false
    });


    // Funcion que envia la informacion del formulario de login al backend
    const onSubmit = async () => {
        (values.rememberme)
            ? localStorage.setItem('email', values.email)
            : localStorage.removeItem('email');

        const { email, password } = values;
        const ok = await login(email, password);

        if (!ok) {
            Swal.fire('Error', 'Verifique el usuario y contraseña', 'error');
        }
    }

    // Hook que ayuda a validar las restricciones de los campos
    const { values, errors, setFieldValue, ...formik } = useFormik({
        initialValues,
        onSubmit,
        validationSchema: loginSchema,
    });


    // Hook que carga la informacion del localStorage si el usuario la guardo anteriormente
    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            formik.setValues({
                ...form,
                email,
                rememberme: true,
            })
        } else {
            formik.setValues({ ...form })
        }
        //TODO: quitar al subir

    }, [])

    //Funcion que cambia el valor de los inputs
    const onChange = ({ target }) => {
        const { name, value } = target;
        setFieldValue(name, value);
    }

    // Funcion que cambia el estado del checkbox de recordar datos
    const toggleCheck = () => {
        setFieldValue('rememberme', !values.rememberme);
    }


    return (
        <div className="form-container sign-in">
            <form onSubmit={onSubmit}>
                <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-black-900">
                    Iniciar Sesión
                </h1>
                <div className="social-icons">
                    <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>o usa tu email y password</span>

                <input
                    className={`${formik.dirty && errors.email ? 'ring-2 ring-red-400' : ''}`}
                    id='email'
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={onChange}

                />

                <input
                    className={`${formik.dirty && errors.password ? 'ring-2 ring-red-400' : ''}`}
                    id='password'
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={onChange}
                />

                <div className="mt-4 mb-2 space-y-6">
                    <div className="relative flex gap-x-3">
                        <div
                            className="flex h-6 items-center"
                            onClick={() => toggleCheck()}
                        >
                            <input
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                id="ckb1"
                                type="checkbox"
                                name="rememberme"
                                checked={values.rememberme}
                                readOnly
                            />
                        </div>
                        <div className="text-sm leading-6">
                            <label htmlFor="comments" className="font-medium text-gray-900">
                                Recordarme
                            </label>
                        </div>
                    </div>
                </div>
                <button
                    className={`${(!formik.isValid || !formik.dirty) ? 'disabled' : ''}`}
                    type='submit'
                    onClick={formik.handleSubmit}
                    disabled={!formik.isValid || !formik.dirty}
                >
                    Ingresar
                </button>
            </form>
        </div>
    )
}