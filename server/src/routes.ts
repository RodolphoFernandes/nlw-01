import express from 'express';
import PointsController from './controllers/PointsControllers';
import ItemsController from './controllers/ItemsController';
import multer from 'multer';
import multerConfig from './config/multer';
import { celebrate, Joi } from 'celebrate';

const routes = express.Router();
const upload = multer(multerConfig);


const pointsController = new PointsController();
const itemsController = new ItemsController();

/**
 * Padrão da comunidade de desenvolvimento 
 * nome dos métodos 
 * Index = Listagem de registros
 * Show = 1 unico registro
 * Create = criação de um registro
 * update = atualização
 * delete = exclusão
 */
routes.get('/items', itemsController.Index);


routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/points',
 upload.single('image'),
 celebrate({
     body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required()
     })
 }, {
     abortEarly: false
 }),
  pointsController.create);

export default routes;