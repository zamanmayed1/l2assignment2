import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoute } from './app/modules/user/user.route';
const app: Application = express();
app.use(express.json());
app.use(cors());

app.use('/api/users', UserRoute);
app.get('/', (req: Request, res: Response) => {
  const helloWorld = 'Hello World';
  res.send(helloWorld);
});

export default app;
