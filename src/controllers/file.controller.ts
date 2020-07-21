import { Request, Response } from 'express';
import fs from 'fs';

export const uploadFile = async (req: Request, res: Response): Promise<Response> => {

    try {
        
        return res.status(200).json('ok');
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}