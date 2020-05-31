import express from 'express';
import exampleRouter from './routes/example.router';

const app = express();
const cors = require('cors');

app.use(cors());

// middelwares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(exampleRouter);

export default app;