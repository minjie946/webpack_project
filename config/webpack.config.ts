import { Configuration } from 'webpack';
import { resolveApp } from './util'

export const config: Configuration = {
  resolve: {
    alias: {
      '@assets': resolveApp('src/assets'),
      '@util': resolveApp('src/util'),
      '@components': resolveApp('src/components'),
      '@pages': resolveApp('src/pages')
    },
    extensions: ['.tsx', '.ts', '.less', '.css', '.js']
  }
}