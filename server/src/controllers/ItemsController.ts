import knex from '../database/connection';
import { Request, Response } from 'express';

class ItemsController{

    async Index (request: Request, response: Response)  {
        //Sempre que for efetuar uma query adicionar o async na assinatura do metodo
        // e await para aguardar finalizar o metodo
        const items = await knex('items').select('*'); //Mesma coisa que o SELECT * FROM ITEMS
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.2.11:3333/uploads/${item.image}`
            };
        });
    
        return response.json(serializedItems);
    }
}

export default ItemsController;