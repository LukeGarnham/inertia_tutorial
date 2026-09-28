<script setup>
import { Head } from "@inertiajs/vue3";

defineProps({
    name: String,
    frameworks: Array,
});
</script>

<template>
    <h1>Hello, {{ name }}!</h1>
    <p>In this series, I will be using the following frameworks:</p>
    <ul>
        <li v-for="framework in frameworks" v-text="framework"></li>
    </ul>
</template>
