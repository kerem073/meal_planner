import { colleciton_recipes } from "$lib/db/mongo"



export const load = async function() {
    const data = await colleciton_recipes.find({}).toArray();
    
    console.dir(data);
    return {
        recipes: structuredClone(data)
    }
}