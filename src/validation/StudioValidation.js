import Validator from 'validatorjs';

const studioCreateValidation = (data) => {
    const rules = {
        name: 'required|string|max:255',
        location: 'required|string|max:255',
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

const studioUpdateValidation = (data) => {
    const rules = {
        name: 'string|max:255',
        location: 'string|max:255',
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
    studioCreateValidation,
    studioUpdateValidation
}