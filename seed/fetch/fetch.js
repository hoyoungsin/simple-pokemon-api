import { promises as fsPromises } from "fs";

const pokemonDataPromises = [];

for (let i = 1; i < 152; i++) {
  const pokemonDataPromise = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(`Failed to fetch data for Pokemon ${i}: ${error.message}`);
      return null;
    });
  pokemonDataPromises.push(pokemonDataPromise);
}
Promise.all(pokemonDataPromises)
  .then((pokemonDataArray) => {
    const allPokemonData = pokemonDataArray
      .map((pokemonData) => ({
        name: pokemonData.name,
        id: pokemonData.id,
        types: pokemonData.types.map((type) => type.type.name),
        weight: pokemonData.weight,
        height: pokemonData.height,
        abilities: pokemonData.abilities.map((ability) => ability.ability.name),
        moves: pokemonData.moves.map((move) => move.move.name),
      }));
    fsPromises.writeFile(`./db/pokemon-data.json`, JSON.stringify(allPokemonData))
      .then(() => console.log("Wrote all Pokemon data to ./db/pokemon-data.json"))
      .catch((error) => console.error(`Failed to write all Pokemon data: ./db/pokemon-data.json`));
  })
  .catch((error) => console.error(`Failed to fetch data for some Pokemon: ${error.message}`));