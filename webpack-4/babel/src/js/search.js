async function Search(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const pokemon = await response.json();
  return pokemon;
}

export default Search;
