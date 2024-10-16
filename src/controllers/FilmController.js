import FilmService from "../service/FilmService.js"

export const get = async (req, res, next) => {
    try {
        const result = await FilmService.get(); // Pastikan ini sesuai dengan nama fungsi
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
};

export const getBy = async (req, res, next) => {
    try {
        const result = await FilmService.getBy(req.params.id)
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
};

const create = async (req, res, next) => {
    try {
        const request = req.body
        const result = await FilmService.create(request)
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id
        const request = req.body
        const result = await FilmService.update(id, request)
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
}

export const remove = async (req, res, next) => {
    try {
        const result = await FilmService.remove(req.params.id)
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
};

export default {
    create,
    get,
    getBy,
    update,
    remove,
}