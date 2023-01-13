import express from 'express';
import path from 'path';

import type { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import createError from 'http-errors';
import { StatusCodes } from 'http-status-codes';

import bodyParser from 'body-parser';

import todoRouter from './routes/todoRouter';
import userRouter from './routes/userRouter';

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname + '/public')));
app.use('/todos', todoRouter);
app.use('/users', userRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err: Error & { status: number }, req: Request, res: Response, next: NextFunction) => {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
});

export default app;
