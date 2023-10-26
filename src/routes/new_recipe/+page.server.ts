import { colleciton_recipes } from '$lib/db/mongo.js';
import type { Ingredient } from '$lib/types/ingredient.type.js';

export const actions = {
	default: async ({request}) => {
        const form = await request.formData();

        const data = Array.from(form).reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
        }, {});

        // console.dir(data);

        let db_insert = {}
        let ingredients = [];

        db_insert.name_recipe = data.name_recipe;



        for (let i = 0; i < (Object.keys(data).length-1) / 3; i++) {
            let ingredient = {
                name_ingredient: data[`name_ingredient${i}`],
                amount_ingredient: data[`amount_ingredient${i}`],
                unit_ingredient: data[`unit_ingredient${i}`]
            }
            ingredients.push(ingredient);
        }

        db_insert.ingredients = ingredients;



        try{
            let result = await colleciton_recipes.insertOne(db_insert);
            console.dir(result);
        } catch (e){
            console.error(e)
        }
	}
};