import {filmCreateValidation,filmUpdateValidation} from '../validation/FilmValidation.js'
import { validate } from "../validation/validation.js"
import { ResponseError } from "../error/ResponseError.js"
import { Film, Studio } from '../../models/index.js'; 

const FilmService = {
    get: async () => {
        return await Film.findAll({
            include: {
                model: Studio,
                attributes: ['id', 'name', 'location'], 
            }
        });
    },

    getBy: async (id) => {
        const film = await Film.findByPk(id,{
            include: {
                model: Studio,
                attributes: ['id', 'name', 'location'], 
            },
        });

        if (!film) {
            throw new Error('Film not found');
        }

        return film;
    },


    create: async (req) => {
        const formVal = validate(filmCreateValidation, req)

        const studioId = await Studio.findByPk(formVal.studioId);

        if (!studioId) {
            throw new ResponseError(404, 'Studio not found');
        }

        const film = await Film.create({
            title: formVal.title,
            director: formVal.director,
            releaseDate: formVal.releaseDate,
            rating: formVal.rating,
            studioId: formVal.studioId,
        });
        return film;
    },

    update: async (id,req) => {
        const formVal = validate(filmUpdateValidation, req)
        
        const film = await Film.findByPk(id);
        
        if (!film) {
            throw new ResponseError(404, "Film not found")
        }

        const studioId = await Studio.findByPk(formVal.studioId);

        if (!studioId) {
            throw new ResponseError(404, 'Studio not found');
        }

        if (formVal.title) film.title = formVal.title ;
        if (formVal.director) film.director = formVal.director ;
        if (formVal.releaseDate) film.releaseDate = formVal.releaseDate ;
        if (formVal.rating) film.rating = formVal.rating ;
        if (formVal.studioId) film.studioId = formVal.studioId ;

        await film.save()

        return film;
    },

    remove: async (id) => {
        const film = await Film.findByPk(id);

        if (!film) {
            throw new ResponseError(404, "film not found")
        }
        film.destroy();
        return film;
    },

};

export default FilmService;
