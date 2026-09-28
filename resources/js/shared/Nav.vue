<script setup>
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <nav class="mt-6">
        <ul>
            <li class="flex gap-x-3">
                <Link class="text-blue-500 hover:underline" href="/">Home</Link>
                <Link class="text-blue-500 hover:underline" href="/users"
                    >Users</Link
                >
                <Link class="text-blue-500 hover:underline" href="/settings"
                    >Settings</Link
                >
                <Link
                    class="text-blue-500 hover:underline"
                    href="/logout"
                    method="post"
                    as="button"
                    >Log Out</Link
                >
            </li>
        </ul>
    </nav>
</template>
