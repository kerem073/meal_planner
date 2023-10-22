import { MongoClient } from "mongodb";
import { MONGODB_URL } from "$env/static/private" // if err run: npm run check

const client = new MongoClient(MONGODB_URL);

export function start_mongo(){
    console.log("starting mongo...");
    return client.connect();
}