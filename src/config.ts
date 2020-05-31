require('dotenv').config();

export interface Configuration {
    environment: string,
    apiPath: string,
    apiHost: string,
    apiPort: number,
    dbConf: DataBase
}

interface DataBase {
    user: string,
    host: string,
    password: string,
    database: string,
    port: number,
    max: number,
    idleTimeoutMillis: number
}

export default {
    environment: process.env.ENVIRONMENT,
    apiPath: process.env.API_PATH,
    apiHost: process.env.API_HOST,
    apiPort: process.env.API_PORT,
    dbConf: {
        user: process.env.DB_USER || '',
        host: process.env.DB_HOST || '',
        password: process.env.DB_PSW || '',
        database: process.env.DB_NAME || '',
        port: Number(process.env.DB_PORT) || 5432,
        max: Number(process.env.DB_MAX_CLIENTS) || 20,
        idleTimeoutMillis: Number(process.env.DB_IDLE_TIMEOUT_MS) || 30000
    }
}