<script setup>
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <nav>
        <ul>
            <li>
                <Link href="/">Home</Link>
                <Link href="/users">Users</Link>
                <Link href="/settings">Settings</Link>
            </li>
        </ul>
    </nav>
</template>
