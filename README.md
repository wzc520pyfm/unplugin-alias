# unplugin-alias2

[![NPM version](https://img.shields.io/npm/v/unplugin-alias2?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-alias2)

🍣 A universal bundler plugin for defining aliases when bundling packages.

## Install

```bash
npm i unplugin-alias2
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import UnpluginAlias from 'unplugin-alias2/vite'

export default defineConfig({
  plugins: [
    UnpluginAlias({
      /* options */
    }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import UnpluginAlias from 'unplugin-alias2/rollup'

export default {
  plugins: [
    UnpluginAlias({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-alias2/webpack')({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    [
      'unplugin-alias2/nuxt',
      {
        /* options */
      },
    ],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-alias2/webpack')({
        /* options */
      }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import UnpluginAlias from 'unplugin-alias2/esbuild'

build({
  plugins: [UnpluginAlias()],
})
```

<br></details>

## Usage

### Options

For all options please refer to [docs](https://github.com/rollup/plugins/tree/master/packages/alias#options).

This plugin accepts all [@rollup/plugin-alias](https://github.com/rollup/plugins/tree/master/packages/alias#options) options.
