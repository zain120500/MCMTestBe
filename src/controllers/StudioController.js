import StudioService from '../service/StudioService.js'

export const get = async (req, res, next) => {
    try {
        const result = await StudioService.get()
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
};

export const getBy = async (req, res, next) => {
    try {
        const result = await StudioService.getBy(req.params.id)
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
};

export const create = async (req, res, next) => {
    try {
        const result = await StudioService.create(req.body)
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
};

const update = async (req, res, next) => {
    try {
        const id = req.params.id
        const request = req.body
        const result = await StudioService.update(id, request)
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
};

export const remove = async (req, res, next) => {
    try {
        const result = await StudioService.remove(req.params.id)
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
};

export default {
    get,
    getBy,
    create,
    update,
    remove
}