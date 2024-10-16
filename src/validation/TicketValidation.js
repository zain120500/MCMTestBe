import Validator from 'validatorjs';

const ticketCreateValidation = (data) => {
    const rules = {
        seatNumber: 'required|string|max:10', // Nomor kursi wajib diisi
        price: 'required|numeric|min:0', // Harga wajib diisi dan tidak boleh negatif
        showtimeId: 'required|integer', // ID showtime wajib diisi
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

const ticketUpdateValidation = (data) => {
    const rules = {
        seatNumber: 'string|max:10', // Nomor kursi boleh diisi, tidak lebih dari 10 karakter
        price: 'numeric|min:0', // Harga boleh diisi dan tidak boleh negatif
        showtimeId: 'integer', // ID showtime boleh diisi
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
    ticketCreateValidation,
    ticketUpdateValidation
};
