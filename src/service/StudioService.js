import Studio from '../../models/Studio.js';
import { studioCreateValidation, studioUpdateValidation } from '../validation/StudioValidation.js'
import { ResponseError } from "../error/ResponseError.js"
import { validate } from "../validation/validation.js"

const StudioService = {
    get: async () => {
        return await Studio.findAll();
    },

    getBy: async (id) => {
        const studio = await Studio.findByPk(id);

        if (!studio) {
            throw new ResponseError(404, "studio not found")
        }

        return studio;
    },

    create: async (req) => {
        const formVal = validate(studioCreateValidation, req)
        const studio = await Studio.create({
            name: formVal.name,
            location: formVal.location,
        });

        return studio;
    },

    update: async (id, req) => {
        const formVal = validate(studioUpdateValidation, req)

        const studio = await Studio.findByPk(id);

        if (!studio) {
            throw new ResponseError(404, "studio not found")
        }

        if (formVal.name) studio.name = formVal.name;
        if (formVal.location) studio.location = formVal.location;

        await studio.save()

        return studio;
    },

    remove: async (id) => {
        const studio = await Studio.findByPk(id);

        if (!studio) {
            throw new ResponseError(404, "studio not found")
        }
        studio.destroy();
        return studio;
    },
};

export default StudioService;
