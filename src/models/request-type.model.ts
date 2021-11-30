import { RequestType } from './../interfaces/request-type.interface';
import { QueryResult } from 'pg';
import { db } from '../common/database';

export const selectReqTypesByAreaid = async (areaid: number): Promise<RequestType[]> => {
  const response: QueryResult = await db.query(`SELECT 
    r.id as id,
    r.area_id as areaid,
    r.description as description,
    s.days as days
    FROM solticket.request_types r
    join solticket.sla s on s.type_id = r.id 
    WHERE r.area_id = ${areaid}`);
  return response.rows;
};
