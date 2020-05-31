import { User } from './../interfaces/user.interface';
import { QueryResult } from 'pg';
import { db } from '../utils/database';

export const selectAllUsers = async (): Promise<any> => {
    const response: QueryResult = await db.query('SELECT * FROM users');
    return response.rows;
}

export const selectUserById = async (id: number): Promise<any> => {
    const response: QueryResult = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    return response.rows;
}

export const updateUserById = async (user: User): Promise<void> => {
    await db.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [user.name, user.email, user.id]);
}

export const createUser = async (user: User): Promise<void> => {
    await db.query('INSERT INTO users (name, email) VALUES ($1, $2)', [user.name, user.email]);
}

export const deleteUserById = async (id: number): Promise<void> => {
    await db.query('DELETE FROM users WHERE id = $1', [id]);
}