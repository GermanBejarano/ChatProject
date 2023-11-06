const Mensaje = require('../models/mensaje');

const obtenerChat = async(req, res) => {
    try {
        const miId = req.uid;
        const mensajeDe = req.params.de;

        const last30 = await Mensaje.find({
            $or: [
                { de: miId, para: mensajeDe },
                { de: mensajeDe, para: miId },
            ]
        })
            .sort({ createdAt: 'asc' })
            .limit(30);

        res.json({
            ok: true,
            mensajes: last30
        });

    } catch (error) {
        console.log('Error', error);
        res.status(500).json({
            ok: false,
            msg: 'Contacte al administrador'
        })
    }
}

module.exports = {
    obtenerChat
}