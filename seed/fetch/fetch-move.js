import { writeFile } from "fs/promises"

const moveDataPromise = [];

fetch("https://pokeapi.co/api/v2/move/?limit=918")
  .then((response) => response.json())
  .then((data) => {
    moveDataPromise.push(data);
    return Promise.all(moveDataPromise);
  })
  .then((moveDataArray) => {
    const moveData = moveDataArray.map((moveData) => 
      moveData.results.map((result) => result.name),
    );
    const moveDataJson = JSON.stringify(moveData);

    return writeFile("./models/Moves.js", moveDataJson);
  })
  .then(() => console.log("Wrote all Pokemon data to ./models/Moves.js"))
  .catch((error) => {
    console.error(`Failed to fetch data for Pokemon Moves: ${error.message}`);
  });
