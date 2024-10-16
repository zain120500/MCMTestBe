import { ResponseError } from "../error/ResponseError.js";

const errorMiddleware = async (err, req, res, next) => {
    if (!err) {
        next()
        return;
    }

    if (err instanceof ResponseError) {
        try {
             JSON.parse(err.message);
            res.status(err.status).json(err.toJSON()).end();
        } catch (jsonError) {
            // Jika gagal, kembalikan err.message sebagai objek JSON
            res.status(err.status).json({
                errors: err.message
            }).end();
        }
    } else {
        res.status(500).json({
            errors: err.message
        }).end();
    }
}

export {
    errorMiddleware
}