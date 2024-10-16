import Validator from 'validatorjs';

const filmCreateValidation = (data) => {
    const rules = {
        title: 'required|string|max:255',           
        director: 'required|string|max:255',        
        releaseDate: 'required|date',                
        rating: 'required|numeric|min:0|max:10',    
        studioId: 'required|integer',                  
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

const filmUpdateValidation = (data) => {
    const rules = {
        title: 'string|max:255',          
        director: 'string|max:255',         
        releaseDate: 'date',              
        rating: 'numeric|min:0|max:10',   
        studioId: 'integer',                  
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
    filmCreateValidation,
    filmUpdateValidation
};
