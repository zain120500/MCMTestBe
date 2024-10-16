import express from "express";
import FilmController from "../controllers/FilmController.js";
import StudioController from "../controllers/StudioController.js"
import ShowtimeController from "../controllers/ShowtimeController.js"
import TicketController from "../controllers/TicketController.js";
const publicRouter = new express.Router();

// Film API
publicRouter.get('/api/films', FilmController.get);
publicRouter.get('/api/films/:id', FilmController.getBy);
publicRouter.post('/api/films', FilmController.create);
publicRouter.put('/api/films/:id', FilmController.update);
publicRouter.delete('/api/films/:id', FilmController.remove);

// Studio API
publicRouter.get('/api/studios', StudioController.get);
publicRouter.get('/api/studios/:id', StudioController.getBy);
publicRouter.post('/api/studios', StudioController.create);
publicRouter.put('/api/studios/:id', StudioController.update);
publicRouter.delete('/api/studios/:id', StudioController.remove);

// Showtime API
publicRouter.post('/api/showtimes', ShowtimeController.create);
publicRouter.get('/api/showtimes', ShowtimeController.getAll);
publicRouter.get('/api/showtimes/:id', ShowtimeController.getBy);
publicRouter.put('/api/showtimes/:id', ShowtimeController.update);
publicRouter.delete('/api/showtimes/:id', ShowtimeController.remove);

// Showtime API
publicRouter.post('/api/tickets', TicketController.create);
publicRouter.get('/api/tickets', TicketController.get);
publicRouter.get('/api/tickets/:id', TicketController.getBy);
publicRouter.put('/api/tickets/:id', TicketController.update);
publicRouter.delete('/api/tickets/:id', TicketController.remove);

export {
    publicRouter
}
