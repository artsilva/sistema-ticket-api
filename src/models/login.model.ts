import { User } from './../interfaces/user.interface';
import { Login } from './../interfaces/login.interface';
import { QueryResult } from 'pg';
import { db } from '../common/database';

export const users = async (): Promise<User[]> => {
  const query = `SELECT u.id as id, 
    u.username as username, u.lastname_f as lastnamef, u.lastname_m as lastnamem,
    u.rut as rut, u.mail as mail, u.role_id as roleid, r.role as role, u.area_id as areaid
    FROM solticket.users u
    left join security.users_sec us on u.id = us.user_id
    left join security.roles r on r.id = u.role_id`;
  const response: QueryResult = await db.query(query);
  return response.rows;
};

export const login = async (): Promise<Login[]> => {
  const query = `select user_id as userid, nickname, pass from security.users_sec;`;
  const response: QueryResult = await db.query(query);
  return response.rows;
};
