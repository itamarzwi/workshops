<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { usePokemonImageUrl } from '../composables/use-pokemon-image-url-solution';
import { getPokemonName } from '../utils/get-pokemon-name';

const props = defineProps<{ index: number }>();

const imageUrl = usePokemonImageUrl(() => props.index);

const {
  data: name,
  isLoading,
  error,
} = useQuery({
  queryKey: ['data', () => props.index],
  queryFn: () => getPokemonName(props.index),
});
</script>

<template>
  <h2 class="name">
    <template v-if="isLoading">Loading...</template>
    <template v-else-if="error">Error: {{ error.message }}</template>
    <template v-else-if="name"> #{{props.index}}: {{ name }} </template>
  </h2>
  <div class="pokemon-container">
    <img :src="imageUrl" :alt="`Pokemon #${index}`" class="pokemon-image" />
  </div>
</template>

<style scoped>
.pokemon-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pokemon-image {
  max-width: 400px;
  height: auto;
}

.name {
    margin: 0
}
</style>
