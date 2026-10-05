<script setup>
import Layout from '@/shared/Layout.vue';
import Pagination from '@/shared/Pagination.vue';
defineProps({
    users: Object,
});
defineOptions({
    layout: Layout,
});
</script>

<template>
    <Head title="Users"></Head>
    <h1 class="text-3xl">Users</h1>

    <table class="table-auto min-w-full divide-y divide-gray-200">
        <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="user in users.data" :key="user.id">
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="text-sm font-medium text-gray-900">
                            {{ user.name }}
                        </div>
                    </div>
                </td>
                <td
                    class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                    <Link
                        href="`/users/${user.id}/edit`"
                        class="text-indigo-600 hover:text-indigo-900"
                        >Edit</Link
                    >
                </td>
            </tr>
        </tbody>
    </table>
    <Pagination :links="users.links" class="mt-6" />
</template>
