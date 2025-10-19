import { computed, toValue, type MaybeRefOrGetter } from 'vue';

export const getPokemonImageUrl = (pokemonId: number) => {
  if (pokemonId < 1) {
    return '/invalid-pokemon.png';
  }

  const padded = pokemonId.toString().padStart(3, '0');
  return `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${padded}.png`;
};

export const usePokemonImageUrl = (pokemonIdRef: MaybeRefOrGetter<number>) =>
  computed(() => getPokemonImageUrl(toValue(pokemonIdRef)));
