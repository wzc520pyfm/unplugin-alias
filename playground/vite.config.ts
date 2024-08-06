import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import UnpluginAlias2 from '../src/vite'

export default defineConfig({
  plugins: [
    Inspect(),
    UnpluginAlias2({
      entries: [
        { find: 'utils', replacement: './isOdd.ts' },
      ],
    }),
  ],
})
