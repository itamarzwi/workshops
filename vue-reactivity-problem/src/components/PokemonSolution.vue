<script setup lang="ts">
import { usePokemonImageUrl } from '../composables/use-pokemon-image-url-solution';

const props = defineProps<{ index: number }>()
const imageUrl = usePokemonImageUrl(() => props.index);
</script>

<template>
    <div class="pokemon-container">
        <img 
            :src="imageUrl" 
            :alt="`Pokemon #${index}`"
            class="pokemon-image"
        />
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
</style>
