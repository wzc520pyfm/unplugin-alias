import type { UnpluginOptions } from 'unplugin'

export interface Options {
  /**
   * Instructs the plugin to use an alternative resolving algorithm,
   * rather than the Rollup's resolver.
   * @default null
   */
  customResolver?: ResolverFunction | ResolverObject | null

  /**
   * Specifies an `Object`, or an `Array` of `Object`,
   * which defines aliases used to replace values in `import` or `require` statements.
   * With either format, the order of the entries is important,
   * in that the first defined rules are applied first.
   */
  entries?: readonly Alias[] | { [find: string]: string }
}

type MapToFunction<T> = T extends Function ? T : never

export type ResolverFunction = MapToFunction<UnpluginOptions['resolveId']>

export interface ResolverObject {
  buildStart?: UnpluginOptions['buildStart']
  resolveId: ResolverFunction
}

export interface Alias {
  find: string | RegExp
  replacement: string
  customResolver?: ResolverFunction | ResolverObject | null
}

export interface ResolvedAlias {
  find: string | RegExp
  replacement: string
  resolverFunction: ResolverFunction | null
}
