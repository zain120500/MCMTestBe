class ResponseError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }

    toJSON() {
        return {
            status: this.status,
            message: JSON.parse(this.message) 
        };
    }
}

export {
    ResponseError
}
