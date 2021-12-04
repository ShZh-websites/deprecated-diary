import netlify from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';

const config = {
  preprocess: sveltePreprocess(),
  kit: {
    adapter: netlify(),

    target: '#svelte'
  }
};

export default config;
