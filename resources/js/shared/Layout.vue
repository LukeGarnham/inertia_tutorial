<script setup>
import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';
import Nav from './Nav.vue';

const page = usePage();
const user = computed(() => {
    return page.props.auth.user;
});
</script>

<template>
    <Head title="My App">
        <meta
            name="description"
            content="This is a fallback description."
            head-key="description"
        />
    </Head>
    <section class="bg-gray-200 p-6">
        <header class="flex justify-between align-middle">
            <div class="flex justify-items-start gap-3 align-middle">
                <h1 class="text-lg font-bold">My App</h1>
                <p class="mb-0 text-sm" v-if="user">
                    Welcome back,
                    {{ user.name }}!
                </p>
            </div>
            <Nav></Nav>
        </header>
    </section>
    <section class="p-6">
        <div class="mx-auto max-w-3xl">
            <slot></slot>
        </div>
    </section>
</template>
