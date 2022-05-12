declare module '*.less' {
  const content: any
  export = content
}
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.pdf'

declare module '*.svg' {
  const content: any
  export default content
}

declare module 'process' {
  global {
    namespace NodeJS {
      export interface ProcessEnv {
        tag: 'dev' | 'tes' | 'pro'
        version: string
      }
    }
  }
}