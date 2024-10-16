import ShowtimeService from '../service/ShowtimeService.js'

// Create Showtime
const create = async (req, res, next) => {
    try {
        const request = req.body
        const result = await ShowtimeService.create(request)
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
};

// Read All Showtimes
const getAll = async (req, res, next) => {
    try {
        const result = await ShowtimeService.get()
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
};

// Read Showtime by ID
const getBy = async (req, res, next) => {
    try {
        const result = await ShowtimeService.getBy(req.params.id)
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
};

// Update Showtime
const update = async (req, res, next) => {
    try {
        const id = req.params.id
        const request = req.body
        const result = await ShowtimeService.update(id, request)
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
};

const remove = async (req, res, next) => {
    try {
        const result = await ShowtimeService.remove(req.params.id)
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
};

export default {
    create,
    getAll,
    getBy,
    update,
    remove
};
