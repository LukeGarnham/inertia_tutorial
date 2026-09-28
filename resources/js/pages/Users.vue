<script setup>
import Nav from "@/shared/Nav.vue";
import { Link } from "@inertiajs/vue3";

defineProps({
    time: String,
});
</script>

<template>
    <h1>Users</h1>
    <Nav></Nav>
    <div style="margin-top: 1500px">
        <p>The current time is {{ time }}.</p>
        <Link href="/users" class="text-blue-500" preserve-scroll>Refresh</Link>
    </div>
</template>
