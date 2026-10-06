<script setup>
import { useForm } from '@inertiajs/vue3';
let form = useForm({
    email: '',
    password: '',
});
let submit = function () {
    form.post('/login');
};
</script>

<template>
    <Head title="Log In"></Head>
    <main class="grid min-h-screen place-items-center">
        <section class="mx-auto mt-8 max-w-md rounded-xl border bg-white p-8">
            <h1 class="mb-6 text-3xl">Log In</h1>
            <form @submit.prevent="submit">
                <div class="mb-6">
                    <label
                        for="email"
                        class="mb-2 block text-xs font-bold text-gray-700 uppercase"
                    >
                        Email
                    </label>
                    <input
                        v-model="form.email"
                        class="w-full rounded border p-2"
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
                        class="w-full rounded border p-2"
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
                        Log In
                    </button>
                </div>
            </form>
        </section>
    </main>
</template>
