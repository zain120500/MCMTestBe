import { ticketCreateValidation, ticketUpdateValidation } from '../validation/TicketValidation.js'
import { ResponseError } from "../error/ResponseError.js"
import { validate } from "../validation/validation.js"
import { Showtime, Ticket, Film, Studio } from '../../models/index.js'; 

const TicketService = {
    get: async () => {
        return await Ticket.findAll({
            include: [{
                model: Showtime,
                include: [{
                    model: Film,
                    include: [{
                        model: Studio
                    }]
                }],
            }],
        });
    },

    getBy: async (id) => {
        const ticket = await Ticket.findByPk(id, {
            include: [{
                model: Showtime,
                include: [{
                    model: Film,
                    include: [{
                        model: Studio
                    }]
                }],
            }],
        });
        if (!ticket) {
            throw new ResponseError(404, "Ticket not found")
        }

        return ticket;
    },

    create: async (req) => {

        const formVal = validate(ticketCreateValidation, req)
        const ticket = await Ticket.create({
            seatNumber: formVal.seatNumber,
            price: formVal.price,
            showtimeId: formVal.showtimeId,
        });

        return ticket;
    },

    update: async (id, req) => {
        const formVal = validate(ticketUpdateValidation, req)

        const ticket = await Ticket.findByPk(id);
        
        if (!ticket) {
            throw new ResponseError(404, "Ticket not found")
        }

        if (formVal.seatNumber) ticket.seatNumber = formVal.seatNumber;
        if (formVal.price) ticket.price = formVal.price;
        if (formVal.showtimeId) ticket.showtimeId = formVal.showtimeId;

        await ticket.save()

        return ticket;
    },

    remove: async (id) => {
        const ticket = await Ticket.findByPk(id);

        if (!ticket) {
            throw new ResponseError(404, "Ticket not found")
        }
        ticket.destroy();
        return ticket;
    },
};

export default TicketService;
