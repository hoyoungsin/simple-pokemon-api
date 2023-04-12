import { writeFile } from "fs/promises"

const abilityDataPromise = [];

fetch("https://pokeapi.co/api/v2/move/?limit=918")
  .then((response) => response.json())
  .then((data) => {
    abilityDataPromise.push(data);
    return Promise.all(abilityDataPromise);
  })
  .then((abilityDataArray) => {
    const abilityData = abilityDataArray.map((abilityData) => 
      abilityData.results.map((result) => result.name),
    );
    const abilityDataJson = JSON.stringify(abilityData);

    return writeFile("./models/Abilities.js", abilityDataJson);
  })
  .then(() => console.log("Wrote all Pokemon data to ./models/Abilities.js"))
  .catch((error) => {
    console.error(`Failed to fetch data for Pokemon Abilities: ${error.message}`);
  });
