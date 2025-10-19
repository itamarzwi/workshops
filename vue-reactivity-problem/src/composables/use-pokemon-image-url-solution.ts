import { computed, toValue, type MaybeRefOrGetter } from "vue";

export const usePokemonImageUrl = (pokemonIdRef: MaybeRefOrGetter<number>) => computed(() => {
    const pokemonId = toValue(pokemonIdRef);
    if (pokemonId < 1) {
        return '/invalid-pokemon.png';
    }
    
    const padded = pokemonId.toString().padStart(3, '0');
    return `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${padded}.png`;
})
