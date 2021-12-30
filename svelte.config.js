import preprocess from "svelte-preprocess";
import autoprefixer from 'autoprefixer';
import netlify from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            scss: {
                prependData: '@import "src/variables.scss";',
            },
            postcss: {
                plugins: [
                    autoprefixer()
                ]
            }
        }),
    ],

    kit: {
        adapter: netlify(),

        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte",

        vite: {
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: '@import "src/variables.scss";',
                    },
                },
                postcss: {
                    plugins: [
                        autoprefixer()
                    ]
                }
            },
        },
    },
};

export default config;