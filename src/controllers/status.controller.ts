import { Status } from './../interfaces/status.interface';
import { selectAllStatus } from './../models/status.model';
import { Request, Response } from 'express';

export const getStatus = async (req: Request, res: Response): Promise<Response> => {
    try {
        const status: Status[] = await selectAllStatus();
        console.log(status);
        return res.status(200).json(status);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }   
}