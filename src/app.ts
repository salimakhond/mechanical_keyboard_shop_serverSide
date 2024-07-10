import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

const test = async (req: Request, res: Response) => {
  const a = 'Hello Mechanical Keyboard Shop Server';
  res.send(a);
};

app.get('/', test);

// global error
app.use(globalErrorHandler);

// not found route
app.use(notFound);

export default app;
