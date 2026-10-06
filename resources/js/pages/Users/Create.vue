<script setup>
import Layout from '@/shared/Layout.vue';
import { useForm } from '@inertiajs/vue3';

defineOptions({
    layout: Layout,
});
let form = useForm({
    name: '',
    email: '',
    password: '',
});
let submit = function () {
    form.post('/users');
};
</script>

<template>
    <Head title="Create User"></Head>
    <h1 class="text-3xl">Create New User</h1>

    <form @submit.prevent="submit" class="mx-auto mt-8 max-w-md">
        <div class="mb-6">
            <label
                for="name"
                class="mb-2 block text-xs font-bold text-gray-700 uppercase"
            >
                Name
            </label>
            <input
                v-model="form.name"
                class="w-full border border-gray-400 p-2"
                type="text"
                name="name"
                id="name"
                required
            />
            <div
                v-if="form.errors.name"
                v-text="form.errors.name"
                class="mt-1 text-xs text-red-500"
            ></div>
        </div>
        <div class="mb-6">
            <label
                for="email"
                class="mb-2 block text-xs font-bold text-gray-700 uppercase"
            >
                Email
            </label>
            <input
                v-model="form.email"
                class="w-full border border-gray-400 p-2"
                type="email"
                name="email"
                id="email"
                required
            />
            <div
                v-if="form.errors.email"
                v-text="form.errors.email"
                class="mt-1 text-xs text-red-500"
            ></div>
        </div>
        <div class="mb-6">
            <label
                for="password"
                class="mb-2 block text-xs font-bold text-gray-700 uppercase"
            >
                Password
            </label>
            <input
                v-model="form.password"
                class="w-full border border-gray-400 p-2"
                type="password"
                name="password"
                id="password"
                required
            />
            <div
                v-if="form.errors.password"
                v-text="form.errors.password"
                class="mt-1 text-xs text-red-500"
            ></div>
        </div>
        <div class="mb-6">
            <button
                type="submit"
                class="rounded bg-blue-400 px-4 py-2 text-white hover:bg-blue-500"
                :disabled="form.processing"
            >
                Submit
            </button>
        </div>
    </form>
</template>
