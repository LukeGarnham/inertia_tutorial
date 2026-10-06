import { createInertiaApp, Head, Link } from '@inertiajs/vue3';
import Layout from './shared/Layout.vue';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

void createInertiaApp({
    title: (title) => (title ? `${title} | ${appName}` : appName),
    withApp: (app) => {
        app.directive('focus', {
            mounted: (el: HTMLElement, shouldFocus) => {
                if (shouldFocus.value !== false) {
                    el.focus();
                }
            },
        });
        app.component('Link', Link); // Import the Link component and make it available globally to the app.
        app.component('Head', Head); // Import the Link component and make it available globally to the app.
    },
    progress: {
        color: '#4B5563',
    },
});
