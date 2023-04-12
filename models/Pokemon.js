import mongoose from "mongoose";
import Types from "./Types.js";
import Abilities from "./Abilities.js";
import Moves from "./Moves.js";

const Schema = mongoose.Schema;

let Pokemon = new Schema({
    name: { type: String, required: true },
    id: {type: Number, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    types: Types,
    abilities: Abilities,
    moves: Moves
})

export default mongoose.model("pokemon", Pokemon)