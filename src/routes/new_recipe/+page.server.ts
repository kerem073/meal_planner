import { start_mongo } from '$lib/db/mongo.js';
import type { Ingredient } from '$lib/types/ingredient.type.js';

export const actions = {
	default: async ({request}) => {
        const form = await request.formData();

        //thanks to chat gptt
        const data = Array.from(form).reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
        }, {});

        // messy as fuck
        let ingredients = [];
        
        // let db_insert = {
        //     name_recipe: data.name_recipe,
        //     ingredients:ingredients
        // }

        let db = start_mongo();

        try{
            // (await db).db("meal_planner").collection("meals").insertOne(data)
        } catch (e){
            console.error(e)
        }
	}
};