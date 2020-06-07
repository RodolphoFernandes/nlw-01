import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';


const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
// Request Param: Parametros que vem na próprio rota que identificam um recurso
// Query Param: Parametros que vem na própria rota geralmente opcionaispara filtros, paginação
// Request Body: parametros para criação/atualização de informações

//Servir arquivos staticos de uma pasta especifica
app.use('/uploads',express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());
app.listen(3333);