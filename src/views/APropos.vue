<template>
    <div>
        <div class="about">
            <Transition 
                appear
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
            >
                <h1 v-if="showTitle">A Propos</h1>
            </Transition>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed laudantium ea sequi facere quisquam iure? At aliquid porro velit enim rem voluptates, beatae, ad nemo hic, eveniet asperiores vero.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iste officiis sed, veniam quod explicabo, deleniti assumenda in laudantium atque aliquid maiores autem eos voluptates error. Dolorum quod porro qui.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla molestiae quisquam excepturi corporis quam nobis, veritatis ut consequatur reprehenderit nesciunt eos voluptas tempore delectus placeat assumenda ratione sunt fuga consequuntur.</p>
        </div>
        <Transition name="bouge">
            <p ref="paragraphe">Bougez moi</p>
        </Transition>
        <button @click="bouger">Lancer</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import gsap from 'gsap';

const paragraphe = ref(null);
const bouger = () => {
    paragraphe.value.style.transform = 'translateX(-60px)';

    //console.log(paragraphe.value)
}

const showTitle = ref(true);

const beforeEnter = e => {
    console.log('Before Enter', e);

    e.style.transform = 'translateY(-60px)';
    e.style.opacity = 0;
}

const enter = (e, done) => {
    console.log('Enter');
    gsap.to(e, {
        duration: 1,
        y: 0, 
        opacity: 1, 
        ease: 'bounce.out', 
        onComplete: done
    });
}

const afterEnter = e => {
    console.log('After Enter');
}
</script>

<style>

.about {
    max-width: 600px;
    margin: 20px auto;
}

</style>