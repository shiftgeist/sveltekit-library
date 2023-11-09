# Sveltekit Library Template

Everything you need to build a Svelte library.

## Features

- Svelte components (obviously)
- `.d.ts` files for components
- [Tailwindcss/UnoCSS](https://unocss.dev/interactive/) - bundles style into component

## Developing

Once you've installed dependencies with `pnpm install` (or `npm install`), start the build with watcher:

```shell
pnpm dev
# or
npm run dev
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```shell
pnpm package
```

To create a production version of your showcase app:

```shell
pnpm build
```

You can preview the production build with `pnpm preview`.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option and remove the `"private"` field.

To publish your library to [npm](https://www.npmjs.com):

```shell
npm publish
```
