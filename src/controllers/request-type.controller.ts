import { RequestType } from '../interfaces/request-type.interface';
import { Request, Response } from 'express';
import { selectReqTypesByAreaid } from './../models/request-type.model';

export const getRequestTypes = async (req: Request, res: Response): Promise<Response> => {
    try {
        const areaid = Number(req.params.areaid);
        const reqTypes: RequestType[] = await selectReqTypesByAreaid(areaid);
        console.log(reqTypes);
        return res.status(200).json(reqTypes);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}