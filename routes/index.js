import { Router } from "express";
import pokemonRoutes from "./pokeroute.js";

const router = Router();

router.get("/", (req, res) => res.send(`This is the api root! Add "/pokemon" to the end of the link to access all pokemon! Add the pokemon number after "/pokemon/" to access any specific pokemon ie: pokemon/1 will give you information on the first pokemon, bulbasaur`));

router.use("/pokemon", pokemonRoutes);

export default router;