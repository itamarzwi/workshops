<script setup lang="ts">
import { ref } from 'vue';
import Pokemon from './components/Pokemon.vue';

const pokemonIndex = ref(1);
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <h1>The Vue Composable Reactivity Problem</h1>

  <button type="button" @click="pokemonIndex++" @contextmenu.prevent.stop="pokemonIndex--">
    Pokémon index is: {{ pokemonIndex }}
  </button>

  <Pokemon :index="pokemonIndex" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

button {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
