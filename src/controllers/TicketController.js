import TicketService from '../service/TicketService.js'

export const get = async (req, res, next) => {
    try {
        const result = await TicketService.get()
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
};

export const getBy = async (req, res, next) => {
    try {
        const result = await TicketService.getBy(req.params.id)
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
};

export const create = async (req, res, next) => {
    try {
        const result = await TicketService.create(req.body)
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
        const result = await TicketService.update(id, request)
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
};

export const remove = async (req, res, next) => {
    try {
        const result = await TicketService.remove(req.params.id)
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