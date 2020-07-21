import { Area } from './../interfaces/area.interface';
import { QueryResult } from 'pg';
import { db } from '../common/database';

export const selectAllAreas = async (): Promise<Area[]> => {
    const response: QueryResult = await db.query('SELECT * FROM solticket.areas');
    return response.rows;
}

export const selectAllByRequest = async (): Promise<Area[]> => {
  const query = `SELECT
    distinct a.id as id, a.description as description,
    count(r.*) as quantity
    from solticket.requests r 
    right join solticket.request_types rt on r.type_id = rt.id 
    right join solticket.areas a on rt.area_id = a.id
    group by a.id, a.description`;
  const response: QueryResult = await db.query(query);
  return response.rows;
};
