<template>
    <div>
        <h1>Contact</h1>

        <TransitionGroup 
            tag="ul"
            appear
            @before-enter="beforeEnter"
            @enter="enter"
        >
            <ContactIcon v-for="(i, index) in icons" :key="index" :data-index="index">
                <template #logo>
                    {{ i.name }}
                </template>
                <template #default>
                    {{ i.text }}
                </template>
            </ContactIcon>
        </TransitionGroup>
        
    </div>
</template>

<script setup>
import ContactIcon from '@/components/ContactIcon.vue';
import { ref } from 'vue';
import gsap from 'gsap';

const icons = ref([
    { name: 'alternate_email', text: 'par email' }, 
    { name: 'local_phone', text: 'par telephone' }, 
    { name: 'local_post_office', text: 'par poste' }, 
    { name: 'local_fire_department', text: 'par signaux de fuméee' }
]);

const beforeEnter = e => {
    e.style.opacity = 0;
    e.style.transform = 'translateY(100px)';
}
const enter = (e, done) => {
    gsap.to(e, {
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        onComplete: done, 
        delay: 0.2 * e.dataset.index
    })
}

</script>

<style scoped>

ul {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    max-width: 400px;
    margin: 60px auto;
}

</style>