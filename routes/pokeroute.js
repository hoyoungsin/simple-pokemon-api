import { Router } from "express";
import * as controllers from "../controller/pokemon.js";

const router = Router();

router.get("/", controllers.getPokemons);
router.get("/:id", controllers.getPokemon);
router.post("/", controllers.createPokemon);
router.put("/:id", controllers.updatePokemon);
router.delete("/:id", controllers.deletePokemon);

export default router;