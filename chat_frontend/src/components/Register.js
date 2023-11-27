import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import { string, object } from 'yup';

import { AuthContext } from '../auth/AuthContext';

// Esquema de validaciones
export const loginSchema = object().shape({
    name: string().required('El nombre es requerido'),
    email: string().email().required('El email es requerido'),
    password: string().required('La contraseña es requerida')
        .min(6, 'Tiene que tener minimo 6 caracteres'),
});

// Valores iniciales
export const initialValues = {
    email: '',
    password: '',
    name: ''
};

export const Register = () => {

    const { register } = useContext(AuthContext);

    //Funcion que cambia el valor de los inputs
    const onChange = ({ target }) => {
        const { name, value } = target;
        setFieldValue(name, value);
    }

    // Funcion que envia la informacion del formulario de registro al backend
    const onSubmit = async () => {
        const { email, password, name } = values;
        const msg = await register(name, email, password);

        if (msg !== true) {
            Swal.fire('Error', msg, 'error');
        }
    }

    // Hook que ayuda a validar las restricciones de los campos
    const { values, errors, setFieldValue, ...formik } = useFormik({
        initialValues,
        onSubmit,
        validationSchema: loginSchema,
    });

    return (
        <div className="form-container sign-up">
            <form onSubmit={onSubmit}>
                <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-black-900">
                    Crear cuenta
                </h1>
                <div className="social-icons">
                    <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>o usa tu email para registrarte</span>
                <input
                    className={`${formik.dirty && errors.name ? 'ring-2 ring-red-400' : ''}`}
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    onChange={onChange}
                />
                <input
                    className={`${formik.dirty && errors.email ? 'ring-2 ring-red-400' : ''}`}
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={onChange}
                />
                <input
                    className={`${formik.dirty && errors.password ? 'ring-2 ring-red-400' : ''}`}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                />
                <button
                    className={`${(!formik.isValid || !formik.dirty) ? 'disabled' : ''}`}
                    type='submit'
                    onClick={formik.handleSubmit}
                    disabled={!formik.isValid || !formik.dirty}
                >
                    Registrarme
                </button>
            </form>
        </div>
    )
}