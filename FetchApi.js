let array = [];
fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
  .then((datos) => datos.json())
  .then((resultado) => {
    for (let i = 0; i < resultado.results.length; i++) {
      array.push(resultado.results[i].name);
    }
    console.log(array);
  });
