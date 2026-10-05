<script setup>
defineProps({
    links: Array,
});
</script>

<template>
    <div>
        <template v-for="link in links" :key="link.label">
            <Link
                v-if="link.url"
                :href="link.url"
                class="px-1"
                :class="{
                    'text-gray-500': !link.url,
                    'font-bold': link.active,
                }"
            >
                <span v-html="link.label"></span>
            </Link>
            <span
                v-else
                class="px-1"
                :class="{
                    'text-gray-500': !link.url,
                    'font-bold': link.active,
                }"
                v-html="link.label"
            ></span>
        </template>
    </div>
</template>
