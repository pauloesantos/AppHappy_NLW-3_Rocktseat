import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';
import './database/connection';
import routes from "./routes";
import errorHandler from '../errors/handlers';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.get('/', (request, response) => {
    return response.json({ message: 'Olá gente!' });
});

app.use(errorHandler);

app.listen(3333);

