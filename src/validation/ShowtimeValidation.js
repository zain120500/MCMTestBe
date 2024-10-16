import Validator from 'validatorjs';

const showtimeCreateValidation = (data) => {
    const rules = {
        time: 'required|date',                
        filmId: 'required|integer',         
    };

    const validation = new Validator(data, rules);

    if (validation.fails()) {
        return {
            status: 'error',
            errors: validation.errors.all(), 
        };
    }

    return data; 
};

const showtimeUpdateValidation = (data) => {
    const rules = {
        time: 'date',               
        filmId: 'integer',          
    };

    const validation = new Validator(data, rules);

    if (validation.fails()) {
        return {
            status: 'error',
            errors: validation.errors.all(), 
        };
    }

    return data; 
};

export {
    showtimeCreateValidation,
    showtimeUpdateValidation
};
