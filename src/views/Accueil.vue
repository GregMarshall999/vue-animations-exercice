<template>
    <div class="home">
        <Transition name="toast">
            <Toast v-if="showToast">Veuillez entrer une valeur</Toast>
        </Transition>
        <Taches @bad-value="toggleToast"/>
    </div>
</template>

<script setup>
import Taches from '@/components/Taches.vue';
import Toast from '@/components/Toast.vue';
import { ref } from 'vue';

const showToast = ref(false);
const toggleToast = () => {
    showToast.value = true;
    setTimeout(() => showToast.value = false, 3000);
}

const showP = ref(false);
</script>

<style>

.home {
    display: flex;
    flex-direction: column;
    justify-content: center;

    button {
        width: 100px;
        align-self: center;
    }
}

@keyframes wobble {
    0% {
        opacity: 0;
        transform: translateY(-60px);
    }
    50% {
        opacity: 1;
        transform: translateY(0);
    }
    60% { transform: translateX(8px); }
    70% { transform: translateX(-8px); }
    80% { transform: translateX(4px); }
    90% { transform: translateX(-4px); }
    100% { transform: translateX(0); }
}

.toast-enter-active {
    animation: wobble 0.5s ease;   
} 

.toast-leave-to {
    opacity: 0;
    transform: translateY(-60px);
}
.toast-leave-active {
    transition: all 0.3s ease;   
}
</style>