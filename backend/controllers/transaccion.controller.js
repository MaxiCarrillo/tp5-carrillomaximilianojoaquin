const Transaccion = require('../models/transaccion');

const transaccionCtrl = {}

transaccionCtrl.getTransacciones = async (req, res) => {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.createTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Transaccion guardada.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

transaccionCtrl.getTransaccionesByEmail = async (req, res) => {
    var transacciones = await Transaccion.find({ "emailCliente": req.params.email });
    res.json(transacciones);
}

transaccionCtrl.getTransaccionesByMoneda = async (req, res) => {
    var transacciones = await Transaccion.find({
        $or: [
            { "monedaOrigen": req.params.moneda },
            { "monedaDestino": req.params.moneda }
        ]
    });

    res.json(transacciones);
}

module.exports = transaccionCtrl;