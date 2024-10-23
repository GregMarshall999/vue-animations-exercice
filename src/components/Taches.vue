<template>
    <div class="taches">
        <input 
            type="text" 
            placeholder="Ajouter une tache..."
            v-model="tache"
            @keypress.enter="ajouterTache"
        />

        <Transition name="switch" mode="out-in">
            <div v-if="taches.length">
                <TransitionGroup tag="ul" name="list" appear>
                    <li v-for="t in taches" :key="t.id" @click="removeTache(t.id)">
                        {{ t.text }}
                    </li>
                </TransitionGroup>
            </div>
            <div v-else>Toutes les tâches sont terminées!</div>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['badValue']);
const tache = ref('');
const ajouterTache = () => {
    if(tache.value) {
        taches.value = [{ text: tache.value, id: id++ }, ...taches.value];
        tache.value = '';
    } 
    else {
        emit('badValue');
    }
};

 
let id = 0;
const taches = ref([
    { text: 'Faire le lit', id: id++ }, 
    { text: 'Préparer le petit dej', id: id++ }
]);

const removeTache = id => {
    taches.value = taches.value.filter(t => t.id != id);
}

</script>

<style>

.taches {
    width: 400px;
    margin: 20px auto;

    input {
        width: 100%;
        padding: 12px;
        border: 1px solid #eee;
        border-radius: 10px;
        box-sizing: border-box;
        margin-bottom: 20px;
    }
}

.taches ul {
    position: relative;
    padding: 0;
}

.taches li {
    list-style-type: none;
    display: block;
    margin-bottom: 10px;
    padding: 10px;
    background: white;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
}

.taches li:hover {
    cursor: pointer;
}

.list-enter-from, .list-leave-to {
    opacity: 0;
    transform: scale(0.6);
}

.list-enter-active {
    transition: all 0.4s ease;
}

.list-leave-active {
    transition: all 0.4s ease;
    position: absolute;
}

.list-move {
    transition: all 0.3s ease;
}

.switch-enter-from, .switch-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.switch-enter-active, .switch-leave-active {
    transition: all 0.5s ease;
}

</style>