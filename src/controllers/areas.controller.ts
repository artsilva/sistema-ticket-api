import { Area } from '../interfaces/area.interface';
import { Request, Response } from 'express';
import { selectAllAreas, selectAllByRequest } from './../models/areas.model';

export const getAreas = async (req: Request, res: Response): Promise<Response> => {
    try {
        const areas: Area[] = await selectAllAreas();
        console.log(areas);
        return res.status(200).json(areas);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}

export const quantityAreasByRequest = async (req: Request, res: Response): Promise<Response> => {
    try {
        const areas: Area[] = await selectAllByRequest();
        console.log(areas);
        return res.status(200).json(areas);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}