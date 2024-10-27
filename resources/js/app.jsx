import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { loadTranslations } from './i18n'; // Assurez-vous que ce chemin est correct

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        // Définir le français comme langue par défaut
        const defaultLanguage = 'fr'; // Utilisez 'fr' comme langue par défaut

        loadTranslations(defaultLanguage);

        root.render(<App {...props} translations={defaultLanguage} />);
    },
    progress: {
        color: '#88ae75',
    },
});
