<template>
  <nav ref="nav">
    <RouterLink :to="{ name: 'Home' }">Accueil</RouterLink> |
    <RouterLink :to="{ name: 'About' }">A Propos</RouterLink> | 
    <RouterLink :to="{ name: 'Contact' }">Contact</RouterLink>
  </nav>
  <RouterView v-slot="{ Component }">
    <Transition name="route" mode="out-in">
        <component :is="Component"></component>
    </Transition>
  </RouterView>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const nav = ref(null);

const router = useRouter();
const route = useRoute();

console.log(route);

let links = [];
onMounted(() => {
  for(var child of nav.value.children) {
    links.push(child.href);
    
  }

  console.log(links)
  console.log(links.indexOf('http://localhost:5173/'));
});

</script>

<style>

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  background: #f2f2f2;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.route-right-enter-from, .route-left-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.route-right-leave-to, .route-left-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}
.route-right-enter-active, .route-right-leave-active, .route-left-enter-active, .route-left-leave-active {
  transition: all 0.3s ease-in;
}

</style>
