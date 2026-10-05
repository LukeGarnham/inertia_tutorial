<script setup>
import Layout from '@/shared/Layout.vue';
import Pagination from '@/shared/Pagination.vue';
import { ref, watch } from 'vue';
import { router } from '@inertiajs/vue3';
let props = defineProps({
    users: Object,
    filters: Object,
});
defineOptions({
    layout: Layout,
});
let search = ref(props.filters.search);
watch(search, value => {
    router.get(
        '/users',
        { search: value },
        {
            preserveState: true, // preserveState prevents Vue components from resetting/remounting.
            replace: true, // replace ensures that each time the query string changes, we replace the new entry in the history stack (so hitting back btn doesn't cycle back through search string)
        },
    );
});
</script>

<template>
    <Head title="Users"></Head>

    <div class="flex justify-between mb-6">
        <h1 class="text-3xl">Users</h1>
        <input
            type="text"
            placeholder="Search.."
            class="border px-2 rounded-xl"
            v-model="search"
        />
    </div>

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
