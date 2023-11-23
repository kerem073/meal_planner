import { pb } from '$lib/db/pocketbase.js';
import { error } from '@sveltejs/kit';

export async function load({params}){

    const [day, month, year] = params.slug.split("-");
    let current_date = new Date();

    current_date.setDate(current_date.getDate()-1);

    const meals = await pb.collection("meals").getFullList();


    const input_date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

    if (input_date > current_date){

        return {
            meals,
            input_date
        }
    }

    throw error(404, 'Not found');
}