import { showtimeUpdateValidation, showtimeCreateValidation } from '../validation/ShowtimeValidation.js'
import { validate } from "../validation/validation.js"
import { ResponseError } from "../error/ResponseError.js"
import { Film, Showtime } from '../../models/index.js'; 

const ShowtimeService = {
    get: async () => {
        return await Showtime.findAll({
            include: [{ model: Film }] 
        });
    },

    getBy: async (id) => {
        const showtime = await Showtime.findByPk(id, {
            include: [{ model: Film }] 
        });

        if (!showtime) {
            throw new Error('Showtime not found');
        }

        return showtime;
    },

    create: async (req) => {
        const formVal = validate(showtimeCreateValidation, req)

        const filmId = await Film.findByPk(formVal.filmId);

        if (!filmId) {
            throw new ResponseError(404, 'Film not found');
        }

        const showtime = await Showtime.create({
            time: formVal.time,
            filmId: formVal.filmId,
        });
        return showtime;
    },

    update: async (id, req) => {
        const formVal = validate(showtimeCreateValidation, req);

        const showtime = await Showtime.findByPk(id);

        if (!showtime) {
            throw new ResponseError(404, "Showtime not found");
        }

        const filmId = await Film.findByPk(formVal.filmId);

        if (!filmId) {
            throw new ResponseError(404, 'Film not found');
        }

       
        if (formVal.time) showtime.time = formVal.time;
        if (formVal.filmId) showtime.filmId = formVal.filmId;

        await showtime.save();

        return showtime;
    },

    remove: async (id) => {
        const showtime = await Showtime.findByPk(id, {
            include: [Film]
        });

        if (!showtime) {
            throw new ResponseError(404, "showtime not found")
        }
        showtime.destroy();
        return showtime;
    },


};

export default ShowtimeService;
