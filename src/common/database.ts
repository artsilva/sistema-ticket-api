import { Pool } from 'pg';
import config from '../config';

export const db = new Pool({
    user: config.dbConf.user,
    host: config.dbConf.host,
    password: config.dbConf.password,
    database: config.dbConf.database,
    port: config.dbConf.port
})