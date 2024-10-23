<template>
    <li>
        <span class="material-icons">
            <slot name="logo"></slot>
        </span>
        <div><slot></slot></div>
    </li>
</template>

<style scoped>

li {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    line-height: 1.5em;
    list-style-type: none;
}

</style>