<script setup>
import Layout from '@/shared/Layout.vue';
defineOptions({
    layout: Layout,
});
</script>

<template>
    <Head title="Home">
        <!-- The head-key attribute below is needed to override the default meta:desc tag in the <Layout> component. -->
        <meta
            name="description"
            content="This is a page specific description."
            head-key="description"
        />
    </Head>
    <h1 class="text-3xl">Home</h1>
</template>
