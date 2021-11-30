import { updateRequestTicket } from './../models/request-ticket.model';
import { RequestTicket } from '../interfaces/request-ticket.interface';
import { Request, Response } from 'express';
import { insertRequestTicket, selectRequestTicket } from '../models/request-ticket.model';

export const insertRequest = async (req: Request, res: Response): Promise<Response> => {
    const requests: RequestTicket = req.body;
    try {
        await insertRequestTicket(requests);
        return res.json({
            message: 'Ticket created Successfully',
            requests
        });
    }
    catch (e) {
        console.log(e);
        return res.json({
            message: 'Cannot create request ticket',
            requests
        });
    }   
}

export const selectRequests = async (req: Request, res: Response): Promise<Response> => {
    try {
        const requests: RequestTicket[] = await selectRequestTicket();
        return res.status(200).json(requests);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}

export const updateRequest = async (req: Request, res: Response): Promise<Response> => {
    const requests: RequestTicket = req.body;
    try {
        await updateRequestTicket(requests);
        return res.json({
            message: 'Ticket created Successfully',
            requests
        });
    }
    catch (e) {
        console.log(e);
        return res.json({
            message: 'Cannot create request ticket',
            requests
        });
    }
}
