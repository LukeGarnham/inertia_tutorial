<script setup>
import Nav from "./Nav.vue";
</script>

<template>
    <section class="p-6 bg-gray-200">
        <header class="flex justify-between align-middle">
            <h1 class="font-bold text-lg">My App</h1>
            <Nav></Nav>
        </header>
    </section>
    <section class="p-6">
        <div class="max-w-3xl mx-auto">
            <slot></slot>
        </div>
    </section>
</template>
