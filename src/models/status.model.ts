import { Status } from './../interfaces/status.interface';
import { QueryResult } from 'pg';
import { db } from '../common/database';

export const selectAllStatus= async (): Promise<Status[]> => {
    const response: QueryResult = await db.query('SELECT * FROM solticket.status');
    return response.rows;
}
