import db from "../db/connection.js";
import Pokemon from "../models/Pokemon.js";
import pokemonjson from "../db/pokemon-data.json" assert { type: "json" };

const insertData = async () => {
    await db.dropDatabase()
    await Pokemon.insertMany(pokemonjson);
    db.close();
}

insertData();