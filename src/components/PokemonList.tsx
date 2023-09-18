import { Link } from 'react-router-dom';
import { usePokemonDataList } from '../utils/pokeApi';
import PokemonCard from './PokemonCard';
import { useEffect, useState } from 'react';
import { Pokemon } from '../utils/pokeApiTypes';

export default function PokemonList() {
  const NUM_POKEMON = 151;
  const {
    data: pokemonDataList,
    isLoading,
    error,
  } = usePokemonDataList(NUM_POKEMON);
  const [favoritesArray, setFavoritesArray] = useState<number[]>(
    JSON.parse(localStorage.getItem('favoritesArray') || '[]')
  );
  // handle favoritesArray
  const onToggleFavorite = (pokemonId: number) => {
    if (favoritesArray.includes(pokemonId)) {
      setFavoritesArray(
        favoritesArray.filter((id: number) => id !== pokemonId)
      );
    } else {
      setFavoritesArray([...favoritesArray, pokemonId]);
    }
  };

  // save favoritesArray
  useEffect(() => {
    localStorage.setItem('favoritesArray', JSON.stringify(favoritesArray));
  }, [favoritesArray]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching data </div>;
  }

  return (
    <>
      <div className="bg-container">
        <Link to="/pokemon/1">
          <button>Pokemon Info Page</button>
        </Link>
        <div className="pokemon-list">
          {isLoading && <div>Loading...</div>}
          {(error as Error) && (
            <div className="error-screen pokemon-text">
              <h3>An error has occured</h3>
            </div>
          )}
          {!error && !isLoading && pokemonDataList?.length === 0 && (
            <div className="no-results pokemon-text">
              <h3>No Pokemon Found!</h3>
            </div>
          )}
          {!isLoading && (
            <ul className="pokemon-list-container">
              {pokemonDataList?.map((pokemon: Pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemonDetails={pokemon}
                  onToggleFavorite={onToggleFavorite}
                  favoritesArray={favoritesArray}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
