// Global type declarations for build-time injected constants
// These are normally provided by Bun's bundler at build time

declare const MACRO: {
  VERSION: string
  BUILD_TIME: string
  FEEDBACK_CHANNEL: string
  ISSUES_EXPLAINER: string
  VERSION_CHANGELOG: string
  PACKAGE_URL: string
  README_URL: string
}

// Extend globalThis with MACRO
interface Global {
  MACRO: typeof MACRO
}

// Bun runtime types (minimal)
declare namespace Bun {
  function spawn(cmd: string[], opts?: any): any
  function hash(input: string): bigint
  function serve(opts: any): any
  function listen(opts: any): any
  const env: Record<string, string | undefined>
  const argv: string[]
  const embeddedFiles: any[]
}

declare module 'bun:bundle' {
  export function feature(flag: string): boolean
}

// Declare bun module for Bun runtime detection
declare module 'bun' {
  export const env: Record<string, string | undefined>
  export const argv: string[]
  export function spawn(cmd: string[], opts?: any): any
}
