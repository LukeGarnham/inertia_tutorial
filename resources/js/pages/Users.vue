<script setup>
import Layout from '@/shared/Layout.vue';
defineProps({
    users: Array,
});
defineOptions({
    layout: Layout,
});
</script>

<template>
    <Head title="Users"></Head>
    <h1 class="text-3xl">Users</h1>
    <ul>
        <li v-for="user in users" :key="user.id" v-text="user.name"></li>
    </ul>
</template>
