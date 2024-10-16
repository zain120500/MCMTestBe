import { ResponseError } from "../error/ResponseError.js"

const validate = (schema, request) => {

    const validation = schema(request);
    if (validation.status === 'error') {
        throw new ResponseError(400,JSON.stringify(validation.errors));
    } else {
        return validation; 
    }
}


export {
    validate
}