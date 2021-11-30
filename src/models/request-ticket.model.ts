import { QueryResult } from 'pg';
import { RequestTicket } from './../interfaces/request-ticket.interface';
import { db } from '../common/database';

export const insertRequestTicket = async (r: RequestTicket): Promise<void> => {
  const query = `INSERT INTO solticket.requests
  (status_id, petitioner_id, type_id, details, title, date_creation, date_expire, emails)
  VALUES(${r.statusid}, ${r.petitionerid}, ${r.typeid}, '${r.details}', '${r.title}', '${r.datecreation}', '${r.dateexpire}', '${r.emails}');`;
  await db.query(query);
};

export const selectRequestTicket = async (): Promise<RequestTicket[]> => {
  const query = `select 
	r.id as id,
	r.status_id as statusid,
	s.description as status,
	r.petitioner_id as petitionerid,
	u.username || ' ' || u.lastname_f || ' ' || u.lastname_m as petitioner,
	r.user_tech_id as usertechid,
	us.username || ' ' || us.lastname_f || ' ' || us.lastname_m as tech,
	r.type_id as typeid, 
  rt.description as type,
  ar.id as areaid,
  ar.description as area,
	r.details as details,
	r.title as title,
	r.date_creation as datecreation,
	r.date_modify as datemodify,
	r.date_expire as dateexpire,
	r.emails as emails,
	r.reason_status as statusreason
  from solticket.requests r
  left join solticket.status s on s.id = r.status_id
  left join solticket.users u on u.id = r.petitioner_id 
  left join solticket.users us on us.id = r.user_tech_id
  left join solticket.request_types rt on rt.id = r.type_id
  left join solticket.areas ar on ar.id = rt.area_id ;`;
  const response: QueryResult = await db.query(query);
  return response.rows; 
};

export const updateRequestTicket = async (r: RequestTicket): Promise<void> => {
  const query = `UPDATE solticket.requests
    SET status_id=${r.statusid}, user_tech_id=${r.usertechid}, date_modify='${r.datemodify}', reason_status='${r.statusreason}'
    WHERE id=${r.id};`;
  await db.query(query);
};
