import { NamedAPIResource } from './pokeApiTypes';
import { useQuery } from '@tanstack/react-query';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

// use this Hook to fetch a single pokemon (pokemonId can be either name or id of the pokemon)
export function usePokemonData(pokemonId: string) {
  return useQuery(
    ['pokemonData', pokemonId], 
    () => getPokemonData(BASE_URL + '/' + pokemonId)
  );
}

// use this Hook to fetch a list of pokemon
export function usePokemonDataList(limit: string) {
  return useQuery(
    ['pokemonDataList', limit], 
    () => getPokemonDataList(BASE_URL + '?limit' + limit)
  );
}

const getPokemonData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getPokemonDataList = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    const pokemonList = await Promise.all(
      data.results.map((pokemon: NamedAPIResource) =>
        getPokemonData(pokemon.url)
      )
    );
    return pokemonList;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
