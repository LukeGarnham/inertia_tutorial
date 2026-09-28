<script setup>
import { computed } from "vue";
import { usePage } from "@inertiajs/vue3";
import Nav from "./Nav.vue";

const page = usePage();
const user = computed(() => {
    return page.props.auth.user;
});
</script>

<template>
    <section class="p-6 bg-gray-200">
        <header class="flex justify-between align-middle">
            <div class="flex justify-items-start align-middle gap-3">
                <h1 class="font-bold text-lg">My App</h1>
                <p class="text-sm mb-0" v-if="user">
                    Welcome back,
                    {{ user.name }}!
                </p>
            </div>
            <Nav></Nav>
        </header>
    </section>
    <section class="p-6">
        <div class="max-w-3xl mx-auto">
            <slot></slot>
        </div>
    </section>
</template>
