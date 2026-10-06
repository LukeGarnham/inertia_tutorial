<script setup>
import Layout from '@/shared/Layout.vue';
import Pagination from '@/shared/Pagination.vue';
import { ref, watch } from 'vue';
import { Link, router } from '@inertiajs/vue3';
import debounce from 'lodash/debounce';
let props = defineProps({
    users: Object,
    filters: Object,
});
defineOptions({
    layout: Layout,
});
let search = ref(props.filters.search);
watch(
    search,
    debounce((value) => {
        console.log('triggered');
        router.get(
            '/users',
            { search: value },
            {
                preserveState: true, // preserveState prevents Vue components from resetting/remounting.
                replace: true, // replace ensures that each time the query string changes, we replace the new entry in the history stack (so hitting back btn doesn't cycle back through search string)
            },
        );
    }, 500),
);
</script>

<template>
    <Head title="Users"></Head>

    <div class="mb-6 flex justify-between">
        <div class="flex items-center">
            <h1 class="text-3xl">Users</h1>
            <Link href="/users/create" class="ml-2 text-sm text-blue-500"
                >New User</Link
            >
        </div>
        <input
            type="text"
            placeholder="Search.."
            class="rounded-xl border px-2"
            v-model="search"
        />
    </div>

    <table class="min-w-full table-auto divide-y divide-gray-200">
        <tbody class="divide-y divide-gray-200 bg-white">
            <tr v-for="user in users.data" :key="user.id">
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="text-sm font-medium text-gray-900">
                            {{ user.name }}
                        </div>
                    </div>
                </td>
                <td
                    class="px-6 py-4 text-right text-sm font-medium whitespace-nowrap"
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
