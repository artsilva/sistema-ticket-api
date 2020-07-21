import express from 'express';
// import exampleRouter from './routes/example.router';
import areasRouter from './routes/areas.router';
import statusRouter from './routes/status.router';
import fileRouter from './routes/file.router';
import reqTypesRouter from './routes/request-type.router';
import reqTicketsRouter from './routes/request-ticket.router';
import loginRouter from './routes/login.router';
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/notfound.middleware";
import bodyParser from 'body-parser';

const app = express();
const cors = require('cors');
const helmet = require('helmet');

app.use(cors());
app.use(helmet());

// middelwares
// app.use(express.json({limit:'50mb'}));
// app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// app.use(exampleRouter);
app.use(areasRouter);
app.use(reqTypesRouter);
app.use(reqTicketsRouter);
app.use(statusRouter);
app.use(loginRouter);
app.use(fileRouter);

app.use(errorHandler);
app.use(notFoundHandler);

export default app;