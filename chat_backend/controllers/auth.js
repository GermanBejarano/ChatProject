const { response } = require("express");
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require("../helpers/jwt");


const crearUsuario = async (req, res = response) => {
    try {

        const { email, password } = req.body;

        const existeEmail = await Usuario.findOne({ email });
        if (existeEmail) {
            res.status(400).json({
                ok: false,
                msg: 'El correo ya existe'
            });
            return;
        }

        const usuario = new Usuario(req.body);

        //Encriptar pass
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt)

        // Guardar usuario en DB
        await usuario.save();

        // Generar el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            ok: true,
            usuario,
            token
        })

    } catch (error) {
        console.log('Error', error);
        res.status(500).json({
            ok: false,
            msg: 'Contacte al administrador'
        })
    }
}

const login = async (req, res = response) => {

    try {
        const { email, password } = req.body;

        // Verificar si existe correo
        const usuarioDB = await Usuario.findOne({ email });
        if (!usuarioDB) {
            res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            })
            return;
        }

        // Validar el pass
        const validPass = bcrypt.compareSync(password, usuarioDB.password);
        if (!validPass) {
            res.status(400).json({
                ok: false,
                msg: 'Password no es correcto'
            })
            return;
        }

        // Generar el JWT
        const token = await generarJWT(usuarioDB.id);

        res.json({
            ok: true,
            usuario: usuarioDB,
            token
        });

    } catch (error) {
        console.log('Error', error);
        res.status(500).json({
            ok: false,
            msg: 'Contacte al administrador'
        })
    }
}

const renewToken = async (req, res = response) => {

    const uid = req.uid;

    // Generar un nuevo JWT
    const token = await generarJWT(uid);

    // Obtener el usuario por UID
    const usuario = await Usuario.findById(uid);


    res.json({
        ok: true,
        usuario,
        token
    });
}


module.exports = {
    crearUsuario,
    login,
    renewToken
}