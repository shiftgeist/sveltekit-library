import path from 'path'
import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'
import UnoCSS from '@unocss/svelte-scoped/preprocess'

const prod = process.env.NODE_ENV !== 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), UnoCSS({ combine: prod })],

  kit: {
    adapter: adapter(),

    alias: {
      $lib: path.resolve('./src/lib'),
      $components: path.resolve('./src/lib/components'),
    },
  },
}

export default config
