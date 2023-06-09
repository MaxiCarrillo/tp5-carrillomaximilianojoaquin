//defino controlador para el manejo de CRUD
const ticketCtrl = require('../controllers/ticket.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', ticketCtrl.getTickets); //http://localhost:3000/api/agente
router.post('/', ticketCtrl.createTicket);
router.get('/local', ticketCtrl.getTicketLocal);
router.get('/extranjeros', ticketCtrl.getTicketExtranjero);
router.put('/:id', ticketCtrl.editTicket);
router.delete('/:id', ticketCtrl.deleteTicket);
router.get('/id/:id', ticketCtrl.getTicket);

//exportamos el modulo de rutas
module.exports = router;