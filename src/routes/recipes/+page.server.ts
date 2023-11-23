import { pb } from "$lib/db/pocketbase";

export const load = async function() {
    let data = await pb.collection("meals").getFullList({sort: '-created',});
    
    console.dir(data);
    return {
        recipes: structuredClone(data)
    }
}